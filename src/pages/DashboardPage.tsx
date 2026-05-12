import { ProductivityScore } from "@/widgets/ProductivityScore";
import { FocusScore } from "@/widgets/FocusScore";
import { TaskManager } from "@/widgets/TaskManager";
import { Notes } from "@/widgets/Notes";
import { Goals } from "@/widgets/Goals";
import { WeeklyProgress } from "@/widgets/WeeklyProgress";
import { CalendarWidget } from "@/widgets/Calendar";
import { Weather } from "@/widgets/Weather";
import { MusicPlayer } from "@/widgets/MusicPlayer";
import { StreakTracker } from "@/widgets/StreakTracker";

export function DashboardPage() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-8"><ProductivityScore /></div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4"><FocusScore /></div>

      <div className="col-span-12 lg:col-span-8"><TaskManager /></div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 space-y-5">
        <Weather />
        <MusicPlayer />
      </div>

      <div className="col-span-12 sm:col-span-6 lg:col-span-4"><Goals /></div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4"><WeeklyProgress /></div>
      <div className="col-span-12 lg:col-span-4"><StreakTracker /></div>

      <div className="col-span-12 lg:col-span-8"><Notes /></div>
      <div className="col-span-12 lg:col-span-4"><CalendarWidget /></div>
    </div>
  );
}