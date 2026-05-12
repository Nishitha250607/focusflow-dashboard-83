import { Card } from "@/widgets/Card";

export function SimplePage({ title, description }: { title: string; description: string }) {
  return (
    <Card title={title}>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border/60 p-4 bg-secondary/30">
            <div className="h-3 w-24 rounded bg-secondary mb-2" />
            <div className="h-2 w-full rounded bg-secondary mb-1.5" />
            <div className="h-2 w-2/3 rounded bg-secondary" />
          </div>
        ))}
      </div>
    </Card>
  );
}