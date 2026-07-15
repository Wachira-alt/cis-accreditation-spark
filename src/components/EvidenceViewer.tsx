import { useState } from "react";
import { ExternalLink, FileText, Film, Loader2, Youtube, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FolderGalleryDialog, getDriveFolderId } from "@/components/FolderGallery";
import { GOOGLE_API_KEY } from "@/lib/config";

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
  if (videoId && listId) return `https://www.youtube.com/embed/${videoId}?list=${listId}&rel=0`;
  if (videoId) return `https://www.youtube.com/embed/${videoId}?rel=0`;
  if (listId) return `https://www.youtube.com/embed/videoseries?list=${listId}&rel=0`;
  return null;
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

/** A single evidence row: on-site viewer for Drive files, YouTube player, or plain external link. */
export function EvidenceLinkRow({ label, href }: { label: string; href: string }) {
  const [open, setOpen] = useState(false);
  const youtubeEmbed = getYouTubeEmbed(href);
  const fileId = getDriveFileId(href);
  const folderId = getDriveFolderId(href);

  // YouTube video or playlist: inline player (playlists get next / previous automatically).
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
