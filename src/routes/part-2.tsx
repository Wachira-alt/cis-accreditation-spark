import { createFileRoute } from "@tanstack/react-router";
import { SectionView } from "@/components/SectionView";
import { part2 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-2")({
  head: () => ({
    meta: [
      { title: "Part 2 · Cornerstone Expectations — Woodcreek School" },
      {
        name: "description",
        content:
          "Woodcreek School's reflection and evidence against the three CIS Cornerstones: Purpose, Practices and Planning.",
      },
    ],
  }),
  component: () => <SectionView section={part2} />,
});
