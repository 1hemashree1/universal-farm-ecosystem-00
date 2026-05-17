export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  fiat: number; // INR
  kc: number;
  savePct: number;
  blurb: string;
};

import seeds from "@/assets/product-seeds.jpg";
import ghee from "@/assets/product-ghee.jpg";
import mushroom from "@/assets/product-mushroom.jpg";
import copper from "@/assets/product-copper.jpg";

export const products: Product[] = [
  {
    slug: "vedic-heritage-seeds",
    name: "Vedic Heritage Seeds",
    category: "Seeds",
    image: seeds,
    fiat: 1200,
    kc: 1.2,
    savePct: 20,
    blurb: "Heirloom desi varieties saved across lunar cycles by partner farmers.",
  },
  {
    slug: "a2-bilona-ghee",
    name: "A2 Bilona Ghee",
    category: "Desi Gaay",
    image: ghee,
    fiat: 3400,
    kc: 3.6,
    savePct: 15,
    blurb: "Hand-churned from indigenous cow milk, slow-cooked over wood fire.",
  },
  {
    slug: "pink-oyster-grow-kit",
    name: "Pink Oyster Grow Kit",
    category: "Mycology",
    image: mushroom,
    fiat: 850,
    kc: 0.8,
    savePct: 30,
    blurb: "Mist twice a day, harvest in 10 days. Beginner-friendly home kit.",
  },
  {
    slug: "atmospheric-copper-coil",
    name: "Atmospheric Copper Coil",
    category: "Electroculture",
    image: copper,
    fiat: 800,
    kc: 0.9,
    savePct: 10,
    blurb: "Hand-spiraled copper antenna for atmospheric energy harvesting.",
  },
];

export const productCategories = [
  "Seeds",
  "Mycology",
  "Desi Gaay",
  "Electroculture",
  "Herbs",
  "Tools",
] as const;
