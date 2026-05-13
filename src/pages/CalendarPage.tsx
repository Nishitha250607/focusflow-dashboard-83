import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/widgets/Card";

export function CalendarPage() {
  const [cursor, setCursor] = useState(new Date());
  const today = new Date();
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: first + days }, (_, i) =>
    i < first ? null : i - first + 1,
  );
  const monthName = cursor.toLocaleString(undefined, { month: "long", year: "numeric" });

  const events = [
    { day: today.getDate(), title: "Deep work — design tokens", time: "10:00" },
    { day: today.getDate(), title: "1:1 with team", time: "14:30" },
    { day: today.getDate() + 1, title: "Ship landing v2", time: "All day" },
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2">
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold tracking-tight">{monthName}</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setCursor(new Date(year, month - 1, 1))}
                className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-secondary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCursor(new Date())}
                className="px-3 h-8 text-xs rounded-lg hover:bg-secondary"
              >
                Today
              </button>
              <button
                onClick={() => setCursor(new Date(year, month + 1, 1))}
                className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-secondary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs text-muted-foreground mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {cells.map((d, i) => {
              const isToday =
                d === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();
              const hasEvent = d != null && events.some((e) => e.day === d);
              return (
                <motion.div
                  key={i}
                  whileHover={d ? { scale: 1.05 } : undefined}
                  className={`aspect-square rounded-xl text-sm flex flex-col items-center justify-center border ${
                    d == null
                      ? "border-transparent"
                      : isToday
                      ? "border-transparent text-primary-foreground"
                      : "border-border/40 hover:border-primary/40"
                  }`}
                  style={isToday ? { background: "var(--gradient-primary)" } : undefined}
                >
                  {d ?? ""}
                  {hasEvent && !isToday && (
                    <span className="h-1 w-1 rounded-full bg-primary mt-1" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card title="Upcoming">
        <div className="space-y-3">
          {events.map((e, i) => (
            <div
              key={i}
              className="rounded-xl p-3 border border-border/60 bg-secondary/30"
            >
              <div className="text-[11px] text-muted-foreground">{e.time}</div>
              <div className="text-sm font-medium mt-0.5">{e.title}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}