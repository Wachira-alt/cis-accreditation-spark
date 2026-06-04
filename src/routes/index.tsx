import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { sections } from "@/lib/portfolio-data";
import { useEffect, useState } from "react";

const OVERVIEW_IMAGES = [
  "/images/part-1-hero.jpg",
  "/images/part-2-hero.jpg",
  "/images/part-3-hero.jpg",
  "/images/school-context.jpg",
  "/images/community-voices.jpg",
  "/images/planning.jpg",
];

function RotatingHero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % OVERVIEW_IMAGES.length);
        setFading(false);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[420px] overflow-hidden">
      <img
        key={current}
        src={OVERVIEW_IMAGES[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: fading ? 0 : 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto px-8 pb-12">
        <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-medium mb-3">
          CIS International Accreditation
        </p>
        <h1 className="font-serif text-5xl text-white leading-tight">
          Accreditation Portfolio
        </h1>
        <p className="mt-4 text-sm text-white/75 max-w-xl leading-relaxed">
          A collection of reflections and evidence prepared by Woodcreek School
          for the Council of International Schools.
        </p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-white/50">School</dt>
            <dd className="mt-0.5 text-white font-medium">Woodcreek School, Kenya</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-white/50">Stage</dt>
            <dd className="mt-0.5 text-white font-medium">Preparatory Engagement</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-white/50">Visit dates</dt>
            <dd className="mt-0.5 text-white font-medium">14 – 17 September 2026</dd>
          </div>
        </dl>
      </div>
      <div className="absolute bottom-4 right-6 flex gap-1.5">
        {OVERVIEW_IMAGES.map((_, i) => (
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
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Woodcreek School — CIS Accreditation Portfolio" },
      {
        name: "description",
        content:
          "Overview of Woodcreek School's CIS Accreditation Portfolio: Learning Community Profile, Cornerstone Expectations and Learning Stories.",
      },
    ],
  }),
  component: Overview,
});

function Overview() {
  const navigate = useNavigate();

  return (
    <div>
      <RotatingHero />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-2xl text-brand">Contents</h2>
        <p className="mt-2 text-[15px] text-foreground max-w-prose">
          Each part below contains short reflections together with hyperlinks to the
          underlying evidence held in our document repository.
        </p>

        <ol className="mt-10 space-y-8">
          {sections.map((s) => (
            <li key={s.id} className="border-t border-rule pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl text-brand w-16 shrink-0">
                  {s.number.replace("Part ", "")}
                </span>
                <div className="flex-1">
                  <div
                    onClick={() => navigate({ to: `/${s.id}` as any })}
                    className="cursor-pointer"
                  >
                    <h3 className="font-serif text-xl text-brand hover:underline transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground max-w-prose">
                    {s.intro}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-foreground">
                    {s.subsections.map((sub) => (
                      <li key={sub.id}>· {sub.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}