import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { products, productCategories } from "@/data/products";
import { CurrencySelector } from "@/components/CurrencySelector";
import { useCurrency } from "@/lib/currency";

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
  const { format, kcPriceIn, meta } = useCurrency();

  return (
    <>
      <PageHero
        eyebrow="Marketplace"
        title={<>Provisions from the <em className="italic text-gold-600">regenerative network</em>.</>}
        intro="Every product is sourced from verified contributors and priced in both fiat and Kindness Credits. Paying with KC unlocks 10–30% community pricing."
      />

      <section className="px-6 -mt-8">
        <div className="max-w-7xl mx-auto bg-moss-900 text-sand-50 rounded-sm p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse-soft" />
            <p className="text-sm">
              Showing prices in <strong>{meta.code}</strong> · 1 KC ={" "}
              <strong className="text-gold-500">{format(kcPriceIn())}</strong>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest text-sand-100/60">Change currency</span>
            <CurrencySelector />
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-sand-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ["Verified contributors", "Every vendor is reviewed by the community for natural-farming practices, traceability, and ethical sourcing."],
            ["Dual pricing", "Pay in your local fiat or in Kindness Credits. KC payments unlock 10–30% off the regular price."],
            ["Direct from the farm", "Where possible, products ship from the farm to your door. No anonymous middle layer."],
          ].map(([t, d]) => (
            <div key={t} className="space-y-2">
              <h3 className="font-serif text-2xl text-gold-600">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
