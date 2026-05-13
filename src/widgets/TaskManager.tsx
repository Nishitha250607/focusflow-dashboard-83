import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Flag, Trash2 } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Card } from "./Card";

type Task = { id: number; text: string; done: boolean; priority: "high" | "med" | "low" };

const initial: Task[] = [
  { id: 1, text: "Review Q3 product roadmap", done: false, priority: "high" },
  { id: 2, text: "Deep work block — design system", done: true, priority: "med" },
  { id: 3, text: "Reply to investor email", done: false, priority: "high" },
  { id: 4, text: "Read 20 pages of Atomic Habits", done: false, priority: "low" },
];

const priColor: Record<Task["priority"], string> = {
  high: "text-destructive bg-destructive/10",
  med: "text-warning bg-warning/10",
  low: "text-muted-foreground bg-muted",
};

export function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("focusflow.tasks", initial);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");
  const toggle = (id: number) => setTasks((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
  const remove = (id: number) => setTasks((t) => t.filter((x) => x.id !== id));
  const add = () => {
    if (!text.trim()) return;
    setTasks([{ id: Date.now(), text, done: false, priority: "med" }, ...tasks]);
    setText("");
  };
  const visible = tasks.filter((t) =>
    filter === "active" ? !t.done : filter === "done" ? t.done : true,
  );
  return (
    <Card title="Today's Tasks" action={<span className="text-xs text-muted-foreground">{tasks.filter((t) => t.done).length}/{tasks.length} done</span>}>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="Add a new task…"
          className="flex-1 px-3 py-2 text-sm rounded-lg bg-input border border-border/60 outline-none focus:ring-2 focus:ring-primary/40"
        />
        <button onClick={add} className="px-3 rounded-lg text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="flex gap-1 mb-3 text-[11px]">
        {(["all", "active", "done"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-2.5 py-1 rounded-full uppercase tracking-wider transition ${
              filter === f ? "bg-primary/20 text-primary" : "text-muted-foreground hover:bg-secondary/60"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <ul className="space-y-2">
        <AnimatePresence initial={false}>
          {visible.map((t) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary/60 transition"
            >
              <button
                onClick={() => toggle(t.id)}
                className={`h-5 w-5 rounded-md border flex items-center justify-center transition ${
                  t.done ? "border-primary bg-primary/20" : "border-border"
                }`}
              >
                {t.done && <span className="text-primary text-xs">✓</span>}
              </button>
              <span className={`flex-1 text-sm ${t.done ? "line-through text-muted-foreground" : ""}`}>{t.text}</span>
              <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 ${priColor[t.priority]}`}>
                <Flag className="h-3 w-3" /> {t.priority}
              </span>
              <button
                onClick={() => remove(t.id)}
                className="opacity-0 group-hover:opacity-100 transition text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </Card>
  );
}