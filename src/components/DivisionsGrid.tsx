import { Link } from "@tanstack/react-router";
import { divisions, ripple } from "@/data/divisions";

export function DivisionsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {divisions.map((d, i) => (
        <Link
          key={d.slug}
          to="/divisions/$slug"
          params={{ slug: d.slug }}
          className="group rounded-2xl border border-border bg-card p-7 hover:border-gold-600/50 transition-colors"
        >
          <span className="text-xs text-gold-600 font-semibold">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="font-serif text-2xl mt-2">{d.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{d.summary}</p>
          <span className="mt-5 inline-block text-sm font-medium text-primary group-hover:underline">Explore →</span>
        </Link>
      ))}
    </div>
  );
}

export function RippleBand() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {ripple.map((r) => (
        <div key={r.level} className="rounded-xl border border-border bg-card p-5">
          <h4 className="font-serif text-xl text-gold-600">{r.level}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
        </div>
      ))}
    </div>
  );
}
