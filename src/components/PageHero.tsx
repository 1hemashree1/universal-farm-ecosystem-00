import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="pt-40 pb-20 px-6 bg-sand-100 relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-30" />
      <div className="max-w-4xl mx-auto relative animate-fade-up">
        <span className="text-[11px] uppercase tracking-[0.32em] text-gold-600 font-semibold">
          {eyebrow}
        </span>
        <h1 className="font-serif text-5xl md:text-7xl mt-5 leading-[1.02] text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
