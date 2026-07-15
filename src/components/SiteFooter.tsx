export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-xs text-foreground">
        <div>
          <p className="font-serif text-sm text-brand">Woodcreek School, Committed to Learning</p>
          <p>CIS Accreditation Portfolio · Preparatory Engagement 2026</p>
        </div>
        <nav aria-label="Woodcreek School links" className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href="https://woodcreekschool.sc.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand no-underline hover:underline"
          >
            School website ↗
          </a>
          <a
            href="https://dashboard.woodcreekschool.sc.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand no-underline hover:underline"
          >
            School dashboard ↗
          </a>
          <a
            href="https://www.youtube.com/@WoodcreekSchoolKenya-vy9yj/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand no-underline hover:underline"
          >
            YouTube ↗
          </a>
          <p className="text-foreground">© {new Date().getFullYear()} Woodcreek School</p>
        </nav>
      </div>
    </footer>
  );
}
