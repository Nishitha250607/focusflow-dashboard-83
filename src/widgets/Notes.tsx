import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Card } from "./Card";

type Note = { id: number; tag: string; text: string };

const initial: Note[] = [
  { id: 1, tag: "Idea", text: "Side project: AI-powered Pomodoro that adapts to your energy levels." },
  { id: 2, tag: "Quote", text: "\u201CDiscipline equals freedom.\u201D — Jocko Willink" },
  { id: 3, tag: "Reminder", text: "Call mom on Sunday. Book gym slot for tomorrow morning." },
];

const palettes = [
  "from-primary/30 to-primary/5",
  "from-warning/30 to-warning/5",
  "from-success/30 to-success/5",
];

export function Notes() {
  const [notes, setNotes] = useLocalStorage<Note[]>("focusflow.notes", initial);
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const add = () => {
    if (!text.trim()) return;
    setNotes([{ id: Date.now(), tag: "Note", text }, ...notes]);
    setText("");
    setAdding(false);
  };
  const remove = (id: number) => setNotes((n) => n.filter((x) => x.id !== id));

  return (
    <Card
      title="Quick Notes"
      action={
        <button
          onClick={() => setAdding((a) => !a)}
          className="text-xs flex items-center gap-1 text-primary hover:opacity-80"
        >
          <Plus className="h-3 w-3" /> Add
        </button>
      }
    >
      {adding && (
        <div className="mb-3 flex gap-2">
          <input
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="What's on your mind?"
            className="flex-1 px-3 py-2 text-sm rounded-lg bg-input border border-border/60 outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            onClick={add}
            className="px-3 rounded-lg text-primary-foreground text-sm"
            style={{ background: "var(--gradient-primary)" }}
          >
            Save
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <AnimatePresence>
          {notes.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`group relative rounded-xl p-3 bg-gradient-to-br ${palettes[i % palettes.length]} border border-border/60 min-h-[110px]`}
            >
              <button
                onClick={() => remove(n.id)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-muted-foreground hover:text-destructive"
              >
                <X className="h-3 w-3" />
              </button>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{n.tag}</div>
              <p className="text-xs leading-relaxed">{n.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Card>
  );
}