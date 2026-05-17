import { useMemo } from "react";

export function Particles() {
  const items = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 18 + Math.random() * 22,
        delay: -Math.random() * 30,
        opacity: 0.25 + Math.random() * 0.45,
        key: i,
      })),
    [],
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: "strict" }}
    >
      {items.map((p) => (
        <span
          key={p.key}
          className="particle absolute rounded-full bg-gold-500"
          style={{
            left: `${p.left}%`,
            bottom: `-10px`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            filter: "blur(0.5px)",
          }}
        />
      ))}
    </div>
  );
}
