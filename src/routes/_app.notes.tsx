import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "@/pages/SimplePage";

export const Route = createFileRoute("/_app/notes")({
  component: () => <SimplePage title="Notes" description="A clean space for your thoughts and ideas." />,
});