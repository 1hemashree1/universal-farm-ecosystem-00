import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { products, productCategories } from "@/data/products";

export const Route = createFileRoute("/marketplace")({
  component: MarketplacePage,
  head: () => ({
    meta: [
      { title: "Marketplace — Universal Farm" },
      { name: "description", content: "Seeds, mushrooms, Desi Gaay products, electroculture tools and more — at fiat or discounted Kindness Credit pricing." },
      { property: "og:title", content: "Marketplace — Universal Farm" },
      { property: "og:description", content: "Conscious marketplace with dual fiat / Kindness Credit pricing." },
      { property: "og:url", content: "/marketplace" },
    ],
    links: [{ rel: "canonical", href: "/marketplace" }],
  }),
});

function MarketplacePage() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Marketplace"
        title={<>Provisions from the <em className="italic text-gold-600">regenerative network</em>.</>}
        intro="Every product is sourced from verified contributors and priced in both fiat and Kindness Credits. Paying with KC unlocks 10–30% community pricing."
      />
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-12">
            {["All", ...productCategories].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1.5 text-[11px] uppercase tracking-widest font-semibold rounded-sm ring-1 transition-colors ${
                  cat === c ? "bg-foreground text-sand-50 ring-foreground" : "ring-black/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {list.length === 0 ? (
            <p className="text-muted-foreground text-sm">No items in this category yet — contributors welcome.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {list.map((p) => (
                <ProductCard key={p.slug} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
