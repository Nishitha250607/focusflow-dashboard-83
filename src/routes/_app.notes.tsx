import { createFileRoute } from "@tanstack/react-router";
import { Notes } from "@/widgets/Notes";

export const Route = createFileRoute("/_app/notes")({
  component: () => <Notes />,
});