// src/data/faq-data.js
// Central FAQ content for all service and city pages.
// Import what you need, or use getCityFAQs(cityName) for any city page.

// ─── POOL MAINTENANCE ───────────────────────────────────────────
export const poolCleaningFAQs = [
  {
    question: "How much does monthly pool service cost?",
    answer:
      "Monthly pool service typically ranges from $150 to $250 depending on pool size, chemical demand, and how much leaf and debris fall into the pool from surrounding trees. Pools with heavy landscaping require more chemical treatment and labor, which affects the rate. We assess each pool individually and give you a quote based on your specific setup.",
  },
  {
    question: "How often should I get my pool serviced?",
    answer:
      "For most residential pools in the San Fernando Valley and Santa Clarita area, weekly service is the right call. The heat and sun in our climate break down chlorine quickly and accelerate algae growth. Monthly or bi-weekly service often is not frequent enough to keep water consistently clean and safe.",
  },
  {
    question: "Do you bring your own chemicals?",
    answer:
      "Yes. We bring everything needed to balance and treat your pool on every visit. You do not need to stock or supply any chemicals. We test your water on-site and dose based on what the readings show that day, so your pool always gets exactly what it needs.",
  },
  {
    question: "What does a pool cleaning visit include?",
    answer:
      "Each visit includes skimming the surface, brushing the walls and floor, vacuuming debris, emptying skimmer and pump baskets, testing and balancing water chemistry, and a visual check of your equipment. If we notice anything off with your pump, filter, or other equipment, we let you know right away.",
  },
  {
    question: "Do I need to be home when you service my pool?",
    answer:
      "No. As long as we have access to the pool area, we can complete the service whether you are home or not. Most of our clients are away at work during their scheduled visits. We are fully licensed and insured, so you can trust us on your property.",
  },
  {
    question: "How long does a pool cleaning take?",
    answer:
      "Most residential pool cleanings take 30 to 60 minutes depending on pool size and condition. If there is an algae issue, a heavy debris load, or a chemical imbalance that needs extra attention, it may take a little longer that visit.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We serve the San Fernando Valley and Santa Clarita, including Santa Clarita, Valencia, Granada Hills, Porter Ranch, Northridge, Encino, Sherman Oaks, Woodland Hills, Calabasas, Burbank, Glendale, and Agoura Hills. Call us at (818) 804-8204 to confirm service in your area.",
  },
];

// ─── POOL REMODELING / REPLASTERING ─────────────────────────────
export const poolReplasteringFAQs = [
  {
    question: "How long does pool replastering take?",
    answer:
      "Pool replastering typically takes 5 to 7 days from draining to refill, depending on pool size and the finish selected. The prep and application usually take 1 to 2 days, followed by a curing period before the pool can be refilled. After refilling, we handle the chemical startup process to get the water balanced and safe for swimming.",
  },
  {
    question: "How do I know if my pool needs replastering?",
    answer:
      "Signs your pool needs replastering include a rough texture on the walls that scratches swimmers feet, visible cracks or chips in the surface, staining that will not come out with chemical treatment or acid washing, and water loss that is not explained by evaporation or a known equipment leak. If you are unsure, we offer free assessments.",
  },
  {
    question: "How much does pool replastering cost?",
    answer:
      "Pool replastering typically ranges from $5,000 to $12,000 depending on pool size and finish type. Standard white plaster is the most affordable option. Pebble, quartz, and exposed aggregate finishes cost more upfront but last significantly longer and have a more premium look. We provide a free on-site assessment and quote with no obligation.",
  },
  {
    question: "How long does new plaster last?",
    answer:
      "Standard white plaster lasts 10 to 15 years with proper water chemistry and regular maintenance. Pebble and quartz finishes can last 20 years or more. How long your plaster holds up depends heavily on keeping your water consistently balanced. Acidic or highly alkaline water speeds up deterioration significantly.",
  },
  {
    question: "Can I swim right after replastering?",
    answer:
      "Not immediately. After the pool is refilled, the water needs to be chemically balanced over several days before it is safe to swim in. We handle the entire startup process, including brushing the new plaster and adjusting chemistry daily during the curing period, so you do not have to worry about it.",
  },
  {
    question: "Is an acid wash enough or do I need to replaster?",
    answer:
      "An acid wash removes surface stains and calcium buildup but does not fix structural issues or replace worn plaster. If your plaster is thin, cracking throughout, or feels rough in large areas, replastering is the smarter investment. We inspect your pool and give you an honest recommendation on which option makes sense for your situation.",
  },
  {
    question: "Do you handle the full replastering job or do you subcontract it?",
    answer:
      "We coordinate replastering projects directly and work with a trusted network of experienced plasterers we have worked with for years. You deal with GK Swimming Pools from start to finish. We stay on the job and make sure everything is done to our standard before we sign off.",
  },
];

// ─── POOL REPAIRS ────────────────────────────────────────────────
export const poolRepairFAQs = [
  {
    question: "How do I know if my pool is leaking?",
    answer:
      "A simple check is the bucket test. Fill a bucket with pool water, set it on a pool step, mark both water levels, and leave it for 24 hours. If your pool loses more water than the bucket, you likely have a leak beyond normal evaporation. Other signs include consistently wet ground near equipment, dropping water levels, or needing to add more chemicals than usual to keep things balanced.",
  },
  {
    question: "What kinds of pool repairs do you handle?",
    answer:
      "We handle a wide range of repairs including pump and motor replacements, filter repairs and cleanings, heater diagnostics, crack repairs in plaster and coping, skimmer and return line repairs, salt cell service, and general equipment troubleshooting. If something is not working right with your pool, call us and we will diagnose it.",
  },
  {
    question: "How long do pool repairs take?",
    answer:
      "Simple repairs like pump replacements or filter fixes are often completed in a single visit. More involved work like plumbing repairs or crack injections may take 1 to 3 days depending on scope and parts availability. We always give you a clear timeline before starting.",
  },
  {
    question: "Do you offer free repair estimates?",
    answer:
      "Yes. We come out, diagnose the issue, and give you a clear quote before any work begins. No hidden fees, no surprises. You know exactly what the repair costs before we touch anything.",
  },
  {
    question: "Can you repair cracks in pool plaster?",
    answer:
      "Yes. Minor surface cracks can often be patched and sealed effectively. Larger structural cracks may require more extensive repair or a full replaster depending on their location and depth. We assess the situation honestly and recommend the most cost-effective solution for your pool.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. GK Swimming Pools is fully licensed and insured. You can feel confident that work is done correctly and that you are protected throughout the process. We stand behind everything we do.",
  },
];

// ─── CITY PAGES (dynamic) ────────────────────────────────────────
// Usage: getCityFAQs("Santa Clarita") — pass the city name from the page prop
export function getCityFAQs(city) {
  return [
    {
      question: `Do you service pools in ${city}?`,
      answer: `Yes. GK Swimming Pools provides weekly pool cleaning, chemical maintenance, equipment repairs, and replastering in ${city} and the surrounding area. We have been serving ${city} homeowners for years and know the area well. Call us at (818) 804-8204 to get started.`,
    },
    {
      question: `How much does pool service cost in ${city}?`,
      answer: `Monthly pool service in ${city} typically ranges from $150 to $250 depending on pool size, chemical demand, and surrounding landscaping. Trees and plants near the pool increase phosphate levels and algae risk, which affects the time and product required. We assess every pool individually and give you a quote with no obligation.`,
    },
    {
      question: `How quickly can you start pool service in ${city}?`,
      answer: `In most cases we can begin service within one to two weeks of your initial call. We will schedule a visit, assess your pool, and get you on our regular route. Call us at (818) 804-8204 and we will get you set up as soon as possible.`,
    },
    {
      question: `Is hard water a problem for pools in ${city}?`,
      answer: `Yes. The San Fernando Valley and Santa Clarita area have hard water with higher mineral content, which leads to calcium scaling on plaster, tile, and equipment over time. Regular service with proper chemical balancing helps control this and extends the life of your pool surfaces and equipment significantly.`,
    },
    {
      question: `What pool services do you offer in ${city}?`,
      answer: `We offer weekly pool cleaning and maintenance, pool replastering, equipment repairs, acid washing, filter service, and commercial pool care throughout ${city} and neighboring communities. Whatever your pool needs, we handle it. Contact us at (818) 804-8204 for a free assessment.`,
    },
  ];
}
