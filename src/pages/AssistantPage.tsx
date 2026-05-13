import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Brain, Sparkles } from "lucide-react";
import { Card } from "@/widgets/Card";

type Msg = { role: "user" | "ai"; text: string };

const starters = [
  "Plan my deep work for today",
  "Summarize this week's progress",
  "Suggest a focus routine",
  "Help me prioritize 5 tasks",
];

const replies = [
  "Here's a focused plan: 9–11am deep work, 11:15 quick standup, 2pm creative block, 4pm review.",
  "You finished 14/18 goals this week with a 12-day streak — strongest week this month.",
  "Try 50/10 Pomodoro: 50 minutes focused, 10 minutes walk. Repeat 4×.",
  "Sort by impact × urgency. Tackle the two highest before 11am, batch the rest after lunch.",
];

export function AssistantPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "Hi Alex 👋 I'm your FocusFlow assistant. How can I help you focus today?" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setInput("");
    const reply = replies[Math.floor(Math.random() * replies.length)];
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: reply }]);
    }, 600);
  };

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2">
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-semibold tracking-tight">FocusFlow Assistant</div>
              <div className="text-[11px] text-muted-foreground">AI · always learning your patterns</div>
            </div>
          </div>

          <div className="h-[420px] overflow-y-auto space-y-3 pr-1">
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      m.role === "user"
                        ? "text-primary-foreground"
                        : "bg-secondary/60 border border-border/60"
                    }`}
                    style={m.role === "user" ? { background: "var(--gradient-primary)" } : undefined}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask anything…"
              className="flex-1 px-4 py-2.5 text-sm rounded-xl bg-input border border-border/60 outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              onClick={() => send(input)}
              className="px-4 rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </Card>
      </div>

      <Card title="Try asking">
        <div className="space-y-2">
          {starters.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="w-full flex items-center gap-2 text-left px-3 py-2.5 text-sm rounded-xl border border-border/60 hover:bg-secondary/60 transition"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {s}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}