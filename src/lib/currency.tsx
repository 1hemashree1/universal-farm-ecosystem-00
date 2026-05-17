import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

// 1 KC is anchored to 8 EUR — same model as ULCT / spacecake.party KC
export const KC_IN_EUR = 8;

export type CurrencyCode =
  | "EUR" | "USD" | "GBP" | "INR" | "CAD" | "AUD" | "JPY" | "CHF" | "AED" | "SGD" | "ZAR" | "BRL";

export const CURRENCIES: { code: CurrencyCode; label: string; symbol: string; locale: string }[] = [
  { code: "EUR", label: "Euro",            symbol: "€",  locale: "de-DE" },
  { code: "USD", label: "US Dollar",       symbol: "$",  locale: "en-US" },
  { code: "GBP", label: "British Pound",   symbol: "£",  locale: "en-GB" },
  { code: "INR", label: "Indian Rupee",    symbol: "₹",  locale: "en-IN" },
  { code: "CAD", label: "Canadian Dollar", symbol: "C$", locale: "en-CA" },
  { code: "AUD", label: "Australian Dollar", symbol: "A$", locale: "en-AU" },
  { code: "JPY", label: "Japanese Yen",    symbol: "¥",  locale: "ja-JP" },
  { code: "CHF", label: "Swiss Franc",     symbol: "CHF", locale: "de-CH" },
  { code: "AED", label: "UAE Dirham",      symbol: "د.إ", locale: "en-AE" },
  { code: "SGD", label: "Singapore Dollar", symbol: "S$", locale: "en-SG" },
  { code: "ZAR", label: "South Afr. Rand", symbol: "R",  locale: "en-ZA" },
  { code: "BRL", label: "Brazilian Real",  symbol: "R$", locale: "pt-BR" },
];

// Static fallback rates: 1 EUR = N <currency>. Updated approx 2026.
const FALLBACK_RATES: Record<CurrencyCode, number> = {
  EUR: 1,
  USD: 1.08,
  GBP: 0.85,
  INR: 92,
  CAD: 1.47,
  AUD: 1.62,
  JPY: 168,
  CHF: 0.96,
  AED: 3.97,
  SGD: 1.45,
  ZAR: 19.8,
  BRL: 5.5,
};

type Ctx = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  rates: Record<CurrencyCode, number>; // 1 EUR -> currency
  isLive: boolean;
  kcPriceIn: (currency?: CurrencyCode) => number; // price of 1 KC in selected/given currency
  fiatToKc: (amount: number, currency?: CurrencyCode) => number;
  kcToFiat: (kc: number, currency?: CurrencyCode) => number;
  format: (amount: number, currency?: CurrencyCode) => string;
  meta: (typeof CURRENCIES)[number];
};

const CurrencyContext = createContext<Ctx | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("EUR");
  const [rates, setRates] = useState<Record<CurrencyCode, number>>(FALLBACK_RATES);
  const [isLive, setIsLive] = useState(false);

  // Restore preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("uf:currency") as CurrencyCode | null;
    if (stored && CURRENCIES.some((c) => c.code === stored)) {
      setCurrencyState(stored);
    }
  }, []);

  // Fetch live rates (best-effort, free, no key)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/EUR");
        if (!res.ok) return;
        const json = (await res.json()) as { result?: string; rates?: Record<string, number> };
        if (cancelled || json.result !== "success" || !json.rates) return;
        const next = { ...FALLBACK_RATES };
        for (const c of CURRENCIES) {
          if (typeof json.rates[c.code] === "number") next[c.code] = json.rates[c.code];
        }
        setRates(next);
        setIsLive(true);
      } catch {
        /* keep fallback */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const setCurrency = useCallback((c: CurrencyCode) => {
    setCurrencyState(c);
    if (typeof window !== "undefined") window.localStorage.setItem("uf:currency", c);
  }, []);

  const value = useMemo<Ctx>(() => {
    const kcPriceIn = (c?: CurrencyCode) => KC_IN_EUR * rates[c ?? currency];
    const fiatToKc = (amount: number, c?: CurrencyCode) => {
      const p = kcPriceIn(c);
      return p > 0 ? amount / p : 0;
    };
    const kcToFiat = (kc: number, c?: CurrencyCode) => kc * kcPriceIn(c);
    const meta = CURRENCIES.find((x) => x.code === currency)!;
    const format = (amount: number, c?: CurrencyCode) => {
      const m = CURRENCIES.find((x) => x.code === (c ?? currency))!;
      try {
        return new Intl.NumberFormat(m.locale, {
          style: "currency",
          currency: m.code,
          maximumFractionDigits: m.code === "JPY" || m.code === "INR" ? 0 : 2,
        }).format(amount);
      } catch {
        return `${m.symbol}${amount.toFixed(2)}`;
      }
    };
    return { currency, setCurrency, rates, isLive, kcPriceIn, fiatToKc, kcToFiat, format, meta };
  }, [currency, rates, isLive, setCurrency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}