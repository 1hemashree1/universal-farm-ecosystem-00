import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";
import { CurrencySelector } from "./CurrencySelector";

const links = [
  { to: "/about", label: "About" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/methods", label: "Methods" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/kindness-credits", label: "KC Exchange" },
  { to: "/community", label: "Community" },
  { to: "/training", label: "Training" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-50/85 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Universal Farm emblem"
            width={32}
            height={32}
            className="size-8 object-contain"
          />
          <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-foreground">
            Universal Farm
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-gold-600 transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <CurrencySelector className="hidden sm:inline-flex" />
          <Link
            to="/kindness-credits"
            className="hidden md:inline-flex text-xs ring-1 ring-black/10 bg-foreground text-sand-50 py-2 px-4 rounded-sm font-medium hover:bg-moss-900 transition-colors"
          >
            KC Wallet
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden size-9 grid place-items-center rounded-sm ring-1 ring-black/10"
          >
            <div className="space-y-1">
              <span className="block w-4 h-px bg-foreground" />
              <span className="block w-4 h-px bg-foreground" />
              <span className="block w-4 h-px bg-foreground" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-sand-50/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-widest">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-2">
              <CurrencySelector />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
