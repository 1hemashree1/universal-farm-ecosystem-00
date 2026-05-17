import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { KCConverter } from "@/components/KCConverter";

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
              against live fiat exchange rates. If €1 = ₹90, then 1 KC = ₹720. If tomorrow €1 = ₹100,
              then 1 KC = ₹800. The system updates dynamically.
            </p>
            <ul className="space-y-3 text-foreground/80">
              {[
                "Internal ecosystem credit — not a speculative cryptocurrency",
                "Top up by UPI, bank transfer, card, or international payment",
                "Earn KC by contributing time, knowledge, or produce",
                "Spend KC for 10–30% community pricing on every product",
                "Transfer KC peer-to-peer inside the network",
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
    </>
  );
}
