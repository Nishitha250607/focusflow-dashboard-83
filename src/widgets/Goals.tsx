import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Plus, X } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Card } from "./Card";

type Goal = { id: number; name: string; pct: number; badge: string };

const initial: Goal[] = [
  { id: 1, name: "Run 50km this month", pct: 64, badge: "🏃" },
  { id: 2, name: "Read 4 books", pct: 50, badge: "📚" },
  { id: 3, name: "Ship MVP v1", pct: 82, badge: "🚀" },
];

export function Goals() {
  const [goals, setGoals] = useLocalStorage<Goal[]>("focusflow.goals", initial);
  const [text, setText] = useState("");

  const add = () => {
    if (!text.trim()) return;
    setGoals([{ id: Date.now(), name: text, pct: 0, badge: "🎯" }, ...goals]);
    setText("");
  };
  const bump = (id: number) =>
    setGoals((g) => g.map((x) => (x.id === id ? { ...x, pct: Math.min(100, x.pct + 10) } : x)));
  const remove = (id: number) => setGoals((g) => g.filter((x) => x.id !== id));

  return (
    <Card title="Daily Goals" action={<Award className="h-4 w-4 text-primary" />}>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="New goal…"
          className="flex-1 px-3 py-2 text-sm rounded-lg bg-input border border-border/60 outline-none focus:ring-2 focus:ring-primary/40"
        />
        <button onClick={add} className="px-3 rounded-lg text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-4">
        {goals.map((g) => (
          <div key={g.id} className="group">
            <div className="flex items-center justify-between text-sm mb-1.5">
              <button onClick={() => bump(g.id)} className="flex items-center gap-2 text-left">
                <span>{g.badge}</span> {g.name}
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground tabular-nums">{g.pct}%</span>
                <button
                  onClick={() => remove(g.id)}
                  className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                animate={{ width: `${g.pct}%` }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}