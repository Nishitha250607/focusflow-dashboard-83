import { Cloud, Droplets, Wind } from "lucide-react";
import { Card } from "./Card";

export function Weather() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-muted-foreground">San Francisco</div>
          <div className="text-3xl font-bold mt-1">19°<span className="text-base text-muted-foreground">C</span></div>
          <div className="text-xs text-muted-foreground mt-1">Partly Cloudy</div>
        </div>
        <div className="h-14 w-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
          <Cloud className="h-7 w-7 text-primary-foreground" />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Droplets className="h-3 w-3" /> 62%</span>
        <span className="flex items-center gap-1"><Wind className="h-3 w-3" /> 8 km/h</span>
      </div>
    </Card>
  );
}