import { company } from "./data";
import { images } from "./images";

export const whyChooseRudra = [
  {
    title: "PASARA Licensed & Police Verified",
    description:
      "Every security deployment is backed by PASARA licensing and police verification — so you know exactly who is on your gate, floor, or site in Gurugram, Noida, and across Delhi NCR.",
  },
  {
    title: "Army Veteran-Led Operations",
    description:
      "Led by a retired Indian Army Captain, our teams follow briefing-before-shift discipline, uniform standards, and on-ground accountability that corporates and industrial sites expect.",
  },
  {
    title: "Reliable Shift Coverage",
    description:
      "Absent guards and no-show housekeeping staff disrupt your operations. We focus on attendance, supervisor-led reporting, and rapid replacement when coverage gaps appear.",
  },
  {
    title: "Training Every 15 Days",
    description:
      "Site-specific refreshers for security, housekeeping, and labour teams — covering access control, hygiene SOPs, fire safety, and conduct standards aligned to your facility.",
  },
  {
    title: "Deployed Across Delhi NCR",
    description: `Active operations in ${company.locations.join(", ")} with scalable teams for single-site and multi-location contracts.`,
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
    locations: "Gurugram, Noida, Manesar, Faridabad, Sonipat",
    type: "Full-time / Shift-based",
    description:
      "Join our PASARA-licensed security teams for corporate, industrial, hotel, and residential deployments across Delhi NCR. Police verification required.",
  },
  {
    id: "housekeeping",
    title: "Housekeeping Staff",
    locations: "Gurugram, Noida, Faridabad",
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
    locations: "Noida, Faridabad, Sonipat, Rohtak",
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

export const serviceDetails: ServiceDetail[] = [
  {
    id: "security",
    title: "Security Services",
    eyebrow: "PASARA Licensed",
    heroDescription:
      "Police-verified security guards, bouncers, and PSO teams for corporates, hotels, factories, and construction sites across Delhi NCR.",
    intro:
      "Your first line of defence should be licensed, verified, and disciplined. Rudra Manpower deploys PASARA-compliant security personnel with army veteran-led oversight — from gate access and fire safety to bouncer services for venues and PSO deployment for executive protection in Gurugram, Noida, Manesar, Faridabad, Sonipat, and Rohtak.",
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
        title: "Bouncer Services",
        description:
          "Trained bouncers for hotels, banquets, clubs, and corporate events — crowd screening, entry control, and professional venue security in Gurugram and Noida.",
      },
      {
        title: "PSO Deployment",
        description:
          "Personal Security Officers for executives, VIPs, and high-profile individuals — escort protocols, threat awareness, and discreet professional protection.",
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
      "bouncer services Delhi NCR",
      "PSO security Haryana",
      "corporate security Manesar",
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
];

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export function getServiceDetail(id: string) {
  return serviceDetails.find((item) => item.id === id);
}
