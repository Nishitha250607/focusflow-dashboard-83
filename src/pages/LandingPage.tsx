import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckSquare,
  Target,
  StickyNote,
  TrendingUp,
  Calendar,
  Brain,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";

const features = [
  { icon: CheckSquare, title: "Smart Tasks", desc: "Capture, prioritize and crush tasks with focus mode." },
  { icon: Target, title: "Goal Tracking", desc: "Break ambitious goals into daily wins." },
  { icon: StickyNote, title: "Quick Notes", desc: "Jot ideas the moment they spark." },
  { icon: TrendingUp, title: "Deep Analytics", desc: "Visualize your productivity score over time." },
  { icon: Calendar, title: "Unified Calendar", desc: "All your plans in one elegant view." },
  { icon: Brain, title: "AI Assistant", desc: "Plan smarter with your built-in copilot." },
];

const stats = [
  { value: "120K+", label: "Tasks completed" },
  { value: "98%", label: "Daily satisfaction" },
  { value: "4.9★", label: "User rating" },
  { value: "30+", label: "Integrations" },
];

const testimonials = [
  { name: "Maya R.", role: "Product Designer", quote: "FocusFlow replaced 4 of my apps. My calmest week ever." },
  { name: "Jordan K.", role: "Indie Founder", quote: "It feels like Linear, Notion and a habit tracker had a baby." },
  { name: "Priya S.", role: "PhD Student", quote: "The focus score is weirdly motivating. I shipped my thesis." },
];

export function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-5">
        <div className="flex items-center gap-2">
          <div
            className="h-9 w-9 rounded-xl flex items-center justify-center"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-semibold tracking-tight">FocusFlow OS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#stats" className="hover:text-foreground transition">Why us</a>
          <a href="#love" className="hover:text-foreground transition">Loved by</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="text-sm px-4 py-2 rounded-xl hover:bg-secondary/60 transition">
            Sign in
          </Link>
          <Link
            to="/signup"
            className="text-sm px-4 py-2 rounded-xl text-primary-foreground font-medium"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 lg:px-12 pt-12 pb-24 text-center">
        {/* glow blobs */}
        <motion.div
          aria-hidden
          className="absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: "var(--gradient-primary)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border border-border/60 bg-card/40 backdrop-blur-xl mb-6">
            <Zap className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">New · AI Assistant is here</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Your Personal{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Productivity Operating System
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            One beautiful workspace for your tasks, goals, notes, focus sessions and habits — designed
            to keep you in flow.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/signup"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-border/60 hover:bg-secondary/60 transition"
            >
              View Live Demo
            </Link>
          </div>
        </motion.div>

        {/* Floating mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mt-16 max-w-5xl mx-auto"
        >
          <div
            className="rounded-3xl border border-border/60 p-3 backdrop-blur-xl"
            style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-soft)" }}
          >
            <div className="rounded-2xl bg-background/60 p-6 grid grid-cols-3 gap-3">
              {/* mini widgets */}
              <div className="col-span-2 rounded-xl p-4 bg-card/60 border border-border/60">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Productivity</div>
                <div className="text-3xl font-bold">87<span className="text-base text-muted-foreground">/100</span></div>
                <div className="mt-3 flex items-end gap-1.5 h-16">
                  {[40, 55, 70, 50, 78, 90, 85].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-md"
                      style={{ height: `${v}%`, background: "var(--gradient-primary)", opacity: 0.3 + v / 200 }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-4 bg-card/60 border border-border/60 flex flex-col">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Streak</div>
                <div className="text-3xl font-bold">🔥 12</div>
                <div className="text-[11px] text-muted-foreground mt-1">days in a row</div>
                <div className="mt-auto grid grid-cols-7 gap-1">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-sm"
                      style={{
                        background: i % 5 === 4 ? "var(--color-secondary)" : "var(--gradient-primary)",
                        opacity: 0.4 + (i / 14) * 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-3 rounded-xl p-4 bg-card/60 border border-border/60">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-semibold">Today's Tasks</div>
                  <div className="text-[11px] text-muted-foreground">3 of 5 done</div>
                </div>
                <div className="space-y-2 text-sm">
                  {["Ship landing page redesign", "Review Q3 roadmap", "Deep work — design tokens"].map((t, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-secondary/40">
                      <div className="h-4 w-4 rounded border border-primary/60 bg-primary/20 flex items-center justify-center text-[10px] text-primary">✓</div>
                      <span className={i === 0 ? "" : "line-through text-muted-foreground"}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* floating cards */}
          <motion.div
            className="hidden md:block absolute -left-10 top-20 w-44 rounded-2xl border border-border/60 backdrop-blur-xl p-4"
            style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-soft)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Focus</div>
            <div className="text-2xl font-bold">2h 14m</div>
            <div className="text-[11px] text-success mt-1">+22% this week</div>
          </motion.div>
          <motion.div
            className="hidden md:block absolute -right-10 top-40 w-44 rounded-2xl border border-border/60 backdrop-blur-xl p-4"
            style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-soft)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="flex items-center gap-2 text-xs">
              <Brain className="h-4 w-4 text-primary" />
              <span className="font-medium">AI Tip</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
              You're most productive at 10am. Block deep work then.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section id="stats" className="px-6 lg:px-12 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-6 text-center border border-border/60 backdrop-blur-xl"
              style={{ background: "var(--gradient-card)" }}
            >
              <div className="text-3xl font-bold tracking-tight">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need. Nothing you don't.</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              A complete operating system for your day, designed to feel premium and stay out of your way.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl p-6 border border-border/60 backdrop-blur-xl hover:border-primary/40 transition group"
                style={{ background: "var(--gradient-card)" }}
              >
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold tracking-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="love" className="px-6 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by builders & makers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 border border-border/60 backdrop-blur-xl"
                style={{ background: "var(--gradient-card)" }}
              >
                <div className="flex gap-0.5 mb-3 text-warning">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-20">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-10 text-center border border-border/60 backdrop-blur-xl relative overflow-hidden"
          style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-glow)" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to get into flow?</h2>
          <p className="mt-3 text-muted-foreground">Join thousands building their best work, one focused day at a time.</p>
          <Link
            to="/signup"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-primary-foreground"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Start your free account <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-10 border-t border-border/60 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md" style={{ background: "var(--gradient-primary)" }} />
          <span>© {new Date().getFullYear()} FocusFlow OS. Built for makers.</span>
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </footer>
    </div>
  );
}