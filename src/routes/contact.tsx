import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Contribute — Universal Farm" },
      { name: "description", content: "Become a contributor, vendor, trainer or delivery partner in the Universal Farm ecosystem." },
      { property: "og:title", content: "Contact & Contribute — Universal Farm" },
      { property: "og:description", content: "Reach the Universal Farm team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Contribute"
        title={<>Reach the <em className="italic text-gold-600">stewards</em>.</>}
        intro="Whether you want to contribute, list products, host a workshop, or simply ask a question — we read every message."
      />

      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            ["Farmers & Producers", "List your produce, livestock, or hand-made goods in the marketplace with dual fiat / KC pricing."],
            ["Trainers & Healers", "Offer Vedic, Yogic, Electroculture, mycology or wellness programs through our training arm."],
            ["Service Providers", "Logistics, design, repair, web, carpentry, doula, ayurveda — list your conscious services."],
            ["Researchers & Scientists", "Publish open electroculture, soil, water and seed research with the community."],
            ["Local Hub Coordinators", "Start or run a Universal Farm hub in your bio-region — like the ULCT Bristol model."],
            ["Investors & Allies", "Fund regenerative farms, training centres, and infrastructure with patient, ethical capital."],
          ].map(([t, d]) => (
            <div key={t} className="bg-card ring-1 ring-black/5 p-6 rounded-sm">
              <h3 className="font-serif text-xl text-gold-600">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-card ring-1 ring-black/5 p-8 md:p-12 rounded-sm">
          <form className="grid sm:grid-cols-2 gap-5">
            {[
              ["Name", "name"],
              ["Email", "email"],
              ["Phone", "phone"],
              ["Location", "location"],
            ].map(([label, id]) => (
              <label key={id} className="block">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
                <input name={id} className="mt-1 w-full bg-background border border-input rounded-sm py-2.5 px-3 text-sm focus:outline-none focus:border-gold-500/60" />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Purpose</span>
              <select name="purpose" className="mt-1 w-full bg-background border border-input rounded-sm py-2.5 px-3 text-sm focus:outline-none focus:border-gold-500/60">
                <option>General inquiry</option>
                <option>Become a contributor / vendor</option>
                <option>Host or attend a workshop</option>
                <option>Delivery partner</option>
                <option>Press / partnership</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea rows={5} className="mt-1 w-full bg-background border border-input rounded-sm py-2.5 px-3 text-sm focus:outline-none focus:border-gold-500/60" />
            </label>
            <button type="button" className="sm:col-span-2 mt-2 bg-foreground text-sand-50 py-3 text-xs uppercase tracking-[0.22em] font-bold rounded-sm hover:bg-moss-900 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-moss-900 text-sand-50 px-6 relative overflow-hidden">
        <div className="absolute inset-0 mandala-bg opacity-15" />
        <div className="max-w-5xl mx-auto relative grid md:grid-cols-3 gap-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-500">Email</span>
            <p className="mt-2 font-serif text-2xl">hello@universal-farm.earth</p>
            <p className="mt-1 text-sm text-sand-100/70">For general & contributor queries.</p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-500">ULCT Hubs</span>
            <p className="mt-2 font-serif text-2xl">Bristol · Goa · Auroville</p>
            <p className="mt-1 text-sm text-sand-100/70">Local circles, KC exchange, in-person training.</p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-500">Response time</span>
            <p className="mt-2 font-serif text-2xl">Within 5 days</p>
            <p className="mt-1 text-sm text-sand-100/70">Read by a steward, not a bot.</p>
          </div>
        </div>
      </section>
    </>
  );
}
