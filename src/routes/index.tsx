import { createFileRoute, Link } from "@tanstack/react-router";
import { sections } from "@/lib/portfolio-data";

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
  return (
    <div>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-brand font-medium">
            CIS International Accreditation
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight">
            Accreditation Portfolio
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            A collection of reflections and evidence prepared by Woodcreek School for the
            Council of International Schools, organised in three parts following the CIS
            Portfolio Guide.
          </p>
          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="uppercase tracking-wider text-xs text-muted-foreground">School</dt>
              <dd className="mt-1 font-serif text-base text-ink">Woodcreek School, Kenya</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-xs text-muted-foreground">Stage</dt>
              <dd className="mt-1 font-serif text-base text-ink">Preparatory Engagement</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-xs text-muted-foreground">Visit dates</dt>
              <dd className="mt-1 font-serif text-base text-ink">14 – 17 September 2026</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-serif text-2xl">Contents</h2>
        <p className="mt-2 text-[15px] text-muted-foreground max-w-prose">
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
                  <Link
                    to={`/${s.id}`}
                    className="no-underline hover:no-underline"
                  >
                    <h3 className="font-serif text-xl text-ink hover:text-brand transition-colors">
                      {s.title}
                    </h3>
                  </Link>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground max-w-prose">
                    {s.intro}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
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
