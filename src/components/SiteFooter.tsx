export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 text-xs text-foreground">
        <div>
          <p className="font-serif text-sm text-brand">Woodcreek School — Committed to Learning</p>
          <p>CIS Accreditation Portfolio · Preparatory Engagement 2026</p>
        </div>
        <p>© {new Date().getFullYear()} Woodcreek School</p>
      </div>
    </footer>
  );
}
