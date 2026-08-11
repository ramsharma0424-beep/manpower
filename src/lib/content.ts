import { company } from "./data";
import { images } from "./images";
import { keywordsForService } from "./keywords";

export const whyChooseRudra = [
  {
    title: "PASARA Licensed & Police Verified",
    description:
      "Every security deployment is backed by PASARA licensing and police verified security guards — a trusted security partner for corporates, factories, and warehouses in Gurugram, Noida, and across Delhi NCR.",
  },
  {
    title: "Army Veteran-Led Operations",
    description:
      "Led by a retired Indian Army Captain, our army veteran-led security company follows briefing-before-shift discipline, uniform standards, and on-ground accountability that corporates and industrial sites expect.",
  },
  {
    title: "Reliable Shift Coverage",
    description:
      "Absent guards and no-show housekeeping staff disrupt your operations. As a reliable staffing company, we focus on attendance, supervisor-led reporting, and rapid replacement when coverage gaps appear.",
  },
  {
    title: "Training Every 15 Days",
    description:
      "Site-specific refreshers for security, housekeeping, and labour teams — covering access control, hygiene SOPs, fire safety, and conduct standards aligned to your facility.",
  },
  {
    title: "Deployed Across Delhi NCR",
    description: `Active manpower services and workforce deployment in ${company.locations.join(", ")} with scalable contract staffing for single-site and multi-location contracts.`,
  },
  {
    title: "Dedicated Retired Armed Forces Team",
    description:
      "Beyond one leader — Rudra is backed by a dedicated retired armed forces team that brings field discipline, operational planning, and mission-first accountability to every deployment.",
  },
];

export const testimonials = [
  {
    quote:
      "Rudra's security team at our Gurugram facility has been consistent with attendance and gate discipline. Police-verified guards and clear supervisor reporting give us confidence on who is on site every shift.",
    name: "Facility Manager",
    role: "FMCG Operations",
    location: "Gurugram, Haryana",
  },
  {
    quote:
      "Housekeeping standards matter deeply in hospitality. Rudra deployed trained staff who understood room hygiene, lobby upkeep, and guest-area protocols — with supervisors who respond quickly when we need adjustments.",
    name: "Operations Head",
    role: "Hotel & Hospitality",
    location: "Gurugram, Haryana",
  },
  {
    quote:
      "For our construction project in Noida, we needed security and labour that could scale with site phases. Rudra mobilised teams with safety briefings and site-wise coordination that kept work moving.",
    name: "Project Coordinator",
    role: "Construction & Infrastructure",
    location: "Noida, Uttar Pradesh",
  },
];

export const industries = [
  {
    slug: "hospitality",
    title: "Hospitality Manpower",
    eyebrow: "Hotels & Guest Facilities",
    heroDescription:
      "Trained housekeeping, security, and support staff for hotels, serviced apartments, and guest facilities across Gurugram, Noida, and Delhi NCR.",
    summary:
      "Guest experience depends on people who show up, follow hygiene SOPs, and represent your brand professionally. Rudra Manpower deploys housekeeping and security teams tailored to hospitality environments — from room cleaning and lobby upkeep to night security and access control.",
    image: images.housekeeping,
    imageAlt: "Professional housekeeping staff in a hotel environment",
    services: [
      "Housekeeping for rooms, lobbies & back-of-house",
      "Security guards for entrances, parking & night shifts",
      "Bouncer & crowd management for events and venues",
      "PSO deployment for VIP and executive protection",
    ],
    highlights: [
      "Experience with hotel and guest-facing facility standards",
      "Supervisor-led quality checks and shift reporting",
      "Flexible staffing for peak seasons and events",
      "Deployment across Gurugram, Noida, Manesar & Faridabad",
    ],
    keywords: [
      "hotel housekeeping Gurugram",
      "hotel security Delhi NCR",
      "hospitality manpower Noida",
      "housekeeping staff hotels Haryana",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing Manpower",
    eyebrow: "Factories & Industrial Sites",
    heroDescription:
      "Security, labour, and helper teams for manufacturing plants, mills, and industrial operations across Delhi NCR and Uttar Pradesh.",
    summary:
      "Manufacturing sites need disciplined gate security, reliable helpers on the floor, and staff who understand industrial safety and shift discipline. We support FMCG plants, steel units, paper mills, and production facilities with police-verified security and trained labour deployment.",
    image: images.services,
    imageAlt: "Industrial manufacturing facility workforce",
    services: [
      "Perimeter & gate security for plants and warehouses",
      "General labour and material handling support",
      "Shift-based helper deployment for production lines",
      "Supervisors for attendance and site coordination",
    ],
    highlights: [
      "Experience with FMCG, steel, and mill operations",
      "Police-verified security for sensitive industrial sites",
      "Flexible headcount for production peaks",
      "Coverage in Gurugram, Manesar, Sonipat, Rohtak & UP industrial belts",
    ],
    keywords: [
      "manufacturing labour Manesar",
      "factory security Gurugram",
      "industrial manpower Delhi NCR",
      "plant helper staffing Haryana",
    ],
  },
  {
    slug: "construction",
    title: "Construction Manpower",
    eyebrow: "Sites & Infrastructure Projects",
    heroDescription:
      "Security guards, construction labour, masons, helpers, and site supervisors for residential, commercial, and infrastructure projects.",
    summary:
      "Construction sites face unique challenges — material security, night watch, labour turnover, and safety compliance. Rudra Manpower provides PASARA-licensed site security, skilled and semi-skilled labour, and supervisors who keep deployments organised across Noida, Faridabad, Gurugram, and surrounding project corridors.",
    image: images.construction,
    imageAlt: "Construction site workforce and security",
    services: [
      "Site security and material gate control",
      "Masons, helpers, bar benders & general labour",
      "Night watch and perimeter patrolling",
      "Supervisory staff for multi-site coordination",
    ],
    highlights: [
      "Rapid mobilisation for new project phases",
      "Safety-briefed workforce before site entry",
      "Experience with commercial and residential builds",
      "Active deployment in Noida, Faridabad, Sonipat & Gurugram",
    ],
    keywords: [
      "construction labour Noida",
      "site security Faridabad",
      "construction manpower Delhi NCR",
      "mason helper staffing Gurugram",
    ],
  },
];

export const trainingPrograms = [
  {
    title: "Security Guard Induction",
    description:
      "PASARA-aligned orientation covering access control, visitor logs, perimeter patrolling, incident reporting, and professional conduct for corporate, industrial, and residential sites.",
    duration: "Initial + ongoing refreshers",
  },
  {
    title: "Fire Safety & Emergency Response",
    description:
      "Training on fire extinguisher use, evacuation procedures, emergency communication, and first-response protocols for guards and site supervisors across Delhi NCR facilities.",
    duration: "Every 15 days (site-based)",
  },
  {
    title: "Housekeeping & Hygiene SOPs",
    description:
      "Sector-specific modules for corporate offices, hospitals, hotels, and malls — covering cleaning standards, chemical handling, waste management, and guest-area presentation.",
    duration: "Site-specific schedules",
  },
  {
    title: "Bouncer & Event Security",
    description:
      "Crowd management, entry screening, conflict de-escalation, and venue security protocols for hotels, banquets, clubs, and corporate events in Gurugram and Noida.",
    duration: "Pre-deployment briefing",
  },
  {
    title: "PSO & VIP Protection Basics",
    description:
      "Personal Security Officer readiness including escort procedures, threat awareness, communication protocols, and professional conduct for executive and VIP assignments.",
    duration: "Role-specific induction",
  },
  {
    title: "Construction Site Safety",
    description:
      "PPE usage, hazard awareness, material handling safety, and site conduct standards for labour and helpers before deployment to Noida, Faridabad, and Gurugram project sites.",
    duration: "Before every new site mobilisation",
  },
];

export const careerRoles = [
  {
    id: "security-guard",
    title: "Security Guard",
    locations: "Gurugram, Noida, Manesar, Faridabad, Sonipat, Bhiwadi",
    type: "Full-time / Shift-based",
    description:
      "Join our PASARA-licensed security teams for corporate, industrial, hotel, and residential deployments across Delhi NCR. Police verification required.",
  },
  {
    id: "housekeeping",
    title: "Housekeeping Staff",
    locations: "Gurugram, Noida, Faridabad, Bhiwadi",
    type: "Full-time / Shift-based",
    description:
      "Work with hotels, corporates, malls, and hospitals. Training provided on hygiene SOPs, equipment use, and guest-area standards.",
  },
  {
    id: "bouncer",
    title: "Bouncer / Event Security",
    locations: "Gurugram, Noida",
    type: "Event & venue assignments",
    description:
      "Experienced personnel for hotels, banquets, and venue security. Prior hospitality or event security experience preferred.",
  },
  {
    id: "pso",
    title: "Personal Security Officer (PSO)",
    locations: "Delhi NCR",
    type: "Assignment-based",
    description:
      "For verified, experienced security professionals. Executive protection assignments with prior PSO or close-protection experience.",
  },
  {
    id: "labour-helper",
    title: "Labour & Site Helper",
    locations: "Noida, Faridabad, Sonipat, Rohtak, Bhiwadi",
    type: "Project & contract-based",
    description:
      "Construction sites, manufacturing units, and industrial facilities. Safety briefing provided before deployment.",
  },
  {
    id: "supervisor",
    title: "Site Supervisor",
    locations: "Delhi NCR",
    type: "Full-time",
    description:
      "Lead on-ground teams, manage shift attendance, coordinate with clients, and uphold Rudra's quality and reporting standards.",
  },
];

export const careerBenefits = [
  "Fair wages with structured payout cycles",
  "On-the-job training every 15 days",
  "Growth opportunities across security, housekeeping & labour",
  "EPFO & ESIC compliant employment where applicable",
  "Army veteran-led supervision and disciplined work culture",
];

export type ServiceDetail = {
  id: string;
  title: string;
  eyebrow: string;
  heroDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  offerings: { title: string; description: string }[];
  whyUs: string[];
  areas: string[];
  keywords: string[];
  /** Extra long-form SEO sections rendered below offerings */
  sections?: { heading: string; paragraphs: string[] }[];
  faqs?: { question: string; answer: string }[];
};

export type ServiceDetailEnriched = ServiceDetail & {
  keywordParagraph: string;
};

export const homeKeywordSummary = `Looking for manpower services in Delhi NCR or security services in Delhi NCR? Rudra Manpower is an army veteran-led, PASARA-licensed security agency and staffing company in Gurugram offering police-verified security guards, office housekeeping staff, facility management, and contract labour across Delhi, Noida, Faridabad, Manesar, Sonipat, Rohtak, and Bhiwadi.`;

export const serviceDetails: ServiceDetail[] = [
  {
    id: "security",
    title: "Security Services",
    eyebrow: "PASARA Licensed",
    heroDescription:
      "PASARA-licensed, police-verified security guard services for corporates, factories, warehouses, and residential sites across Gurugram, Noida, Manesar, Faridabad, and Delhi NCR.",
    intro:
      "Your first line of defence should be licensed, verified, and disciplined. Rudra Manpower is a PASARA licensed security agency that deploys police-verified security guards with army veteran-led oversight — covering access control, fire safety, parking, perimeter security, and night watch across Gurugram, Noida, Manesar, Faridabad, Sonipat, Rohtak, and Bhiwadi.",
    image: images.security,
    imageAlt: "Professional security guard at a corporate facility",
    offerings: [
      {
        title: "Corporate & Industrial Security",
        description:
          "Access control, visitor management, CCTV coordination, and perimeter patrolling for offices, plants, warehouses, and industrial estates in Gurugram, Manesar, and Noida.",
      },
      {
        title: "Fire Safety & Emergency Response",
        description:
          "Guards trained in evacuation procedures, fire extinguisher use, and first-response reporting for malls, hospitals, and high-footfall sites across Delhi NCR.",
      },
      {
        title: "Parking & Perimeter Security",
        description:
          "Vehicle entry management, parking zone monitoring, and boundary patrolling for corporates, malls, factories, and gated communities.",
      },
      {
        title: "Night Watch & Shift Coverage",
        description:
          "Reliable day and night shift deployment with supervisor reporting and rapid replacement when coverage gaps arise — including factory and warehouse night watch.",
      },
    ],
    whyUs: [
      "PASARA licensed agency with police-verified personnel",
      "Retired Army Captain-led operational discipline",
      "Supervisor reporting and shift accountability",
      "Rapid replacement when coverage gaps arise",
      "Deployment across Gurugram, Noida, Manesar, Faridabad, Sonipat, Rohtak & Bhiwadi",
    ],
    areas: company.locations,
    keywords: [
      "security guards Gurugram",
      "PASARA security agency Noida",
      "corporate security Delhi NCR",
      "industrial security Manesar",
      "night watch security Haryana",
      "police verified security guards",
      "factory security guards Faridabad",
      "warehouse security Sonipat",
    ],
    sections: [
      {
        heading: "PASARA-licensed security guard services in Delhi NCR",
        paragraphs: [
          "Businesses across Delhi NCR need more than a uniform at the gate. They need a PASARA licensed security agency that can prove who is on duty, how those guards were verified, and who is accountable when something goes wrong. Rudra Manpower provides security guard services built on police verification, documented briefings, and supervisor-led reporting for corporate offices, manufacturing plants, warehouses, malls, hospitals, and residential societies.",
          "Our security personnel are briefed before every shift on dress code, visitor protocols, emergency contacts, and site-specific SOPs. Whether you need corporate security guards for a Gurugram tower or industrial security services for a Manesar plant, we deploy teams that understand access control, visitor management, and perimeter security — not just presence.",
        ],
      },
      {
        heading: "Corporate, factory, and warehouse security that stays accountable",
        paragraphs: [
          "Corporate campuses in Cyber City, Udyog Vihar, and Sector 44 Gurugram face constant visitor flow, vendor entries, and after-hours risk. Our corporate security guards manage reception desks, boom barriers, visitor logs, and lobby monitoring with clear escalation paths to your admin team.",
          "Factories and warehouses in Manesar, Bhiwadi, Sonipat, and Rohtak need industrial security services that protect material, vehicles, and night operations. We supply factory security guards and warehouse security staff trained for gate control, material movement logging, parking security, and night watch — with replacement cover when absences occur.",
          "For multi-site clients, one Rudra contract can cover Gurugram headquarters, a Noida warehouse, and a Faridabad plant with shared supervisors and consistent reporting formats.",
        ],
      },
      {
        heading: "Police-verified deployment and army veteran-led supervision",
        paragraphs: [
          "Every security deployment goes through police verification and document checks before day one. That reduces the risk of unverified staff on sensitive sites and gives facility managers a clearer compliance trail.",
          "Operations are led by Capt Raj Kumar (Retd) and a retired armed forces supervisory team. That military-style discipline shows up in punctuality, uniform standards, briefing-before-shift routines, and on-ground accountability — the gap most staffing agencies leave open after the invoice is signed.",
          "Training refreshers every 15 days cover fire safety and emergency response, access control drills, visitor handling, and conduct standards aligned to your facility type.",
        ],
      },
      {
        heading: "How our security deployment process works",
        paragraphs: [
          "Step 1 — Site assessment: Before any guard sets foot on your premises, we conduct a site visit to understand access points, shift patterns, risk zones, and client-specific protocols. For Gurugram and Noida clients, same-day assessments are often available.",
          "Step 2 — Staff selection and verification: Guards are selected from our trained pool based on your site profile. Police verification and document checks are completed before any deployment. You receive confirmation of verification status.",
          "Step 3 — Briefing and mobilisation: Selected guards undergo a pre-deployment briefing covering your site's SOPs, visitor management rules, emergency contacts, dress code, and reporting chain. Supervisors confirm readiness before shift start.",
          "Step 4 — Ongoing supervision and reporting: A named supervisor monitors attendance, conducts shift briefings, and reports daily. Any absence triggers rapid replacement from our standby roster. You get visibility — not surprises.",
          "Step 5 — Quality audits every 15 days: Site-specific refreshers on fire safety, access control, and conduct standards keep performance from drifting after month one.",
        ],
      },
      {
        heading: "What determines security guard service costs in Delhi NCR",
        paragraphs: [
          "Security guard service pricing in Delhi NCR depends on several factors — not just headcount. Shift pattern (day, night, or 24×7), site type (corporate, industrial, or residential), number of posts, armed vs unarmed deployment, and location all influence what a contract looks like.",
          "PASARA-licensed agencies like Rudra Manpower price transparently: you receive a breakdown covering guard wages (aligned to minimum wage notifications), statutory compliance costs (EPFO, ESIC), supervisor costs, and a service margin — no hidden charges. Non-licensed agencies often quote lower upfront but pass statutory non-compliance risk back to the client.",
          "To get an accurate quote for your site, share your location, shift requirement, number of posts, and any specific security challenges. We will respond with a structured proposal. Call 8278065927 or use the contact form.",
        ],
      },
      {
        heading: "Where we deploy security teams",
        paragraphs: [
          "Rudra Manpower provides security guard agency services across Gurugram, Noida, Rohtak, Sonipat, Manesar, Faridabad, and Bhiwadi. Typical clients include corporates, BPOs, hospitals, malls and retail, industrial estates, residential societies, hotels, manufacturing units, and construction sites needing gate and material security.",
          "Need a mix of armed or unarmed security guards, parking security, or night watch only? Share your site map, shift pattern, and headcount — we will propose a deployment plan and quote. You can also combine security with housekeeping, facility management, or contract staffing under one verified manpower partner.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are your security guards PASARA licensed and police verified?",
        answer:
          "Yes. Rudra Manpower operates as a PASARA licensed security agency, and security personnel go through police verification and document checks before deployment on your site.",
      },
      {
        question: "Do you provide night watch and 24×7 security in Gurugram and Noida?",
        answer:
          "Yes. We deploy day, night, and rotational shifts for corporate, industrial, and warehouse sites across Gurugram, Noida, Manesar, Faridabad, and other Delhi NCR locations, with supervisor reporting on each shift.",
      },
      {
        question: "How quickly can you replace an absent security guard?",
        answer:
          "Replacement timelines depend on location and role. For standard corporate and industrial posts in Gurugram, Noida, and nearby areas, we prioritise rapid replacement through our standby pool after you report the gap.",
      },
      {
        question: "What is the difference between armed and unarmed security guards?",
        answer:
          "Unarmed security guards handle access control, visitor management, perimeter patrolling, and general site security — suitable for most corporate offices, malls, hospitals, and residential societies. Armed guards are deployed for high-risk sites, cash-in-transit, or locations requiring a licensed weapon presence. Both categories go through police verification under our PASARA-licensed operations.",
      },
      {
        question: "Do you provide security guards for residential societies in Delhi NCR?",
        answer:
          "Yes. We deploy security guards for gated residential societies, apartment complexes, and housing colonies across Gurugram, Noida, Faridabad, and nearby areas. Services include gate security, visitor management, parking security, and night watch — with supervisor reporting and rapid replacement when guards are absent.",
      },
      {
        question: "What does working with a PASARA-licensed agency mean for us legally?",
        answer:
          "Under the Private Security Agencies Regulation Act (PASARA), security agencies must be licensed in each state they operate in, and guards must meet age, education, and training criteria. Working with a PASARA-licensed agency like Rudra Manpower means your site's security operations are backed by compliant personnel and documented verification — which matters during audits, insurance claims, and any incident investigations.",
      },
      {
        question: "Can you provide security for corporate events and conferences?",
        answer:
          "Yes. We deploy security for corporate events, product launches, conferences, and exhibitions across Gurugram and Noida. Event security requirements — entry screening, crowd flow, VIP access control — are briefed specifically before the event date. For large-scale events, we coordinate bouncer or crowd management teams alongside standard security.",
      },
    ],
  },
  {
    id: "housekeeping",
    title: "Housekeeping Services",
    eyebrow: "Facility Hygiene",
    heroDescription:
      "Professional housekeeping services and commercial cleaning for corporates, hotels, hospitals, malls, and residential premises across Gurugram, Noida, Faridabad, and Delhi NCR.",
    intro:
      "Clean, well-maintained premises shape how clients, guests, and employees experience your facility. Rudra Manpower provides trained housekeeping staff with sector-specific SOPs — whether you run a corporate tower in Gurugram, a hotel in Noida, a hospital, or a retail mall in Faridabad.",
    image: images.housekeeping,
    imageAlt: "Professional housekeeping team cleaning a commercial facility",
    offerings: [
      {
        title: "Corporate & Office Cleaning",
        description:
          "Daily and periodic office cleaning services for workstations, meeting rooms, washrooms, and common areas with supervisor-led quality checks.",
      },
      {
        title: "Hotel & Hospitality Housekeeping",
        description:
          "Hotel housekeeping services covering room cleaning, lobby upkeep, back-of-house hygiene, and guest-area presentation for hotels and serviced apartments.",
      },
      {
        title: "Hospital & Healthcare Hygiene",
        description:
          "Hospital housekeeping services with infection-control aware cleaning for patient areas, corridors, and support zones using trained, disciplined staff.",
      },
      {
        title: "Mall, Retail & Residential Upkeep",
        description:
          "Mall and retail cleaning plus residential housekeeping support for high-footfall zones, parking levels, and society common areas across Delhi NCR.",
      },
    ],
    whyUs: [
      "Site-specific training refreshers every 15 days",
      "Supervisors for attendance and quality audits",
      "Flexible headcount for peak seasons and expansions",
      "Experience with hotels, corporates, hospitals, and malls",
      "Bundled with security or facility management if needed",
    ],
    areas: company.locations,
    keywords: [
      "housekeeping services Gurugram",
      "hotel housekeeping Noida",
      "corporate cleaning Delhi NCR",
      "facility housekeeping Faridabad",
      "hospital housekeeping services",
      "commercial cleaning services",
      "deep cleaning Gurugram",
      "housekeeping staffing agency",
    ],
    sections: [
      {
        heading: "Housekeeping services that match how your facility actually runs",
        paragraphs: [
          "Office tenants, hotel operators, and facility managers in Delhi NCR often face the same problems: no-shows, uneven washroom standards, and housekeeping teams that look busy but leave quality gaps. Rudra Manpower delivers housekeeping services with clear SOPs, supervisor checks, and attendance discipline — so your premises look and feel professionally maintained every shift.",
          "We provide commercial cleaning services and corporate housekeeping for IT parks, business centres, BPOs, and office towers in Gurugram and Noida. Shift patterns can cover early morning floor care, daytime washroom rounds, and evening deep cleans without disrupting your operations.",
        ],
      },
      {
        heading: "Hotel, hospital, mall, and residential housekeeping",
        paragraphs: [
          "Hotel housekeeping services need guest-facing polish: room turnaround, lobby presentation, and back-of-house hygiene. Our teams follow hospitality-oriented briefings so linen areas, restaurants, and corridors stay consistent with brand standards.",
          "Hospital housekeeping services require more than mop-and-bucket routines. We deploy sanitation staff trained for corridor discipline, washroom hygiene, and support-zone cleaning with awareness of infection-control expectations in healthcare environments.",
          "For mall and retail cleaning, footfall is high and spills are constant. We staff common areas, food courts, restrooms, and parking interfaces with supervisors who can reallocate people during peak hours. Residential societies get reliable housekeeping staffing for lobbies, stairs, parks, and clubhouses across Faridabad, Gurugram, and Noida.",
        ],
      },
      {
        heading: "Training, supervisors, and scalable headcount",
        paragraphs: [
          "Every 15 days we run site-specific training refreshers on cleaning standards, chemical handling basics, waste segregation, and guest-area presentation. That keeps standards from drifting after the first month of a contract.",
          "A named supervisor tracks attendance, quality audits, and client escalations. When you expand floors, open a new wing, or need deep cleaning services before an audit or festive season, we scale headcount through our housekeeping staffing agency model without forcing you to rebuild vendor relationships.",
          "Many clients combine housekeeping with security guard services or technical facility management under one Rudra contract — one invoice, one accountability chain, one army veteran-led operations culture.",
        ],
      },
      {
        heading: "How our housekeeping deployment process works",
        paragraphs: [
          "Step 1 — Facility walkthrough: We visit your premises to map cleaning zones, understand footfall patterns, identify high-hygiene areas (washrooms, pantries, reception), and agree on shift timings that don't disrupt your operations.",
          "Step 2 — Staff selection and briefing: Housekeeping staff are assigned based on your facility type — hotel, hospital, office, or mall — with sector-specific briefing on SOPs before day one. No staff arrives without a site induction.",
          "Step 3 — Supervisor assignment: A named supervisor is accountable for attendance, quality rounds, and client escalations. You get a direct line — not a call centre queue.",
          "Step 4 — Ongoing quality audits: Every 15 days, our training team runs refreshers on cleaning standards, chemical handling, waste segregation, and guest-area presentation. Standards don't drift after month one.",
          "Step 5 — Scaling and adjustments: New floor, festive season, or audit prep? We scale headcount or shift frequency with short notice — no rebuilding vendor relationships.",
        ],
      },
      {
        heading: "Deep cleaning vs daily housekeeping — which do you need?",
        paragraphs: [
          "Daily housekeeping covers routine maintenance: workstation wipe-downs, washroom rounds, floor mopping, waste collection, and lobby upkeep. It keeps your facility presentable every shift and is the foundation of any commercial cleaning contract.",
          "Deep cleaning goes beyond the surface: behind fixtures, ceiling fans, AC vents, tile grout, pantry appliances, and high-touch points that daily cleaning doesn't reach. Most corporate offices benefit from monthly or quarterly deep cleaning schedules alongside daily maintenance.",
          "For hospitals and food-adjacent facilities, deep sanitation with disinfectants and infection-control protocols may be required more frequently — and needs trained staff, not general cleaners. Rudra Manpower provides both daily and periodic deep cleaning services with staffing scaled to your schedule.",
        ],
      },
      {
        heading: "Housekeeping coverage across Delhi NCR",
        paragraphs: [
          "We deploy housekeeping teams in Gurugram, Noida, Rohtak, Sonipat, Manesar, Faridabad, and Bhiwadi. Tell us your facility type, areas to cover, preferred shift timings, and whether you need daily cleaning, periodic deep cleaning, or full sanitation staff supply.",
          "Looking for a housekeeping partner who also understands PASARA-grade discipline on multi-service campuses? Request a free quote and we will propose staffing levels, supervisory structure, and a mobilisation timeline suited to your site.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide housekeeping for hotels and hospitals?",
        answer:
          "Yes. We deploy hotel housekeeping and hospital housekeeping teams with sector-specific SOPs, supervisor oversight, and training refreshers every 15 days across Delhi NCR.",
      },
      {
        question: "Can you scale housekeeping staff for peak seasons?",
        answer:
          "Yes. As a housekeeping staffing agency, we mobilise additional cleaners and sanitation staff for festive peaks, audits, deep cleaning programmes, and new floor takeovers.",
      },
      {
        question: "Which cities do you cover for commercial cleaning?",
        answer:
          "We provide commercial cleaning and corporate housekeeping across Gurugram, Noida, Faridabad, Manesar, Sonipat, Rohtak, and Bhiwadi.",
      },
      {
        question: "What is the minimum contract period for housekeeping services?",
        answer:
          "Minimum engagement periods depend on facility type and headcount. For standard corporate and commercial housekeeping, we typically work on monthly or quarterly contracts. For event or one-time deep cleaning, single-day or week-long engagements are available. Contact us with your requirement for a tailored proposal.",
      },
      {
        question: "Do you supply housekeeping equipment and cleaning materials?",
        answer:
          "Our model focuses on trained manpower supply — the housekeeping staff, supervisors, and operational accountability. Equipment and cleaning materials can be discussed as part of your contract scope. Many clients provide site-specific equipment and materials; we supply the trained workforce and management oversight.",
      },
      {
        question: "How do you ensure consistent quality once the contract starts?",
        answer:
          "A named supervisor conducts quality rounds and is accountable for attendance and client complaints. We also run training refreshers every 15 days on your facility's specific standards. If quality drops, you have a direct escalation contact — not a generic helpline. This structure is what separates our housekeeping staffing model from agencies that deploy and disappear.",
      },
      {
        question: "Can you handle housekeeping for multiple floors or branches?",
        answer:
          "Yes. We manage multi-floor and multi-site housekeeping contracts with centralised supervisor coordination and site-wise reporting. Corporate clients with offices across Gurugram and Noida can consolidate under one Rudra housekeeping contract for consistent standards and single-invoice billing.",
      },
    ],
  },
  {
    id: "bouncer",
    title: "Bouncer Services",
    eyebrow: "Venue & Event Security",
    heroDescription:
      "Professional bouncers for hotels, banquets, clubs, weddings, and corporate events across Gurugram, Noida, and Delhi NCR.",
    intro:
      "Events and hospitality venues need more than a guard at the gate — they need trained personnel who can manage crowds professionally, screen entries, and represent your brand with discipline. Rudra Manpower supplies uniformed bouncers for hotels, banquets, clubs, and corporate events with pre-deployment briefing and supervisor oversight.",
    image: images.bouncer,
    imageAlt: "Professional event and venue security staff",
    offerings: [
      {
        title: "Hotel & Banquet Security",
        description:
          "Entry screening, guest-list management, and crowd control for hotels, wedding venues, and banquet halls in Gurugram and Noida.",
      },
      {
        title: "Club & Nightlife Venues",
        description:
          "Professional bouncers for clubs, lounges, and nightlife establishments with conflict de-escalation training.",
      },
      {
        title: "Corporate Events & Conferences",
        description:
          "Security for corporate gatherings, product launches, exhibitions, and private events with uniformed, disciplined staff.",
      },
      {
        title: "Crowd Management",
        description:
          "Screening, queue management, and perimeter control for high-footfall events and VIP gatherings across Delhi NCR.",
      },
    ],
    whyUs: [
      "Police-verified personnel from a PASARA-licensed agency",
      "Pre-event briefing and dress code standards",
      "Experienced with Gurugram and Noida hospitality venues",
      "Supervisor coordination for multi-bouncer deployments",
    ],
    areas: company.locations,
    keywords: [
      "bouncer services Gurugram",
      "event security Noida",
      "hotel bouncer Delhi NCR",
      "banquet security Haryana",
    ],
  },
  {
    id: "pso",
    title: "PSO Services",
    eyebrow: "Executive Protection",
    heroDescription:
      "Personal Security Officers for executives, VIPs, and high-profile individuals across Delhi NCR — discreet, verified protection.",
    intro:
      "When you need close protection for a director, executive, VIP guest, or high-profile individual, you cannot compromise on verification, conduct, or reliability. Rudra Manpower deploys experienced PSOs with police verification, escort protocols, and professional discretion across Gurugram, Noida, and the wider Delhi NCR region.",
    image: images.pso,
    imageAlt: "Personal security officer providing executive protection",
    offerings: [
      {
        title: "Executive & Director Protection",
        description:
          "Dedicated PSOs for business leaders, corporate directors, and senior management with daily escort and site security.",
      },
      {
        title: "VIP & Guest Protection",
        description:
          "Assignment-based protection for visiting dignitaries, celebrity guests, and high-profile visitors to your facility or event.",
      },
      {
        title: "Travel & Escort Duties",
        description:
          "Accompany executives between office, residence, airport, and meetings with threat-aware route and communication protocols.",
      },
      {
        title: "Residential & Office Cover",
        description:
          "Static and mobile PSO coverage for residences, corporate offices, and sensitive locations across Delhi NCR.",
      },
    ],
    whyUs: [
      "Police-verified PSO personnel only",
      "Army veteran-led agency standards",
      "Discreet, professional conduct",
      "Flexible assignment-based deployment",
    ],
    areas: company.locations,
    keywords: [
      "PSO services Gurugram",
      "personal security officer Noida",
      "executive protection Delhi NCR",
      "VIP security Haryana",
    ],
  },
  {
    id: "technical",
    title: "Technical & Facility Management",
    eyebrow: "Skilled Technicians",
    heroDescription:
      "Facility managers, electricians, plumbers, AC operators, DG operators, and multi-technicians for corporates and industrial sites in Delhi NCR.",
    intro:
      "Facility breakdowns cost time and money. Rudra Manpower provides skilled technical staff and facility coordinators who keep your building systems running — from electrical and plumbing work to AC, DG operations, and on-site facility management across Gurugram, Noida, Manesar, and Faridabad.",
    image: images.technical,
    imageAlt: "Technical facility management and maintenance staff",
    offerings: [
      {
        title: "Facility Managers & Supervisors",
        description:
          "On-site coordinators who manage technicians, track maintenance schedules, and liaise with your admin and operations teams.",
      },
      {
        title: "Electricians, Plumbers & Carpenters",
        description:
          "Skilled tradespeople for routine maintenance, breakdown response, and fit-out support at corporates and industrial facilities.",
      },
      {
        title: "AC & DG Operators",
        description:
          "Trained operators for HVAC systems, DG sets, and plant room monitoring at malls, hospitals, hotels, and office campuses.",
      },
      {
        title: "Multi-Technician Support",
        description:
          "Flexible technical teams for campuses with mixed MEP requirements — one contract, coordinated deployment.",
      },
    ],
    whyUs: [
      "Supervisor-led technical team coordination",
      "Deployment across Gurugram, Noida & Manesar",
      "Flexible headcount for single-site or multi-location contracts",
      "Army veteran-led operational accountability",
    ],
    areas: company.locations,
    keywords: [
      "facility management Gurugram",
      "electrician manpower Noida",
      "AC operator staffing Delhi NCR",
      "technical staff Manesar",
    ],
  },
  {
    id: "horticulture",
    title: "Horticulture Services",
    eyebrow: "Landscaping & Greenery",
    heroDescription:
      "Landscaping, garden maintenance, and indoor plant care for corporates, hotels, residential societies, and commercial campuses.",
    intro:
      "Well-kept green spaces reflect the quality of your facility. Rudra Manpower provides horticulture teams for lawn care, garden maintenance, seasonal planting, and indoor greenery across corporate campuses, hotels, hospitals, and residential societies in Delhi NCR.",
    image: images.horticulture,
    imageAlt: "Professional horticulture and landscaping maintenance",
    offerings: [
      {
        title: "Landscaping & Garden Design Support",
        description:
          "Grounds maintenance, lawn mowing, hedge trimming, and planting support for commercial and residential properties.",
      },
      {
        title: "Regular Maintenance Schedules",
        description:
          "Weekly and monthly horticulture routines tailored to your campus size, season, and presentation standards.",
      },
      {
        title: "Indoor Plant Care",
        description:
          "Lobby, atrium, and office plant maintenance for corporates and hotels that want green interiors without the hassle.",
      },
      {
        title: "Seasonal Upkeep Programs",
        description:
          "Monsoon, summer, and winter preparation for lawns, planters, and outdoor green zones across Delhi NCR.",
      },
    ],
    whyUs: [
      "Dedicated horticulture teams with supervisor oversight",
      "Flexible schedules for corporates and residential societies",
      "Coverage in Gurugram, Noida, Faridabad & Sonipat",
      "Bundled with housekeeping and facility contracts available",
    ],
    areas: company.locations,
    keywords: [
      "horticulture services Gurugram",
      "landscaping manpower Noida",
      "garden maintenance Delhi NCR",
      "facility landscaping Haryana",
    ],
  },
  {
    id: "labour",
    title: "General Labour & Helpers",
    eyebrow: "Industrial Workforce",
    heroDescription:
      "Reliable labour and helper staff for manufacturing plants, mills, warehouses, gyms, and industrial operations across Delhi NCR and UP.",
    intro:
      "Production lines, warehouses, and industrial sites depend on helpers who show up, follow instructions, and stay. Rudra Manpower deploys general labour and helper staff for manufacturing units, mills, FMCG plants, and fitness centres — with supervisor coordination and flexible shift arrangements in Gurugram, Manesar, Noida, Rohtak, and Sonipat.",
    image: images.labour,
    imageAlt: "Industrial labour and helper workforce",
    offerings: [
      {
        title: "Manufacturing & Mill Operations",
        description:
          "Helper staff for production floors, packaging lines, and mill operations with shift-based deployment.",
      },
      {
        title: "Loading & Material Handling",
        description:
          "Labour for warehouse loading, unloading, stacking, and internal material movement at industrial and logistics sites.",
      },
      {
        title: "Site Helper Deployment",
        description:
          "General helpers for ongoing operational support at factories, gyms, and commercial facilities.",
      },
      {
        title: "Flexible Shift Arrangements",
        description:
          "Day, night, and rotational shifts scaled to your production calendar and seasonal demand.",
      },
    ],
    whyUs: [
      "Experience with FMCG, steel, and mill operations",
      "Fair wages and structured attendance tracking",
      "Supervisor-led on-ground coordination",
      "Rapid mobilisation for production peaks",
    ],
    areas: company.locations,
    keywords: [
      "industrial labour Gurugram",
      "factory helper Manesar",
      "manufacturing labour Noida",
      "warehouse helpers Delhi NCR",
      "labour supply Sonipat",
      "labour supply Delhi NCR",
      "manpower contractor Manesar",
    ],
    sections: [
      {
        heading: "When factories and warehouses need reliable labour supply",
        paragraphs: [
          "Production lines stall when helpers are late, undocumented, or unmanaged. Rudra Manpower provides verified general labour supply across Delhi NCR for manufacturing plants, mills, warehouses, and logistics yards — with attendance discipline and supervisor coordination built into the contract.",
          "Clients in Manesar, Sonipat, Bhiwadi, Gurugram, and Noida typically request loading teams, packaging helpers, and shift-based industrial manpower that can scale up for peak seasons without long recruitment cycles.",
        ],
      },
      {
        heading: "How our labour deployment works",
        paragraphs: [
          "1) Share location, headcount, shift pattern, and skill mix. 2) We propose wage bands and compliance scope (EPFO/ESIC where applicable). 3) Document checks and briefing before join. 4) Mobilise with a named supervisor. 5) Track attendance and replacements through weekly reporting.",
          "This process keeps your shop-floor managers focused on output while we handle workforce reliability for general labour and helpers.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide labour supply in Sonipat and Manesar industrial areas?",
        answer:
          "Yes. We deploy general labour and helpers for factories and warehouses across Sonipat, Kundli, IMT Manesar, and nearby industrial belts. Call 8278065927 with your headcount requirement.",
      },
      {
        question: "Is your contract labour EPFO and ESIC compliant?",
        answer:
          "Where statutory coverage applies, our contract manpower model supports EPFO and ESIC compliance along with attendance and wage documentation so your site stays organised.",
      },
      {
        question: "Can you ramp labour headcount quickly for production peaks?",
        answer:
          "Yes. After site assessment and confirmation, we can mobilise additional helpers for seasonal demand, loading peaks, or temporary production increases across Delhi NCR.",
      },
    ],
  },
  {
    id: "construction-labour",
    title: "Construction Site Labour",
    eyebrow: "Site Workforce",
    heroDescription:
      "Masons, helpers, bar benders, and general construction labour for residential, commercial, and infrastructure projects in Delhi NCR.",
    intro:
      "Construction timelines slip when labour doesn't show up or isn't safety-briefed. Rudra Manpower supplies skilled and semi-skilled construction workforce for builders and contractors across Noida, Faridabad, Gurugram, Sonipat, and Rohtak — including masons, helpers, bar benders, and general site workers for residential, commercial, and infrastructure projects.",
    image: images.construction,
    imageAlt: "Construction site labour workforce",
    offerings: [
      {
        title: "Masons, Helpers & Bar Benders",
        description:
          "Skilled and semi-skilled workers for concrete, masonry, reinforcement, and general construction tasks.",
      },
      {
        title: "Residential & Commercial Projects",
        description:
          "Workforce for high-rise, villa, warehouse, and commercial build-outs across Delhi NCR corridors.",
      },
      {
        title: "Daily Wage & Contract Deployment",
        description:
          "Flexible engagement models — daily wage teams or longer contract mobilisation for project phases.",
      },
      {
        title: "Safety-Briefed Site Workforce",
        description:
          "PPE awareness and site conduct briefing before workers enter your construction zone.",
      },
    ],
    whyUs: [
      "Experience with projects in Noida and Faridabad",
      "Site security and labour from one agency",
      "Supervisor coordination for multi-site builders",
      "Scalable headcount as project phases progress",
    ],
    areas: company.locations,
    keywords: [
      "construction labour Noida",
      "mason helper Faridabad",
      "site labour Gurugram",
      "construction manpower Delhi NCR",
    ],
  },
  {
    id: "professional",
    title: "Professional & Supervisory Staff",
    eyebrow: "On-Ground Leadership",
    heroDescription:
      "Site supervisors, facility coordinators, and operations leads who manage teams and uphold service quality across client locations.",
    intro:
      "Good manpower needs good leadership on the ground. Rudra Manpower provides experienced supervisors and facility coordinators who manage attendance, conduct shift briefings, liaise with clients, and ensure your security, housekeeping, or labour teams deliver to standard — across single sites or multi-location contracts in Delhi NCR.",
    image: images.facility,
    imageAlt: "Site supervisor coordinating facility operations",
    offerings: [
      {
        title: "Site Supervisors & Team Leads",
        description:
          "On-ground leaders who manage guard, housekeeping, or labour teams with daily reporting and quality checks.",
      },
      {
        title: "Facility Coordinators",
        description:
          "Single-point contacts who coordinate multi-service deployments and client escalations at large campuses.",
      },
      {
        title: "Shift Management & Reporting",
        description:
          "Attendance tracking, shift handover logs, and incident reporting so you always know what's happening on site.",
      },
      {
        title: "Client Liaison & Escalation Handling",
        description:
          "Professional supervisors who represent Rudra and your brand during inspections, audits, and operational reviews.",
      },
    ],
    whyUs: [
      "Army veteran-led supervisory standards",
      "Experienced across security and facility operations",
      "Clear reporting and escalation protocols",
      "Deployable across Gurugram, Noida & Manesar",
    ],
    areas: company.locations,
    keywords: [
      "site supervisor Gurugram",
      "facility coordinator Noida",
      "manpower supervisor Delhi NCR",
      "operations lead Haryana",
    ],
  },
  {
    id: "contract-staffing",
    title: "Contract Manpower Deployment",
    eyebrow: "Flexible Staffing",
    heroDescription:
      "End-to-end contract staffing for short-term projects, seasonal demand, and long-term engagements with EPFO, ESIC, and statutory compliance.",
    intro:
      "Whether you need 10 people for a three-month project or 100 across multiple sites on a long-term contract, Rudra Manpower handles recruitment, deployment, supervision, and compliance — so you get a single accountable partner for workforce operations across Delhi NCR.",
    image: images.team,
    imageAlt: "Contract manpower deployment team",
    offerings: [
      {
        title: "Project-Based & Long-Term Contracts",
        description:
          "Staffing models tailored to construction phases, facility contracts, seasonal peaks, and ongoing operational needs.",
      },
      {
        title: "Rapid Workforce Mobilisation",
        description:
          "Quick headcount ramp-up for new site openings, production increases, and urgent replacement requirements.",
      },
      {
        title: "EPFO, ESIC & Statutory Compliance",
        description:
          "Support for applicable labour compliance so your contract workforce operations stay organised and accountable.",
      },
      {
        title: "Scalable Multi-Site Teams",
        description:
          "One contract structure across Gurugram, Noida, Manesar, Faridabad, Sonipat, Rohtak, and Bhiwadi with centralised coordination.",
      },
    ],
    whyUs: [
      "Single partner for security, housekeeping, labour & technical staff",
      "Transparent contracts and site-wise reporting",
      "GeM registered for government and institutional tenders",
      "Army veteran-led operational oversight",
    ],
    areas: company.locations,
    keywords: [
      "contract manpower Delhi NCR",
      "manpower services in Delhi NCR",
      "staffing agency Gurugram",
      "manpower supplier Noida",
      "EPFO ESIC compliant staffing agency Gurugram",
      "best manpower agency Gurugram",
      "manpower outsourcing Delhi NCR",
    ],
    sections: [
      {
        heading: "Verified manpower services across Delhi NCR",
        paragraphs: [
          "Searching for manpower services in Delhi NCR usually means you need one accountable partner for security, housekeeping, labour, and project staffing — not five vendors with fragmented billing. Rudra Manpower delivers contract staffing with PASARA-licensed security capability, police-verified deployments, and army veteran-led supervision from Gurugram across Delhi, Noida, Faridabad, Manesar, Sonipat, Rohtak, and Bhiwadi.",
          "Our contract manpower model covers short-term project teams, seasonal peaks, and long-term facility contracts. You get clear headcount tracking, supervisor reporting, and EPFO/ESIC compliant staffing support where statutory rules apply.",
        ],
      },
      {
        heading: "What buyers should ask before hiring a manpower agency",
        paragraphs: [
          "Ask for PASARA licensing if the scope includes security guards. Ask how police verification is documented. Ask who pays wages and on what cycle. Ask how absentee replacements are handled within 24–48 hours. Ask whether EPFO and ESIC are included for eligible categories.",
          "Those answers separate a reliable manpower agency from a body-shopping broker. We design every proposal around those checkpoints so finance, admin, and site teams stay aligned.",
        ],
      },
      {
        heading: "How contract staffing deployment works with Rudra",
        paragraphs: [
          "1) Requirement capture — roles, locations, shifts, and compliance needs. 2) Proposal with wage bands and deployment timeline. 3) Screening and verification. 4) Site induction with supervisor assignment. 5) Ongoing attendance, quality, and replacement management.",
          "Whether you need 10 people for a warehouse opening or multi-site corporate manpower solutions, we keep one operations owner accountable end to end.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide manpower services across Delhi NCR?",
        answer:
          "Yes. Rudra Manpower provides contract staffing, security manpower, housekeeping staff, and labour supply across Delhi, Gurugram, Noida, Faridabad, Manesar, Sonipat, Rohtak, and Bhiwadi.",
      },
      {
        question: "Is Rudra an EPFO ESIC compliant staffing agency in Gurugram?",
        answer:
          "Yes. Where statutory coverage applies, our contract manpower deployment includes EPFO and ESIC compliance support along with organised wage and attendance documentation.",
      },
      {
        question: "Can one contract cover security, housekeeping, and labour together?",
        answer:
          "Yes. Many Delhi NCR clients prefer an integrated manpower outsourcing model so security guards, housekeeping staff, and helpers are managed under one verified partner with single-point reporting.",
      },
      {
        question: "How fast can you deploy contract manpower after confirmation?",
        answer:
          "Timelines depend on role mix and location. For standard security and housekeeping requirements in Gurugram, Delhi, and Noida, we can often mobilise within a few days after site assessment and document clearance.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export function getServiceDetail(id: string): ServiceDetailEnriched | undefined {
  const service = serviceDetails.find((item) => item.id === id);
  if (!service) return undefined;

  const pageKeywords = keywordsForService(id);
  const keywords = [...new Set([...service.keywords, ...pageKeywords])];
  const keywordParagraph = `Looking for ${service.title.toLowerCase()} in ${company.region}? Rudra Manpower is a PASARA licensed manpower agency offering police-verified teams across ${company.locations.join(", ")} — with supervisor accountability on every shift.`;

  return { ...service, keywords, keywordParagraph };
}
