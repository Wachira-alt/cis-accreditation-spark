import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { sections } from "@/lib/portfolio-data";

type SearchEntry = {
  value: string;
  label: string;
  detail?: string;
  path: string;
};

const pageEntries: SearchEntry[] = sections.flatMap((section) =>
  section.subsections.map((sub) => ({
    value: `${section.number} ${sub.title}`,
    label: sub.title,
    detail: section.number,
    path: `/${section.id}/${sub.id}`,
  })),
);

const evidenceEntries: SearchEntry[] = sections.flatMap((section) =>
  section.subsections.flatMap((sub) =>
    sub.links.map((link) => ({
      value: `${link.label} ${link.note ?? ""} ${sub.title}`,
      label: link.label,
      detail: `${section.number} · ${sub.title}`,
      path: `/${section.id}/${sub.id}`,
    })),
  ),
);

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        const target = e.target as HTMLElement | null;
        if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function go(path: string) {
    setOpen(false);
    navigate({ to: path as never });
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-sm border border-rule px-2.5 py-1.5 text-xs text-foreground/70 hover:text-brand hover:border-brand transition-colors print:hidden"
        aria-label="Search the portfolio"
      >
        <Search className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="hidden md:inline">Search</span>
        <kbd className="hidden md:inline text-[10px] text-foreground/50 border border-rule rounded px-1">
          Ctrl K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search sections and evidence…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Portfolio sections">
            {pageEntries.map((entry) => (
              <CommandItem key={entry.path} value={entry.value} onSelect={() => go(entry.path)}>
                <div className="flex flex-col">
                  <span>{entry.label}</span>
                  {entry.detail && (
                    <span className="text-xs text-muted-foreground">{entry.detail}</span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Evidence">
            {evidenceEntries.map((entry, i) => (
              <CommandItem
                key={`${entry.path}-${i}`}
                value={entry.value}
                onSelect={() => go(entry.path)}
              >
                <div className="flex flex-col">
                  <span className="line-clamp-1">{entry.label}</span>
                  {entry.detail && (
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      {entry.detail}
                    </span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
