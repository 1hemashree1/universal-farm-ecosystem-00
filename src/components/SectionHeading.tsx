import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-[0.3em] text-gold-600 font-semibold mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-medium text-balance leading-[1.05]">
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base text-muted-foreground text-pretty ${align === "center" ? "mx-auto" : ""} max-w-xl`}>
          {intro}
        </p>
      )}
    </div>
  );
}
