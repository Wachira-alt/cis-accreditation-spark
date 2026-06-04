import { useEffect, useRef, useState } from "react";
import type { Section, Subsection } from "@/lib/portfolio-data";

// ─── Image map ───────────────────────────────────────────────────────────────
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

// Hero image pools — rotates every 5 seconds with crossfade
// Add more images per array as you add school photos
const HERO_IMAGE_POOLS: Record<string, string[]> = {
  "part-1": [
    "/images/part-1-hero.jpg",
    "/images/school-context.jpg",
    "/images/community-voices.jpg",
    "/images/leadership-insights.jpg",
  ],
  "part-2": [
    "/images/part-2-hero.jpg",
    "/images/practices-d1.jpg",
    "/images/practices-d2.jpg",
    "/images/planning.jpg",
  ],
  "part-3": [
    "/images/part-3-hero.jpg",
  ],
};

// ─── RotatingHero ─────────────────────────────────────────────────────────────
function RotatingHero({
  partId,
  number,
  title,
  intro,
}: {
  partId: string;
  number: string;
  title: string;
  intro: string;
}) {
  const images = HERO_IMAGE_POOLS[partId] ?? ["/images/part-1-hero.jpg"];
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
    <div className="relative h-80 overflow-hidden">
      <img
        key={current}
        src={images[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: fading ? 0 : 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto px-8 pb-10">
        <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-medium mb-2">
          {number}
        </p>
        <h1 className="font-serif text-4xl text-white leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-sm text-white/75 max-w-xl leading-relaxed line-clamp-3">
          {intro}
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

// ─── SubsectionCard ───────────────────────────────────────────────────────────
function SubsectionCard({
  sub,
  onClick,
  isActive,
  index,
}: {
  sub: Subsection;
  onClick: () => void;
  isActive: boolean;
  index: number;
}) {
  const image = SUBSECTION_IMAGES[sub.id] ?? "/images/part-1-hero.jpg";

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-sm text-left w-full transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span
          className="absolute top-4 left-4 font-sans text-xs uppercase tracking-[0.2em] text-white/90 px-2 py-1 rounded-sm"
          style={{ backgroundColor: isActive ? "rgba(168,37,44,1)" : "rgba(168,37,44,0.75)" }}
        >
          {sub.title.split(".")[0].trim()}
        </span>
        {isActive && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand" />
        )}
      </div>
      <div
        className="border border-t-0 border-rule px-5 py-5 transition-colors duration-200"
        style={{ backgroundColor: isActive ? "#fdf8f8" : "white" }}
      >
        <h3 className="font-serif text-lg text-brand leading-snug">
          {sub.title.includes(".")
            ? sub.title.substring(sub.title.indexOf(".") + 1).trim()
            : sub.title}
        </h3>
        <p className="mt-2 text-sm text-foreground leading-relaxed line-clamp-2">
          {sub.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-brand font-medium">
          {isActive ? "Currently viewing" : "View documents"}
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isActive ? "M19 9l-7 7-7-7" : "M17 8l4 4m0 0l-4 4m4-4H3"}
            />
          </svg>
        </span>
      </div>
    </button>
  );
}

// ─── SubsectionDetail ─────────────────────────────────────────────────────────
function SubsectionDetail({ sub }: { sub: Subsection }) {
  const image = SUBSECTION_IMAGES[sub.id] ?? "/images/part-1-hero.jpg";

  return (
    <section id={sub.id} className="scroll-mt-20">
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-8 pb-7">
          <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-medium mb-1">
            {sub.title.split(".")[0].trim()}
          </p>
          <h2 className="font-serif text-2xl text-white leading-snug">
            {sub.title.includes(".")
              ? sub.title.substring(sub.title.indexOf(".") + 1).trim()
              : sub.title}
          </h2>
        </div>
      </div>
      <div className="px-8 py-8 border-b border-rule">
        <p className="text-[15px] leading-relaxed text-foreground max-w-2xl">
          {sub.description}
        </p>
        {sub.links.length > 0 ? (
          <ul className="mt-8 divide-y divide-rule border-t border-b border-rule">
            {sub.links.map((link) => {
              const placeholder = link.href === "#";
              return (
                <li key={link.label} className="py-3.5 flex items-start justify-between gap-6">
                  <div className="flex flex-col gap-0.5">
                    {placeholder ? (
                      <span className="text-[14px] text-foreground/60 italic">{link.label}</span>
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
                      <span className="text-xs text-foreground/50 leading-snug max-w-prose">
                        {link.note}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 text-[11px] uppercase tracking-wider text-foreground/40 mt-0.5">
                    {placeholder ? "Pending" : "Open →"}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-8 text-sm italic text-foreground/50">
            Content for this section will be added during the self-study.
          </p>
        )}
      </div>
    </section>
  );
}

// ─── SectionViewV2 (main export) ─────────────────────────────────────────────
export function SectionViewV2({ section }: { section: Section }) {
  const detailRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  function handleCardClick(id: string) {
    if (activeId === id) {
      setActiveId(null);
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  return (
    <div>
      <RotatingHero
        partId={section.id}
        number={section.number}
        title={section.title}
        intro={section.intro}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-6 font-medium">
          Sections in this part
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {section.subsections.map((sub, i) => (
            <SubsectionCard
              key={sub.id}
              sub={sub}
              index={i}
              isActive={activeId === sub.id}
              onClick={() => handleCardClick(sub.id)}
            />
          ))}
        </div>
      </div>

      {activeId && (
        <div ref={detailRef} className="max-w-4xl mx-auto pb-20">
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-y border-rule px-8 py-3 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.18em] text-foreground/40">
              Viewing:
            </span>
            <span className="text-sm font-medium text-brand">
              {section.subsections.find((s) => s.id === activeId)?.title ?? ""}
            </span>
            <button
              onClick={() => {
                setActiveId(null);
                window.history.replaceState(null, "", window.location.pathname);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="ml-auto text-xs text-foreground/40 hover:text-foreground transition-colors"
            >
              ↑ Close & back to top
            </button>
          </div>

          {section.subsections
            .filter((sub) => sub.id === activeId)
            .map((sub) => (
              <SubsectionDetail key={sub.id} sub={sub} />
            ))}
        </div>
      )}
    </div>
  );
}
