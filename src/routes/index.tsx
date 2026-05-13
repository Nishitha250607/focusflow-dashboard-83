import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/pages/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FocusFlow OS — Your Personal Productivity Operating System" },
      {
        name: "description",
        content:
          "FocusFlow OS is a beautiful, all-in-one workspace for tasks, goals, notes, focus and habits.",
      },
      { property: "og:title", content: "FocusFlow OS — Your Productivity Operating System" },
      {
        property: "og:description",
        content: "Tasks, goals, notes, focus and analytics in one premium workspace.",
      },
    ],
  }),
  component: LandingPage,
});