import { CURRENCIES, useCurrency, type CurrencyCode } from "@/lib/currency";

export function CurrencySelector({ className = "" }: { className?: string }) {
  const { currency, setCurrency, isLive } = useCurrency();
  return (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">Currency</span>
      <div className="relative inline-flex items-center">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
          className="appearance-none bg-sand-50/80 backdrop-blur ring-1 ring-black/10 text-[11px] uppercase tracking-[0.18em] font-medium text-foreground pl-3 pr-7 py-1.5 rounded-sm cursor-pointer hover:bg-white transition-colors focus:outline-none focus:ring-gold-500/60"
          aria-label="Choose currency"
          title={isLive ? "Live exchange rates" : "Approx. exchange rates"}
        >
          {CURRENCIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.symbol} {c.code}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2 text-[10px] text-muted-foreground">▾</span>
      </div>
    </label>
  );
}