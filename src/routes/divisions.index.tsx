import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { DivisionsGrid, RippleBand } from "@/components/DivisionsGrid";

export const Route = createFileRoute("/divisions/")({
  head: () => ({
    meta: [
      { title: "Divisions — Universal Farm" },
      { name: "description", content: "Explore Universal Farm's nine divisions: mushrooms, Vedic farming, desi gaay, electroculture, compost, seeds, training, marketplace and KC community." },
      { property: "og:title", content: "Divisions — Universal Farm" },
      { property: "og:description", content: "Nine connected divisions forming one regenerative ecosystem." },
    ],
  }),
  component: DivisionsPage,
});

function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Divisions"
        title={<>One ecosystem, <em className="text-gold-600">nine living parts</em></>}
        intro="Each division is a complete, practical module — with process, training, jobs and markets — and each one feeds the others."
      />
      <section className="py-20 px-6 max-w-7xl mx-auto"><DivisionsGrid /></section>
      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Ripple of impact" title="From one person to the whole universe" />
          <div className="mt-10"><RippleBand /></div>
        </div>
      </section>
    </>
  );
}
