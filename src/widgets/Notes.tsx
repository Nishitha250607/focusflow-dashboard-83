import { Plus } from "lucide-react";
import { Card } from "./Card";

const notes = [
  { t: "Idea", c: "Side project: AI-powered Pomodoro that adapts to your energy levels.", color: "from-primary/30 to-primary/5" },
  { t: "Quote", c: "“Discipline equals freedom.” — Jocko Willink", color: "from-warning/30 to-warning/5" },
  { t: "Reminder", c: "Call mom on Sunday. Book gym slot for tomorrow morning.", color: "from-success/30 to-success/5" },
];

export function Notes() {
  return (
    <Card
      title="Quick Notes"
      action={
        <button className="text-xs flex items-center gap-1 text-primary hover:opacity-80">
          <Plus className="h-3 w-3" /> Add
        </button>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {notes.map((n, i) => (
          <div key={i} className={`rounded-xl p-3 bg-gradient-to-br ${n.color} border border-border/60 min-h-[110px]`}>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{n.t}</div>
            <p className="text-xs leading-relaxed">{n.c}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}