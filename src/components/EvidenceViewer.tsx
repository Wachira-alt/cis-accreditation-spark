import { useCallback, useEffect, useState, type FormEvent } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Film,
  Image as ImageIcon,
  Loader2,
  Lock,
  Music,
  Youtube,
  X,
} from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FolderGalleryDialog, getDriveFolderId } from "@/components/FolderGallery";
import { YouTubePlaylistDialog, getYouTubePlaylistIds } from "@/components/YouTubeGallery";
import { GOOGLE_API_KEY, RESTRICTED_PASSWORD } from "@/lib/config";

/**
 * Extracts a Google Drive file ID from any common Drive URL shape:
 *   https://drive.google.com/file/d/<id>/view?usp=sharing
 *   https://drive.google.com/open?id=<id>
 *   https://docs.google.com/document/d/<id>/view
 * Returns null for folders and non-Drive links (those open externally).
 */
export function getDriveFileId(href: string): string | null {
  if (!/\b(drive|docs)\.google\.com\//.test(href)) return null;
  if (/\/drive\/folders\//.test(href)) return null;
  const dMatch = href.match(/\/d\/([a-zA-Z0-9_-]{20,})/);
  if (dMatch) return dMatch[1];
  const idMatch = href.match(/[?&]id=([a-zA-Z0-9_-]{20,})/);
  if (idMatch) return idMatch[1];
  return null;
}

/**
 * Turns any normal YouTube URL into an embeddable player URL. Handles single
 * videos (watch?v=, youtu.be/, /shorts/, /embed/) and playlists (?list= or a
 * /playlist link). A playlist plays through with the player's own next/prev.
 * Returns null for non-YouTube links and for bare channel URLs (not embeddable).
 */
export function getYouTubeEmbed(href: string): string | null {
  if (!/(?:youtube\.com|youtu\.be)/.test(href)) return null;
  let videoId: string | null = null;
  let listId: string | null = null;
  try {
    const u = new URL(href);
    listId = u.searchParams.get("list");
    if (u.hostname.includes("youtu.be")) {
      videoId = u.pathname.slice(1).split("/")[0] || null;
    } else if (u.pathname.startsWith("/watch")) {
      videoId = u.searchParams.get("v");
    } else if (u.pathname.startsWith("/embed/")) {
      videoId = u.pathname.split("/embed/")[1]?.split("/")[0] || null;
    } else if (u.pathname.startsWith("/shorts/")) {
      videoId = u.pathname.split("/shorts/")[1]?.split("/")[0] || null;
    }
  } catch {
    return null;
  }
  if (videoId && listId) return `https://www.youtube-nocookie.com/embed/${videoId}?list=${listId}&rel=0`;
  if (videoId) return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  if (listId) return `https://www.youtube-nocookie.com/embed/videoseries?list=${listId}&rel=0`;
  return null;
}

/**
 * Detects a directly-served media file by extension — e.g. an audio or video file
 * bundled in the site's /public folder (or any direct file URL). Drive and YouTube
 * links don't end in a media extension, so they never match here.
 */
export function getLocalMediaKind(href: string): "audio" | "video" | null {
  const clean = href.split("?")[0].toLowerCase();
  if (/\.(mp3|m4a|aac|wav|ogg|oga)$/.test(clean)) return "audio";
  if (/\.(mp4|webm|ogv)$/.test(clean)) return "video";
  return null;
}

function isImageHref(href: string): boolean {
  return /\.(png|jpe?g|webp|gif|avif|svg)$/.test(href.split("?")[0].toLowerCase());
}

export function EvidenceViewerDialog({
  open,
  onOpenChange,
  title,
  driveId,
  href,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  driveId: string;
  href: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 flex h-[88vh] w-[94vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-white shadow-2xl focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center gap-3 border-b border-rule px-4 py-2.5 shrink-0">
            <FileText className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
            <DialogPrimitive.Title className="flex-1 truncate font-serif text-sm text-brand">
              {title}
            </DialogPrimitive.Title>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-foreground/70 hover:text-brand no-underline hover:no-underline shrink-0"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Open in Drive</span>
            </a>
            <DialogPrimitive.Close
              className="rounded-sm p-1 text-foreground/60 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand shrink-0"
              aria-label="Close viewer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          <div className="relative flex-1 bg-neutral-100">
            {!loaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-sm text-foreground/50">
                <Loader2 className="h-6 w-6 animate-spin text-brand" aria-hidden="true" />
                Loading preview…
              </div>
            )}
            <iframe
              src={`https://drive.google.com/file/d/${driveId}/preview`}
              title={title}
              onLoad={() => setLoaded(true)}
              className={`relative h-full w-full transition-opacity duration-300 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
            />
          </div>

          <p className="border-t border-rule px-4 py-2 text-[11px] text-foreground/60 shrink-0">
            If the document does not load, sign in to the Google account that was granted access, or
            use “Open in Drive”.
          </p>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/** In-app YouTube player. A playlist URL steps through its videos with the player's own controls. */
export function YouTubeDialog({
  open,
  onOpenChange,
  title,
  embedUrl,
  href,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  embedUrl: string;
  href: string;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 flex h-[80vh] w-[94vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-black shadow-2xl focus:outline-none"
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
              aria-label="Close video"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>
          <div className="relative flex-1 bg-black">
            <iframe
              src={embedUrl}
              title={title}
              className="h-full w-full"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/** In-app player for a directly-served video file (bundled in /public or a direct URL). */
export function LocalVideoDialog({
  open,
  onOpenChange,
  title,
  src,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  src: string;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 flex h-[80vh] w-[94vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-black shadow-2xl focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5 shrink-0">
            <Film className="h-4 w-4 text-white shrink-0" aria-hidden="true" />
            <DialogPrimitive.Title className="flex-1 truncate font-serif text-sm text-white">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              className="rounded-sm p-1 text-white/70 hover:text-white shrink-0"
              aria-label="Close video"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>
          <div className="relative flex-1 bg-black">
            <video src={src} controls autoPlay className="h-full w-full" />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

type GalleryItem = { label: string; href: string };

function ItemIcon({ href }: { href: string }) {
  const cls = "h-3.5 w-3.5 shrink-0";
  const media = getLocalMediaKind(href);
  if (media === "audio") return <Music className={cls} aria-hidden="true" />;
  if (media === "video") return <Film className={cls} aria-hidden="true" />;
  if (getYouTubeEmbed(href)) return <Youtube className={cls} aria-hidden="true" />;
  if (isImageHref(href)) return <ImageIcon className={cls} aria-hidden="true" />;
  return <FileText className={cls} aria-hidden="true" />;
}

function ItemStage({ item }: { item: GalleryItem }) {
  const media = getLocalMediaKind(item.href);
  if (media === "audio") {
    return (
      <div className="flex h-full w-full items-center justify-center p-6">
        <audio key={item.href} src={item.href} controls autoPlay className="w-full max-w-lg" />
      </div>
    );
  }
  if (media === "video") {
    return <video key={item.href} src={item.href} controls autoPlay className="h-full w-full bg-black" />;
  }
  const yt = getYouTubeEmbed(item.href);
  if (yt) {
    return (
      <iframe
        key={item.href}
        src={yt}
        title={item.label}
        className="h-full w-full"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }
  const fileId = getDriveFileId(item.href);
  if (fileId) {
    return (
      <iframe
        key={item.href}
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        title={item.label}
        className="h-full w-full"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      />
    );
  }
  if (isImageHref(item.href)) {
    return <img key={item.href} src={item.href} alt={item.label} className="h-full w-full object-contain" />;
  }
  return (
    <div className="flex h-full items-center justify-center">
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
        Open this item
      </a>
    </div>
  );
}

/** Gallery for a hand-picked list of items — a chooser sidebar plus an inline preview of each. */
export function ItemGalleryDialog({
  open,
  onOpenChange,
  title,
  items,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  items: GalleryItem[];
}) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  const step = useCallback(
    (delta: number) => setIndex((i) => (i + delta + items.length) % items.length),
    [items.length],
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
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 flex h-[88vh] w-[95vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-white shadow-2xl focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center gap-3 border-b border-rule px-4 py-2.5 shrink-0">
            <FileText className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
            <DialogPrimitive.Title className="flex-1 truncate font-serif text-sm text-brand">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close
              className="rounded-sm p-1 text-foreground/60 hover:text-foreground shrink-0"
              aria-label="Close"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          <div className="flex min-h-0 flex-1 flex-col sm:flex-row">
            <div className="max-h-40 shrink-0 overflow-y-auto border-b border-rule sm:max-h-none sm:w-64 sm:border-b-0 sm:border-r">
              {items.map((it, i) => (
                <button
                  key={`${it.href}-${i}`}
                  onClick={() => setIndex(i)}
                  aria-current={i === index}
                  className={`flex w-full items-center gap-2 px-3 py-2.5 text-left text-[13px] hover:bg-neutral-50 ${
                    i === index ? "bg-neutral-100 text-brand font-medium" : "text-foreground/80"
                  }`}
                >
                  <span className="w-5 shrink-0 text-right text-foreground/40">{i + 1}</span>
                  <ItemIcon href={it.href} />
                  <span className="truncate">{it.label}</span>
                </button>
              ))}
            </div>

            <div className="relative flex min-h-[46vh] flex-1 flex-col bg-neutral-100 sm:min-h-0">
              <div className="relative flex-1">{current && <ItemStage item={current} />}</div>
              {items.length > 1 && (
                <div className="flex items-center justify-between gap-3 border-t border-rule bg-white px-4 py-2 shrink-0">
                  <button onClick={() => step(-1)} className="inline-flex items-center gap-1 text-sm text-brand">
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Previous
                  </button>
                  <span className="truncate px-2 text-center text-[13px] text-foreground/70">
                    {current?.label} · {index + 1} of {items.length}
                  </span>
                  <button onClick={() => step(1)} className="inline-flex items-center gap-1 text-sm text-brand">
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

const UNLOCK_KEY = "cis-restricted-unlocked";

function restrictedUnlocked(): boolean {
  try {
    return sessionStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

function markRestrictedUnlocked() {
  try {
    sessionStorage.setItem(UNLOCK_KEY, "1");
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event("cis-unlock"));
}

/** Small password prompt gating the "(Restricted)" financial documents. */
function PasswordDialog({
  open,
  onOpenChange,
  onUnlock,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUnlock: () => void;
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (value === RESTRICTED_PASSWORD) {
      setValue("");
      setError(false);
      onUnlock();
    } else {
      setError(true);
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-2xl focus:outline-none">
          <div className="mb-3 flex items-center gap-2">
            <Lock className="h-4 w-4 text-brand" aria-hidden="true" />
            <DialogPrimitive.Title className="font-serif text-base text-brand">
              Restricted document
            </DialogPrimitive.Title>
          </div>
          <p className="mb-4 text-sm text-foreground/70">
            These documents are shared with the CIS review team only. Enter the access password to
            continue.
          </p>
          <form onSubmit={submit} className="flex flex-col gap-3">
            <input
              type="password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              placeholder="Access password"
              className="rounded-sm border border-rule px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
            {error && <p className="text-sm text-red-700">Incorrect password.</p>}
            <div className="flex justify-end gap-2">
              <DialogPrimitive.Close className="rounded-sm px-3 py-2 text-sm text-foreground/70 hover:text-foreground">
                Cancel
              </DialogPrimitive.Close>
              <button
                type="submit"
                className="rounded-sm bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-[#800000]"
              >
                Unlock
              </button>
            </div>
          </form>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

/** A single evidence row: multi-item gallery, Drive viewer, YouTube player, bundled media, or link. */
export function EvidenceLinkRow({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items?: GalleryItem[];
}) {
  const [open, setOpen] = useState(false);
  const restricted = /restricted/i.test(label);
  const [unlocked, setUnlocked] = useState(restrictedUnlocked);
  const [pwOpen, setPwOpen] = useState(false);

  // Once one restricted document is unlocked, unlock them all for this session.
  useEffect(() => {
    if (!restricted) return;
    const handler = () => setUnlocked(true);
    window.addEventListener("cis-unlock", handler);
    return () => window.removeEventListener("cis-unlock", handler);
  }, [restricted]);

  // Locked restricted document: ask for the password first, then open it.
  if (restricted && !unlocked) {
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          onClick={() => setPwOpen(true)}
          className="text-left text-[14px] text-brand hover:underline inline-flex items-center gap-1.5"
        >
          {label}
          <Lock className="w-3 h-3 opacity-50 shrink-0" aria-hidden="true" />
        </button>
        <PasswordDialog
          open={pwOpen}
          onOpenChange={setPwOpen}
          onUnlock={() => {
            markRestrictedUnlocked();
            setUnlocked(true);
            setPwOpen(false);
            setOpen(true);
          }}
        />
      </span>
    );
  }

  // Curated set of files: one link that opens a chooser with a preview of each item.
  if (items && items.length > 0) {
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          onClick={() => setOpen(true)}
          className="text-left text-[14px] text-brand hover:underline inline-flex items-center gap-1.5"
        >
          {label}
          <FileText className="w-3 h-3 opacity-50 shrink-0" aria-hidden="true" />
        </button>
        <ItemGalleryDialog open={open} onOpenChange={setOpen} title={label} items={items} />
      </span>
    );
  }

  const playlistIds = getYouTubePlaylistIds(href);
  const youtubeEmbed = getYouTubeEmbed(href);
  const localMedia = getLocalMediaKind(href);
  const fileId = getDriveFileId(href);
  const folderId = getDriveFolderId(href);

  // Bundled audio file: a small inline player right in the row.
  if (localMedia === "audio") {
    return (
      <span className="flex flex-col gap-2">
        <span className="text-[14px] text-foreground">{label}</span>
        <audio src={href} controls preload="none" className="h-9 w-full max-w-md" />
      </span>
    );
  }

  // Bundled video file: inline player in a dialog.
  if (localMedia === "video") {
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          onClick={() => setOpen(true)}
          className="text-left text-[14px] text-brand hover:underline inline-flex items-center gap-1.5"
        >
          {label}
          <Film className="w-3.5 h-3.5 opacity-60 shrink-0" aria-hidden="true" />
        </button>
        <LocalVideoDialog open={open} onOpenChange={setOpen} title={label} src={href} />
      </span>
    );
  }

  // YouTube playlist(s) with an API key: in-app player plus a clickable list of every video.
  if (playlistIds.length > 0 && GOOGLE_API_KEY) {
    const ytHref = `https://www.youtube.com/playlist?list=${playlistIds[0]}`;
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          onClick={() => setOpen(true)}
          className="text-left text-[14px] text-brand hover:underline inline-flex items-center gap-1.5"
        >
          {label}
          <Youtube className="w-3.5 h-3.5 opacity-60 shrink-0" aria-hidden="true" />
        </button>
        <a
          href={ytHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label}, open on YouTube (opens in a new tab)`}
          className="text-[11px] uppercase tracking-[0.12em] text-foreground/50 hover:text-brand no-underline hover:no-underline"
        >
          YouTube ↗
        </a>
        <YouTubePlaylistDialog
          open={open}
          onOpenChange={setOpen}
          title={label}
          playlistIds={playlistIds}
          href={ytHref}
        />
      </span>
    );
  }

  // YouTube video or a playlist without an API key: inline player (playlists still get next / previous).
  if (youtubeEmbed) {
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          onClick={() => setOpen(true)}
          className="text-left text-[14px] text-brand hover:underline inline-flex items-center gap-1.5"
        >
          {label}
          <Youtube className="w-3.5 h-3.5 opacity-60 shrink-0" aria-hidden="true" />
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label}, open on YouTube (opens in a new tab)`}
          className="text-[11px] uppercase tracking-[0.12em] text-foreground/50 hover:text-brand no-underline hover:no-underline"
        >
          YouTube ↗
        </a>
        <YouTubeDialog
          open={open}
          onOpenChange={setOpen}
          title={label}
          embedUrl={youtubeEmbed}
          href={href}
        />
      </span>
    );
  }

  // Single Drive file: inline document / video viewer.
  if (fileId) {
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          onClick={() => setOpen(true)}
          className="text-left text-[14px] text-brand hover:underline inline-flex items-center gap-1.5"
        >
          {label}
          <FileText className="w-3 h-3 opacity-50 shrink-0" aria-hidden="true" />
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label}, open in Drive (opens in a new tab)`}
          className="text-[11px] uppercase tracking-[0.12em] text-foreground/50 hover:text-brand no-underline hover:no-underline"
        >
          Drive ↗
        </a>
        <EvidenceViewerDialog
          open={open}
          onOpenChange={setOpen}
          title={label}
          driveId={fileId}
          href={href}
        />
      </span>
    );
  }

  // Drive folder with an API key configured: in-app gallery with play and next / previous.
  if (folderId && GOOGLE_API_KEY) {
    return (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          onClick={() => setOpen(true)}
          className="text-left text-[14px] text-brand hover:underline inline-flex items-center gap-1.5"
        >
          {label}
          <Film className="w-3 h-3 opacity-50 shrink-0" aria-hidden="true" />
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label}, open in Drive (opens in a new tab)`}
          className="text-[11px] uppercase tracking-[0.12em] text-foreground/50 hover:text-brand no-underline hover:no-underline"
        >
          Drive ↗
        </a>
        <FolderGalleryDialog
          open={open}
          onOpenChange={setOpen}
          title={label}
          folderId={folderId}
          href={href}
        />
      </span>
    );
  }

  // Non-Drive link, or a folder with no API key configured: open externally.
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className="text-[14px] text-brand hover:underline inline-flex items-center gap-1.5 group"
    >
      {label}
      <ExternalLink
        className="w-3 h-3 opacity-40 sm:opacity-0 sm:-translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0"
        aria-hidden="true"
      />
    </a>
  );
}
