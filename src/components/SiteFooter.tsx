import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-moss-900 text-sand-100 py-24 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full border border-gold-500/40" />
              <span className="text-sm font-medium uppercase tracking-widest">Universal Farm</span>
            </div>
            <p className="text-sand-100/60 text-sm max-w-[35ch] leading-relaxed">
              A movement dedicated to sovereign cultivation and the restoration of natural law in our food systems.
            </p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold-500/80">
              Powered by Universal Law Community Trust
            </p>
          </div>

          <FooterCol
            title="Ecosystem"
            items={[
              ["Vedic Farming", "/methods"],
              ["Yogic Farming", "/methods"],
              ["Electroculture", "/methods"],
              ["Desi Gaay", "/desi-gaay"],
              ["Mushrooms", "/mushrooms"],
            ]}
          />
          <FooterCol
            title="Exchange"
            items={[
              ["Marketplace", "/marketplace"],
              ["Kindness Credits", "/kindness-credits"],
              ["Training & Events", "/training"],
              ["Community Network", "/community"],
            ]}
          />
          <FooterCol
            title="Trust"
            items={[
              ["About", "/about"],
              ["Contribution Model", "/about"],
              ["Contact", "/contact"],
            ]}
          />
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-sand-100/40">
            © {new Date().getFullYear()} Universal Farm · All Living Rights Reserved
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gold-500/60">
            Thrive, don&apos;t just survive.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: Array<readonly [string, string]> }) {
  return (
    <div className="space-y-4">
      <h5 className="text-[10px] uppercase tracking-[0.22em] font-bold text-gold-500">{title}</h5>
      <ul className="space-y-2 text-sm text-sand-100/80">
        {items.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="hover:text-gold-500 transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
