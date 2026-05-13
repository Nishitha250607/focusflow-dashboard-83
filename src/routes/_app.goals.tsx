import { createFileRoute } from "@tanstack/react-router";
import { Goals } from "@/widgets/Goals";
import { StreakTracker } from "@/widgets/StreakTracker";

export const Route = createFileRoute("/_app/goals")({
  component: () => (
    <div className="grid lg:grid-cols-2 gap-5">
      <Goals />
      <StreakTracker />
    </div>
  ),
});