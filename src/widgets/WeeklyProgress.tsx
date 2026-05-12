import { Card } from "./Card";

const data = [
  { label: "Deep Work", v: 78 },
  { label: "Workouts", v: 60 },
  { label: "Reading", v: 45 },
  { label: "Sleep Quality", v: 88 },
];

export function WeeklyProgress() {
  return (
    <Card title="Weekly Progress">
      <div className="space-y-4">
        {data.map((d) => (
          <div key={d.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-muted-foreground">{d.label}</span>
              <span className="tabular-nums">{d.v}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${d.v}%`, background: "var(--gradient-primary)" }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}