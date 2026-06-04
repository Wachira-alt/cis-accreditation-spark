import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "@/components/SectionLanding";
import { part1 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-1")({
  component: () => <SectionLanding section={part1} />,
});