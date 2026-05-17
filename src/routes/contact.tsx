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
    </>
  );
}
