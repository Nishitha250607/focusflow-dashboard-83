import { createFileRoute } from "@tanstack/react-router";
import { TaskManager } from "@/widgets/TaskManager";

export const Route = createFileRoute("/_app/tasks")({
  component: () => (
    <div className="max-w-3xl mx-auto">
      <TaskManager />
    </div>
  ),
});