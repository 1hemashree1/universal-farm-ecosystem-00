import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import gaayImg from "@/assets/desi-gaay-cow.jpg";

export const Route = createFileRoute("/desi-gaay")({
  component: DesiGaayPage,
  head: () => ({
    meta: [
      { title: "Desi Gaay Ecosystem — Universal Farm" },
      { name: "description", content: "Indigenous Indian cows are the heart of self-sustainable farming. A2 milk, Bilona Ghee, Panchagavya, Jeevamrut and more." },
      { property: "og:title", content: "Desi Gaay Ecosystem — Universal Farm" },
      { property: "og:description", content: "The indigenous cow is the heartbeat of a living farm." },
      { property: "og:url", content: "/desi-gaay" },
    ],
    links: [{ rel: "canonical", href: "/desi-gaay" }],
  }),
});

function DesiGaayPage() {
  return (
    <>
      <PageHero
        eyebrow="Desi Gaay Ecosystem"
        title={<>The indigenous cow is the <em className="italic text-gold-600">heartbeat</em> of a living farm.</>}
        intro="Across millennia, the Indian Desi cow has powered self-sustainable villages — soil, food, medicine, fuel and family in one being."
      />
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img src={gaayImg} alt="Desi cow with earthen pots" loading="lazy" className="w-full aspect-[4/5] object-cover rounded-sm ring-1 ring-black/5" />
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            <p>Cow dung and urine are not waste — they are microbial gold. A handful of dung contains hundreds of beneficial soil organisms. A few litres of urine fed to soil restore the conditions plants evolved with.</p>
            <p>Panchagavya, Jeevamrut, Beejamrut — these are not folklore. They are working agricultural biotech, refined over centuries.</p>
            <p>We connect you to ethical gaushalas and small farmers practicing this lineage with care.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-sand-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-10 max-w-xl">Products from the Desi Gaay lineage.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "A2 Milk", "Bilona Ghee", "Cow Dung Cakes", "Cow Dung Powder",
              "Gomutra (Cow Urine)", "Panchagavya", "Jeevamrut", "Beejamrut",
              "Vermicompost", "Bio Enzymes", "Herbal Pesticides", "Soil Boosters",
            ].map((t) => (
              <div key={t} className="bg-card ring-1 ring-black/5 px-5 py-4 rounded-sm text-sm">{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-semibold">Gaushala Network</span>
            <h2 className="font-serif text-4xl mt-4 leading-tight">Ethical care, traceable lineage.</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Every partner gaushala in the network is community-verified for ethical care:
              free grazing, no forced separation of calves, no hormone injections, no industrial milking.
              Cows live full natural lives — and are honoured even after their milk-giving years.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              {[
                "Indigenous breeds only — Gir, Sahiwal, Tharparkar, Kankrej, Rathi, Red Sindhi.",
                "Calf-first milking — the calf drinks before the human family.",
                "Open pastures, native fodder, no soy, no antibiotics.",
                "Bilona (hand-churned) ghee made the slow, traditional way.",
              ].map((it) => (
                <li key={it} className="flex gap-3">
                  <span className="mt-2 size-1 rounded-full bg-gold-500 shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-semibold">Why it matters</span>
            <h2 className="font-serif text-4xl mt-4 leading-tight">One cow can regenerate ten acres.</h2>
            <div className="mt-6 grid grid-cols-2 gap-5 text-sm">
              {[
                ["10 acres", "Soil regenerated per cow per year using Jeevamrut & Panchagavya."],
                ["300+ microbes", "Beneficial soil organisms per gram of indigenous cow dung."],
                ["Zero chemical", "Inputs needed when a desi cow is at the centre of a farm cycle."],
                ["Full circle", "Milk, ghee, fuel, fertiliser, medicine — from one being."],
              ].map(([n, d]) => (
                <div key={n} className="bg-card ring-1 ring-black/5 p-5 rounded-sm">
                  <div className="font-serif text-2xl text-gold-600">{n}</div>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-moss-900 text-sand-50 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">Adopt a Desi Gaay.</h2>
          <p className="mt-4 text-sand-100/80">
            Sponsor the lifelong care of an indigenous cow at a partner gaushala — receive ghee,
            Panchagavya, and quarterly photo updates. Pay in fiat or Kindness Credits.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="/marketplace" className="bg-gold-500 hover:bg-gold-600 transition-colors text-white text-[11px] uppercase tracking-[0.22em] font-bold py-3 px-6 rounded-sm">Explore Marketplace</a>
            <a href="/contact" className="ring-1 ring-sand-50/30 hover:bg-white/10 transition-colors text-[11px] uppercase tracking-[0.22em] font-bold py-3 px-6 rounded-sm">Sponsor a Cow</a>
          </div>
        </div>
      </section>
    </>
  );
}
