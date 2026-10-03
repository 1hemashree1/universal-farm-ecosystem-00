import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { RippleBand } from "@/components/DivisionsGrid";
import { getDivision, rippleNote } from "@/data/divisions";

export const Route = createFileRoute("/divisions/$slug")({
  loader: ({ params }) => {
    const d = getDivision(params.slug);
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.name} — Universal Farm`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.summary },
      ],
    };
  },
  notFoundComponent: DivisionNotFound,
  component: DivisionPage,
});

function DivisionNotFound() {
  return (
    <div className="pt-40 pb-20 text-center">
      <h1 className="font-serif text-4xl">Division not found</h1>
      <Link to="/divisions" className="mt-6 inline-block text-primary underline">See all divisions</Link>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 grid sm:grid-cols-2 gap-3">
      {items.map((x) => (
        <li key={x} className="rounded-xl border border-border bg-card px-5 py-4 text-sm">{x}</li>
      ))}
    </ul>
  );
}

function DivisionPage() {
  const d = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={d.name} title={d.tagline} intro={d.summary} />

      <section className="py-20 px-6 max-w-4xl mx-auto space-y-5 text-lg text-muted-foreground">
        {d.intro.map((p) => <p key={p}>{p}</p>)}
        <p className="text-base"><strong className="text-foreground">Who it's for:</strong> {d.forWhom}</p>
      </section>

      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Varieties & offerings" title="What we grow and offer" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.offerings.map((o) => (
              <div key={o.name} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl">{o.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <SectionHeading eyebrow="Step by step" title="The complete process" />
        <ol className="mt-10 space-y-4">
          {d.process.map((s, i) => (
            <li key={s.step} className="flex gap-5 rounded-xl border border-border bg-card p-5">
              <span className="font-serif text-2xl text-gold-600 w-8 shrink-0">{i + 1}</span>
              <div><h4 className="font-semibold">{s.step}</h4><p className="text-sm text-muted-foreground mt-1">{s.detail}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Waste to value" title="The closed loop" intro={rippleNote} />
          <List items={d.loop} />
        </div>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <SectionHeading eyebrow="Products & packaging" title="What reaches the market" />
        <List items={d.products} />
      </section>

      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Training" title="Learn it properly" />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {d.training.map((t) => (
              <div key={t.level} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-serif text-xl">{t.level}</h3>
                <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">{t.topics.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div><SectionHeading eyebrow="Livelihoods" title="Jobs & income" /><List items={d.jobs} /></div>
        <div><SectionHeading eyebrow="Selling" title="Marketing channels" /><List items={d.marketing} /></div>
      </section>

      {d.economics && (
        <section className="py-20 px-6 bg-sand-100">
          <div className="max-w-5xl mx-auto">
            <SectionHeading eyebrow="Indicative numbers" title="A small unit, realistically" intro="Figures are indicative and vary by region, season and skill." />
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {d.economics.map((e) => (
                <div key={e.label} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{e.label}</p>
                  <p className="font-serif text-xl mt-2">{e.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionHeading eyebrow="Impact" title="Harmony from self to universe" />
        <div className="mt-10"><RippleBand /></div>
      </section>

      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-8 space-y-4">
            {d.faq.map((f) => (
              <details key={f.q} className="rounded-xl border border-border bg-card p-5">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium">Join this division</Link>
            <Link to="/divisions" className="rounded-full border border-border px-6 py-3 text-sm font-medium">All divisions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
