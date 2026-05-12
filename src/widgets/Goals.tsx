import { Award } from "lucide-react";
import { Card } from "./Card";

const goals = [
  { name: "Run 50km this month", pct: 64, badge: "🏃" },
  { name: "Read 4 books", pct: 50, badge: "📚" },
  { name: "Ship MVP v1", pct: 82, badge: "🚀" },
];

export function Goals() {
  return (
    <Card title="Daily Goals" action={<Award className="h-4 w-4 text-primary" />}>
      <div className="space-y-4">
        {goals.map((g) => (
          <div key={g.name}>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="flex items-center gap-2">
                <span>{g.badge}</span> {g.name}
              </span>
              <span className="text-xs text-muted-foreground tabular-nums">{g.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${g.pct}%`, background: "var(--gradient-primary)" }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}