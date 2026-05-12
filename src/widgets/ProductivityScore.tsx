import { Card } from "./Card";

export function ProductivityScore() {
  const score = 87;
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  return (
    <Card title="Productivity Score">
      <div className="flex items-center gap-5">
        <div className="relative h-32 w-32 shrink-0">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r={r} stroke="var(--color-secondary)" strokeWidth="10" fill="none" />
            <circle
              cx="60" cy="60" r={r}
              stroke="url(#pg)" strokeWidth="10" fill="none" strokeLinecap="round"
              strokeDasharray={c} strokeDashoffset={offset}
            />
            <defs>
              <linearGradient id="pg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.66 0.20 285)" />
                <stop offset="100%" stopColor="oklch(0.74 0.18 295)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold tabular-nums">{score}</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">/ 100</div>
          </div>
        </div>
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-widest text-primary mb-1">On fire 🔥</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You're 12% above your weekly average. Keep the momentum going — small wins compound.
          </p>
        </div>
      </div>
    </Card>
  );
}