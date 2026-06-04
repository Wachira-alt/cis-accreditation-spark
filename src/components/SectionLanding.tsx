import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Section } from "@/lib/portfolio-data";

const SUBSECTION_IMAGES: Record<string, string> = {
  "school-context":            "/images/0B8A7198.jpg",
  "community-voices":          "/images/214A0522.jpg",
  "community-data":            "/images/472A0933.jpg",
  "leadership-insights":       "/images/472A1904.jpg",
  "purpose":                   "/images/1K2A0042.jpg",
  "purpose-self-assessment":   "/images/1K2A0135.jpg",
  "practices-organisation":    "/images/203A9261.jpg",
  "practices-d1":              "/images/DSC_2676.jpg",
  "practices-d2":              "/images/0B8A7191.jpg",
  "practices-d3":              "/images/214A0182.jpg",
  "practices-self-assessment": "/images/214A0522.jpg",
  "planning":                  "/images/472A9626.jpg",
  "planning-self-assessment":  "/images/Copy of 472A7025.jpg",
  "overview":                  "/images/Copy of 472A7079.jpg",
};

const HERO_IMAGE_POOLS: Record<string, string[]> = {
  "part-1": [
    "/images/DSC_2676.jpg",
    "/images/DSC_2902.jpg",
    "/images/DSC_3227.jpg",
    "/images/DSC_9211.jpg",
  ],
  "part-2": [
    "/images/DSC_3101.jpg",
    "/images/DSC_3220.jpg",
    "/images/DSC_3454.jpg",
    "/images/DSC_8996.jpg",
  ],
  "part-3": [
    "/images/DSC_3980.jpg",
    "/images/DSC_8934.jpg",
    "/images/DSC_8996.jpg",
    "/images/DSC_3971.jpg",
  ],
};

// ── Skeleton shimmer for cards while image loads ─────────────────────────────
function CardSkeleton() {
  return (
    <div className="absolute inset-0 bg-neutral-200 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-[shimmer_1.5s_infinite]" />
    </div>
  );
}

// ── Single subsection card ───────────────────────────────────────────────────
function SubCard({
  image,
  title,
  description,
  onClick,
  delay,
}: {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
  delay: number;
}) {
  const [loaded, setLoaded] = useState(false);

  const displayTitle = title.includes(".")
    ? title.substring(title.indexOf(".") + 1).trim()
    : title;
  const sectionLabel = title.split(".")[0].trim();

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 aspect-[3/2]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Skeleton — visible until image loads */}
      {!loaded && <CardSkeleton />}

      {/* Image */}
      <img
        src={image}
        alt=""
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 400ms ease, transform 500ms ease" }}
      />

      {/* Default gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Section label */}
      <span className="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white bg-brand/90 px-2 py-1 rounded-sm">
        {sectionLabel}
      </span>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        {/* Title — always visible, nudges up on hover */}
        <h3 className="font-serif text-lg text-white leading-snug drop-shadow transition-transform duration-300 group-hover:-translate-y-1">
          {displayTitle}
        </h3>

        {/* Description — slides up and fades in fully on hover, no clamp */}
        <p className="mt-2 text-[13px] text-white/90 leading-relaxed max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-48 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}

// ── Rotating hero ────────────────────────────────────────────────────────────
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
  const images = HERO_IMAGE_POOLS[partId] ?? ["/images/DSC_2676.jpg"];
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
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
    <div className="relative w-full aspect-[21/9] overflow-hidden bg-neutral-300">
      {/* Hero skeleton — visible until the current image has loaded */}
      {!loadedImages.has(current) && (
        <div className="absolute inset-0 bg-neutral-300 animate-pulse" style={{ zIndex: 0 }} />
      )}

      {/* Current image */}
      <img
        src={images[current]}
        alt=""
        onLoad={() => setLoadedImages(prev => new Set(prev).add(current))}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, opacity: loadedImages.has(current) ? 1 : 0, transition: "opacity 400ms ease" }}
      />

      {/* Previous image fading out */}
      {prev !== null && (
        <img
          src={images[prev]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: fading ? 0 : 1, zIndex: 1 }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto px-8 pb-10" style={{ zIndex: 3 }}>
        <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-medium mb-2">
          {number}
        </p>
        <h1 className="font-serif text-4xl text-white leading-tight">{title}</h1>
        <p className="mt-3 text-sm text-white/85 max-w-xl leading-relaxed">{intro}</p>
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

// ── Section landing ──────────────────────────────────────────────────────────
export function SectionLanding({ section }: { section: Section }) {
  const navigate = useNavigate();

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
          {section.subsections.map((sub, i) => {
            const image = SUBSECTION_IMAGES[sub.id] ?? "/images/DSC_2676.jpg";
            const href = `/${section.id}/${sub.id}`;

            return (
              <SubCard
                key={sub.id}
                image={image}
                title={sub.title}
                description={sub.description}
                onClick={() => navigate({ to: href as any })}
                delay={i * 80}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}