import { sections } from "@/lib/portfolio-data";

export type PortfolioNavEntry = {
  path: string;
  title: string;
  partNumber: string;
  partTitle: string;
  partPath: string;
};

/** Flat, ordered list of every subsection page, used for prev/next navigation and search. */
export const portfolioNav: PortfolioNavEntry[] = sections.flatMap((section) =>
  section.subsections.map((sub) => ({
    path: `/${section.id}/${sub.id}`,
    title: sub.title,
    partNumber: section.number,
    partTitle: section.title,
    partPath: `/${section.id}`,
  })),
);

export function getPrevNext(subId: string): {
  prev: PortfolioNavEntry | null;
  next: PortfolioNavEntry | null;
} {
  const index = portfolioNav.findIndex((e) => e.path.endsWith(`/${subId}`));
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? portfolioNav[index - 1] : null,
    next: index < portfolioNav.length - 1 ? portfolioNav[index + 1] : null,
  };
}
