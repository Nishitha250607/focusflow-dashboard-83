import { Play, SkipBack, SkipForward, Music } from "lucide-react";
import { Card } from "./Card";

export function MusicPlayer() {
  return (
    <Card title="Focus Sounds">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
          <Music className="h-5 w-5 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-medium truncate">Lofi Rainy Window</div>
          <div className="text-xs text-muted-foreground">Ambient · Deep Focus</div>
        </div>
      </div>
      <div className="h-1 rounded-full bg-secondary overflow-hidden mb-2">
        <div className="h-full w-1/3 rounded-full" style={{ background: "var(--gradient-primary)" }} />
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground mb-3 tabular-nums">
        <span>1:24</span><span>4:08</span>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-secondary"><SkipBack className="h-4 w-4" /></button>
        <button className="h-11 w-11 rounded-full flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
          <Play className="h-5 w-5 ml-0.5" />
        </button>
        <button className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-secondary"><SkipForward className="h-4 w-4" /></button>
      </div>
    </Card>
  );
}