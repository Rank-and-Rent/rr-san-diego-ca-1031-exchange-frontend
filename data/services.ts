import type { ServiceItem } from "./types";

const heroRetail = "/locations/san-diego-ca/hero.jpg";
const heroCoastal = "/locations/la-jolla-ca/hero.jpg";
const heroNorth = "/locations/encinitas-ca/hero.jpg";
const heroInland = "/locations/escondido-ca/hero.jpg";
const heroSouth = "/locations/chula-vista-ca/hero.jpg";

export const servicesData: ServiceItem[] = [
  {
    slug: "nnn-replacement-property-identification",
    name: "NNN Replacement Property Identification",
    short: "Curated single tenant net lease lists aligned to your 45 day window.",
    route: "/services/nnn-replacement-property-identification",
    category: "Identification",
    description:
      "We track active and off market single tenant deals nationwide and organize them by lease term, rent coverage, and credit quality. Every list references San Diego, CA exchange timelines so you stay compliant while sourcing across all 50 states.",
    heroImage: heroRetail,
    tags: ["NNN", "Single Tenant", "Nationwide"],
    workflows: ["Needs intake", "Inventory brief", "Letter of intent support"],
    highlight: "Same day NNN shortlists tied to your equity amount.",
    faqs: [
      {
        question: "How do you tailor NNN lists to my exchange?",
        answer:
          "We gather debt, equity, and rent goals during intake, then cross match those targets against active and shadow inventory tracked from San Diego, CA.",
      },
      {
        question: "Do you cover coastal and inland metros?",
        answer:
          "Yes, San Diego, CA investors receive candidates from primary, secondary, and tertiary metros so you can blend yield and credit strength.",
      },
      {
        question: "Can you keep me on pace for the 45 day deadline?",
        answer:
          "We timestamp every drop, flag ready-to-tour assets, and keep a shared tracker so your San Diego, CA exchange stays inside the IRS window.",
      },
    ],
  },
  {
    slug: "stnl-retail-list-san-diego",
    name: "San Diego CA STNL Retail List",
    short: "Local and national retail single tenant lists that mirror San Diego timing.",
    route: "/services/stnl-retail-list-san-diego",
    category: "Retail",
    description:
      "Retail investors receive branded convenience, pharmacy, fuel, and service retail options sized for San Diego, CA relinquished proceeds. We include rent bump notes, roof responsibilities, and store sales context.",
    heroImage: heroCoastal,
    tags: ["Retail", "STNL", "San Diego"],
    workflows: ["Tenant targeting", "Cap rate benchmarking", "Store performance pulls"],
    highlight: "Retail replacements that keep tax deferral and income predictable.",
    faqs: [
      {
        question: "Do you include new construction retail options near San Diego, CA?",
        answer:
          "Yes, we surface local coastal ground up builds plus national portfolios so you can weigh brand strength against yield.",
      },
      {
        question: "How detailed are your tenant write ups?",
        answer:
          "Each San Diego, CA retail brief includes credit snapshots, corporate guarantees, and maintenance language from the lease form.",
      },
      {
        question: "Can I mix local and out of state retail assets?",
        answer:
          "We build blended identification lists so San Diego, CA investors can keep one asset nearby and chase yield elsewhere when needed.",
      },
    ],
  },
  {
    slug: "industrial-net-lease-scouting",
    name: "Industrial Net Lease Scouting",
    short: "Locate modern industrial NNN and NN opportunities with mission critical tenants.",
    route: "/services/industrial-net-lease-scouting",
    category: "Industrial",
    description:
      "We find shallow bay, last mile, truck court, and manufacturing assets with creditworthy occupants. Each package includes ceiling height, dock counts, and rent growth assumptions benchmarked to San Diego, CA logistics demand.",
    heroImage: heroNorth,
    tags: ["Industrial", "Logistics", "NNN"],
    workflows: ["Spec verification", "Operating expense study", "Tenant interview"],
    highlight: "Industrial filters tuned for supply constrained coastal investors.",
    faqs: [
      {
        question: "Do you cover Southern California and interior markets?",
        answer:
          "Yes, we compare San Diego, CA rent comps with Inland Empire, Phoenix, Dallas, and Midwest markets to match your return target.",
      },
      {
        question: "Can you evaluate mission critical leases?",
        answer:
          "We extract assignment clauses, expansion options, and maintenance splits so San Diego, CA buyers understand control points.",
      },
      {
        question: "How fast can you set up property tours?",
        answer:
          "Most industrial tours are scheduled within one week because we keep broker and owner introductions warm for San Diego, CA buyers.",
      },
    ],
  },
  {
    slug: "medical-office-1031-matching",
    name: "Medical Office 1031 Matching",
    short: "Secure medical office and outpatient replacement assets with resilient tenants.",
    route: "/services/medical-office-1031-matching",
    category: "Medical",
    description:
      "We spotlight outpatient, dental, urgent care, and specialty clinics where leases deliver escalations, strong coverage, and minimal landlord duties. Each match references hospital systems that align with San Diego, CA demographics.",
    heroImage: heroSouth,
    tags: ["Medical Office", "Healthcare", "NNN"],
    workflows: ["Physician credit review", "Equipment audit", "Healthcare compliance"],
    highlight: "Healthcare assets with predictable rent and defensive demand.",
    faqs: [
      {
        question: "Do you vet physician financials for San Diego, CA clients?",
        answer:
          "Yes, we review guarantor statements and match them to lease obligations so you see real coverage numbers before offering.",
      },
      {
        question: "Can you source sale leasebacks with medical operators?",
        answer:
          "We maintain a sale leaseback list that includes hospital affiliates and private practices, all benchmarked to San Diego, CA returns.",
      },
      {
        question: "What about compliance risk?",
        answer:
          "We flag Stark and anti kickback considerations and route San Diego, CA investors to healthcare counsel when the structure requires it.",
      },
    ],
  },
  {
    slug: "self-storage-exchange-targets",
    name: "Self Storage Exchange Targets",
    short: "Identify stabilized and value add storage plays that work inside a 1031.",
    route: "/services/self-storage-exchange-targets",
    category: "Alternative",
    description:
      "Storage remains recession resistant and simple to manage. We track institutional stabilized assets, regional operators, and ground up conversions so San Diego, CA exchangers can diversify beyond retail.",
    heroImage: heroInland,
    tags: ["Self Storage", "Value Add", "NNN"],
    workflows: ["Rent roll scrub", "Unit mix review", "Management plan"],
    highlight: "Storage opportunities sized to typical coastal exchange proceeds.",
    faqs: [
      {
        question: "Do you include third party management options?",
        answer:
          "Yes, we connect San Diego, CA investors with ISS and REIT level managers so operations stay passive.",
      },
      {
        question: "What about expansion potential?",
        answer:
          "Each profile lists zoning notes and coverage ratios next to San Diego, CA demand studies so you know if expansion is possible.",
      },
      {
        question: "Can you compare cap rates versus STNL retail?",
        answer:
          "We benchmark storage yields next to current San Diego, CA retail cap rates so you can quantify the spread.",
      },
    ],
  },
  {
    slug: "multifamily-dst-placement",
    name: "Multifamily DST Placement",
    short: "Match exchange proceeds to institutional multifamily DST offerings.",
    route: "/services/multifamily-dst-placement",
    category: "DST",
    description:
      "When investors prefer securities, we introduce DST sponsors through licensed partners. Expect San Diego, CA compliant suitability screens, sponsor due diligence, and a clear explanation of fees and hold periods.",
    heroImage: heroRetail,
    tags: ["DST", "Multifamily", "Passive"],
    workflows: ["Suitability prep", "Sponsor comparison", "Allocation plan"],
    highlight: "DST pathways that complement direct fee simple holdings.",
    faqs: [
      {
        question: "Do you sell securities?",
        answer:
          "We do not sell securities. Instead we connect San Diego, CA investors with licensed representatives and stay focused on education and coordination.",
      },
      {
        question: "How do you vet DST sponsors?",
        answer:
          "We share third party research, prior performance references, and regulatory disclosures so San Diego, CA buyers can make informed decisions.",
      },
      {
        question: "What if I split funds between DST and fee simple?",
        answer:
          "We help allocate equity between DST tranches and direct NNN deals while keeping the aggregate San Diego, CA exchange compliant.",
      },
    ],
  },
  {
    slug: "drive-thru-qsr-sale-leaseback",
    name: "Drive Thru QSR Sale Leaseback",
    short: "Secure high traffic drive thru assets through structured sale leasebacks.",
    route: "/services/drive-thru-qsr-sale-leaseback",
    category: "Retail",
    description:
      "Quick service restaurants remain a staple for San Diego, CA investors. We surface corporate and franchise sale leasebacks with transparent rent coverage, remodel schedules, and brand performance data.",
    heroImage: heroCoastal,
    tags: ["QSR", "Sale Leaseback", "Drive Thru"],
    workflows: ["Franchise diligence", "Remodel planning", "Lease drafting"],
    highlight: "Proactive sale leaseback sourcing with national QSR banners.",
    faqs: [
      {
        question: "Do you work with franchise counsel?",
        answer:
          "Yes, we loop in franchise counsel when San Diego, CA buyers need clarity on assignment rights and personal guarantees.",
      },
      {
        question: "How do you confirm store level sales?",
        answer:
          "We collect trailing twelve merchandising reports and POS data so San Diego, CA investors can verify rent coverage.",
      },
      {
        question: "Can I roll multiple QSRs into one exchange?",
        answer:
          "We structure multi asset identification lists so San Diego, CA exchangers can combine several stores and still stay inside the three property or 200 percent rules.",
      },
    ],
  },
  {
    slug: "ground-lease-outparcel-sourcing",
    name: "Ground Lease Outparcel Sourcing",
    short: "Find rare ground lease parcels with tenant funded improvements.",
    route: "/services/ground-lease-outparcel-sourcing",
    category: "Land",
    description:
      "We identify bank pad, grocery outparcel, and coastal mixed use ground leases that deliver predictable income with minimal landlord duties. Every candidate is compared against San Diego, CA land valuations.",
    heroImage: heroNorth,
    tags: ["Ground Lease", "Land", "Passive"],
    workflows: ["Title review", "Rent reset modeling", "Tenant interview"],
    highlight: "Land control strategies for investors who want hands off income.",
    faqs: [
      {
        question: "Are rent resets modeled?",
        answer:
          "Yes, each package includes rent reset math so San Diego, CA investors understand step ups tied to CPI or appraisals.",
      },
      {
        question: "Can you cover environmental diligence?",
        answer:
          "We coordinate with consultants for Phase I or II studies whenever a San Diego, CA investor wants additional comfort.",
      },
      {
        question: "Do you source coastal and inland pads?",
        answer:
          "We monitor prime coastal pads plus suburban parcels so San Diego, CA exchangers can diversify geography while keeping similar lease structures.",
      },
    ],
  },
  {
    slug: "zero-cash-flow-bridge",
    name: "Zero Cash Flow Bridge Options",
    short: "Balance debt replacement through zero cash flow structures and TIC links.",
    route: "/services/zero-cash-flow-bridge",
    category: "Financing",
    description:
      "Zero cash flow assets help investors satisfy debt replacement or estate planning asks. We flag corporately guaranteed bonds, telecom nodes, and distribution centers that match San Diego, CA leverage requirements.",
    heroImage: heroRetail,
    tags: ["Zero Cash Flow", "Debt", "Planning"],
    workflows: ["Debt sizing", "Trust coordination", "TIC introductions"],
    highlight: "Structured solutions for high leverage replacement needs.",
    faqs: [
      {
        question: "Do you coordinate with lenders?",
        answer:
          "We bring in lenders familiar with zero cash flow underwriting so San Diego, CA timelines stay intact.",
      },
      {
        question: "Can this be paired with DST interests?",
        answer:
          "Yes, we help San Diego, CA investors blend zero cash flow bonds with DST or fee simple slices to balance cash flow.",
      },
      {
        question: "How transparent is the amortization schedule?",
        answer:
          "We break down amortization and defeasance language using plain English so San Diego, CA exchangers know the exit path.",
      },
    ],
  },
  {
    slug: "reverse-exchange-readiness-san-diego",
    name: "San Diego Reverse Exchange Readiness",
    short: "Structure reverse exchanges for buyers who must close on the replacement first.",
    route: "/services/reverse-exchange-readiness-san-diego",
    category: "Timelines",
    description:
      "Tight markets often require reverse exchanges. We coordinate parking entities, accommodators, and lender approvals for San Diego, CA investors who locate the replacement before selling the relinquished asset.",
    heroImage: heroSouth,
    tags: ["Reverse Exchange", "Timeline", "Accommodator"],
    workflows: ["EAT setup", "Loan approvals", "Document tracker"],
    highlight: "Reverse strategies mapped to your local closing calendar.",
    faqs: [
      {
        question: "Do you coordinate with my QI?",
        answer:
          "Yes, we surround your San Diego, CA reverse exchange with experienced QIs, attorneys, and lenders so documents stay synchronized.",
      },
      {
        question: "How do you manage escrow funds?",
        answer:
          "We outline bank level security procedures so San Diego, CA clients know where funds sit during the hold period.",
      },
      {
        question: "Can you keep my relinquished sale on track?",
        answer:
          "We manage a shared tracker so brokers, buyers, and lenders in San Diego, CA stay aligned while the replacement asset is parked.",
      },
    ],
  },
  {
    slug: "improvement-exchange-site-planning",
    name: "Improvement Exchange Site Planning",
    short: "Direct proceeds into construction or rehab while staying within IRS rules.",
    route: "/services/improvement-exchange-site-planning",
    category: "Development",
    description:
      "Build to suit and improvement exchanges require strict budgeting. We map contractor draws, permit milestones, and disbursement schedules so San Diego, CA investors can modernize or reposition replacement assets.",
    heroImage: heroNorth,
    tags: ["Improvement", "Construction", "Planning"],
    workflows: ["Budget controls", "Draw approvals", "Schedule alignment"],
    highlight: "Construction coordination that safeguards exchange compliance.",
    faqs: [
      {
        question: "Do you oversee budgets?",
        answer:
          "We set up cost trackers and coordinate approvals with your QI so every San Diego, CA disbursement is documented.",
      },
      {
        question: "How do you keep work on timeline?",
        answer:
          "We align contractor schedules with exchange deadlines so San Diego, CA investors do not miss completion requirements.",
      },
      {
        question: "Can this support tenant improvements?",
        answer:
          "Yes, we structure improvement exchanges that fund TI packages for tenants relocating within San Diego, CA.",
      },
    ],
  },
  {
    slug: "timeline-assurance-program",
    name: "45/180 Timeline Assurance Program",
    short: "Detailed milestone planning so you never miss a 45 or 180 day marker.",
    route: "/services/timeline-assurance-program",
    category: "Timelines",
    description:
      "We turn deadlines into a visual tracker with reminders, assigned owners, and escalation paths. Every San Diego, CA exchange sees the schedule from sale to closing.",
    heroImage: heroRetail,
    tags: ["Timeline", "Planning", "Compliance"],
    workflows: ["Milestone tracker", "Reminder cadence", "Escalation plan"],
    highlight: "Deadline visibility for the entire advisory team.",
    faqs: [
      {
        question: "Do you share the tracker with my partners?",
        answer:
          "Yes, the tracker is collaborative so San Diego, CA brokers, QIs, attorneys, and lenders stay aligned.",
      },
      {
        question: "How often do you update it?",
        answer:
          "We update status after every call or document delivery so San Diego, CA investors always know the next task.",
      },
      {
        question: "What if a milestone slips?",
        answer:
          "We escalate immediately, add contingency plans, and expand the search list so San Diego, CA investors keep options open.",
      },
    ],
  },
  {
    slug: "rent-roll-and-t12-validation",
    name: "Rent Roll and T12 Validation",
    short: "Audit rent rolls, T12s, and GL exports before you commit.",
    route: "/services/rent-roll-and-t12-validation",
    category: "Underwriting",
    description:
      "We verify revenue streams, occupancy, and expense reimbursements so San Diego, CA investors do not inherit surprises.",
    heroImage: heroCoastal,
    tags: ["Underwriting", "Rent Roll", "T12"],
    workflows: ["Data request list", "Variance analysis", "Summary memo"],
    highlight: "Clear financial story before every offer.",
    faqs: [
      {
        question: "Do you reconcile reimbursements?",
        answer:
          "Yes, we test expense stops and reconciliation language so San Diego, CA buyers know what cash flow to expect.",
      },
      {
        question: "How fast is the review?",
        answer:
          "Most rent roll reviews finish within three business days for San Diego, CA exchanges.",
      },
      {
        question: "Can you share lender ready packages?",
        answer:
          "We organize findings so San Diego, CA lenders can underwrite without rework.",
      },
    ],
  },
  {
    slug: "capex-and-buildout-estimates",
    name: "Capex and Buildout Estimates",
    short: "Plan roof, parking, and interior capital items before or after closing.",
    route: "/services/capex-and-buildout-estimates",
    category: "Underwriting",
    description:
      "We bring in contractors and cost estimators to outline near term capex so San Diego, CA buyers avoid post close surprises.",
    heroImage: heroNorth,
    tags: ["Capex", "Budgeting", "Planning"],
    workflows: ["Site call", "Estimate summary", "Reserve plan"],
    highlight: "Better budgets for long hold investors.",
    faqs: [
      {
        question: "Can you get multiple bids?",
        answer:
          "Yes, we organize at least two bids for San Diego, CA assignments when time allows.",
      },
      {
        question: "What if the tenant handles maintenance?",
        answer:
          "We still review leases to confirm landlord caps so San Diego, CA owners confirm exposure.",
      },
      {
        question: "Do you integrate findings into the tracker?",
        answer:
          "Yes, capex tasks feed into the shared San Diego, CA milestone board for visibility.",
      },
    ],
  },
  {
    slug: "market-comp-digest-san-diego",
    name: "San Diego Market Comp Digest",
    short: "Weekly comp summaries focused on San Diego County and nearby submarkets.",
    route: "/services/market-comp-digest-san-diego",
    category: "Research",
    description:
      "We publish cap rate, rent, and pricing updates for San Diego, CA neighborhoods plus satellite markets like Carlsbad, Poway, and Chula Vista.",
    heroImage: heroSouth,
    tags: ["Research", "Comps", "San Diego"],
    workflows: ["Data ingestion", "Summary drafting", "Action items"],
    highlight: "Local intelligence that informs national offers.",
    faqs: [
      {
        question: "How often is the digest delivered?",
        answer:
          "Active San Diego, CA clients receive comp notes every Friday with highlights and action steps.",
      },
      {
        question: "Do you include statewide context?",
        answer:
          "Yes, we compare San Diego, CA comps with other California metros so you see the spread.",
      },
      {
        question: "Can multiple partners receive it?",
        answer:
          "We can copy advisors, attorneys, and family members who help steer your San Diego, CA exchange.",
      },
    ],
  },
  {
    slug: "lender-preflight-coordination",
    name: "Lender Preflight Coordination",
    short: "Align lenders with your exchange before you write offers.",
    route: "/services/lender-preflight-coordination",
    category: "Financing",
    description:
      "We collect documents, summarize cash flow, and introduce lenders who understand San Diego, CA exchange urgency so term sheets arrive quickly.",
    heroImage: heroRetail,
    tags: ["Financing", "Lender", "Preflight"],
    workflows: ["Document vault", "Term sheet matrix", "Weekly lender sync"],
    highlight: "Debt conversations that never slow your timeline.",
    faqs: [
      {
        question: "Do you work with local and national lenders?",
        answer:
          "Yes, we maintain relationships with San Diego, CA banks plus national debt funds.",
      },
      {
        question: "How do you keep everyone organized?",
        answer:
          "We use a secure portal for uploads and track each request so San Diego, CA investors know status.",
      },
      {
        question: "Can you coordinate rate locks?",
        answer:
          "We liaise with lenders to time rate locks around San Diego, CA closing calendars.",
      },
    ],
  },
  {
    slug: "three-property-rule-strategy",
    name: "Three Property Rule Strategy",
    short: "Structure identification letters that maximize the three property rule.",
    route: "/services/three-property-rule-strategy",
    category: "Rules",
    description:
      "We outline replacement sequences, value ranges, and contingencies so San Diego, CA investors can balance backup options without confusion.",
    heroImage: heroCoastal,
    tags: ["Rules", "Identification", "Planning"],
    workflows: ["Letter drafting", "Backup plan", "Reminder workflow"],
    highlight: "Clear documentation that your QI will appreciate.",
    faqs: [
      {
        question: "Do you help draft the identification letter?",
        answer:
          "Yes, we provide a template and coordinate signatures so your San Diego, CA QI receives it on time.",
      },
      {
        question: "Can I swap assets after submitting?",
        answer:
          "We explain IRS allowances and help San Diego, CA investors communicate updates to their QI quickly.",
      },
      {
        question: "What if I want more than three assets?",
        answer:
          "We evaluate whether the 200 percent rule offers a better fit for your San Diego, CA exchange.",
      },
    ],
  },
  {
    slug: "two-hundred-percent-rule-modeling",
    name: "Two Hundred Percent Rule Modeling",
    short: "Model larger lists under the 200 percent identification path.",
    route: "/services/two-hundred-percent-rule-modeling",
    category: "Rules",
    description:
      "Investors chasing multiple assets need tight math. We track aggregate value, deposits, and readiness so San Diego, CA buyers stay within the 200 percent limit.",
    heroImage: heroNorth,
    tags: ["Rules", "Identification", "Modeling"],
    workflows: ["Value tracker", "Readiness scoring", "Deposit schedule"],
    highlight: "Real time math that keeps large lists compliant.",
    faqs: [
      {
        question: "How do you measure total value?",
        answer:
          "We run a rolling tally and share it with your San Diego, CA QI and lender teams.",
      },
      {
        question: "What happens if pricing changes?",
        answer:
          "We adjust the tracker immediately so San Diego, CA investors can swap assets before the deadline.",
      },
      {
        question: "Can you mix fee simple and DST interests?",
        answer:
          "Yes, we include both so San Diego, CA investors can deploy capital wherever it performs best.",
      },
    ],
  },
  {
    slug: "ninety-five-percent-portfolio-path",
    name: "Ninety Five Percent Portfolio Path",
    short: "Keep large identification lists compliant under the 95 percent rule.",
    route: "/services/ninety-five-percent-portfolio-path",
    category: "Rules",
    description:
      "Institutional and family office investors sometimes list many properties. We track closings and assignments so San Diego, CA exchanges satisfy the 95 percent completion requirement.",
    heroImage: heroSouth,
    tags: ["Rules", "Portfolio", "Execution"],
    workflows: ["Portfolio tracker", "Status matrix", "Closing scoreboard"],
    highlight: "Confidence for complex multi asset exchanges.",
    faqs: [
      {
        question: "Do you serve larger investor groups?",
        answer:
          "Yes, we coordinate calls with every decision maker so San Diego, CA portfolios move in sync.",
      },
      {
        question: "How do you confirm the 95 percent threshold?",
        answer:
          "We document executed closings and share the tracker with your San Diego, CA QI.",
      },
      {
        question: "Can this support multistate acquisitions?",
        answer:
          "Yes, we consolidate updates from brokers in every state and reflect them for your San Diego, CA team.",
      },
    ],
  },
  {
    slug: "sale-leaseback-occupier-advisory",
    name: "Sale Leaseback Occupier Advisory",
    short: "Source or structure sale leasebacks for operators ready to redeploy cash.",
    route: "/services/sale-leaseback-occupier-advisory",
    category: "Occupier",
    description:
      "We advise operators who want liquidity by selling their real estate while securing a long term lease. San Diego, CA investors gain predictable income with tenant controlled maintenance.",
    heroImage: heroRetail,
    tags: ["Sale Leaseback", "Occupier", "Liquidity"],
    workflows: ["Lease structuring", "Valuation", "Investor introductions"],
    highlight: "Sale leaseback execution that benefits both sides.",
    faqs: [
      {
        question: "Do you represent buyers and sellers?",
        answer:
          "We facilitate introductions and ensure San Diego, CA legal teams draft conflict free documents.",
      },
      {
        question: "Can you position the lease for 1031 buyers?",
        answer:
          "Yes, we build rent schedules and escalations that align with San Diego, CA exchange expectations.",
      },
      {
        question: "What sectors use this service?",
        answer:
          "We see demand from medical, retail, industrial, and service companies located in or relocating from San Diego, CA.",
      },
    ],
  },
  {
    slug: "triple-net-ground-up-development",
    name: "Triple Net Ground Up Development",
    short: "Pair developers and tenants for new single tenant builds.",
    route: "/services/triple-net-ground-up-development",
    category: "Development",
    description:
      "Some investors prefer to create yield. We guide San Diego, CA clients through site selection, tenant LOI, build budgets, and disposition planning for future 1031 placements.",
    heroImage: heroNorth,
    tags: ["Development", "Ground Up", "NNN"],
    workflows: ["Site vetting", "Tenant LOI", "Exit plan"],
    highlight: "Ground up pathways with known exit strategies.",
    faqs: [
      {
        question: "Do you help locate tenants?",
        answer:
          "Yes, we target credit tenants that expand in San Diego, CA and beyond, then secure LOIs before construction begins.",
      },
      {
        question: "Can I hold or sell after completion?",
        answer:
          "We outline both paths so San Diego, CA investors can recycle capital or keep the asset long term.",
      },
      {
        question: "How do you control construction risk?",
        answer:
          "We build contingency budgets and track draws so San Diego, CA projects stay on plan.",
      },
    ],
  },
  {
    slug: "hospitality-and-mixed-use-identification",
    name: "Hospitality and Mixed Use Identification",
    short: "Curate hospitality, boutique, and mixed use assets suited for 1031 reinvestment.",
    route: "/services/hospitality-and-mixed-use-identification",
    category: "Hospitality",
    description:
      "We work with operators and private investors who want lifestyle or mixed use holdings. Each San Diego, CA centric list explains management needs, brand flags, and NOI trends.",
    heroImage: heroCoastal,
    tags: ["Hospitality", "Mixed Use", "Lifestyle"],
    workflows: ["Brand coordination", "Management review", "NOI modeling"],
    highlight: "Experiential assets sized for exchange redeployment.",
    faqs: [
      {
        question: "Do you include management contacts?",
        answer:
          "Yes, we introduce San Diego, CA hospitality managers or third party operators who fit the concept.",
      },
      {
        question: "Can these assets qualify for long term holds?",
        answer:
          "We verify zoning, licensing, and brand covenants so San Diego, CA investors understand every obligation.",
      },
      {
        question: "How volatile are the returns?",
        answer:
          "Each memo outlines RevPAR, ADR, and seasonal swings so San Diego, CA owners see the full picture.",
      },
    ],
  },
  {
    slug: "flex-and-last-mile-logistics-pipeline",
    name: "Flex and Last Mile Logistics Pipeline",
    short: "Blend office, showroom, and distribution assets for nimble occupiers.",
    route: "/services/flex-and-last-mile-logistics-pipeline",
    category: "Industrial",
    description:
      "We source flex parks and last mile hubs that align with Southern California shipping patterns. San Diego, CA investors see dock packages, trailer parking, and power specs up front.",
    heroImage: heroInland,
    tags: ["Flex", "Logistics", "Industrial"],
    workflows: ["Spec sheet", "Power audit", "Tenant review"],
    highlight: "Flex assets that stay relevant as logistics evolves.",
    faqs: [
      {
        question: "Do you cover coastal and inland hubs?",
        answer:
          "Yes, we marry San Diego, CA tenant demand with Phoenix, Vegas, and Bay Area routes.",
      },
      {
        question: "What about office components?",
        answer:
          "We note office square footage, buildout age, and HVAC status so San Diego, CA buyers know refresh needs.",
      },
      {
        question: "Can you mix credit tenants with local firms?",
        answer:
          "We show both so San Diego, CA investors can choose between credit security and upside.",
      },
    ],
  },
  {
    slug: "preferred-credit-tenant-list-san-diego",
    name: "Preferred Credit Tenant List San Diego",
    short: "Priority alerts for credit tenant offerings that match San Diego exchanges.",
    route: "/services/preferred-credit-tenant-list-san-diego",
    category: "Credit",
    description:
      "We maintain a shortlist of AAA and investment grade tenants across retail, medical, logistics, and essential service verticals. Every alert cites the nearest San Diego, CA comp and explains rent coverage.",
    heroImage: heroRetail,
    tags: ["Credit Tenant", "Alerts", "NNN"],
    workflows: ["Alert setup", "Credit memo", "Offer coordination"],
    highlight: "Be first in line when credit tenant inventory hits the market.",
    faqs: [
      {
        question: "How do I join the alert list?",
        answer:
          "Complete our intake and share your San Diego, CA exchange timing so we can align opportunities.",
      },
      {
        question: "Do you include corporate documentation?",
        answer:
          "Yes, we attach financial statements or ratings so San Diego, CA investors can evaluate strength quickly.",
      },
      {
        question: "Can you reserve deals?",
        answer:
          "We coordinate with listing brokers to secure early looks for active San Diego, CA buyers whenever possible.",
      },
    ],
  },
];

