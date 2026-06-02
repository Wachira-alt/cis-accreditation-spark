import { createFileRoute } from "@tanstack/react-router";
import { SectionView } from "@/components/SectionView";
import { part3 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-3")({
  head: () => ({
    meta: [
      { title: "Part 3 · Learning Stories — Woodcreek School" },
      {
        name: "description",
        content:
          "Learning Stories developed during Woodcreek School's self-study, to be completed in preparation for the CIS Team Evaluation Visit.",
      },
    ],
  }),
  component: () => <SectionView section={part3} />,
});
