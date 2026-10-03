export type Division = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  forWhom: string;
  intro: string[];
  offerings: { name: string; detail: string }[];
  process: { step: string; detail: string }[];
  loop: string[];
  products: string[];
  training: { level: string; topics: string[] }[];
  jobs: string[];
  marketing: string[];
  economics?: { label: string; value: string }[];
  faq: { q: string; a: string }[];
};

export const ripple = [
  { level: "Individual", text: "Clean food, meaningful skill, daily movement outdoors and a calmer mind." },
  { level: "Family", text: "Home-grown nutrition, a second income stream and shared work that brings people together." },
  { level: "Society", text: "Local jobs, fair exchange through KC, less waste and stronger village and city hubs." },
  { level: "Nation", text: "Food security, revived soils, reduced chemical imports and rural livelihoods that stay rural." },
  { level: "World", text: "Carbon drawn back into soil, biodiversity restored and a replicable model shared openly." },
  { level: "Universe", text: "Living in rhythm with natural law — cycles of sun, moon, soil and spirit honoured, not exploited." },
];

const commonRipple = "Every division feeds the same circle: healthy soil, healthy food, healthy people, healthy communities.";

export const divisions: Division[] = [
  {
    slug: "mushroom",
    name: "Mushroom Division",
    tagline: "From spore to soil — a complete fungal economy.",
    summary: "Gourmet and medicinal mushrooms, spawn production, training, and turning spent substrate into compost.",
    forWhom: "Beginners with one spare room, farmers seeking off-season income, women's groups, youth and entrepreneurs.",
    intro: [
      "Mushrooms are one of the fastest, most space-efficient foods a person can grow. A 10×10 ft room can produce fresh harvest within 25–40 days, using agricultural waste like straw, sawdust and husk that would otherwise be burnt.",
      "Our Mushroom Division covers the full chain — culture and spawn, cultivation, harvest, value-added products, packaging, and finally the spent substrate that becomes rich compost for our fields. Nothing is wasted; everything returns.",
    ],
    offerings: [
      { name: "Oyster (Pleurotus)", detail: "Easiest start. 20–30°C, 80–90% RH, first flush in 18–25 days on paddy/wheat straw." },
      { name: "Button (Agaricus)", detail: "Cooler season. 14–18°C fruiting, 85–90% RH, composted substrate with casing, 35–45 days." },
      { name: "Milky (Calocybe)", detail: "Summer variety for hot regions. 30–35°C, casing layer, 35–40 days, long shelf life." },
      { name: "Shiitake (Lentinula)", detail: "Hardwood sawdust blocks or logs. 12–25°C, 60–120 day cycle, premium price." },
      { name: "Lion's Mane (Hericium)", detail: "Nootropic gourmet. 18–24°C, high humidity, supplemented sawdust, 30–45 days." },
      { name: "Reishi (Ganoderma)", detail: "Medicinal, slow. 25–30°C, 3–4 months, sold dried, sliced or as extract." },
      { name: "Cordyceps militaris", detail: "Lab-grown on grain/rice media under controlled light, 55–65 days, high value." },
    ],
    process: [
      { step: "Culture", detail: "Tissue or spore isolated on agar plates in a clean laminar-flow hood." },
      { step: "Spawn", detail: "Mycelium expanded onto sterilised wheat/jowar grain in bottles or bags (12–20 days)." },
      { step: "Substrate prep", detail: "Straw chopped, soaked and pasteurised (hot water 65–70°C or lime treatment); sawdust supplemented and autoclaved." },
      { step: "Inoculation", detail: "Spawn mixed at 2–5% of wet substrate weight, packed into bags in clean conditions." },
      { step: "Incubation", detail: "Dark, 22–28°C, until bags turn fully white (15–20 days for oyster)." },
      { step: "Fruiting", detail: "Fresh air, indirect light, humidity 80–90% maintained by misting or humidifiers." },
      { step: "Harvest", detail: "Picked by twisting just before caps flatten; 2–3 flushes per bag." },
      { step: "Grading & packing", detail: "Sorted by size and quality, packed in breathable punnets or dried at 45–55°C." },
      { step: "Storage & dispatch", detail: "Fresh at 2–4°C for 3–5 days; dried in airtight pouches for 6–12 months." },
    ],
    loop: [
      "Spent Mushroom Substrate (SMS) collected after final flush",
      "Fed to vermicompost beds — earthworms convert it in 45–60 days",
      "Or composted with cow dung and leaves into organic compost",
      "Applied to Vedic fields, nurseries and kitchen gardens",
      "Partly used as cattle feed supplement and soil conditioner",
      "Revived soil grows straw and grain — which becomes substrate again",
    ],
    products: ["Fresh mushrooms (200 g / 1 kg packs)", "Dried mushrooms and powder", "Pickles, soups, cookies, papad", "Medicinal extracts and capsules", "Ready-to-fruit grow kits", "Grain spawn packets", "Sterilised substrate bags", "SMS-based vermicompost"],
    training: [
      { level: "Beginner (3 days)", topics: ["Mushroom biology", "Oyster cultivation at home", "Hygiene and contamination basics"] },
      { level: "Advanced (2 weeks)", topics: ["Spawn production", "Lab setup and sterile technique", "Button & milky cultivation", "Climate control"] },
      { level: "Master (1–3 months)", topics: ["Medicinal mushrooms & cordyceps", "Commercial unit design", "Value addition & export standards", "Trainer certification"] },
    ],
    jobs: ["Spawn lab technician", "Grower / farm supervisor", "Harvest & packing staff", "Dryer and processing operator", "Sales and delivery partner", "Trainer and extension worker", "Compost unit operator"],
    marketing: ["Direct to homes, restaurants and hotels", "Weekly farmers markets and hub stalls", "Universal Farm marketplace — priced in fiat and ∞KC", "Grow-kit subscriptions and workshops", "Bulk dried supply to processors"],
    economics: [
      { label: "Room size", value: "200–300 sq ft" },
      { label: "Bags per cycle", value: "300–400 oyster bags" },
      { label: "Yield per cycle", value: "≈ 300–450 kg fresh" },
      { label: "Cycle length", value: "≈ 45–60 days" },
      { label: "Indicative setup", value: "₹40,000–80,000 (home scale)" },
    ],
    faq: [
      { q: "Do I need a lab to start?", a: "No. Start by buying quality spawn and growing oyster. Add a lab once you're consistent." },
      { q: "What is the biggest risk?", a: "Contamination from poor hygiene. Our training focuses heavily on clean practice." },
      { q: "Will you buy my harvest?", a: "Trained members can list on our marketplace and sell through hub buy-back where available." },
    ],
  },
  {
    slug: "vedic-farming",
    name: "Vedic & Natural Farming",
    tagline: "Ancient wisdom, living soil, cosmic rhythm.",
    summary: "Chemical-free cultivation with indigenous seeds, cow-based inputs, mixed cropping and lunar calendars.",
    forWhom: "Farmers transitioning from chemicals, landowners, gardeners and communities seeking food sovereignty.",
    intro: [
      "Vedic farming treats the farm as a living organism — soil, plants, animals, water, sunlight and human intention working together.",
      "We combine traditional practices like Jeevamrut, Beejamrut and panchagavya with modern soil testing so results are measurable, not just believed.",
    ],
    offerings: [
      { name: "Soil revival programs", detail: "Mulching, green manure and microbial inputs to rebuild organic carbon." },
      { name: "Multi-layer cropping", detail: "Tall, mid, bush and ground crops sharing the same plot for year-round output." },
      { name: "Lunar sowing calendar", detail: "Sowing and harvest aligned with moon phases and seasons." },
      { name: "Agnihotra & mantra practice", detail: "Optional spiritual practices for farmers who wish to include them." },
    ],
    process: [
      { step: "Soil test", detail: "Baseline pH, organic carbon and microbial activity." },
      { step: "Transition (1–3 yrs)", detail: "Stop chemicals gradually, add mulch, compost and Jeevamrut." },
      { step: "Seed treatment", detail: "Beejamrut treatment of indigenous seeds before sowing." },
      { step: "Mixed sowing", detail: "Companion crops and border trees planted together." },
      { step: "Natural protection", detail: "Neemastra, Brahmastra and trap crops instead of pesticides." },
      { step: "Harvest & seed saving", detail: "Best plants kept for next season's seed." },
    ],
    loop: ["Crop residue → mulch", "Cow dung & urine → Jeevamrut", "Kitchen waste → compost", "Compost → soil → crops"],
    products: ["Grains, pulses and millets", "Seasonal vegetables and fruits", "Cold-pressed oils", "Jaggery and spices"],
    training: [
      { level: "Beginner", topics: ["Principles of natural farming", "Making Jeevamrut"] },
      { level: "Advanced", topics: ["Multi-layer design", "Pest management", "Certification"] },
      { level: "Master", topics: ["Farm planning at scale", "Training farmers"] },
    ],
    jobs: ["Farm manager", "Input maker", "Field trainer", "Soil tester", "Seed keeper"],
    marketing: ["Community-supported agriculture boxes", "Marketplace in fiat and ∞KC", "Organic stores and hub shops"],
    faq: [{ q: "Will yields drop?", a: "Often slightly in year one, then stabilise as soil recovers, with lower input costs." }],
  },
  {
    slug: "desi-gaay",
    name: "Desi Gaay & Gaushala",
    tagline: "The cow as the heart of a natural farm.",
    summary: "Ethical care of indigenous cows, A2 dairy, ghee and cow-based farm inputs.",
    forWhom: "Gaushalas, dairy farmers, natural farmers and families who want to support or adopt a cow.",
    intro: ["Indigenous cows provide A2 milk, dung and urine that power natural farming. We care for them ethically for life — including non-milking cows."],
    offerings: [
      { name: "Gir, Sahiwal, Tharparkar, Red Sindhi", detail: "Heat-hardy breeds suited to Indian climates." },
      { name: "Adopt-a-cow", detail: "Sponsor feed and care monthly, in fiat or ∞KC." },
    ],
    process: [
      { step: "Care", detail: "Open grazing, clean shelter, veterinary checks." },
      { step: "Milking", detail: "Calf feeds first; only surplus is collected." },
      { step: "Value addition", detail: "Bilona ghee, curd, buttermilk." },
      { step: "Farm inputs", detail: "Dung and urine into Jeevamrut, compost, biogas." },
    ],
    loop: ["Fodder → cow", "Dung → biogas & compost", "Compost → fodder fields"],
    products: ["A2 milk & bilona ghee", "Dung cakes & dhoop", "Panchagavya", "Vermicompost"],
    training: [{ level: "Beginner", topics: ["Cow care basics", "Ghee making"] }, { level: "Advanced", topics: ["Gaushala management", "Biogas"] }],
    jobs: ["Cow caretaker", "Dairy processor", "Biogas operator"],
    marketing: ["Local subscription", "Marketplace", "Ghee gift packs"],
    faq: [{ q: "What happens to old cows?", a: "They stay in the gaushala for life; their dung still contributes to the farm." }],
  },
  {
    slug: "electroculture",
    name: "Electroculture & Energy Farming",
    tagline: "Working with the subtle currents of the earth.",
    summary: "Copper antennas, atmospheric energy and solar systems tested in real field trials.",
    forWhom: "Curious growers, researchers and gardeners willing to experiment and record results.",
    intro: ["Electroculture uses copper coils and antennas to interact with atmospheric electricity. Results vary, so we run honest side-by-side trials and share the data."],
    offerings: [
      { name: "Copper antennas", detail: "Hand-wound coils for beds and pots." },
      { name: "Field trials", detail: "Control vs antenna plots with yield records." },
      { name: "Solar & pumps", detail: "Clean energy for irrigation and drying." },
    ],
    process: [
      { step: "Plan plots", detail: "Mark control and test beds with identical soil and seed." },
      { step: "Install", detail: "Antenna orientation and coil direction recorded." },
      { step: "Observe", detail: "Germination, growth, water use and yield logged weekly." },
      { step: "Share", detail: "Results published to the community." },
    ],
    loop: ["Scrap copper → antennas", "Solar → pumps & dryers"],
    products: ["Copper antenna kits", "Solar dryer units", "Trial logbooks"],
    training: [{ level: "Beginner", topics: ["Making an antenna", "Trial basics"] }],
    jobs: ["Antenna maker", "Solar technician", "Trial recorder"],
    marketing: ["Kits on marketplace", "Workshops"],
    faq: [{ q: "Is it scientifically proven?", a: "Evidence is mixed. That's why we test transparently rather than promise." }],
  },
  {
    slug: "organic-inputs",
    name: "Organic Inputs & Compost",
    tagline: "Turning waste into the farm's most valuable asset.",
    summary: "Vermicompost, SMS compost, Jeevamrut, bio-pesticides and biochar.",
    forWhom: "Farmers, nurseries, municipalities and small entrepreneurs.",
    intro: ["Healthy soil is built, not bought. This division converts farm, kitchen and mushroom waste into high-quality inputs."],
    offerings: [
      { name: "Vermicompost", detail: "Eisenia fetida beds, 45–60 day cycle." },
      { name: "SMS compost", detail: "From the Mushroom Division's spent substrate." },
      { name: "Liquid inputs", detail: "Jeevamrut, vermiwash, fish amino." },
      { name: "Biochar", detail: "Low-smoke kilns turning residue into carbon." },
    ],
    process: [
      { step: "Collect", detail: "Dung, SMS, leaves and kitchen waste." },
      { step: "Pre-compost", detail: "15–20 days partial decomposition." },
      { step: "Worm beds", detail: "Moisture 60–70%, shade, 45–60 days." },
      { step: "Sieve & pack", detail: "Screened and packed in 1, 5, 25 and 50 kg bags." },
    ],
    loop: ["Waste → compost → soil → food → waste"],
    products: ["Vermicompost", "Vermiwash", "Biochar", "Bio-pesticides"],
    training: [{ level: "Beginner", topics: ["Home composting", "Worm bed setup"] }, { level: "Advanced", topics: ["Commercial unit"] }],
    jobs: ["Compost operator", "Packing staff", "Distribution"],
    marketing: ["Nurseries and farmers", "Urban garden packs", "Marketplace"],
    economics: [{ label: "Unit", value: "10 beds" }, { label: "Output", value: "≈ 3–4 tonnes / cycle" }],
    faq: [{ q: "Does it smell?", a: "Properly managed vermicompost smells like forest soil." }],
  },
  {
    slug: "seeds-nursery",
    name: "Seeds & Nursery",
    tagline: "Protecting the genetic heritage of our food.",
    summary: "Indigenous seed bank, saplings, fruit trees and medicinal herbs.",
    forWhom: "Farmers, gardeners, schools and reforestation groups.",
    intro: ["Open-pollinated indigenous seeds can be saved and replanted — the foundation of food sovereignty."],
    offerings: [{ name: "Seed bank", detail: "Heirloom grains, millets and vegetables." }, { name: "Nursery", detail: "Fruit, forest and medicinal saplings." }],
    process: [{ step: "Collect", detail: "From healthy mother plants." }, { step: "Dry & test", detail: "Germination testing." }, { step: "Store", detail: "Clay pots with neem leaves." }, { step: "Share", detail: "Seed swaps and sales." }],
    loop: ["Seed → crop → best plants → seed"],
    products: ["Seed packets", "Saplings", "Herb plants"],
    training: [{ level: "Beginner", topics: ["Seed saving"] }, { level: "Advanced", topics: ["Grafting & nursery business"] }],
    jobs: ["Nursery worker", "Seed keeper", "Grafting technician"],
    marketing: ["Seed swaps", "Marketplace", "Plantation drives"],
    faq: [{ q: "Are your seeds hybrid?", a: "No — open-pollinated so you can save them." }],
  },
  {
    slug: "training",
    name: "Training & Skill Development",
    tagline: "Skills that feed a family and heal a field.",
    summary: "Certified courses across every division, from one-day workshops to master programs.",
    forWhom: "Youth, women, farmers, career-changers and institutions.",
    intro: ["Every division becomes a learning path. Learn on a real farm, then earn through the ecosystem."],
    offerings: [{ name: "Workshops", detail: "1–3 days, hands-on." }, { name: "Certifications", detail: "2 weeks to 3 months." }, { name: "Online modules", detail: "Videos and live Q&A." }],
    process: [{ step: "Choose path", detail: "Pick a division." }, { step: "Learn", detail: "Theory plus field practice." }, { step: "Certify", detail: "Practical assessment." }, { step: "Earn", detail: "Job, own unit or trainer role." }],
    loop: ["Learner → practitioner → trainer"],
    products: ["Courses", "Manuals", "Certificates"],
    training: [{ level: "Beginner", topics: ["Introductions to each division"] }, { level: "Master", topics: ["Trainer of trainers"] }],
    jobs: ["Trainer", "Course coordinator", "Field mentor"],
    marketing: ["Fees in fiat or ∞KC", "Institutional partnerships"],
    faq: [{ q: "Is there a certificate?", a: "Yes, after a practical assessment." }],
  },
  {
    slug: "marketplace-packaging",
    name: "Marketplace, Packaging & Branding",
    tagline: "Fair trade from the farm to your door.",
    summary: "Eco-packaging, branding support and dual-currency selling in fiat and ∞KC.",
    forWhom: "Growers, makers and small brands in the network.",
    intro: ["Good produce deserves honest presentation. We help members package, brand and sell without exploitative middlemen."],
    offerings: [{ name: "Eco-packaging", detail: "Paper, leaf and compostable materials." }, { name: "Branding", detail: "Labels, photos and listings." }, { name: "Logistics", detail: "Hub collection and local delivery." }],
    process: [{ step: "Quality check", detail: "Grading and standards." }, { step: "Pack & label", detail: "Batch, date, origin." }, { step: "List", detail: "Fiat + ∞KC price." }, { step: "Deliver", detail: "Hub or courier." }],
    loop: ["Returned packaging reused or composted"],
    products: ["Packaging supplies", "Label design", "Listings"],
    training: [{ level: "Beginner", topics: ["Packaging basics", "Product photos"] }],
    jobs: ["Packer", "Designer", "Delivery partner", "Listing manager"],
    marketing: ["Universal Farm marketplace", "Hub shops", "Social media"],
    faq: [{ q: "What commission do you take?", a: "A small, transparent fee shared with members." }],
  },
  {
    slug: "community-kc",
    name: "Community, Jobs & KC Economy",
    tagline: "An economy built on kindness and contribution.",
    summary: "Local hubs, volunteering, jobs board and ∞KC Kindness Credits exchange.",
    forWhom: "Everyone who wants to contribute, trade or belong.",
    intro: ["The ULCT ∞KC model lets members trade goods, services and time fairly, alongside fiat."],
    offerings: [{ name: "Local hubs", detail: "Meeting, trading and training centres." }, { name: "Jobs board", detail: "Roles across all divisions." }, { name: "∞KC exchange", detail: "Dual-currency pricing." }],
    process: [{ step: "Join", detail: "Become a member." }, { step: "Contribute", detail: "Skills, goods or time." }, { step: "Earn KC", detail: "Recorded transparently." }, { step: "Spend", detail: "On the marketplace." }],
    loop: ["Contribution → KC → goods & services → contribution"],
    products: ["Membership", "KC gift cards", "Hub events"],
    training: [{ level: "Beginner", topics: ["How KC works"] }],
    jobs: ["Hub coordinator", "Volunteer lead", "Community admin"],
    marketing: ["Word of mouth", "Hub events"],
    faq: [{ q: "Is KC legal tender?", a: "No — it's a private community exchange credit within ULCT." }],
  },
];

export const rippleNote = commonRipple;
export const getDivision = (slug: string) => divisions.find((d) => d.slug === slug);
