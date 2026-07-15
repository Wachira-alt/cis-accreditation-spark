import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Loader2, Play, Youtube, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { GOOGLE_API_KEY } from "@/lib/config";

/** Returns the playlist ID from any YouTube URL that carries a ?list= parameter. */
export function getYouTubePlaylistId(href: string): string | null {
  if (!/(?:youtube\.com|youtu\.be)/.test(href)) return null;
  try {
    return new URL(href).searchParams.get("list");
  } catch {
    return null;
  }
}

type PlaylistVideo = { id: string; title: string };

async function listPlaylist(playlistId: string): Promise<PlaylistVideo[]> {
  const videos: PlaylistVideo[] = [];
  let pageToken = "";
  do {
    const params = new URLSearchParams({
      part: "snippet",
      playlistId,
      key: GOOGLE_API_KEY,
      maxResults: "50",
    });
    if (pageToken) params.set("pageToken", pageToken);
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?${params.toString()}`);
    if (!res.ok) {
      let detail = "";
      try {
        const body = (await res.json()) as { error?: { message?: string } };
        detail = body?.error?.message ?? "";
      } catch {
        /* ignore */
      }
      throw new Error(detail || `YouTube API returned ${res.status}`);
    }
    const data = (await res.json()) as {
      items?: { snippet?: { title?: string; resourceId?: { videoId?: string } } }[];
      nextPageToken?: string;
    };
    for (const it of data.items ?? []) {
      const id = it.snippet?.resourceId?.videoId;
      if (id) videos.push({ id, title: it.snippet?.title ?? "Untitled" });
    }
    pageToken = data.nextPageToken ?? "";
  } while (pageToken);
  return videos;
}

export function YouTubePlaylistDialog({
  open,
  onOpenChange,
  title,
  playlistId,
  href,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  playlistId: string;
  href: string;
}) {
  const [videos, setVideos] = useState<PlaylistVideo[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const current = videos[index];

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    setIndex(0);
    try {
      setVideos(await listPlaylist(playlistId));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load this playlist.");
    } finally {
      setLoading(false);
    }
  }, [playlistId]);

  useEffect(() => {
    if (open) load();
  }, [open, load]);

  const step = useCallback(
    (delta: number) => {
      if (videos.length === 0) return;
      setIndex((i) => (i + delta + videos.length) % videos.length);
    },
    [videos.length],
  );

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 flex h-[88vh] w-[95vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-black shadow-2xl focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5 shrink-0">
            <Youtube className="h-4 w-4 text-white shrink-0" aria-hidden="true" />
            <DialogPrimitive.Title className="flex-1 truncate font-serif text-sm text-white">
              {title}
            </DialogPrimitive.Title>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white no-underline hover:no-underline shrink-0"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Open on YouTube</span>
            </a>
            <DialogPrimitive.Close
              className="rounded-sm p-1 text-white/70 hover:text-white shrink-0"
              aria-label="Close playlist"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          <div className="flex min-h-0 flex-1 flex-col sm:flex-row">
            {/* Video chooser */}
            <div className="shrink-0 overflow-y-auto border-b border-white/10 bg-neutral-900 sm:w-72 sm:border-b-0 sm:border-r">
              {videos.map((v, i) => (
                <button
                  key={`${v.id}-${i}`}
                  onClick={() => setIndex(i)}
                  aria-current={i === index}
                  className={`flex w-full items-start gap-2 px-3 py-2.5 text-left text-[13px] hover:bg-white/5 ${
                    i === index ? "bg-white/10 text-white" : "text-white/70"
                  }`}
                >
                  <span className="mt-0.5 w-5 shrink-0 text-right text-white/40">{i + 1}</span>
                  {i === index ? (
                    <Play className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  ) : (
                    <span className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  )}
                  <span className="line-clamp-2">{v.title}</span>
                </button>
              ))}
              {!loading && videos.length === 0 && !error && (
                <p className="px-3 py-4 text-[13px] text-white/50">This playlist has no videos.</p>
              )}
            </div>

            {/* Player */}
            <div className="relative flex min-h-0 flex-1 flex-col bg-black">
              <div className="relative flex-1">
                {loading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-sm text-white/60">
                    <Loader2 className="h-6 w-6 animate-spin text-brand" aria-hidden="true" />
                    Loading playlist…
                  </div>
                )}
                {error && !loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-sm text-white/70">
                    <p>{error}</p>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                      Open the playlist on YouTube instead
                    </a>
                  </div>
                )}
                {current && (
                  <iframe
                    key={current.id}
                    src={`https://www.youtube.com/embed/${current.id}?rel=0&autoplay=1`}
                    title={current.title}
                    className="h-full w-full"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              {videos.length > 0 && (
                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-neutral-900 px-4 py-2 shrink-0">
                  <button
                    onClick={() => step(-1)}
                    disabled={videos.length < 2}
                    className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white disabled:text-white/30"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Previous
                  </button>
                  <span className="truncate px-2 text-center text-[13px] text-white/60">
                    {index + 1} of {videos.length}
                  </span>
                  <button
                    onClick={() => step(1)}
                    disabled={videos.length < 2}
                    className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white disabled:text-white/30"
                  >
                    Next <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
