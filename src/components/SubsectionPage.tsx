import { Link } from "@tanstack/react-router";
import type { Subsection } from "@/lib/portfolio-data";
import { RotatingHero } from "@/components/RotatingHero";
import { getPrevNext } from "@/lib/portfolio-nav";

const SUBSECTION_IMAGE_POOLS: Record<string, string[]> = {
  "school-context":            ["/images/0B8A7198.webp", "/images/DSC_2676.webp", "/images/DSC_2902.webp"],
  "community-voices":          ["/images/214A0522.webp", "/images/DSC_3227.webp", "/images/DSC_3733.webp"],
  "community-data":            ["/images/472A0933.webp", "/images/DSC_2676.webp", "/images/DSC_3227.webp"],
  "leadership-insights":       ["/images/472A1904.webp", "/images/DSC_2902.webp", "/images/DSC_3733.webp"],
  "purpose":                   ["/images/1K2A0042.webp", "/images/DSC_3101.webp", "/images/DSC_3220.webp"],
  "purpose-self-assessment":   ["/images/1K2A0135.webp", "/images/DSC_3454.webp"],
  "practices-organisation":    ["/images/203A9261.webp", "/images/DSC_3101.webp", "/images/DSC_3642.webp"],
  "practices-d1":              ["/images/DSC_2676.webp", "/images/DSC_3220.webp", "/images/DSC_3454.webp"],
  "practices-d2":              ["/images/0B8A7191.webp", "/images/DSC_3642.webp", "/images/DSC_3101.webp"],
  "practices-d3":              ["/images/214A0182.webp", "/images/DSC_3454.webp", "/images/DSC_3220.webp"],
  "practices-self-assessment": ["/images/214A0522.webp", "/images/DSC_3642.webp"],
  "planning":                  ["/images/472A9626.webp", "/images/DSC_3101.webp", "/images/DSC_3220.webp"],
  "planning-self-assessment":  ["/images/Copy of 472A7025.webp", "/images/DSC_3642.webp"],
  "overview":                  ["/images/Copy of 472A7079.webp", "/images/DSC_3980.webp", "/images/DSC_8934.webp"],
};

function splitTitle(title: string) {
  if (!title.includes(".")) return { label: "", main: title };
  return {
    label: title.split(".")[0].trim(),
    main: title.substring(title.indexOf(".") + 1).trim(),
  };
}

export function SubsectionPage({
  sub,
  backTo,
  backLabel,
}: {
  sub: Subsection;
  backTo: string;
  backLabel: string;
}) {
  const { label, main } = splitTitle(sub.title);
  const { prev, next } = getPrevNext(sub.id);

  return (
    <div>
      <RotatingHero
        images={SUBSECTION_IMAGE_POOLS[sub.id] ?? ["/images/DSC_2676.webp"]}
        aspect="aspect-[16/9] sm:aspect-[21/9]"
      >
        <div className="flex h-full flex-col justify-end max-w-4xl mx-auto px-6 sm:px-8 pb-10 sm:pb-12">
          {label && (
            <p className="text-xs uppercase tracking-[0.22em] text-white/80 font-medium mb-2">
              {label}
            </p>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight">{main}</h1>
          <p className="mt-4 text-sm text-white/85 max-w-xl leading-relaxed hidden sm:block">
            {sub.description}
          </p>
        </div>
      </RotatingHero>

      {/* Sticky bar — stays at top as you scroll */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-rule print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-3 flex items-center gap-3">
          <Link
            to={backTo as never}
            className="inline-flex items-center gap-2 text-brand hover:text-[#800000] no-underline hover:no-underline transition-colors duration-150 group shrink-0"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium">
              {backLabel}
            </span>
          </Link>
          <span className="text-foreground/30 text-sm" aria-hidden="true">·</span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-foreground/60 font-medium truncate">
            {main}
          </span>
        </div>
      </div>

      {/* Description in the document flow for mobile readers (hero copy is hidden there) */}
      <p className="sm:hidden max-w-4xl mx-auto px-6 pt-6 text-[15px] leading-relaxed text-foreground">
        {sub.description}
      </p>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
        {sub.updated && (
          <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-foreground/60">
            Last updated · {sub.updated}
          </p>
        )}
        {sub.links.length > 0 ? (
          <ul className="divide-y divide-rule border-t border-b border-rule">
            {sub.links.map((link) => {
              const placeholder = link.href === "#";
              return (
                <li key={link.label} className="py-4 flex flex-col gap-1">
                  {placeholder ? (
                    <span className="text-[14px] text-foreground/60 italic">
                      {link.label}
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} (opens in a new tab)`}
                      className="text-[14px] text-brand hover:underline inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <svg
                        className="w-3 h-3 opacity-40 sm:opacity-0 sm:-translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {link.note && (
                    <span className="text-xs text-foreground/60 leading-snug max-w-prose">
                      {link.note}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-sm italic text-foreground/60">
            Content for this section will be added during the self-study.
          </p>
        )}

        {/* Prev / next — evaluators read the portfolio linearly */}
        <nav
          aria-label="Portfolio navigation"
          className="mt-12 pt-6 border-t border-rule flex flex-col sm:flex-row justify-between gap-4 print:hidden"
        >
          {prev ? (
            <Link
              to={prev.path as never}
              className="group no-underline hover:no-underline max-w-[48%]"
            >
              <span className="block text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                ← Previous · {prev.partNumber}
              </span>
              <span className="mt-1 block text-sm text-brand group-hover:underline">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={next.path as never}
              className="group no-underline hover:no-underline sm:text-right sm:ml-auto max-w-[48%]"
            >
              <span className="block text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                Next · {next.partNumber} →
              </span>
              <span className="mt-1 block text-sm text-brand group-hover:underline">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </div>
  );
}
