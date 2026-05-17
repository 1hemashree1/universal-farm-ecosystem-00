import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import shroomImg from "@/assets/product-mushroom.jpg";

export const Route = createFileRoute("/mushrooms")({
  component: MushroomsPage,
  head: () => ({
    meta: [
      { title: "Mushroom Ecosystem & Training — Universal Farm" },
      { name: "description", content: "Sustainable mycology — varieties, cultivation, training, fresh & dried products, grow kits and substrates." },
      { property: "og:title", content: "Mushroom Ecosystem — Universal Farm" },
      { property: "og:description", content: "Mycelium networks, regenerative farming, and medicinal food." },
      { property: "og:url", content: "/mushrooms" },
    ],
    links: [{ rel: "canonical", href: "/mushrooms" }],
  }),
});

const varieties = [
  ["White Oyster", "Easy", "16–22°C"],
  ["Pink Oyster", "Easy", "20–30°C"],
  ["Blue Oyster", "Easy", "12–18°C"],
  ["King Oyster", "Medium", "10–18°C"],
  ["Milky", "Medium", "25–35°C"],
  ["Shiitake", "Hard", "12–25°C"],
  ["Lion's Mane", "Medium", "18–24°C"],
  ["Reishi", "Hard", "21–27°C"],
  ["Cordyceps", "Hard", "18–22°C"],
];

function MushroomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mushroom Ecosystem"
        title={<>Fungi are the <em className="italic text-gold-600">recyclers of the world</em>.</>}
        intro="A complete hub for mycology — knowledge, varieties, fresh and dried products, grow kits, substrates, and training from beginner to master."
      />
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img src={shroomImg} alt="Oyster mushroom grow kit" loading="lazy" className="w-full aspect-square object-cover rounded-sm ring-1 ring-black/5" />
          <div className="space-y-5">
            <h2 className="font-serif text-4xl leading-tight">From substrate to plate, and back to the soil.</h2>
            <p className="text-foreground/80 leading-relaxed">
              Mushrooms turn agricultural waste into protein, medicine, soil and revenue.
              A few square meters can feed a family and a regional market.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our mycology arm covers every step — spawn, sterilisation, substrate, fruiting,
              drying, value-add products and commercial scale-up.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-sand-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-10">Varieties we cultivate.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {varieties.map(([name, diff, temp]) => (
              <article key={name} className="bg-card ring-1 ring-black/5 p-5 rounded-sm">
                <h3 className="font-serif text-2xl">{name}</h3>
                <div className="flex gap-4 mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>Difficulty: <span className="text-gold-600">{diff}</span></span>
                  <span>{temp}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-3">A complete mycology ecosystem.</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">From the lab bench to your kitchen — and from the spent substrate back into the soil.</p>
          <div className="grid md:grid-cols-2 gap-10">
            <Pillar title="Products" items={["Fresh gourmet varieties", "Dried & powdered shelf-stable stock", "Medicinal extracts & tinctures", "Spawn packets & ready-to-fruit bags", "DIY home grow kits"]} />
            <Pillar title="Cultivation services" items={["Substrate consultation", "Sterilization equipment & grow tents", "Humidity & climate control systems", "Site visits and commercial setup", "Mushroom value-add product design"]} />
            <Pillar title="Training paths" items={["Beginner: home cultivation in 7 days", "Advanced: spawn production & lab setup", "Master: commercial mycology & R&D", "Medicinal mushroom intensive"]} />
            <Pillar title="Why it matters" items={["Mushrooms recycle agricultural waste into protein", "Food, medicine, soil — from one organism", "Low capital, fast turnaround, high margin", "A regenerative income for small farms"]} />
          </div>
        </div>
      </section>
    </>
  );
}

function Pillar({ title, items }: { title: string; items: string[] }) {
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
    </>
  );
}
