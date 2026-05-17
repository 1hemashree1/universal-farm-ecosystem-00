import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import gaayImg from "@/assets/pillar-vedic.jpg";

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
    </>
  );
}
