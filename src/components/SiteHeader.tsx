import { Link } from "@tanstack/react-router";
import logo from "@/assets/woodcreek-logo.png.asset.json";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/part-1", label: "Part 1 · Learning Community Profile" },
  { to: "/part-2", label: "Part 2 · Cornerstone Expectations" },
  { to: "/part-3", label: "Part 3 · Learning Stories" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center gap-5">
        <Link to="/" className="flex items-center gap-3 no-underline hover:no-underline">
          <img src={logo.url} alt="Woodcreek School crest" className="h-12 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg text-ink">Woodcreek School</span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              CIS Accreditation Portfolio
            </span>
          </span>
        </Link>
      </div>
      <nav className="border-t border-rule bg-white">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="py-3 text-ink no-underline hover:no-underline border-b-2 border-transparent [&.active]:border-brand [&.active]:text-brand"
              activeProps={{ className: "active" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
