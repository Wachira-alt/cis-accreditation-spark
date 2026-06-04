import { createFileRoute } from "@tanstack/react-router";
import { SubsectionPage } from "@/components/SubsectionPage";
import { part1 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-1/community-voices")({
  component: () => {
    const sub = part1.subsections.find((s) => s.id === "community-voices")!;
    return <SubsectionPage sub={sub} backTo="/part-1" backLabel="Part 1 · Learning Community Profile" />;
  },
});
