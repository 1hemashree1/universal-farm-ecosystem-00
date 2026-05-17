import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { KCConverter } from "@/components/KCConverter";
import { useCurrency } from "@/lib/currency";

export const Route = createFileRoute("/kindness-credits")({
  component: KCPage,
  head: () => ({
    meta: [
      { title: "Kindness Credits (KC) — Universal Farm" },
      { name: "description", content: "Kindness Credits is the internal conscious exchange system of Universal Farm. 1 KC = €8 equivalent, updated to live fiat rates." },
      { property: "og:title", content: "Kindness Credits — Universal Farm" },
      { property: "og:description", content: "An internal ecosystem credit for conscious exchange." },
      { property: "og:url", content: "/kindness-credits" },
    ],
    links: [{ rel: "canonical", href: "/kindness-credits" }],
  }),
});

function KCPage() {
  return (
    <>
      <PageHero
        eyebrow="Kindness Credits"
        title={<>An exchange system <em className="italic text-gold-600">for the ecosystem</em>, not the speculator.</>}
        intro="KC is an internal community credit. Earn it by contributing — research, training, farming, volunteering — or top up your wallet with fiat. Spend it at 10–30% off across the marketplace."
      />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl leading-tight">How the value is anchored.</h2>
            <p className="text-foreground/80 leading-relaxed">
              <strong>1 KC = the equivalent of 8 Euros</strong> in your local currency, calculated
              against live fiat exchange rates. Pick your currency at the top of the page or inside
              the converter and every price across the ecosystem — products, donations, training —
              instantly re-renders in the unit you actually live with.
            </p>
            <LiveRateNote />
            <ul className="space-y-3 text-foreground/80">
              {[
                "Internal ecosystem credit — not a speculative cryptocurrency",
                "Top up by UPI, SEPA, bank transfer, card, or international payment",
                "Earn KC by contributing time, knowledge, or produce",
                "Spend KC for 10–30% community pricing on every product",
                "Transfer KC peer-to-peer inside the network",
                "Inspired by the Universal Law Community Trust (ULCT) gift-credit model",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <KCConverter />
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-3 max-w-xl">How conversion works.</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Four simple steps — from your everyday currency into the conscious-exchange layer of the ecosystem.
          </p>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["01", "Pick your currency", "Choose from 12 major currencies. We use live ECB-style rates with a sensible fallback."],
              ["02", "Top up your wallet", "Buy a KC Gift Card or transfer directly. €8 (or its live equivalent) credits 1 KC."],
              ["03", "Shop in dual pricing", "Every product shows both the local fiat price and a discounted KC price."],
              ["04", "Redeem at checkout", "Pay in KC, fiat, or a mix. Save 10–30% when paying fully in KC."],
            ].map(([n, t, d]) => (
              <li key={n} className="bg-card ring-1 ring-black/5 p-6 rounded-sm">
                <span className="font-serif italic text-3xl text-gold-600">{n}</span>
                <h3 className="font-serif text-xl mt-2">{t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 bg-sand-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 max-w-xl">Ways to earn Kindness Credits.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Teaching & Training", "Run a workshop, mentor a new farmer, host a circle."],
              ["Research & Knowledge", "Publish field notes, experiments, or translated wisdom."],
              ["Selling Produce", "List on the marketplace and accept KC at checkout."],
              ["Volunteering", "Eco-projects, gaushala care, seed banks, river restoration."],
              ["Referrals", "Bring a new conscious member into the ecosystem."],
              ["Contributions", "Soil testing data, photo essays, documentation, code."],
            ].map(([t, d]) => (
              <div key={t} className="bg-card ring-1 ring-black/5 p-6 rounded-sm">
                <h3 className="font-serif text-xl text-gold-600">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl mb-10">Frequently asked.</h2>
          <div className="divide-y divide-black/10 ring-1 ring-black/5 rounded-sm bg-card">
            {FAQS.map((f) => (
              <details key={f.q} className="group p-6 open:bg-sand-50">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
                  <span className="font-serif text-xl">{f.q}</span>
                  <span className="text-gold-600 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function LiveRateNote() {
  const { isLive, format, kcPriceIn, meta } = useCurrency();
  return (
    <div className="bg-sand-100 ring-1 ring-black/5 p-4 rounded-sm flex items-center gap-3">
      <span className={`size-2 rounded-full ${isLive ? "bg-emerald-500" : "bg-amber-500"} animate-pulse-soft`} />
      <p className="text-sm text-muted-foreground">
        Today in <strong className="text-foreground">{meta.code}</strong>: 1 KC ≈{" "}
        <strong className="text-foreground">{format(kcPriceIn())}</strong>
        {isLive ? " (live rates)" : " (approx. rates — live feed unavailable)"}
      </p>
    </div>
  );
}

const FAQS = [
  { q: "Is KC a cryptocurrency?", a: "No. KC is an internal community credit — like a member-only gift card — backed by the value of products and services inside the Universal Farm network. It is not traded on exchanges and is not speculative." },
  { q: "Why anchor to €8?", a: "Eight euros is roughly a fair-trade hour of skilled regenerative work in Europe. It gives KC a stable, meaningful reference instead of a floating market price." },
  { q: "What happens when exchange rates move?", a: "The KC value re-prices in your local currency automatically. Your KC balance never loses value — only the fiat-equivalent display shifts." },
  { q: "Can I cash out KC back to fiat?", a: "KC is built for circulation inside the ecosystem, not extraction. In limited cases (e.g. closing a vendor account) refunds may be issued in fiat at the prevailing anchor rate." },
  { q: "How do I earn KC without paying fiat?", a: "Teach a workshop, publish field research, sell produce, volunteer at a gaushala, refer a new member, or contribute documentation. Every accepted contribution credits your wallet." },
  { q: "Where can I spend KC?", a: "On every product in the marketplace, on training programs, and peer-to-peer with other members. Many vendors offer 10–30% discounts when you pay fully in KC." },
];
