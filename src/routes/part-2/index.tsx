import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "@/components/SectionLanding";
import { part2 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-2/")({
  component: () => <SectionLanding section={part2} />,
});
