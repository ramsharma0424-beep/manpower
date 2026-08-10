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
};

export type ServiceDetailEnriched = ServiceDetail & {
  keywordParagraph: string;
};

export const homeKeywordSummary = `Rudra Manpower is a trusted manpower agency and PASARA licensed security partner in ${company.region}, delivering police-verified security guard services, housekeeping services, facility management, and contract staffing with army veteran-led oversight.`;

export const serviceDetails: ServiceDetail[] = [
  {
    id: "security",
    title: "Security Services",
    eyebrow: "PASARA Licensed",
    heroDescription:
      "Police-verified security guards for corporates, factories, warehouses, and residential premises across Delhi NCR.",
    intro:
      "Your first line of defence should be licensed, verified, and disciplined. Rudra Manpower deploys PASARA-compliant security personnel with army veteran-led oversight — covering access control, fire safety, parking, and perimeter security across Gurugram, Noida, Manesar, Faridabad, Sonipat, Rohtak, and Bhiwadi.",
    image: images.security,
    imageAlt: "Professional security guard at a corporate facility",
    offerings: [
      {
        title: "Corporate & Industrial Security",
        description:
          "Access control, visitor management, CCTV coordination, and perimeter patrolling for offices, plants, warehouses, and industrial estates.",
      },
      {
        title: "Fire Safety & Emergency Response",
        description:
          "Guards trained in evacuation procedures, fire extinguisher use, and first-response reporting for malls, hospitals, and high-footfall sites.",
      },
      {
        title: "Parking & Perimeter Security",
        description:
          "Vehicle entry management, parking zone monitoring, and boundary patrolling for corporates, malls, and gated communities.",
      },
      {
        title: "Night Watch & Shift Coverage",
        description:
          "Reliable day and night shift deployment with supervisor reporting and replacement support when coverage gaps arise.",
      },
    ],
    whyUs: [
      "PASARA licensed agency with police-verified personnel",
      "Retired Army Captain-led operational discipline",
      "Supervisor reporting and shift accountability",
      "Rapid replacement when coverage gaps arise",
    ],
    areas: company.locations,
    keywords: [
      "security guards Gurugram",
      "PASARA security agency Noida",
      "corporate security Delhi NCR",
      "industrial security Manesar",
      "night watch security Haryana",
    ],
  },
  {
    id: "housekeeping",
    title: "Housekeeping Services",
    eyebrow: "Facility Hygiene",
    heroDescription:
      "Professional cleaning and hygiene teams for corporates, hotels, hospitals, malls, and residential premises across Delhi NCR.",
    intro:
      "Clean, well-maintained premises shape how clients, guests, and employees experience your facility. Rudra Manpower provides trained housekeeping staff with sector-specific SOPs — whether you run a corporate tower in Gurugram, a hotel in Noida, a hospital, or a retail mall in Faridabad.",
    image: images.housekeeping,
    imageAlt: "Professional housekeeping team cleaning a commercial facility",
    offerings: [
      {
        title: "Corporate & Office Cleaning",
        description:
          "Daily and periodic cleaning for workstations, meeting rooms, washrooms, and common areas with supervisor-led quality checks.",
      },
      {
        title: "Hotel & Hospitality Housekeeping",
        description:
          "Room cleaning, lobby upkeep, back-of-house hygiene, and guest-area presentation aligned to hospitality standards.",
      },
      {
        title: "Hospital & Healthcare Hygiene",
        description:
          "Infection-control aware cleaning for patient areas, corridors, and support zones with trained, disciplined staff.",
      },
      {
        title: "Mall, Retail & Residential Upkeep",
        description:
          "High-footfall area maintenance, retail floor cleaning, and residential society housekeeping across Delhi NCR.",
      },
    ],
    whyUs: [
      "Site-specific training refreshers every 15 days",
      "Supervisors for attendance and quality audits",
      "Flexible headcount for peak seasons and expansions",
      "Experience with hotels, corporates, and commercial sites",
    ],
    areas: company.locations,
    keywords: [
      "housekeeping services Gurugram",
      "hotel housekeeping Noida",
      "corporate cleaning Delhi NCR",
      "facility housekeeping Faridabad",
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
      "staffing agency Gurugram",
      "manpower supplier Noida",
      "EPFO ESIC manpower Haryana",
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
