import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/pages/SimplePage";

export const Route = createFileRoute("/_app/goals")({
  component: () => <SimplePage title="Goals" description="Track long-term goals and milestones." />,
});