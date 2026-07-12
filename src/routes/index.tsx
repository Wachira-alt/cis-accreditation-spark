import { createFileRoute, Link } from "@tanstack/react-router";
import { sections } from "@/lib/portfolio-data";
import { RotatingHero } from "@/components/RotatingHero";

const OVERVIEW_IMAGES = [
  "/images/DSC_9211.webp",
  "/images/DSC_8996.webp",
  "/images/DSC_8934.webp",
  "/images/DSC_8738.webp",
];

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
    links: [
      // First hero image drives LCP on the landing page
      { rel: "preload", as: "image", href: OVERVIEW_IMAGES[0] },
    ],
  }),
  component: Overview,
});

function Overview() {
  return (
    <div>
      <RotatingHero images={OVERVIEW_IMAGES}>
        <div className="flex h-full flex-col justify-end max-w-4xl mx-auto px-6 sm:px-8 pb-10 sm:pb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-white/80 font-medium mb-3">
            CIS International Accreditation
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
            Accreditation Portfolio
          </h1>
          <p className="mt-4 text-sm text-white/85 max-w-xl leading-relaxed">
            A collection of reflections and evidence prepared by Woodcreek School
            for the Council of International Schools.
          </p>
          <dl className="mt-6 sm:mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">School</dt>
              <dd className="mt-0.5 text-white font-medium">Woodcreek School, Kenya</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">Stage</dt>
              <dd className="mt-0.5 text-white font-medium">Preparatory Engagement</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">Visit dates</dt>
              <dd className="mt-0.5 text-white font-medium">14 – 17 September 2026</dd>
            </div>
          </dl>
        </div>
      </RotatingHero>

      <section className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <h2 className="font-serif text-2xl text-brand">Contents</h2>
        <p className="mt-2 text-[15px] text-foreground max-w-prose">
          Each part below contains short reflections together with hyperlinks to the
          underlying evidence held in our document repository.
        </p>

        <ol className="mt-10 space-y-8">
          {sections.map((s) => (
            <li key={s.id} className="border-t border-rule pt-6">
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-3xl text-brand w-10 sm:w-16 shrink-0">
                  {s.number.replace("Part ", "")}
                </span>
                <div className="flex-1">
                  <Link
                    to={`/${s.id}` as never}
                    className="no-underline hover:no-underline"
                  >
                    <h3 className="font-serif text-xl text-brand hover:underline">
                      {s.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground max-w-prose">
                    {s.intro}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
                    {s.subsections.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          to={`/${s.id}/${sub.id}` as never}
                          className="text-foreground/80 hover:text-brand no-underline hover:underline"
                        >
                          · {sub.title}
                        </Link>
                      </li>
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
