import { Link } from "@tanstack/react-router";
import logo from "@/assets/woodcreek-logo.png";
import { SearchCommand } from "@/components/SearchCommand";

const nav = [
  { to: "/", label: "Overview", short: "Overview" },
  { to: "/part-1", label: "Part 1 · Learning Community Profile", short: "Part 1 · Profile" },
  { to: "/part-2", label: "Part 2 · Cornerstone Expectations", short: "Part 2 · Cornerstones" },
  { to: "/part-3", label: "Part 3 · Learning Stories", short: "Part 3 · Stories" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-transparent">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-brand focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 no-underline hover:no-underline min-w-0">
          <img
            src={logo}
            alt="Woodcreek School crest"
            className="h-10 sm:h-12 w-auto shrink-0"
            width={48}
            height={48}
          />
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-serif text-base sm:text-lg text-brand truncate">
              Woodcreek School
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-foreground truncate">
              CIS Accreditation Portfolio
            </span>
          </span>
        </Link>
        <SearchCommand />
      </div>
      <nav
        aria-label="Portfolio parts"
        className="border-t border-rule bg-transparent print:hidden"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-0 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="py-3 text-foreground no-underline hover:no-underline border-b-2 border-transparent [&.active]:border-brand [&.active]:text-brand"
              activeProps={{ className: "active" }}
            >
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
