import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Subsection } from "@/lib/portfolio-data";

const SUBSECTION_IMAGES: Record<string, string> = {
  "school-context":            "/images/school-context.jpg",
  "community-voices":          "/images/community-voices.jpg",
  "community-data":            "/images/community-data.jpg",
  "leadership-insights":       "/images/leadership-insights.jpg",
  "purpose":                   "/images/practices-d1.jpg",
  "purpose-self-assessment":   "/images/practices-d1.jpg",
  "practices-organisation":    "/images/organisation.jpg",
  "practices-d1":              "/images/practices-d1.jpg",
  "practices-d2":              "/images/practices-d2.jpg",
  "practices-d3":              "/images/practices-d3.jpg",
  "practices-self-assessment": "/images/practices-d3.jpg",
  "planning":                  "/images/planning.jpg",
  "planning-self-assessment":  "/images/planning.jpg",
  "overview":                  "/images/part-3-hero.jpg",
};

// Each subsection gets a pool of images for its own rotating hero
const SUBSECTION_IMAGE_POOLS: Record<string, string[]> = {
  "school-context": [
    "/images/school-context.jpg",
    "/images/part-1-hero.jpg",
  ],
  "community-voices": [
    "/images/community-voices.jpg",
    "/images/part-1-hero.jpg",
  ],
  "community-data": [
    "/images/community-data.jpg",
    "/images/part-1-hero.jpg",
  ],
  "leadership-insights": [
    "/images/leadership-insights.jpg",
    "/images/part-1-hero.jpg",
  ],
  "purpose": ["/images/practices-d1.jpg", "/images/part-2-hero.jpg"],
  "practices-organisation": ["/images/organisation.jpg", "/images/part-2-hero.jpg"],
  "practices-d1": ["/images/practices-d1.jpg", "/images/organisation.jpg"],
  "practices-d2": ["/images/practices-d2.jpg", "/images/part-2-hero.jpg"],
  "practices-d3": ["/images/practices-d3.jpg", "/images/part-2-hero.jpg"],
  "planning": ["/images/planning.jpg", "/images/part-2-hero.jpg"],
  "overview": ["/images/part-3-hero.jpg"],
};

function RotatingHero({ sub }: { sub: Subsection }) {
  const images = SUBSECTION_IMAGE_POOLS[sub.id] ?? [
    SUBSECTION_IMAGES[sub.id] ?? "/images/part-1-hero.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-[22rem] overflow-hidden">
      <img
        key={current}
        src={images[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: fading ? 0 : 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative flex flex-col justify-end max-w-4xl mx-auto px-8 pt-32 pb-10 min-h-[22rem]">
        <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-medium mb-2">
          {sub.title.split(".")[0].trim()}
        </p>
        <h1 className="font-serif text-3xl text-white leading-tight">
          {sub.title.includes(".")
            ? sub.title.substring(sub.title.indexOf(".") + 1).trim()
            : sub.title}
        </h1>
        <p className="mt-3 text-sm text-white/85 max-w-xl leading-relaxed">
          {sub.description}
        </p>
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-4 right-6 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFading(true);
                setTimeout(() => { setCurrent(i); setFading(false); }, 300);
              }}
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

      <div className="max-w-4xl mx-auto px-8 py-10 pb-24">
        {/* Back link */}
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-brand hover:text-[#800000] font-medium transition-colors no-underline hover:no-underline mb-8"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {backLabel}
        </Link>

        {/* Evidence links */}
        {sub.links.length > 0 ? (
          <ul className="divide-y divide-rule border-t border-b border-rule">
            {sub.links.map((link) => {
              const placeholder = link.href === "#";
              return (
                <li
                  key={link.label}
                  className="py-4 flex items-start justify-between gap-6"
                >
                  <div className="flex flex-col gap-1">
                    {placeholder ? (
                      <span className="text-[14px] text-foreground/50 italic">
                        {link.label}
                      </span>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-brand hover:underline"
                      >
                        {link.label}
                      </a>
                    )}
                    {link.note && (
                      <span className="text-xs text-foreground/40 leading-snug max-w-prose">
                        {link.note}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 text-[11px] uppercase tracking-wider mt-0.5"
                    style={{ color: placeholder ? "#d1a0a2" : "#A8252C" }}>
                    {placeholder ? "Pending" : "Open →"}
                  </span>
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