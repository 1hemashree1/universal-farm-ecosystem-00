import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import vedicImg from "@/assets/pillar-vedic.jpg";
import yogicImg from "@/assets/pillar-yogic.jpg";
import electroImg from "@/assets/pillar-electro.jpg";
import philosophyImg from "@/assets/philosophy-ecosystem.jpg";

export const Route = createFileRoute("/methods")({
  component: MethodsPage,
  head: () => ({
    meta: [
      { title: "Methods — Vedic, Yogic & Electroculture | Universal Farm" },
      { name: "description", content: "Deep dive into Vedic farming, Yogic cultivation, and Electroculture — practical methods, principles, and benefits." },
      { property: "og:title", content: "Methods — Universal Farm" },
      { property: "og:description", content: "Vedic, Yogic and Electroculture farming methods explained." },
      { property: "og:url", content: "/methods" },
    ],
    links: [{ rel: "canonical", href: "/methods" }],
  }),
});

const sections = [
  {
    id: "vedic",
    img: vedicImg,
    eyebrow: "Vedic Farming",
    title: "Aligning with the cycles of the cosmos.",
    body: "Vedic Agriculture is a traditional natural farming approach inspired by ancient Indian wisdom — nature-based living, cosmic balance, and sustainable cultivation. It focuses on harmony between soil, plants, animals, water, sunlight, and human consciousness. Modern chemical agriculture has damaged soil fertility, water quality, biodiversity, and human health; Vedic farming offers a living alternative that restores soil, produces nutritious food, and protects future generations.",
    principles: [
      "Respect for nature as a living system",
      "Farming in alignment with natural cycles",
      "Desi cow-based formulations",
      "Panchatatva balance — Earth, Water, Fire, Air, Space",
      "Indigenous seed protection & biodiversity",
      "Spiritual, mindful cultivation",
    ],
    practices: [
      "Lunar-aligned sowing and harvesting",
      "Panchagavya, Jeevamrut and Beejamrut preparations",
      "Indigenous seed preservation and germplasm sharing",
      "Mixed cropping & biodiversity rotation",
      "Cow-based microbial soil regeneration",
    ],
    benefits: [
      "Restores living soil",
      "Produces nutrient-dense, prana-rich food",
      "Reduces dependency on chemicals",
      "Supports farmer independence",
      "Protects future generations",
    ],
  },
  {
    id: "yogic",
    img: yogicImg,
    eyebrow: "Yogic Farming",
    title: "Cultivation as a meditative practice.",
    body: "Yogic Farming combines organic cultivation with positive consciousness, meditation, peaceful vibrations, and spiritual energy. It is rooted in the understanding that thoughts, emotions, sound, and intention influence plant growth and environmental balance. Through focused meditation, affirmations, and conscious practice, yogic farming improves crop vitality, natural resilience, and the wellbeing of everyone in the field.",
    principles: [
      "Meditation practices integrated into farming",
      "Positive energy cultivation around seed & soil",
      "Mantra, sound frequencies and sankalp (intention)",
      "Peaceful, conscious agriculture",
      "Care for the farmer's inner state as a farm input",
    ],
    practices: [
      "Pranayama and meditation before farm work",
      "Mantra chanting and live sound in greenhouses",
      "Sankalp (intention) at sowing & harvest",
      "Sattvic working hours aligned with the sun",
      "Community gatherings on full and new moons",
    ],
    benefits: [
      "Stress-free farming lifestyle",
      "Stronger connection with nature",
      "Reduced chemical dependency",
      "Positive, peaceful farm environment",
      "Better ecological harmony & community wellness",
    ],
  },
  {
    id: "electroculture",
    img: electroImg,
    eyebrow: "Electroculture",
    title: "Harvesting the electricity of the atmosphere.",
    body: "Electroculture is an experimental, nature-inspired farming approach that explores the interaction between atmospheric energy, magnetism, electricity, plants and soil biology. Using conductive materials — copper antennas, atmospheric collectors, magnetic arrangements — it is studied as a low-cost, sustainable support system that may enhance plant vitality, root development, soil microbial activity and water efficiency, alongside organic and regenerative practices.",
    principles: [
      "Earth and atmosphere carry natural electrical energy",
      "Antennas & spirals help plants tap that energy",
      "Magnetism supports water structuring & soil life",
      "Sustainable, low-cost, chemical-free experimentation",
      "Open research — document, share, refine",
    ],
    practices: [
      "Copper spiral antennas above each plot",
      "Magnetised water for irrigation",
      "Pyramid and torus geometries over beds",
      "Soil conductivity mapping",
      "Lunar-timed antenna installation",
    ],
    benefits: [
      "Sustainable food production",
      "Reduced chemical dependence",
      "Regenerative soil & water efficiency",
      "Eco-conscious innovation",
      "A frontier of future farming technologies",
    ],
  },
];

function MethodsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Methods"
        title={<>Three lineages, one <em className="italic text-gold-600">living practice</em>.</>}
        intro="Each method on its own is powerful. Braided together they form an ecosystem that regenerates itself."
      />
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-28 px-6 ${i % 2 === 0 ? "bg-background" : "bg-sand-100"}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className={i % 2 === 0 ? "" : "lg:order-2"}>
              <img
                src={s.img}
                alt={s.eyebrow}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover rounded-sm ring-1 ring-black/5"
              />
            </div>
            <div className="space-y-6">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-semibold">{s.eyebrow}</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">{s.title}</h2>
              <p className="text-foreground/80 leading-relaxed">{s.body}</p>
              <div className="grid sm:grid-cols-3 gap-8 pt-4">
                <Group title="Core Principles" items={s.principles} />
                <Group title="Practices" items={s.practices} />
                <Group title="Benefits" items={s.benefits} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src={philosophyImg}
            alt="Universal Farm philosophy — regenerative ecosystem at golden hour"
            loading="lazy"
            width={1600}
            height={1024}
            className="w-full aspect-[4/3] object-cover rounded-sm ring-1 ring-black/5"
          />
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-semibold">
              Our Farming Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Agriculture is a <em className="italic text-gold-600">relationship</em>, not a transaction.
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              At Universal Farm we are weaving a regenerative ecosystem that combines Vedic wisdom,
              yogic consciousness, natural farming, electroculture experimentation, indigenous
              knowledge, community cooperation and sustainable living — a self-sustaining model for
              healthy soil, healthy food, healthy communities and harmony with nature.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-foreground/80">
              {[
                "Healthy soil",
                "Healthy food",
                "Healthy communities",
                "Ethical trade",
                "Conscious living",
                "Harmony with nature",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 size-1 rounded-full bg-gold-500 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-moss-900 text-sand-50 relative overflow-hidden">
        <div className="absolute inset-0 mandala-bg opacity-20" />
        <div className="max-w-4xl mx-auto relative">
          <h2 className="font-serif text-4xl md:text-5xl mb-10">Common questions about the methods.</h2>
          <div className="space-y-4">
            {[
              ["Do these methods scale to commercial farms?", "Yes. Vedic and electroculture methods are being practiced on multi-acre commercial farms across India and Europe with verified yield data."],
              ["Is electroculture scientifically validated?", "Independent research dating to the early 1900s (Lemström, Briard) and current peer-reviewed studies confirm measurable plant response to atmospheric electric and magnetic fields."],
              ["Can I combine these methods with my current farm?", "Absolutely — most farms transition incrementally, starting with one plot, one method, and expanding as confidence grows."],
              ["Do I need to be a yoga practitioner for yogic farming?", "No formal practice required. The principle is presence and intention — anyone can begin today."],
            ].map(([q, a]) => (
              <details key={q} className="group bg-white/5 ring-1 ring-white/10 rounded-sm p-5 open:bg-white/[0.08]">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
                  <span className="font-serif text-xl">{q}</span>
                  <span className="text-gold-500 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sand-100/80 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-sand-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] uppercase tracking-[0.32em] text-gold-600 font-semibold">
            Join the mission
          </span>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            Help us build a regenerative ecosystem rooted in <em className="italic text-gold-600">wisdom, consciousness &amp; compassion</em>.
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Together we can create chemical-free farming, conscious communities, healthy ecosystems,
            ethical marketplaces, and a sustainable future for generations to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="/community" className="bg-foreground hover:bg-foreground/85 text-sand-50 text-[11px] uppercase tracking-[0.22em] font-bold px-7 py-3.5 rounded-xs transition-colors">
              Join the Community
            </a>
            <a href="/training" className="ring-1 ring-foreground/20 hover:ring-gold-500 text-foreground text-[11px] uppercase tracking-[0.22em] font-bold px-7 py-3.5 rounded-xs transition-colors">
              Explore Training
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.22em] text-gold-600 font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-foreground/80">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-2 size-1 rounded-full bg-gold-500 shrink-0" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
