import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/community")({
  component: CommunityPage,
  head: () => ({
    meta: [
      { title: "Community — Universal Farm" },
      { name: "description", content: "Join the global Universal Farm community of farmers, researchers, mycologists and seekers." },
      { property: "og:title", content: "Community — Universal Farm" },
      { property: "og:description", content: "A global network of conscious cultivators." },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
});

function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="The Living Network"
        title={<>Find your <em className="italic text-gold-600">people</em>. Tend your bio-region.</>}
        intro="Connect with verified farmers, attend local circles, exchange seeds, share methods — and earn KC for the wisdom you contribute back."
      />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <Card title="Find Local Circles" body="Discover farms, gaushalas, sellers and meetups in your region. Reduce transport, deepen relationship." />
          <Card title="Share & Discuss" body="Forums by crop, method and bio-region. Photos, journals, experiments — everything cited and traceable." />
          <Card title="Verified Sellers" body="Community-reviewed contributors with eco-ratings and natural-farming scores." />
          <Card title="Direct Messaging" body="Talk to farmers and trainers directly. Coordinate orders, swaps and visits." />
        </div>
      </section>

      <section className="py-24 bg-moss-900 text-sand-50 px-6 relative overflow-hidden">
        <div className="absolute inset-0 mandala-bg opacity-20" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">Apply to join.</h2>
          <p className="text-sand-100/70 mb-8">The community is invite-and-application based to preserve quality and trust. Tell us a little about yourself.</p>
          <form className="space-y-4 text-left">
            {[
              ["name", "Your name"],
              ["email", "Email"],
              ["location", "Location / bio-region"],
            ].map(([id, label]) => (
              <label key={id} className="block">
                <span className="text-[10px] uppercase tracking-widest text-sand-100/60">{label}</span>
                <input
                  name={id}
                  className="mt-1 w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-3 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-gold-500/60"
                />
              </label>
            ))}
            <label className="block">
              <span className="text-[10px] uppercase tracking-widest text-sand-100/60">Why do you want to join?</span>
              <textarea
                rows={4}
                className="mt-1 w-full bg-white/5 border border-white/10 rounded-sm py-2.5 px-3 text-sm focus:outline-none focus:border-gold-500/60"
              />
            </label>
            <button
              type="button"
              className="w-full text-[11px] uppercase tracking-[0.22em] font-bold bg-gold-500 hover:bg-gold-600 transition-colors py-3.5 rounded-xs text-white"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-card ring-1 ring-black/5 p-8 rounded-sm">
      <h3 className="font-serif text-2xl text-gold-600">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
