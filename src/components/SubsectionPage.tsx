import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Subsection } from "@/lib/portfolio-data";

const SUBSECTION_IMAGE_POOLS: Record<string, string[]> = {
  "school-context":            ["/images/0B8A7198.jpg", "/images/DSC_2676.jpg", "/images/DSC_2902.jpg"],
  "community-voices":          ["/images/214A0522.jpg", "/images/DSC_3227.jpg", "/images/DSC_3733.jpg"],
  "community-data":            ["/images/472A0933.jpg", "/images/DSC_2676.jpg", "/images/DSC_3227.jpg"],
  "leadership-insights":       ["/images/472A1904.jpg", "/images/DSC_2902.jpg", "/images/DSC_3733.jpg"],
  "purpose":                   ["/images/1000151297-01.jpg", "/images/DSC_3101.jpg", "/images/DSC_3220.jpg"],
  "purpose-self-assessment":   ["/images/472A8928.jpg", "/images/DSC_3454.jpg"],
  "practices-organisation":    ["/images/473A1020.jpg", "/images/DSC_3101.jpg", "/images/DSC_3642.jpg"],
  "practices-d1":              ["/images/473A4691.jpg", "/images/DSC_3220.jpg", "/images/DSC_3454.jpg"],
  "practices-d2":              ["/images/0B8A7191.jpg", "/images/DSC_3642.jpg", "/images/DSC_3101.jpg"],
  "practices-d3":              ["/images/214A0182.jpg", "/images/DSC_3454.jpg", "/images/DSC_3220.jpg"],
  "practices-self-assessment": ["/images/214A0522.jpg", "/images/DSC_3642.jpg"],
  "planning":                  ["/images/1000115081-01.jpg", "/images/DSC_3101.jpg", "/images/DSC_3220.jpg"],
  "planning-self-assessment":  ["/images/Copy of 472A7025.jpg", "/images/DSC_3642.jpg"],
  "overview":                  ["/images/Copy of 472A7079.jpg", "/images/DSC_3980.jpg", "/images/DSC_8934.jpg"],
};

function RotatingHero({ sub }: { sub: Subsection }) {
  const images = SUBSECTION_IMAGE_POOLS[sub.id] ?? ["/images/DSC_2676.jpg"];
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      const nextIndex = (current + 1) % images.length;
      setNext(nextIndex);
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(nextIndex);
        setNext(null);
        setTransitioning(false);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, images.length]);

  function goTo(i: number) {
    if (i === current || transitioning) return;
    setNext(i);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(i);
      setNext(null);
      setTransitioning(false);
    }, 1000);
  }

  return (
    <div className="relative min-h-[22rem] overflow-hidden">
      {/* Current image — always visible underneath */}
      <img
        src={images[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Next image — fades in on top */}
      {next !== null && (
        <img
          src={images[next]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: transitioning ? 1 : 0 }}
        />
      )}
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

      <div className="max-w-4xl mx-auto px-8 py-10 pb-24">
        <Link
          to={backTo as any}
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-brand hover:text-[#800000] font-medium transition-colors no-underline hover:no-underline mb-8"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {backLabel}
        </Link>

        {sub.links.length > 0 ? (
          <ul className="divide-y divide-rule border-t border-b border-rule">
            {sub.links.map((link) => {
              const placeholder = link.href === "#";
              return (
                <li key={link.label} className="py-4 flex items-start justify-between gap-6">
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
                  <span
                    className="shrink-0 text-[11px] uppercase tracking-wider mt-0.5"
                    style={{ color: placeholder ? "#d1a0a2" : "#A8252C" }}
                  >
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