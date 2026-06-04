import { createFileRoute } from "@tanstack/react-router";
import { SubsectionPage } from "@/components/SubsectionPage";
import { part3 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-3/overview")({
  component: () => {
    const sub = part3.subsections.find((s) => s.id === "overview")!;
    return <SubsectionPage sub={sub} backTo="/part-3" backLabel="Part 3 · Learning Stories" />;
  },
});
