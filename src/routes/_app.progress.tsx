import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/pages/SimplePage";

export const Route = createFileRoute("/_app/progress")({
  component: () => <SimplePage title="Progress" description="Visualize how you're improving over time." />,
});