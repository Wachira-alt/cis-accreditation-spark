import { createFileRoute } from "@tanstack/react-router";
import { SectionView } from "@/components/SectionView";
import { part1 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-1")({
  head: () => ({
    meta: [
      { title: "Part 1 · Learning Community Profile — Woodcreek School" },
      {
        name: "description",
        content:
          "School context, community voices, community data and leadership insights for Woodcreek School's CIS Accreditation Portfolio.",
      },
    ],
  }),
  component: () => <SectionView section={part1} />,
});
