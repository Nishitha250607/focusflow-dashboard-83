import { motion } from "framer-motion";
import { Card } from "@/widgets/Card";
import { TrendingUp, Clock, Target, Flame } from "lucide-react";

const weeks = [
  { label: "Mon", focus: 70, tasks: 8 },
  { label: "Tue", focus: 85, tasks: 11 },
  { label: "Wed", focus: 60, tasks: 6 },
  { label: "Thu", focus: 92, tasks: 13 },
  { label: "Fri", focus: 78, tasks: 9 },
  { label: "Sat", focus: 45, tasks: 4 },
  { label: "Sun", focus: 55, tasks: 5 },
];

const stats = [
  { icon: TrendingUp, label: "Productivity", value: "87%", change: "+12%" },
  { icon: Clock, label: "Focus time", value: "32h", change: "+5h" },
  { icon: Target, label: "Goals hit", value: "14/18", change: "+3" },
  { icon: Flame, label: "Streak", value: "12d", change: "best" },
];

export function AnalyticsPage() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card>
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                  <div className="text-xl font-bold">{s.value}</div>
                </div>
                <div className="ml-auto text-xs text-success">{s.change}</div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card title="Weekly Focus & Tasks">
        <div className="flex items-end gap-3 h-56">
          {weeks.map((d, i) => (
            <div key={d.label} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${d.focus}%` }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="w-full rounded-lg"
                style={{ background: "var(--gradient-primary)", opacity: 0.4 + d.focus / 200 }}
              />
              <span className="text-[11px] text-muted-foreground">{d.label}</span>
              <span className="text-[10px] text-muted-foreground">{d.tasks} tasks</span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-5">
        <Card title="Productivity by category">
          <div className="space-y-3">
            {[
              { l: "Deep Work", v: 78 },
              { l: "Meetings", v: 42 },
              { l: "Email", v: 25 },
              { l: "Learning", v: 60 },
            ].map((r) => (
              <div key={r.l}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">{r.l}</span>
                  <span className="tabular-nums">{r.v}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${r.v}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card title="Insights">
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><span>🌅</span> You're most focused between 9–11am.</li>
            <li className="flex gap-3"><span>📈</span> Productivity up 12% from last week.</li>
            <li className="flex gap-3"><span>🎯</span> 78% of high-priority tasks completed.</li>
            <li className="flex gap-3"><span>🔥</span> 12-day streak — your personal best.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}