import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, CheckSquare, Target, StickyNote, TrendingUp, Settings, Sparkles } from "lucide-react";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Goals", url: "/goals", icon: Target },
  { title: "Notes", url: "/notes", icon: StickyNote },
  { title: "Progress", url: "/progress", icon: TrendingUp },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-border/60 bg-card/40 backdrop-blur-xl px-4 py-6">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <div className="font-semibold tracking-tight">FocusFlow</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Productivity OS</div>
        </div>
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((it) => {
          const active = pathname === it.url;
          return (
            <Link
              key={it.url}
              to={it.url}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                active
                  ? "bg-primary/15 text-foreground shadow-[inset_0_0_0_1px_var(--color-border)]"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              <it.icon className={`h-4 w-4 ${active ? "text-primary" : ""}`} />
              <span>{it.title}</span>
              {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" />}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-2xl p-4 border border-border/60" style={{ background: "var(--gradient-card)" }}>
        <div className="text-xs font-medium mb-1">Upgrade to Pro</div>
        <p className="text-[11px] text-muted-foreground mb-3">Unlock unlimited goals, AI insights & more.</p>
        <button className="w-full text-xs font-medium py-2 rounded-lg text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          Upgrade
        </button>
      </div>
    </aside>
  );
}