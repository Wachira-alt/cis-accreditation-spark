import type { Section } from "@/lib/portfolio-data";

export function SectionView({ section }: { section: Section }) {
  return (
    <article className="mx-auto max-w-4xl px-6 py-14">
      <header className="border-b border-rule pb-8 mb-12">
        <p className="text-xs uppercase tracking-[0.22em] text-brand font-medium">
          {section.number}
        </p>
        <h1 className="font-serif text-4xl mt-3">{section.title}</h1>
        <p className="mt-5 text-base leading-relaxed text-foreground max-w-prose">
          {section.intro}
        </p>
      </header>

      <div className="space-y-14">
        {section.subsections.map((sub) => (
          <section key={sub.id} id={sub.id} className="scroll-mt-24">
            <h2 className="font-serif text-2xl text-brand">{sub.title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground max-w-prose">
              {sub.description}
            </p>

            {sub.links.length > 0 ? (
              <ul className="mt-6 divide-y divide-rule border-t border-b border-rule">
                {sub.links.map((link) => {
                  const placeholder = link.href === "#";
                  return (
                    <li key={link.label} className="py-3">
                      {placeholder ? (
                        <span
                          className="text-[15px] cursor-default select-none"
                          style={{ color: "#6b6b6b" }}
                        >
                          {link.label}
                        </span>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[15px]"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="mt-6 text-sm italic text-foreground">
                Content for this section will be added during the self-study.
              </p>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
