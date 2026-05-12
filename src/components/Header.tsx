import { useEffect, useState } from "react";
import { Bell, Search, Moon, Sun } from "lucide-react";

export function Header() {
  const [now, setNow] = useState(new Date());
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const hour = now.getHours();
  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  const dateStr = now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
  const timeStr = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          {greeting}, Alex <span className="inline-block">👋</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {dateStr} · <span className="text-primary font-medium tabular-nums">{timeStr}</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search anything…"
            className="w-64 lg:w-80 pl-9 pr-3 py-2.5 text-sm rounded-xl bg-card/60 border border-border/60 outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground"
          />
        </div>
        <button
          onClick={() => setDark(!dark)}
          className="h-10 w-10 rounded-xl flex items-center justify-center bg-card/60 border border-border/60 hover:bg-secondary transition"
          aria-label="Toggle theme"
        >
          {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </button>
        <button className="relative h-10 w-10 rounded-xl flex items-center justify-center bg-card/60 border border-border/60 hover:bg-secondary transition">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
        </button>
        <div className="flex items-center gap-3 pl-3 pr-2 py-1.5 rounded-xl bg-card/60 border border-border/60">
          <div className="h-8 w-8 rounded-lg flex items-center justify-center text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
            A
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-medium">Alex Carter</div>
            <div className="text-[11px] text-muted-foreground">Pro Member</div>
          </div>
        </div>
      </div>
    </header>
  );
}