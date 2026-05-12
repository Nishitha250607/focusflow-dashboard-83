import { Flame } from "lucide-react";
import { Card } from "./Card";

const days = [true, true, true, true, false, true, true, true, true, true, true, false, true, true];

export function StreakTracker() {
  return (
    <Card title="Daily Streak" action={<span className="text-xs text-primary flex items-center gap-1"><Flame className="h-3 w-3" /> 12 days</span>}>
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl">🔥</div>
        <div>
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-muted-foreground">consecutive productive days</div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((on, i) => (
          <div
            key={i}
            className={`aspect-square rounded-md ${on ? "" : "bg-secondary"}`}
            style={on ? { background: "var(--gradient-primary)", opacity: 0.4 + (i / days.length) * 0.6 } : undefined}
          />
        ))}
      </div>
    </Card>
  );
}