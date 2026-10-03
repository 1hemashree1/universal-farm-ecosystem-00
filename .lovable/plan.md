# Universal Farm — Division-wise Upgrade

Keep the current design, logo, images and content. Add a clear "What is Universal Farm" introduction and a structured Divisions system with in-depth, realistic modules.

## 1. Home page intro (top section, after hero)
- "What is Universal Farm" — warm, positive, grounded intro (no hype): who we are, why we exist, how Vedic + Yogic + Electroculture + community + KC fit together.
- "Our Divisions" grid — one card per division linking to its page.
- "Ripple of Impact" band: Individual -> Family -> Society -> Nation -> World -> Universe.

## 2. New Divisions hub page (/divisions)
Overview of all divisions with short descriptions, who it is for, and links. Added to main nav.

Divisions:
1. Mushroom Division
2. Vedic & Natural Farming
3. Desi Gaay & Gaushala
4. Electroculture & Energy Farming
5. Organic Inputs (vermicompost, compost, bio-inputs)
6. Seeds & Nursery
7. Training & Skill Development
8. Marketplace, Packaging & Branding
9. Community, Jobs & KC Economy

## 3. Each division page — same in-depth template
- Intro (what, why, energetic but realistic)
- Varieties / offerings
- Full process step-by-step (practical timelines, inputs, conditions)
- Waste-to-value loop
- Products and packaging
- Training levels (beginner / advanced / master)
- Jobs and income possibilities (realistic roles)
- Marketing and selling (local, online, KC)
- Impact ripple (health, family, society, nation, planet)
- FAQ + CTA

## 4. Mushroom Division (flagship, deepest)
- Varieties: Oyster, Button, Milky, Shiitake, Lion's Mane, Reishi, Cordyceps — with season, temperature, humidity, cycle days.
- Process: culture -> spawn -> substrate prep and sterilization -> inoculation -> incubation -> fruiting -> harvest -> grading -> drying/packaging -> storage.
- Spent Mushroom Substrate (SMS) -> vermicompost -> organic compost -> field and farm use, animal feed, soil revival.
- Products, packaging formats, shelf life.
- Training tracks, skill certificates, job roles (spawn tech, grower, packer, sales, trainer), small-unit economics example.
- Natural alignment and wellbeing ripple.

Existing /mushrooms, /methods, /desi-gaay, /training pages are expanded into this structure rather than duplicated; new pages added for divisions that don't exist yet.

## Technical details
- Division content stored in one data file (src/data/divisions.ts) and rendered by reusable section components, so every division page stays consistent.
- New routes: /divisions plus one route per new division, each with its own head() metadata; sitemap updated.
- Reuse existing PageHero, SectionHeading, styles; generate a few natural photos where needed.
- Separately fix the build error reported in src/hooks/use-mobile.tsx (React UMD global import) and verify all pages load.
