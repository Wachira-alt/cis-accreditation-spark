import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Section } from "@/lib/portfolio-data";

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
        <h1 className="font-serif text-4xl text-white leading-tight">{title}</h1>
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
            const image = SUBSECTION_IMAGES[sub.id] ?? "/images/part-1-hero.jpg";
            const href = `/${section.id}/${sub.id}`;

            return (
              <div
                key={sub.id}
                onClick={() => navigate({ to: href as any })}
                className="group relative overflow-hidden rounded-sm text-left w-full cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 font-sans text-xs uppercase tracking-[0.2em] text-white/90 bg-brand/80 px-2 py-1 rounded-sm">
                    {sub.title.split(".")[0].trim()}
                  </span>
                </div>
                <div className="border border-t-0 border-rule px-5 py-5 bg-white group-hover:bg-[#fafafa] transition-colors duration-200">
                  <h3 className="font-serif text-lg text-brand leading-snug">
                    {sub.title.includes(".")
                      ? sub.title.substring(sub.title.indexOf(".") + 1).trim()
                      : sub.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground leading-relaxed line-clamp-2">
                    {sub.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-brand font-medium">
                    View documents
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}