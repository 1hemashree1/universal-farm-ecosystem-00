import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/training")({
  component: TrainingPage,
  head: () => ({
    meta: [
      { title: "Training & Events — Universal Farm" },
      { name: "description", content: "Apply for training, host workshops, organize meetups or become a trainer in the Universal Farm ecosystem." },
      { property: "og:title", content: "Training & Events — Universal Farm" },
      { property: "og:description", content: "Trainings, workshops, meetings, events." },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
});

const programs = [
  ["Vedic Farming Foundation", "5-day immersion", "Lunar calendar, Panchatatva, Beejamrut & Jeevamrut hands-on."],
  ["Yogic Cultivation Retreat", "7-day silent retreat", "Pranayama, mantra, intention-setting & farm sadhana."],
  ["Electroculture Lab", "3-day workshop", "Build copper spirals, magnetic water, soil mapping."],
  ["Mushroom Cultivation", "Beginner → Master", "Spawn lab, fruiting, value-add products, commercial setup."],
  ["Desi Gaay Care", "Weekend intensive", "Ethical care, A2 dairy, Panchagavya preparation."],
  ["Trainer Certification", "12-week program", "Become a Universal Farm certified trainer."],
];

function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Events"
        title={<>Learn the lineage. <em className="italic text-gold-600">Teach the next.</em></>}
        intro="Hands-on, in-the-field programs across India and online. Apply as a learner, or propose to host a workshop in your region."
      />

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(([t, d, body]) => (
            <article key={t} className="bg-card ring-1 ring-black/5 p-6 rounded-sm hover:ring-gold-500/40 transition-colors">
              <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">{d}</span>
              <h3 className="font-serif text-2xl mt-2">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-sand-100 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-2">Apply for a program</h2>
          <p className="text-muted-foreground mb-10">Our team will reach out within 5 working days.</p>
          <form className="grid sm:grid-cols-2 gap-5">
            {[
              ["Name", "name"],
              ["Email", "email"],
              ["Phone", "phone"],
              ["Location", "location"],
              ["Area of interest", "interest"],
              ["Experience level", "experience"],
            ].map(([label, id]) => (
              <label key={id} className="block">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
                <input
                  name={id}
                  className="mt-1 w-full bg-card border border-input rounded-sm py-2.5 px-3 text-sm focus:outline-none focus:border-gold-500/60"
                />
              </label>
            ))}
            <label className="block sm:col-span-2">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Your intention / message</span>
              <textarea rows={4} className="mt-1 w-full bg-card border border-input rounded-sm py-2.5 px-3 text-sm focus:outline-none focus:border-gold-500/60" />
            </label>
            <button type="button" className="sm:col-span-2 mt-2 bg-foreground text-sand-50 py-3 text-xs uppercase tracking-[0.22em] font-bold rounded-sm hover:bg-moss-900 transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
