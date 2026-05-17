import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Universal Farm" },
      { name: "description", content: "The mission, vision, and story behind Universal Farm and Universal Law Community Trust." },
      { property: "og:title", content: "About — Universal Farm" },
      { property: "og:description", content: "The mission, vision, and story behind Universal Farm." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  ["Reverence", "Treat the soil, the seed, the cow and the river as sacred — because they are."],
  ["Sovereignty", "Self-sustainable households, villages and bio-regions free from chemical dependency."],
  ["Reciprocity", "Conscious exchange — Kindness Credits over extraction, contribution over consumption."],
  ["Transparency", "Open methods, open research, traceable supply chain from farmer to home."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>A movement to <em className="italic text-gold-600">thrive</em>, not just survive.</>}
        intro="Universal Farm is a community, a school, a marketplace and a network — built so that natural ecosystems and the humans inside them can flourish together."
      />

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed text-foreground/80">
          <p>
            Modern agriculture is exhausted — depleted soils, sterile food, and farmers caught
            in cycles of debt and chemicals. The earth is asking for a different relationship.
          </p>
          <p>
            Universal Farm is the answer we are building together: a regenerative ecosystem
            that braids the wisdom of the Vedas, the consciousness of yoga, and the quiet
            curiosity of electroculture into one living practice.
          </p>
          <p>
            We are powered and supported by <strong>Universal Law Community Trust</strong> —
            a community-owned body that holds the long view, protects the commons, and ensures
            value flows back to the farmers and stewards who do the real work.
          </p>
        </div>
      </section>

      <section className="py-24 bg-sand-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-balance mb-12 max-w-2xl">
            What we stand for.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map(([t, d]) => (
              <div key={t} className="bg-card p-8 ring-1 ring-black/5 rounded-sm">
                <h3 className="font-serif text-2xl text-gold-600">{t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl mb-10">The road ahead</h2>
          <ol className="space-y-8">
            {[
              ["2025", "Launch of the KC wallet, marketplace, and the first 100 contributor farms."],
              ["2026", "Regional community circles in 10 bio-regions. First 3 electroculture research farms documented."],
              ["2027", "Universal Farm Academy — a fully accredited training arm for Vedic, Yogic and Electroculture methods."],
              ["Beyond", "A federation of self-sufficient ecosystems trading freely in Kindness Credits."],
            ].map(([year, body]) => (
              <li key={year} className="grid grid-cols-[80px_1fr] gap-6 items-baseline">
                <span className="font-serif italic text-gold-600 text-3xl">{year}</span>
                <p className="text-foreground/80 leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
