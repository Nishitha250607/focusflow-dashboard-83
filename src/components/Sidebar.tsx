import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  CheckSquare,
  Target,
  StickyNote,
  TrendingUp,
  Settings,
  Sparkles,
  Calendar,
  Music,
  Brain,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const items = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Goals", url: "/goals", icon: Target },
  { title: "Notes", url: "/notes", icon: StickyNote },
  { title: "Analytics", url: "/analytics", icon: TrendingUp },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Music", url: "/music", icon: Music },
  { title: "AI Assistant", url: "/assistant", icon: Brain },
  { title: "Settings", url: "/settings", icon: Settings },
] as const;

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex flex-col h-full w-64 border-r border-border/60 bg-card/40 backdrop-blur-xl px-4 py-6">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <div className="font-semibold tracking-tight">FocusFlow OS</div>
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
              onClick={onNavigate}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                active
                  ? "bg-primary/15 text-foreground shadow-[inset_0_0_0_1px_var(--color-border)]"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              <it.icon className={`h-4 w-4 ${active ? "text-primary" : ""}`} />
              <span>{it.title}</span>
              {active && (
                <motion.span
                  layoutId="sidebar-dot"
                  className="ml-auto h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
                />
              )}
            </Link>
          );
        })}
        <Link
          to="/login"
          onClick={onNavigate}
          className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-secondary/60 hover:text-foreground transition-all mt-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Link>
      </nav>
      <div className="mt-auto rounded-2xl p-4 border border-border/60" style={{ background: "var(--gradient-card)" }}>
        <div className="text-xs font-medium mb-1">Upgrade to Pro</div>
        <p className="text-[11px] text-muted-foreground mb-3">Unlock unlimited goals, AI insights & more.</p>
        <button className="w-full text-xs font-medium py-2 rounded-lg text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          Upgrade
        </button>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Desktop */}
      <aside className="hidden md:flex shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 h-10 w-10 rounded-xl flex items-center justify-center bg-card/80 border border-border/60 backdrop-blur-xl"
        aria-label="Open menu"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 bg-background/70 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="md:hidden fixed top-0 left-0 h-full z-50"
            >
              <div className="relative h-full">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-5 right-3 h-8 w-8 rounded-lg flex items-center justify-center hover:bg-secondary z-10"
                >
                  <X className="h-4 w-4" />
                </button>
                <SidebarContent onNavigate={() => setOpen(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}