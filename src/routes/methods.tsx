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
