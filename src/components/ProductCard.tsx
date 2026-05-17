import type { Product } from "@/data/products";
import { useCurrency } from "@/lib/currency";

export function ProductCard({ p }: { p: Product }) {
  const { format, kcToFiat } = useCurrency();
  const fiatPrice = kcToFiat(p.kc) / (1 - p.savePct / 100); // implied list price in current currency
  const kcAsFiat = kcToFiat(p.kc);
  return (
    <article className="group space-y-4">
      <div className="relative overflow-hidden rounded-sm bg-white ring-1 ring-black/5">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={600}
          height={600}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-gold-500 text-white text-[10px] font-bold px-2 py-1 tracking-tight rounded-xs">
          SAVE {p.savePct}% WITH KC
        </div>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
          {p.category}
        </p>
        <h3 className="font-medium text-foreground">{p.name}</h3>
        <div className="flex items-baseline gap-3 mt-1.5 flex-wrap">
          <span className="text-xs text-muted-foreground line-through">
            {format(fiatPrice)}
          </span>
          <span className="text-sm font-semibold text-gold-600">
            {p.kc} KC
          </span>
          <span className="text-[10px] text-muted-foreground">
            ≈ {format(kcAsFiat)}
          </span>
        </div>
      </div>
    </article>
  );
}
