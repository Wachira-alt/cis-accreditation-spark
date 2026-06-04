import { createFileRoute } from "@tanstack/react-router";
import { SectionLanding } from "@/components/SectionLanding";
import { part3 } from "@/lib/portfolio-data";

export const Route = createFileRoute("/part-3/")({
  component: () => <SectionLanding section={part3} />,
});
