import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-forest.jpg";
import vedicImg from "@/assets/pillar-vedic.jpg";
import yogicImg from "@/assets/pillar-yogic.jpg";
import electroImg from "@/assets/pillar-electro.jpg";
import { ProductCard } from "@/components/ProductCard";
import { KCConverter } from "@/components/KCConverter";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Universal Farm — Vedic • Yogic • Electroculture" },
      {
        name: "description",
        content:
          "A living ecosystem of natural farming, conscious exchange, and community. Powered by Universal Law Community Trust.",
      },
      { property: "og:title", content: "Universal Farm — Vedic • Yogic • Electroculture" },
      { property: "og:description", content: "Building self-sustainable ecosystems aligned with nature, consciousness, and universal harmony." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Pillars />
      <Marketplace />
      <DesiGaayTeaser />
      <Community />
      <Journey />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Sunlight piercing an ancient forest with copper antennas"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand-50/20 via-sand-50/30 to-sand-50" />
        <div className="absolute inset-0 mandala-bg opacity-50" />
      </div>

      <div className="animate-fade-up space-y-7 max-w-5xl">
        <span className="inline-block text-[11px] font-medium uppercase tracking-[0.32em] text-gold-600">
          Vedic · Yogic · Electroculture
        </span>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.95] text-balance">
          Universal <span className="italic text-gold-600">Farm</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-[58ch] mx-auto text-pretty">
          Building self-sustainable ecosystems aligned with nature, consciousness,
          and the subtle electrical currents of the living earth.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2 animate-fade-up [animation-delay:200ms]">
          <Link
            to="/community"
            className="text-sm bg-gold-500 hover:bg-gold-600 text-white py-2.5 pr-5 pl-3 inline-flex items-center gap-2 rounded-sm ring-1 ring-gold-500 transition-colors"
          >
            <span className="size-5 shrink-0 bg-white/20 rounded-full grid place-items-center text-[10px]">01</span>
            Join Community
          </Link>
          <Link to="/methods" className="text-sm ring-1 ring-black/10 bg-sand-50/80 backdrop-blur text-foreground py-2.5 px-5 rounded-sm hover:bg-white transition-colors">
            Explore Methods
          </Link>
          <Link to="/marketplace" className="text-sm ring-1 ring-black/10 bg-sand-50/80 backdrop-blur text-foreground py-2.5 px-5 rounded-sm hover:bg-white transition-colors">
            Shop Natural Products
          </Link>
          <Link to="/contact" className="text-sm ring-1 ring-black/10 bg-sand-50/80 backdrop-blur text-foreground py-2.5 px-5 rounded-sm hover:bg-white transition-colors">
            Become a Contributor
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground">
        <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold-500/60 to-transparent" />
      </div>
    </section>
  );
}

const pillarData = [
  {
    img: vedicImg,
    eyebrow: "Vedic Methods",
    title: "Vedic Farming",
    body: "Harnessing lunar cycles and the five Panchatatva elements to restore soil energy through traditional cow-based microbiology and sacred seed preservation.",
  },
  {
    img: yogicImg,
    eyebrow: "Yogic Connection",
    title: "Yogic Farming",
    body: "Cultivation through intention. Meditation, sound frequency and mantra to harmonize the vibration between farmer, plant, and place.",
  },
  {
    img: electroImg,
    eyebrow: "Atmospheric Energy",
    title: "Electroculture",
    body: "Copper antennas and magnetic methods harvesting atmospheric electricity — stronger plants, faster growth, less water, no chemicals.",
  },
];

function Pillars() {
  return (
    <section className="py-32 bg-sand-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <SectionHeading
            eyebrow="Ancient Intelligence"
            title={<>Three pillars of the <em className="font-serif italic text-gold-600">living farm</em>.</>}
            intro="Practices that have always belonged together — the wisdom of the rishis, the stillness of the yogi, the curiosity of the experimenter."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pillarData.map((p, i) => (
            <article key={p.title} className={`group space-y-6 ${i === 1 ? "md:translate-y-10" : ""}`}>
              <div className="overflow-hidden rounded-sm ring-1 ring-black/5">
                <img
                  src={p.img}
                  alt={p.eyebrow}
                  loading="lazy"
                  width={800}
                  height={1200}
                  className="w-full aspect-[2/3] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold-600 font-semibold">{p.eyebrow}</p>
                <h3 className="font-serif text-3xl">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[42ch]">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marketplace() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <SectionHeading
            eyebrow="Conscious Marketplace"
            title="Featured Provisions"
            intro="Sourced from our verified regenerative network. Every item shows fiat price and a discounted price in Kindness Credits."
          />
          <Link to="/marketplace" className="text-[11px] uppercase tracking-[0.22em] text-foreground border-b border-foreground/40 pb-1 hover:border-gold-600 hover:text-gold-600 transition-colors whitespace-nowrap">
            View entire catalogue →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
          <KCConverter />
        </div>
      </div>
    </section>
  );
}

function DesiGaayTeaser() {
  return (
    <section className="py-28 bg-moss-900 text-sand-50 relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold-500 font-semibold">Desi Gaay Ecosystem</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight">
            The indigenous cow is the <em className="italic text-gold-500">heartbeat</em> of a living farm.
          </h2>
          <p className="mt-6 text-sand-100/70 max-w-lg leading-relaxed">
            Panchagavya, Jeevamrut, Beejamrut, Bilona Ghee — millennia-old preparations that
            regenerate soil microbiology and crop vitality. We connect you with ethical gaushalas
            and small farmers practicing this lineage.
          </p>
          <Link
            to="/desi-gaay"
            className="inline-flex mt-8 text-xs uppercase tracking-[0.22em] font-medium bg-gold-500 hover:bg-gold-600 transition-colors text-white px-5 py-3 rounded-sm"
          >
            Explore the Tradition
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-4 text-sm">
          {[
            "A2 Milk & Bilona Ghee",
            "Panchagavya & Jeevamrut",
            "Beejamrut Seed Treatment",
            "Cow Dung Bio-fertilizer",
            "Vermicompost",
            "Bio Enzymes",
            "Herbal Pesticides",
            "Organic Soil Boosters",
          ].map((t) => (
            <li
              key={t}
              className="ring-1 ring-white/10 rounded-sm p-4 bg-white/[0.03] backdrop-blur-sm text-sand-100/90"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="py-32 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          align="center"
          eyebrow="The Living Network"
          title={<>A global community of <em className="italic text-gold-600">conscious cultivators</em>.</>}
          intro="Farmers, healers, mycologists, researchers and seekers — sharing wisdom, exchanging seeds, and earning Kindness Credits for what they give."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { name: "Arjun Mehta", role: "Verified Farmer · Pune", quote: "The copper spirals I installed last full moon already lifted my oyster yield by 15%.", reward: "+0.5 KC" },
            { name: "Elena Thorne", role: "Researcher · Lisbon", quote: "Uploaded new findings on the effect of Vedic mantras on seed germination in dry climates.", reward: "+1.2 KC" },
            { name: "Siddharth S.", role: "Community Steward · Goa", quote: "Hosting a regional meetup on Beejamrut prep and Desi Gaay conservation this new moon.", reward: "Event" },
          ].map((m) => (
            <article key={m.name} className="bg-card ring-1 ring-black/5 p-6 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-9 rounded-full bg-gold-500/15 ring-1 ring-gold-500/40" />
                <div>
                  <p className="text-xs font-semibold">{m.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.role}</p>
                </div>
              </div>
              <p className="text-sm italic text-foreground/80 mb-4 leading-relaxed">“{m.quote}”</p>
              <span className="text-[10px] tracking-widest uppercase text-gold-600 font-bold">{m.reward}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading
          align="center"
          eyebrow="Begin"
          title={<>Your first step <em className="italic text-gold-600">into the ecosystem</em>.</>}
          intro="Create a wallet, top it up with Kindness Credits, and start receiving the discounted, community-priced version of every product on Universal Farm."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/kindness-credits" className="text-sm bg-foreground text-sand-50 px-6 py-3 rounded-sm hover:bg-moss-900 transition-colors">
            Open KC Wallet
          </Link>
          <Link to="/training" className="text-sm ring-1 ring-black/10 px-6 py-3 rounded-sm hover:bg-sand-100 transition-colors">
            Apply for Training
          </Link>
        </div>
      </div>
    </section>
  );
}
