import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/pages/SimplePage";

export const Route = createFileRoute("/_app/settings")({
  component: () => <SimplePage title="Settings" description="Personalize your FocusFlow experience." />,
});