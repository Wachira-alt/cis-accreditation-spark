import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Section } from "@/lib/portfolio-data";

const SUBSECTION_IMAGES: Record<string, string> = {
  "school-context":            "/images/0B8A7198.webp",
  "community-voices":          "/images/214A0522.webp",
  "community-data":            "/images/472A0933.webp",
  "leadership-insights":       "/images/472A1904.webp",
  "purpose":                   "/images/1K2A0042.webp",
  "purpose-self-assessment":   "/images/1K2A0135.webp",
  "practices-organisation":    "/images/203A9261.webp",
  "practices-d1":              "/images/DSC_2676.webp",
  "practices-d2":              "/images/0B8A7191.webp",
  "practices-d3":              "/images/214A0182.webp",
  "practices-self-assessment": "/images/214A0522.webp",
  "planning":                  "/images/472A9626.webp",
  "planning-self-assessment":  "/images/Copy of 472A7025.webp",
  "overview":                  "/images/Copy of 472A7079.webp",
};

const HERO_IMAGE_POOLS: Record<string, string[]> = {
  "part-1": [
    "/images/DSC_2676.webp",
    "/images/DSC_2902.webp",
    "/images/DSC_3227.webp",
    "/images/DSC_9211.webp",
  ],
  "part-2": [
    "/images/DSC_3101.webp",
    "/images/DSC_3220.webp",
    "/images/DSC_3454.webp",
    "/images/DSC_8996.webp",
  ],
  "part-3": [
    "/images/DSC_3980.webp",
    "/images/DSC_8934.webp",
    "/images/DSC_8996.webp",
    "/images/DSC_3971.webp",
  ],
};

function CardSkeleton() {
  return (
    <div className="absolute inset-0 bg-neutral-200 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200" />
    </div>
  );
}

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
      {!loaded && <CardSkeleton />}

      <img
        src={image}
        alt=""
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 400ms ease, transform 500ms ease" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white bg-brand/90 px-2 py-1 rounded-sm">
        {sectionLabel}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-lg text-white leading-snug drop-shadow transition-transform duration-300 group-hover:-translate-y-1">
          {displayTitle}
        </h3>
        <p className="mt-2 text-[13px] text-white/90 leading-relaxed max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-48 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}

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
  const images = HERO_IMAGE_POOLS[partId] ?? ["/images/DSC_2676.webp"];
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
      {!loadedImages.has(current) && (
        <div className="absolute inset-0 bg-neutral-300 animate-pulse" style={{ zIndex: 0 }} />
      )}

      <img
        src={images[current]}
        alt=""
        onLoad={() => setLoadedImages(prev => new Set(prev).add(current))}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, opacity: loadedImages.has(current) ? 1 : 0, transition: "opacity 400ms ease" }}
      />

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

      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-6 font-medium">
          Sections in this part
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {section.subsections.map((sub, i) => {
            const image = SUBSECTION_IMAGES[sub.id] ?? "/images/DSC_2676.webp";
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