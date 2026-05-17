import { useMemo, useState } from "react";

const RATE_EUR_INR = 90; // illustrative
const KC_IN_EUR = 8;

export function KCConverter({ compact = false }: { compact?: boolean }) {
  const [amount, setAmount] = useState("1200");
  const inr = Number(amount) || 0;
  const kc = useMemo(() => inr / (KC_IN_EUR * RATE_EUR_INR), [inr]);

  return (
    <div className={`bg-zinc-900 text-sand-50 rounded-sm p-6 flex flex-col justify-between ${compact ? "" : "min-h-full"}`}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-[0.22em] text-gold-500 uppercase">
            KC Exchange
          </span>
          <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse-soft" />
        </div>
        <div className="space-y-1">
          <div className="text-xs text-zinc-500">1 Kindness Credit =</div>
          <div className="text-2xl font-medium tracking-tight">
            {KC_IN_EUR.toFixed(2)} EUR · ₹{(KC_IN_EUR * RATE_EUR_INR).toLocaleString("en-IN")}
          </div>
        </div>
        <div className="space-y-3 pt-4">
          <label className="block">
            <span className="sr-only">Amount in INR</span>
            <input
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ""))}
              placeholder="Enter INR amount"
              className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-3 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-gold-500/60"
            />
          </label>
          <div className="text-center">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest py-1">yields</div>
            <div className="text-3xl text-gold-500 font-serif italic">
              {kc.toFixed(2)} KC
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
