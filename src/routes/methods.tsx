import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import vedicImg from "@/assets/pillar-vedic.jpg";
import yogicImg from "@/assets/pillar-yogic.jpg";
import electroImg from "@/assets/pillar-electro.jpg";

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
    body: "Vedic farming is the inherited science of cultivating in rhythm with lunar cycles, the five Panchatatva elements, and the subtle energies of place. Sowing, transplanting and harvesting are timed to nakshatras. Seeds are treated with Beejamrut. Soil is fed Jeevamrut. Cows, herbs and rivers are the foundation, not the input store.",
    practices: [
      "Lunar-aligned sowing and harvesting",
      "Panchagavya, Jeevamrut and Beejamrut preparations",
      "Indigenous seed preservation and germplasm sharing",
      "Mixed cropping & biodiversity rotation",
      "Cow-based microbial soil regeneration",
    ],
    benefits: [
      "Higher prana (life-energy) in food",
      "Deeper nutrition density",
      "Healthier soil microbiome",
      "Natural plant immunity",
      "Independence from chemical inputs",
    ],
  },
  {
    id: "yogic",
    img: yogicImg,
    eyebrow: "Yogic Farming",
    title: "Cultivation as a meditative practice.",
    body: "Plants respond to consciousness. Yogic farming begins with the farmer — meditation before the work, mantra during the sowing, presence in the field. Sound frequencies, intention, and a peaceful environment become part of the growing conditions, just like sun and water.",
    practices: [
      "Pranayama and meditation before farm work",
      "Mantra chanting and live sound in greenhouses",
      "Sankalp (intention) at sowing & harvest",
      "Sattvic working hours aligned with the sun",
      "Community gatherings on full and new moons",
    ],
    benefits: [
      "Visibly stronger plant growth",
      "Lower stress and burnout in farmers",
      "Stable, peaceful farm energy",
      "Crops that carry a felt-sense vitality",
      "A spiritual practice that feeds people",
    ],
  },
  {
    id: "electroculture",
    img: electroImg,
    eyebrow: "Electroculture",
    title: "Harvesting the electricity of the atmosphere.",
    body: "Electroculture is a quietly revolutionary, century-old experimental science — using copper antennas, spirals and magnetic fields to channel atmospheric electricity into the soil and the plant. No chemicals, no electricity bill: just geometry and conductive metal placed with care.",
    practices: [
      "Copper spiral antennas above each plot",
      "Magnetised water for irrigation",
      "Pyramid and torus geometries over beds",
      "Soil conductivity mapping",
      "Lunar-timed antenna installation",
    ],
    benefits: [
      "Faster germination & growth",
      "Up to 30% less water needed",
      "Stronger resilience to pests & frost",
      "Higher yields with no chemical input",
      "Restoration of depleted soils",
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
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <Group title="Practices" items={s.practices} />
                <Group title="Benefits" items={s.benefits} />
              </div>
            </div>
          </div>
        </section>
      ))}

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
