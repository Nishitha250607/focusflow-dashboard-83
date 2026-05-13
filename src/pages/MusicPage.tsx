import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Music } from "lucide-react";
import { Card } from "@/widgets/Card";

const tracks = [
  { title: "Lofi Rainy Window", mood: "Deep Focus", duration: "4:08" },
  { title: "Forest Synth", mood: "Calm Coding", duration: "3:42" },
  { title: "Midnight Study", mood: "Reading", duration: "5:21" },
  { title: "Soft Piano Cafe", mood: "Writing", duration: "4:55" },
];

export function MusicPage() {
  const [playing, setPlaying] = useState(0);
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="grid lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2">
        <Card title="Now Playing">
          <div className="flex flex-col items-center text-center py-8">
            <motion.div
              animate={isOn ? { rotate: 360 } : {}}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="h-40 w-40 rounded-full flex items-center justify-center mb-6"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Music className="h-14 w-14 text-primary-foreground" />
            </motion.div>
            <div className="text-xl font-semibold">{tracks[playing].title}</div>
            <div className="text-sm text-muted-foreground">{tracks[playing].mood}</div>
            <div className="mt-6 w-full max-w-md">
              <div className="h-1 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-1/3 rounded-full" style={{ background: "var(--gradient-primary)" }} />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground mt-1 tabular-nums">
                <span>1:24</span>
                <span>{tracks[playing].duration}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={() => setPlaying((p) => (p - 1 + tracks.length) % tracks.length)}
                className="h-11 w-11 rounded-full flex items-center justify-center hover:bg-secondary"
              >
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsOn(!isOn)}
                className="h-14 w-14 rounded-full flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                {isOn ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
              </button>
              <button
                onClick={() => setPlaying((p) => (p + 1) % tracks.length)}
                className="h-11 w-11 rounded-full flex items-center justify-center hover:bg-secondary"
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Card>
      </div>
      <Card title="Focus Sounds">
        <div className="space-y-2">
          {tracks.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setPlaying(i)}
              className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition ${
                i === playing ? "bg-primary/15" : "hover:bg-secondary/60"
              }`}
            >
              <div className="h-9 w-9 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <Music className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{t.title}</div>
                <div className="text-[11px] text-muted-foreground">{t.mood}</div>
              </div>
              <div className="text-[11px] text-muted-foreground tabular-nums">{t.duration}</div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}