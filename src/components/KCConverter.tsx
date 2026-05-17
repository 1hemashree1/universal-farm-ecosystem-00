import { useMemo, useState } from "react";
import { CurrencySelector } from "./CurrencySelector";
import { useCurrency } from "@/lib/currency";

export function KCConverter({ compact = false }: { compact?: boolean }) {
  const [amount, setAmount] = useState("100");
  const [mode, setMode] = useState<"fiat" | "kc">("fiat");
  const { currency, meta, format, kcPriceIn, fiatToKc, kcToFiat, isLive } = useCurrency();
  const num = Number(amount) || 0;
  const result = useMemo(() => {
    return mode === "fiat" ? fiatToKc(num) : kcToFiat(num);
  }, [num, mode, fiatToKc, kcToFiat]);
  const oneKc = kcPriceIn();

  return (
    <div className={`bg-zinc-900 text-sand-50 rounded-sm p-6 flex flex-col justify-between ${compact ? "" : "min-h-full"}`}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-[0.22em] text-gold-500 uppercase">
            KC Exchange
          </span>
          <div className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
            <span className="text-[9px] uppercase tracking-widest text-zinc-500">
              {isLive ? "Live" : "Approx"}
            </span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-xs text-zinc-500">1 Kindness Credit =</div>
          <div className="text-2xl font-medium tracking-tight">
            {format(oneKc)}
            <span className="text-zinc-500 text-base"> · 8 EUR anchored</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            onClick={() => setMode("fiat")}
            className={`text-[10px] uppercase tracking-widest py-1.5 rounded-xs transition-colors ${
              mode === "fiat" ? "bg-gold-500 text-white" : "bg-white/5 text-zinc-400 hover:text-sand-50"
            }`}
          >
            {meta.code} → KC
          </button>
          <button
            onClick={() => setMode("kc")}
            className={`text-[10px] uppercase tracking-widest py-1.5 rounded-xs transition-colors ${
              mode === "kc" ? "bg-gold-500 text-white" : "bg-white/5 text-zinc-400 hover:text-sand-50"
            }`}
          >
            KC → {meta.code}
          </button>
        </div>

        <div className="space-y-3 pt-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-sm flex-1 focus-within:border-gold-500/60">
              <span className="pl-3 pr-1 text-zinc-500 text-sm">
                {mode === "fiat" ? meta.symbol : "∞"}
              </span>
              <input
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ""))}
                placeholder={mode === "fiat" ? `Amount in ${currency}` : "Amount in KC"}
                className="bg-transparent w-full py-2 pr-3 text-sm placeholder:text-zinc-600 focus:outline-none"
              />
            </div>
            <CurrencySelector />
          </div>
          <div className="text-center">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest py-1">yields</div>
            <div className="text-3xl text-gold-500 font-serif italic">
              {mode === "fiat"
                ? `${result.toFixed(2)} KC`
                : format(result)}
            </div>
          </div>
        </div>
      </div>
      <button className="w-full text-[11px] uppercase tracking-[0.22em] font-bold bg-gold-500 hover:bg-gold-600 transition-colors py-3 rounded-xs text-white mt-6">
        Load Wallet
      </button>
    </div>
  );
}
