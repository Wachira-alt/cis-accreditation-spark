import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Subsection } from "@/lib/portfolio-data";

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

function RotatingHero({ sub }: { sub: Subsection }) {
  const images = SUBSECTION_IMAGE_POOLS[sub.id] ?? ["/images/DSC_2676.webp"];
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  function goTo(i: number) {
    if (i === current || fading) return;
    setPrev(current);
    setFading(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCurrent(i);
        setFading(true);
        setTimeout(() => {
          setPrev(null);
          setFading(false);
        }, 1000);
      });
    });
  }

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      goTo((current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, fading, images.length]);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-900">
      <img
        src={images[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      {prev !== null && (
        <img
          src={images[prev]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
          style={{ opacity: fading ? 0 : 1, zIndex: 1 }}
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"
        style={{ zIndex: 2 }}
      />
      <div
        className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto px-8 pb-12"
        style={{ zIndex: 3 }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-medium mb-2">
          {sub.title.split(".")[0].trim()}
        </p>
        <h1 className="font-serif text-4xl text-white leading-tight">
          {sub.title.includes(".")
            ? sub.title.substring(sub.title.indexOf(".") + 1).trim()
            : sub.title}
        </h1>
        <p className="mt-4 text-sm text-white/75 max-w-xl leading-relaxed">
          {sub.description}
        </p>
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-4 right-6 flex gap-1.5" style={{ zIndex: 3 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? "white" : "rgba(255,255,255,0.35)",
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
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
  return (
    <div>
      <RotatingHero sub={sub} />

      {/* Sticky bar — stays at top as you scroll */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-rule">
        <div className="max-w-4xl mx-auto px-8 py-3 flex items-center gap-3">
          <Link
            to={backTo as any}
            className="inline-flex items-center gap-2 text-brand hover:text-[#800000] no-underline hover:no-underline transition-colors duration-150 group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium">
              {backLabel}
            </span>
          </Link>
          <span className="text-foreground/20 text-sm">·</span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-foreground/40 font-medium truncate">
            {sub.title.includes(".")
              ? sub.title.substring(sub.title.indexOf(".") + 1).trim()
              : sub.title}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-10 pb-32">
        {sub.links.length > 0 ? (
          <ul className="divide-y divide-rule border-t border-b border-rule">
            {sub.links.map((link) => {
              const placeholder = link.href === "#";
              return (
                <li key={link.label} className="py-4 flex flex-col gap-1">
                  {placeholder ? (
                    <span className="text-[14px] text-foreground/40 italic">
                      {link.label}
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-brand hover:underline inline-flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <svg
                        className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {link.note && (
                    <span className="text-xs text-foreground/35 leading-snug max-w-prose">
                      {link.note}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-sm italic text-foreground/40">
            Content for this section will be added during the self-study.
          </p>
        )}
      </div>
    </div>
  );
}