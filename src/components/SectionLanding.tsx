import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Section } from "@/lib/portfolio-data";
import { RotatingHero } from "@/components/RotatingHero";

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
  to,
}: {
  image: string;
  title: string;
  description: string;
  to: string;
}) {
  const [loaded, setLoaded] = useState(false);

  const displayTitle = title.includes(".")
    ? title.substring(title.indexOf(".") + 1).trim()
    : title;
  const sectionLabel = title.split(".")[0].trim();

  return (
    <Link
      to={to as never}
      className="group relative block overflow-hidden rounded-sm no-underline hover:no-underline transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand aspect-[3/2]"
    >
      {!loaded && <CardSkeleton />}

      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 400ms ease, transform 500ms ease" }}
      />

      {/* Constant gradient strong enough for legible title AND description on every device */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

      <span className="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white bg-brand/90 px-2 py-1 rounded-sm">
        {sectionLabel}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-lg text-white leading-snug drop-shadow">
          {displayTitle}
        </h3>
        <p className="mt-2 text-[13px] text-white/85 leading-relaxed line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}

export function SectionLanding({ section }: { section: Section }) {
  return (
    <div>
      <RotatingHero images={HERO_IMAGE_POOLS[section.id] ?? ["/images/DSC_2676.webp"]}>
        <div className="flex h-full flex-col justify-end max-w-4xl mx-auto px-6 sm:px-8 pb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-white/80 font-medium mb-2">
            {section.number}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
            {section.title}
          </h1>
          <p className="mt-3 text-sm text-white/90 max-w-xl leading-relaxed hidden sm:block">
            {section.intro}
          </p>
        </div>
      </RotatingHero>

      {/* Intro remains readable on mobile, below the hero */}
      <p className="sm:hidden max-w-4xl mx-auto px-6 pt-6 text-[15px] leading-relaxed text-foreground">
        {section.intro}
      </p>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/60 mb-6 font-medium">
          Sections in this part
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {section.subsections.map((sub) => (
            <SubCard
              key={sub.id}
              image={SUBSECTION_IMAGES[sub.id] ?? "/images/DSC_2676.webp"}
              title={sub.title}
              description={sub.description}
              to={`/${section.id}/${sub.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
