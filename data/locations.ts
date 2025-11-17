import type { LocationItem } from "./types";

export const locationsData: LocationItem[] = [
  {
    slug: "san-diego-ca",
    name: "San Diego",
    priority: 1,
    route: "/service-areas/san-diego-ca",
    type: "city",
    heroImage: "/locations/san-diego-ca/hero.jpg",
    description:
      "Core coastal hub with biotech, defense, tourism, and university anchors. Investors gain steady population growth, limited supply, and consistent demand for retail and net lease offerings.",
    highlights: [
      "Downtown, Mission Valley, and UTC coverage",
      "High household incomes and tourism spend",
      "Tight retail and medical office vacancy",
    ],
    faqs: [
      {
        question: "How competitive is San Diego, CA inventory?",
        answer:
          "San Diego, CA inventory moves fast, so we send priority alerts and schedule tours before public launch.",
      },
      {
        question: "Do you track coastal zoning changes?",
        answer:
          "We follow San Diego, CA planning meetings and note items that could affect height, signage, or ingress.",
      },
      {
        question: "What lease terms are most common?",
        answer:
          "San Diego, CA triple net deals usually stretch 10–20 years with tenants covering taxes, insurance, and upkeep. We flag whether each file is an absolute NNN with zero landlord duties or a traditional NNN where roof or parking items still sit on your list.",
      },
      {
        question: "Will you include suburban comparables?",
        answer:
          "We include comps from nearby San Diego, CA suburbs so you can benchmark pricing before writing offers.",
      },
    ],
  },
  {
    slug: "la-jolla-ca",
    name: "La Jolla",
    parent: "san-diego-ca",
    priority: 9,
    route: "/service-areas/la-jolla-ca",
    type: "neighborhood",
    heroImage: "/locations/la-jolla-ca/hero.jpg",
    description:
      "Luxury shoreline pocket with hospital clusters, high end retail, and tourism traffic. Ideal for medical office, boutique retail, and long term ground lease positions.",
    highlights: [
      "Scripps and UC San Diego medical demand",
      "Premium storefront visibility",
      "Tight development pipeline",
    ],
    faqs: [
      {
        question: "What assets trade in La Jolla, CA?",
        answer:
          "La Jolla, CA trades include premier retail boxes, bank pads, medical offices, and hospitality suites.",
      },
      {
        question: "Is parking a concern?",
        answer:
          "La Jolla, CA sites require creative parking, so we flag structured options or valet agreements early.",
      },
      {
        question: "Do tenants sign longer leases?",
        answer:
          "Many La Jolla, CA tenants sign ten year terms to secure the location, especially medical operators.",
      },
      {
        question: "How soon can I tour assets?",
        answer:
          "We maintain broker relationships so La Jolla, CA tours can be arranged within days of a request.",
      },
    ],
  },
  {
    slug: "del-mar-ca",
    name: "Del Mar",
    priority: 10,
    route: "/service-areas/del-mar-ca",
    type: "city",
    heroImage: "/locations/del-mar-ca/hero.jpg",
    description:
      "Coastal village north of San Diego with affluent demographics, race track visitors, and mixed hospitality demand.",
    highlights: [
      "Seasonal population spikes",
      "Boutique mixed use assets",
      "Limited new construction",
    ],
    faqs: [
      {
        question: "What cap rates prevail in Del Mar, CA?",
        answer:
          "Del Mar, CA assets usually trade with compressed cap rates due to scarcity, so yields are lower than inland markets.",
      },
      {
        question: "Are there ground lease options?",
        answer:
          "Select Del Mar, CA parcels remain on long term ground leases. We flag rent reset clauses for every file.",
      },
      {
        question: "Can I find hospitality deals?",
        answer:
          "Boutique hospitality and mixed use assets surface each year in Del Mar, CA, often tied to redevelopment plans.",
      },
      {
        question: "Do you cover entitlement timelines?",
        answer:
          "Yes, we highlight Del Mar, CA entitlement risk so your schedule and budget stay realistic.",
      },
    ],
  },
  {
    slug: "encinitas-ca",
    name: "Encinitas",
    priority: 6,
    route: "/service-areas/encinitas-ca",
    type: "city",
    heroImage: "/locations/encinitas-ca/hero.jpg",
    description:
      "Surf coast trade area with lifestyle retail, medical, and self storage demand driven by high income households.",
    highlights: [
      "Coastal retail corridors",
      "Growing medical office footprint",
      "Strong tourist spillover",
    ],
    faqs: [
      {
        question: "What tenants anchor Encinitas, CA?",
        answer:
          "Encinitas, CA corridors mix national grocers, natural foods, QSR, and boutique health operators.",
      },
      {
        question: "Is inventory mostly multi tenant?",
        answer:
          "Encinitas, CA features both multi tenant centers and single tenant pads, giving flexibility for 1031 buyers.",
      },
      {
        question: "How do rents compare to San Diego, CA?",
        answer:
          "Encinitas, CA rents sit slightly below the San Diego, CA core but trend upward due to limited supply.",
      },
      {
        question: "Do you track local zoning?",
        answer:
          "We participate in Encinitas, CA planning sessions and brief clients on upcoming streetscape changes.",
      },
    ],
  },
  {
    slug: "carlsbad-ca",
    name: "Carlsbad",
    priority: 5,
    route: "/service-areas/carlsbad-ca",
    type: "city",
    heroImage: "/locations/carlsbad-ca/hero.jpg",
    description:
      "North County employment hub with tech campuses, tourism, and suburban neighborhoods.",
    highlights: [
      "Legoland and resort traffic",
      "Industrial and flex parks",
      "Strong school district demand",
    ],
    faqs: [
      {
        question: "What property types fit Carlsbad, CA?",
        answer:
          "Carlsbad, CA supports industrial, flex, medical, and retail net lease investments.",
      },
      {
        question: "How is industrial absorption?",
        answer:
          "Carlsbad, CA industrial space fills quickly due to tech and life science demand.",
      },
      {
        question: "Are there hospitality options?",
        answer:
          "Carlsbad, CA offers branded hotels and lifestyle resorts that trade on predictable tourism metrics.",
      },
      {
        question: "Can you compare with San Diego, CA pricing?",
        answer:
          "We benchmark Carlsbad, CA cap rates against the San Diego, CA core for clarity.",
      },
    ],
  },
  {
    slug: "san-marcos-ca",
    name: "San Marcos",
    priority: 7,
    route: "/service-areas/san-marcos-ca",
    type: "city",
    heroImage: "/locations/san-marcos-ca/hero.jpg",
    description:
      "Education centered inland submarket with CSU San Marcos, logistics nodes, and new residential growth.",
    highlights: [
      "University driven demand",
      "Affordable logistics land",
      "Expanding medical presence",
    ],
    faqs: [
      {
        question: "Why consider San Marcos, CA?",
        answer:
          "San Marcos, CA blends university stability with new housing tracts, creating reliable retail and medical demand.",
      },
      {
        question: "Is there industrial land available?",
        answer:
          "San Marcos, CA industrial land is limited but still more attainable than coastal parcels.",
      },
      {
        question: "How far is it from San Diego, CA?",
        answer:
          "San Marcos, CA sits about thirty miles north of San Diego, CA, making it an easy drive for oversight.",
      },
      {
        question: "Do you include student housing data?",
        answer:
          "We include San Marcos, CA student housing trends when they affect mixed use demand.",
      },
    ],
  },
  {
    slug: "poway-ca",
    name: "Poway",
    priority: 8,
    route: "/service-areas/poway-ca",
    type: "city",
    heroImage: "/locations/poway-ca/hero.jpg",
    description:
      "Business park heavy submarket with defense, manufacturing, and suburban retail corridors.",
    highlights: [
      "Poway Road retail spine",
      "Defense and tech employers",
      "High household incomes",
    ],
    faqs: [
      {
        question: "What assets dominate Poway, CA?",
        answer:
          "Poway, CA features flex, industrial, and suburban retail assets backed by stable employers.",
      },
      {
        question: "Are leases mostly triple net?",
        answer:
          "Poway, CA inventory leans heavily on NNN or modified NNN structures, often with essential retailers or defense suppliers carrying taxes, insurance, and maintenance. We outline any carve outs—like roof or parking lot coverage—so you know exactly how passive each lease will be.",
      },
      {
        question: "Do you cover residential growth?",
        answer:
          "Yes, we monitor Poway, CA residential permits to forecast retail demand.",
      },
      {
        question: "How do cap rates compare?",
        answer:
          "Poway, CA cap rates usually run fifty to one hundred basis points higher than San Diego, CA coastal assets.",
      },
    ],
  },
  {
    slug: "chula-vista-ca",
    name: "Chula Vista",
    priority: 2,
    route: "/service-areas/chula-vista-ca",
    type: "city",
    heroImage: "/locations/chula-vista-ca/hero.jpg",
    description:
      "South Bay city with rapid residential growth, freeway frontage, and port adjacency.",
    highlights: [
      "Otay Ranch growth",
      "Port and border proximity",
      "Diverse tenant mix",
    ],
    faqs: [
      {
        question: "What drives Chula Vista, CA demand?",
        answer:
          "Chula Vista, CA growth comes from new housing, cross border trade, and healthcare expansions.",
      },
      {
        question: "Are there logistics plays?",
        answer:
          "Yes, Chula Vista, CA benefits from border logistics, making it ideal for distribution and service centers.",
      },
      {
        question: "Can I find larger parcels?",
        answer:
          "South Bay still offers larger tracts inside Chula Vista, CA for redevelopment or ground leases.",
      },
      {
        question: "Do tenants sign long leases?",
        answer:
          "Many national tenants sign ten year terms in Chula Vista, CA because of the population trajectory.",
      },
    ],
  },
  {
    slug: "oceanside-ca",
    name: "Oceanside",
    priority: 3,
    route: "/service-areas/oceanside-ca",
    type: "city",
    heroImage: "/locations/oceanside-ca/hero.jpg",
    description:
      "Coastal city with military, tourism, and lifestyle redevelopment near the harbor and downtown core.",
    highlights: [
      "Camp Pendleton proximity",
      "Harbor and pier traffic",
      "Downtown revitalization",
    ],
    faqs: [
      {
        question: "What sectors thrive in Oceanside, CA?",
        answer:
          "Oceanside, CA supports hospitality, retail, medical, and self storage tied to military households and tourists.",
      },
      {
        question: "Are there adaptive reuse projects?",
        answer:
          "Yes, Oceanside, CA downtown features adaptive reuse buildings ideal for creative investors.",
      },
      {
        question: "How is rental demand?",
        answer:
          "Oceanside, CA enjoys consistent demand from Marines, commuters, and visitors seeking coastal inventory.",
      },
      {
        question: "Do you compare it to San Diego, CA?",
        answer:
          "We outline pricing spreads between Oceanside, CA and the San Diego, CA core for context.",
      },
    ],
  },
  {
    slug: "escondido-ca",
    name: "Escondido",
    priority: 4,
    route: "/service-areas/escondido-ca",
    type: "city",
    heroImage: "/locations/escondido-ca/hero.jpg",
    description:
      "Historic inland city with medical campuses, auto retail, and infill opportunities along I-15.",
    highlights: [
      "Palomar Medical Center anchor",
      "Auto Park Way dealership cluster",
      "Civic and cultural amenities",
    ],
    faqs: [
      {
        question: "Why target Escondido, CA?",
        answer:
          "Escondido, CA offers solid yields, freeway visibility, and strong medical anchors for 1031 buyers.",
      },
      {
        question: "Is inventory mostly older stock?",
        answer:
          "Escondido, CA balances vintage downtown assets with newer medical and retail developments.",
      },
      {
        question: "Do you cover city incentive programs?",
        answer:
          "We highlight Escondido, CA incentive zones and facade grants when relevant.",
      },
      {
        question: "How far is it from San Diego, CA?",
        answer:
          "Escondido, CA sits about thirty miles north of San Diego, CA, making it easy to supervise.",
      },
    ],
  },
  {
    slug: "remote-san-diego-investor-ca",
    name: "Remote San Diego Investor Desk",
    priority: 11,
    route: "/service-areas/remote-san-diego-investor-ca",
    type: "remote",
    heroImage: "/locations/remote-san-diego-investor-ca/hero.jpg",
    description:
      "For investors located outside California who still want San Diego County coverage. We package submarket intel, property walkthroughs, and digital diligence support.",
    highlights: [
      "Virtual tours and recordings",
      "Local vendor introductions",
      "Consolidated reporting",
    ],
    faqs: [
      {
        question: "How do remote investors inspect San Diego, CA assets?",
        answer:
          "We provide live video, third party inspections, and detailed memos so out of market investors see every San Diego, CA detail.",
      },
      {
        question: "Do you help with property management?",
        answer:
          "Yes, we introduce vetted San Diego, CA managers and coordinate turnovers when necessary.",
      },
      {
        question: "Can you handle document pickups?",
        answer:
          "We run point on local filings and courier needs anywhere in San Diego, CA.",
      },
      {
        question: "What about banking relationships?",
        answer:
          "We connect remote clients with San Diego, CA banking teams comfortable funding exchanges for out of state owners.",
      },
    ],
  },
];

