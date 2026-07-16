import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Film,
  FileText,
  Folder,
  Loader2,
  Music,
  Image as ImageIcon,
  X,
} from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { GOOGLE_API_KEY } from "@/lib/config";

/** Extract a Google Drive folder ID from a /drive/folders/<id> link. */
export function getDriveFolderId(href: string): string | null {
  const m = href.match(/\/drive\/folders\/([a-zA-Z0-9_-]{20,})/);
  return m ? m[1] : null;
}

type DriveItem = {
  id: string;
  name: string;
  mimeType: string;
};

const FOLDER_MIME = "application/vnd.google-apps.folder";

function kindOf(mimeType: string): "video" | "audio" | "image" | "folder" | "doc" {
  if (mimeType === FOLDER_MIME) return "folder";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.startsWith("audio/")) return "audio";
  if (mimeType.startsWith("image/")) return "image";
  return "doc";
}

function KindIcon({ mimeType }: { mimeType: string }) {
  const k = kindOf(mimeType);
  const cls = "h-3.5 w-3.5 shrink-0";
  if (k === "folder") return <Folder className={cls} aria-hidden="true" />;
  if (k === "video") return <Film className={cls} aria-hidden="true" />;
  if (k === "audio") return <Music className={cls} aria-hidden="true" />;
  if (k === "image") return <ImageIcon className={cls} aria-hidden="true" />;
  return <FileText className={cls} aria-hidden="true" />;
}

async function listFolder(folderId: string): Promise<DriveItem[]> {
  const params = new URLSearchParams({
    q: `'${folderId}' in parents and trashed = false`,
    key: GOOGLE_API_KEY,
    fields: "files(id,name,mimeType)",
    orderBy: "folder,name",
    pageSize: "200",
    supportsAllDrives: "true",
    includeItemsFromAllDrives: "true",
  });
  const res = await fetch(`https://www.googleapis.com/drive/v3/files?${params.toString()}`);
  if (!res.ok) {
    let detail = "";
    try {
      const body = (await res.json()) as { error?: { message?: string } };
      detail = body?.error?.message ?? "";
    } catch {
      /* ignore parse errors */
    }
    throw new Error(detail || `Drive API returned ${res.status}`);
  }
  const data = (await res.json()) as { files?: DriveItem[] };
  return data.files ?? [];
}

export function FolderGalleryDialog({
  open,
  onOpenChange,
  title,
  folderId,
  href,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  folderId: string;
  href: string;
}) {
  // Breadcrumb stack of {id, name} so nested folders (e.g. Students -> KS3) can be browsed.
  const [stack, setStack] = useState<{ id: string; name: string }[]>([{ id: folderId, name: title }]);
  const [items, setItems] = useState<DriveItem[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [frameLoaded, setFrameLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const folders = items.filter((i) => i.mimeType === FOLDER_MIME);
  const files = items.filter((i) => i.mimeType !== FOLDER_MIME);
  const currentFile = files[index];

  const load = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    setIndex(0);
    try {
      setItems(await listFolder(id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load this folder.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Reset to the root folder each time the dialog opens.
  useEffect(() => {
    if (open) {
      setStack([{ id: folderId, name: title }]);
      load(folderId);
    }
  }, [open, folderId, title, load]);

  useEffect(() => {
    setFrameLoaded(false);
  }, [currentFile?.id]);

  function openSubfolder(f: DriveItem) {
    setStack((s) => [...s, { id: f.id, name: f.name }]);
    load(f.id);
  }

  function goToCrumb(i: number) {
    const target = stack[i];
    setStack((s) => s.slice(0, i + 1));
    load(target.id);
  }

  const step = useCallback(
    (delta: number) => {
      if (files.length === 0) return;
      setIndex((i) => (i + delta + files.length) % files.length);
    },
    [files.length],
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
          className="fixed left-1/2 top-1/2 z-50 flex h-[90vh] w-[95vw] max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-white shadow-2xl focus:outline-none"
          aria-describedby={undefined}
        >
          {/* Header + breadcrumb */}
          <div className="flex items-center gap-3 border-b border-rule px-4 py-2.5 shrink-0">
            <Folder className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
            <DialogPrimitive.Title className="flex flex-1 flex-wrap items-center gap-1 truncate font-serif text-sm text-brand">
              {stack.map((c, i) => (
                <span key={c.id} className="inline-flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3 w-3 text-foreground/40" aria-hidden="true" />}
                  {i < stack.length - 1 ? (
                    <button onClick={() => goToCrumb(i)} className="hover:underline">
                      {c.name}
                    </button>
                  ) : (
                    <span>{c.name}</span>
                  )}
                </span>
              ))}
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
              className="rounded-sm p-1 text-foreground/60 hover:text-foreground shrink-0"
              aria-label="Close gallery"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          <div className="flex min-h-0 flex-1 flex-col sm:flex-row">
            {/* Sidebar list of items */}
            <div className="max-h-40 shrink-0 overflow-y-auto border-b border-rule sm:max-h-none sm:w-64 sm:border-b-0 sm:border-r">
              {folders.map((f) => (
                <button
                  key={f.id}
                  onClick={() => openSubfolder(f)}
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] text-brand hover:bg-neutral-50"
                >
                  <KindIcon mimeType={f.mimeType} />
                  <span className="truncate">{f.name}</span>
                </button>
              ))}
              {files.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setIndex(i)}
                  aria-current={i === index}
                  className={`flex w-full items-center gap-2 px-3 py-2 text-left text-[13px] hover:bg-neutral-50 ${
                    i === index ? "bg-neutral-100 text-brand font-medium" : "text-foreground/80"
                  }`}
                >
                  <KindIcon mimeType={f.mimeType} />
                  <span className="truncate">{f.name}</span>
                </button>
              ))}
              {!loading && folders.length === 0 && files.length === 0 && (
                <p className="px-3 py-4 text-[13px] text-foreground/50">This folder is empty.</p>
              )}
            </div>

            {/* Preview stage */}
            <div className="relative flex min-h-[46vh] flex-1 flex-col bg-neutral-100 sm:min-h-0">
              <div className="relative flex-1">
                {(loading || (currentFile && !frameLoaded)) && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 text-sm text-foreground/50">
                    <Loader2 className="h-6 w-6 animate-spin text-brand" aria-hidden="true" />
                    {loading ? "Loading folder…" : "Loading preview…"}
                  </div>
                )}

                {error && !loading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-sm text-foreground/60">
                    <p>{error}</p>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                      Open the folder in Drive instead
                    </a>
                  </div>
                )}

                {currentFile && (
                  <iframe
                    key={currentFile.id}
                    src={`https://drive.google.com/file/d/${currentFile.id}/preview`}
                    title={currentFile.name}
                    onLoad={() => setFrameLoaded(true)}
                    className={`h-full w-full transition-opacity duration-300 ${frameLoaded ? "opacity-100" : "opacity-0"}`}
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Controls */}
              {files.length > 0 && (
                <div className="flex items-center justify-between gap-3 border-t border-rule bg-white px-4 py-2 shrink-0">
                  <button
                    onClick={() => step(-1)}
                    disabled={files.length < 2}
                    className="inline-flex items-center gap-1 text-sm text-brand disabled:text-foreground/30"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Previous
                  </button>
                  <span className="truncate px-2 text-center text-[13px] text-foreground/70">
                    {currentFile?.name} · {index + 1} of {files.length}
                  </span>
                  <button
                    onClick={() => step(1)}
                    disabled={files.length < 2}
                    className="inline-flex items-center gap-1 text-sm text-brand disabled:text-foreground/30"
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
