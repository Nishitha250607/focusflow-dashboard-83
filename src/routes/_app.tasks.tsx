import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/pages/SimplePage";

export const Route = createFileRoute("/_app/tasks")({
  component: () => <SimplePage title="Tasks" description="Manage all your tasks across projects." />,
});