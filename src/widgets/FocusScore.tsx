import { Card } from "./Card";

const bars = [40, 65, 50, 80, 72, 90, 78];
const days = ["M", "T", "W", "T", "F", "S", "S"];

export function FocusScore() {
  return (
    <Card title="Focus Score">
      <div className="flex items-baseline gap-2 mb-4">
        <div className="text-3xl font-bold">78<span className="text-base text-muted-foreground">%</span></div>
        <div className="text-xs text-success">+6.2%</div>
      </div>
      <div className="flex items-end gap-2 h-24">
        {bars.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full rounded-md" style={{ height: `${v}%`, background: "var(--gradient-primary)", opacity: 0.4 + v / 200 }} />
            <span className="text-[10px] text-muted-foreground">{days[i]}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}