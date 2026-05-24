import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import ecosystemImg from "@/assets/ecosystem-aerial.jpg";

export const Route = createFileRoute("/ecosystem")({
  component: EcosystemPage,
  head: () => ({
    meta: [
      { title: "The Ecosystem — Universal Farm" },
      { name: "description", content: "A regenerative, community-driven platform: organic marketplace, services, KC economy, barter, learning, ethical innovation, local hubs and circular industries — aligned with nature." },
      { property: "og:title", content: "The Universal Farm Ecosystem" },
      { property: "og:description", content: "Vedic · Yogic · Electroculture · Permaculture — a conscious civilisation platform." },
      { property: "og:url", content: "/ecosystem" },
      { property: "og:image", content: "/src/assets/ecosystem-aerial.jpg" },
    ],
    links: [{ rel: "canonical", href: "/ecosystem" }],
  }),
});

const MODULES: { n: string; t: string; d: string; bullets: string[] }[] = [
  {
    n: "01",
    t: "Organic Marketplace",
    d: "A multi-vendor marketplace for farmers, artisans, creators and sustainable businesses — dual fiat + KC pricing, eco badges and verified sellers.",
    bullets: ["Minimum 10% discount with KC", "Organic, eco & packaging badges", "Seller trust score & moderation", "Smart filters + nearby discovery"],
  },
  {
    n: "02",
    t: "Services & Skill Exchange",
    d: "Productive, legal services — plumbers, electricians, tutors, yoga & meditation guides, farmer-helpers, developers, designers and more.",
    bullets: ["Verified provider profiles", "Hourly / fixed / KC pricing", "Booking & service requests", "Barter-friendly toggles"],
  },
  {
    n: "03",
    t: "KC Wallet Economy",
    d: "A dual-currency wallet anchored to ∞KC Kindness Credits — referral rewards, conversion, and community-tier benefits.",
    bullets: ["10 KC welcome · 5 KC per referral", "Use for products, services, events", "Fiat ↔ KC conversion", "Temporary signup wallets"],
  },
  {
    n: "04",
    t: "Barter & Exchange",
    d: "Goods ↔ goods, services ↔ services, hybrid KC + barter. Trade what you grow, make and know.",
    bullets: ["Exchange proposals", "Negotiation flow", "Barter listing badges", "Community exchange feed"],
  },
  {
    n: "05",
    t: "Trust & Community Verification",
    d: "A community trust engine: 5-member verification, reputation scoring, complaint moderation, auto-hold on excessive reports.",
    bullets: ["Basic → Identity → Community", "Trusted Provider tier", "Regenerative Contributor badge", "Transparent moderation"],
  },
  {
    n: "06",
    t: "Local Discovery & Map",
    d: "Find nearby farms, services, hubs and events on an interactive map with distance filters and a local activity feed.",
    bullets: ["Geo-location search", "Nearby recommendations", "Local hub directory", "Event radar"],
  },
  {
    n: "07",
    t: "Learning & Training",
    d: "Homeschooling, natural farming, wellness, yoga, traditional knowledge, vocational training — online and in-person.",
    bullets: ["Trainer profiles", "Workshop listings", "KC access pricing", "Community learning hubs"],
  },
  {
    n: "08",
    t: "Research & Ethical Innovation",
    d: "An open showcase for bio-fuel, hemp, natural fibres, water harvesting, eco processing and natural building systems.",
    bullets: ["Innovation profiles", "Collaboration requests", "Community support", "Open research listings"],
  },
  {
    n: "09",
    t: "Funding & Community Support",
    d: "KC grants, community funding, volunteer coordination and ecosystem sponsorships for regenerative initiatives.",
    bullets: ["Seek or offer support", "Fund eco projects", "Organize initiatives", "Sponsor a hub"],
  },
  {
    n: "10",
    t: "Sustainable Industry",
    d: "Village industries, eco factories, hemp & bamboo production, compost systems and reusable packaging models.",
    bullets: ["Strictly no toxic manufacturing", "Ethical processing only", "Reusable packaging first", "Local jobs, low footprint"],
  },
  {
    n: "11",
    t: "Local Development Hubs",
    d: "Real-world ecosystem nodes — exchange markets, repair & reuse centres, wellness gatherings and innovation labs.",
    bullets: ["Request a hub in your region", "Community-led admin", "Event hosting", "Skill exchange days"],
  },
  {
    n: "12",
    t: "Waste & Regeneration",
    d: "Reusable systems, repair culture, compostable materials and a measurable shift toward circular economy.",
    bullets: ["Plastic-Free badge", "Reusable / Compostable", "Circular Economy", "Regenerative tag"],
  },
  {
    n: "13",
    t: "Legal, Consent & Safety",
    d: "Clear seller and sustainability agreements. Universal Farm acts as facilitator and moderation layer — providers remain responsible for their offerings.",
    bullets: ["Seller agreements", "Sustainability pledge", "Buyer awareness notices", "Community guidelines"],
  },
  {
    n: "14",
    t: "Admin & Moderation",
    d: "A powerful but transparent admin layer for approvals, reports, KC management, hub coordination and AI-assisted safety.",
    bullets: ["Seller & product approvals", "Trust analytics", "Community safety monitoring", "Hub & event moderation"],
  },
];

const PROMOTE = [
  "Natural farming",
  "Regenerative systems",
  "Circular economy",
  "Reusable systems",
  "Compostable materials",
  "Ethical innovation",
  "Holistic wellness",
  "Conscious living",
  "Nature-aligned tech",
  "Community cooperation",
];

const PROHIBIT = [
  "Urea",
  "DAP",
  "Toxic chemicals",
  "Harmful pesticides",
  "Polluting systems",
  "Destructive industries",
  "Exploitative services",
  "Adult services",
  "Illegal activity",
  "Harmful products",
];

function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="The Ecosystem"
        title={<>One regenerative <em className="italic text-gold-600">civilisation</em> platform.</>}
        intro="Vedic · Yogic · Electroculture · Permaculture. Fourteen interwoven modules — marketplace, services, wallet, barter, learning, innovation, hubs — built to thrive, not survive."
      />

      {/* Aerial intro */}
      <section className="px-6 -mt-6">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-sm ring-1 ring-black/5">
          <img
            src={ecosystemImg}
            alt="Aerial view of a regenerative community ecosystem at golden hour"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full h-[280px] md:h-[420px] object-cover"
          />
        </div>
        <p className="max-w-3xl mx-auto text-center mt-8 text-muted-foreground italic font-serif text-2xl md:text-3xl text-balance">
          “Aligned with nature — to thrive, not survive.”
        </p>
      </section>

      {/* 14 modules grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES.map((m) => (
              <article
                key={m.n}
                className="group p-7 bg-white rounded-sm ring-1 ring-black/5 hover:ring-gold-500/40 transition-all hover:shadow-lg flex flex-col"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold">
                    Module {m.n}
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-foreground leading-tight">{m.t}</h2>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.d}</p>
                <ul className="mt-5 space-y-1.5 text-xs text-foreground/80">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 size-1 rounded-full bg-gold-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Promote / Prohibit */}
      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-moss-900 text-sand-50 p-8 rounded-sm">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold-400 font-semibold">We strongly promote</span>
            <h3 className="font-serif text-3xl mt-3">A regenerative future.</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {PROMOTE.map((p) => (
                <li key={p} className="text-xs px-3 py-1.5 rounded-full ring-1 ring-sand-50/20 text-sand-100">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-sm ring-1 ring-black/5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-earth-700 font-semibold">We strictly prohibit</span>
            <h3 className="font-serif text-3xl mt-3 text-foreground">What harms the living earth.</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {PROHIBIT.map((p) => (
                <li key={p} className="text-xs px-3 py-1.5 rounded-full ring-1 ring-black/10 text-muted-foreground line-through">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
              Universal Farm acts as a facilitator and community moderation layer.
              Individual providers remain responsible for their offerings and interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Trust ladder */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold">Trust ladder</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 max-w-3xl">
            Reputation grows the way <em className="italic text-gold-600">soil</em> grows — slowly, by contribution.
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              ["Basic verified", "Email + ProtonMail check"],
              ["Identity verified", "Profile & documents reviewed"],
              ["Community verified", "5 trusted members vouch"],
              ["Trusted provider", "Sustained ratings & history"],
              ["Regenerative contributor", "Active eco impact"],
            ].map(([t, d], i) => (
              <div key={t} className="p-5 bg-white rounded-sm ring-1 ring-black/5">
                <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">Tier {i + 1}</span>
                <h3 className="font-serif text-lg mt-2 text-foreground">{t}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-moss-900 text-sand-50 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-gold-400">Join the ecosystem</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight">
            Build a thriving, nature-aligned future — together.
          </h2>
          <p className="text-sand-100/80 max-w-xl mx-auto">
            Open a KC wallet, list your farm or skill, request a local hub or fund an eco initiative.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <Link
              to="/kindness-credits"
              className="text-xs uppercase tracking-widest bg-gold-500 text-moss-900 px-6 py-3 rounded-sm font-semibold hover:bg-gold-400 transition-colors"
            >
              Open KC Wallet
            </Link>
            <Link
              to="/community"
              className="text-xs uppercase tracking-widest ring-1 ring-sand-50/30 px-6 py-3 rounded-sm font-semibold hover:bg-sand-50/10 transition-colors"
            >
              Join the Community
            </Link>
            <Link
              to="/marketplace"
              className="text-xs uppercase tracking-widest ring-1 ring-sand-50/30 px-6 py-3 rounded-sm font-semibold hover:bg-sand-50/10 transition-colors"
            >
              Visit the Marketplace
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}