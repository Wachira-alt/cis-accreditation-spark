import { createFileRoute } from "@tanstack/react-router";
import { SubsectionPage } from "@/components/SubsectionPage";
import { part2 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-2/practices-d3")({
  component: () => {
    const sub = part2.subsections.find((s) => s.id === "practices-d3")!;
    return (
      <SubsectionPage sub={sub} backTo="/part-2" backLabel="Part 2 · Cornerstone Expectations" />
    );
  },
});
