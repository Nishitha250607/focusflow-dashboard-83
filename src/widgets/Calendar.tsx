import { Card } from "./Card";

export function CalendarWidget() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: first + days }, (_, i) => (i < first ? null : i - first + 1));
  const monthName = today.toLocaleString(undefined, { month: "long", year: "numeric" });

  return (
    <Card title={monthName}>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-xs">
        {cells.map((d, i) => {
          const isToday = d === today.getDate();
          return (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center rounded-lg ${
                d == null ? "" : isToday ? "text-primary-foreground font-semibold" : "text-foreground hover:bg-secondary"
              }`}
              style={isToday ? { background: "var(--gradient-primary)" } : undefined}
            >
              {d ?? ""}
            </div>
          );
        })}
      </div>
    </Card>
  );
}