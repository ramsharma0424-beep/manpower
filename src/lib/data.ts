export const company = {
  name: "Rudra Manpower Services Pvt. Ltd.",
  shortName: "Rudra Manpower",
  tagline: "Your trusted partner for security, housekeeping & manpower in Delhi NCR",
  heroHeadline: "Need a Workforce You Can Actually Rely On?",
  heroSubtext:
    "Led by a dedicated retired armed forces team, Rudra Manpower deploys disciplined, police-verified security, housekeeping, and labour across Delhi NCR — with supervisors accountable on every shift.",
  founded: "April 10, 2023",
  email: "rudramanpowerservices@gmail.com",
  phone: "7005851441",
  website: "https://manpowerservices.com",
  contactPerson: "Mr. Raj Kumar",
  region: "Delhi NCR",
  locations: ["Gurugram", "Noida", "Rohtak", "Sonipat", "Manesar", "Faridabad", "Bhiwadi"],
  address: "Gurugram, Haryana, India",
};

export const aboutContent = {
  title: "We're Here to Make Manpower Simple for You",
  summary:
    "If you've ever dealt with absent staff, unclear billing, or security you can't trust — you're not alone. Rudra Manpower was built to fix that, with a retired armed forces team overseeing every deployment on the ground.",
  paragraphs: [
    "We started in 2023 because too many businesses in Delhi NCR were stuck with the same problems: delayed wages to workers, no transparency on who's deployed, constant re-hiring, and security staff without proper verification. You deserve better than that.",
    `Today, we deploy PASARA-licensed security guards, trained housekeeping teams, and skilled labour across ${company.locations.join(", ")} — for corporates, hospitals, hotels, malls, factories, and construction sites. Whether you manage one facility or ten, we scale with you.`,
    "Our promise is simple: you focus on running your business. We'll handle the people, the discipline, and the accountability on the ground.",
  ],
};

export const coreValues = [
  {
    title: "Discipline & Integrity",
    description:
      "Every deployment follows clear SOPs, dress codes, and conduct standards — shaped by army-led leadership and on-site accountability.",
    icon: "shield",
  },
  {
    title: "Reliability & Punctuality",
    description:
      "We show up on time, every time. Our clients depend on consistent attendance and professional conduct across all shifts.",
    icon: "clock",
  },
  {
    title: "Transparency",
    description:
      "Open communication in contracts, billing, and site reporting — so clients always know who is deployed and how operations are running.",
    icon: "eye",
  },
  {
    title: "People First",
    description:
      "Fair wages, timely payments, performance incentives, and growth opportunities that keep our workforce motivated and loyal.",
    icon: "heart",
  },
  {
    title: "Safety & Verification",
    description:
      "You need to know who's on your site — and that they're vetted. We run police verification and document checks on every security deployment before day one.",
    icon: "check",
  },
  {
    title: "Excellence in Service",
    description:
      "Regular training every 15 days, shift briefings, and quality audits to maintain standards that match client expectations.",
    icon: "star",
  },
];

export const solutions = [
  {
    title: "Timely & Fair Compensation",
    problem: "Delayed wage payments erode workforce trust and increase absenteeism.",
    solution:
      "We run structured payroll cycles with transparent payout schedules, helping clients retain motivated staff and avoid operational disruption.",
    icon: "payment",
  },
  {
    title: "Workforce Retention",
    problem: "High turnover forces constant re-hiring and re-training at client sites.",
    solution:
      "Through incentives, periodic wage reviews, and a supportive work culture, we reduce attrition and keep experienced personnel on your premises.",
    icon: "retention",
  },
  {
    title: "Operational Transparency",
    problem: "Clients often lack visibility into who is deployed and how shifts are managed.",
    solution:
      "Clear contracts, site-wise reporting, and supervisor-led coordination give you full visibility into manpower operations at every location.",
    icon: "transparency",
  },
  {
    title: "Police-Verified Deployment",
    problem: "Inadequate background checks expose sites to security and compliance risks.",
    solution:
      "Every security and sensitive-site deployment goes through stringent police verification and document checks before staff set foot on your premises.",
    icon: "verify",
  },
  {
    title: "Military-Led Oversight",
    problem: "Inconsistent supervision leads to gaps in discipline and service quality.",
    solution:
      "Led by a retired Army Captain, our operations emphasise briefing-before-shift, uniform standards, and mission-ready teams at every site.",
    icon: "leadership",
  },
];

export const stats = [
  { value: "2023", label: "Established" },
  { value: "7+", label: "Enterprise Clients" },
  { value: "Delhi NCR", label: "Primary Region" },
  { value: "10", label: "Service Verticals" },
];

export const certifications = [
  {
    id: "pasara",
    title: "PASARA Licensed",
    description: "Licensed under the Private Security Agencies Regulation Act",
    logo: "/certificates/psara.png",
  },
  {
    id: "startup-india",
    title: "Startup India Recognized",
    description: "Recognized by Department for Promotion of Industry and Internal Trade",
    logo: "/certificates/startup-india.png",
  },
  {
    id: "gem",
    title: "GeM Registered",
    description: "Registered on Government e-Marketplace for public procurement",
    logo: "/certificates/gem.png",
  },
  {
    id: "gst",
    title: "GST Registered",
    description: "Goods and Services Tax compliant operations",
    logo: "/certificates/gst.png",
  },
  {
    id: "epfo",
    title: "EPFO Registered",
    description: "Employees Provident Fund Organisation registered employer",
    logo: "/certificates/epfo.png",
  },
  {
    id: "esic",
    title: "ESIC Registered",
    description: "Employees State Insurance Corporation compliant",
    logo: "/certificates/esic.png",
  },
  {
    id: "mca",
    title: "MCA Incorporated",
    description: "Registered with Ministry of Corporate Affairs, Government of India",
    logo: "/certificates/mca.png",
  },
];

export const footerPolicies = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export const clientServiceFilters = [
  "Show All",
  "Security",
  "Housekeeping",
  "Labour",
  "Helper",
] as const;

export const clientIndustryFilters = [
  "Show All",
  "FMCG",
  "Hospitality",
  "Manufacturing",
  "Construction",
  "Fitness",
] as const;

export const services = [
  {
    id: "security",
    title: "Security Services",
    description:
      "Trained security personnel for safety, access control, fire safety, and parking management across corporate and industrial sites.",
    icon: "shield",
    highlights: [
      "Access control & visitor management",
      "Fire safety & emergency response",
      "Parking & perimeter security",
      "PASARA-licensed operations",
    ],
  },
  {
    id: "housekeeping",
    title: "Housekeeping Services",
    description:
      "Professional cleaning and hygiene maintenance for corporate offices, malls, hospitals, hotels, and residential premises.",
    icon: "sparkles",
    highlights: [
      "Corporate & commercial cleaning",
      "Hospital & hotel hygiene standards",
      "Mall & retail facility upkeep",
      "Residential housekeeping support",
    ],
  },
  {
    id: "bouncer",
    title: "Bouncer Services",
    description:
      "Professional bouncers for hotels, banquets, clubs, corporate events, and venues across Gurugram, Noida, and Delhi NCR.",
    icon: "bouncer",
    highlights: [
      "Hotel, banquet & club venue security",
      "Crowd screening & entry control",
      "Event and nightlife assignments",
      "Trained, uniformed personnel",
    ],
  },
  {
    id: "pso",
    title: "PSO Services",
    description:
      "Personal Security Officers for executives, VIPs, and high-profile individuals — discreet, verified protection across Delhi NCR.",
    icon: "pso",
    highlights: [
      "Executive & VIP escort protection",
      "Police-verified PSO personnel",
      "Threat awareness & communication protocols",
      "Assignment-based deployment",
    ],
  },
  {
    id: "technical",
    title: "Technical & Facility Management",
    description:
      "Skilled technical workforce including facility managers, supervisors, electricians, plumbers, AC operators, and DG operators.",
    icon: "wrench",
    highlights: [
      "Facility managers & supervisors",
      "Electricians, plumbers & carpenters",
      "AC & DG operators",
      "Multi-technician support",
    ],
  },
  {
    id: "horticulture",
    title: "Horticulture Services",
    description:
      "Landscaping, garden maintenance, and indoor plant care to keep your premises green and well-maintained.",
    icon: "leaf",
    highlights: [
      "Landscaping & garden design",
      "Regular maintenance schedules",
      "Indoor plant care",
      "Seasonal upkeep programs",
    ],
  },
  {
    id: "labour",
    title: "General Labour & Helpers",
    description:
      "Reliable labour and helper staff for manufacturing, mills, gyms, and industrial operations across North India.",
    icon: "users",
    highlights: [
      "Manufacturing & mill operations",
      "Loading & material handling",
      "Site helper deployment",
      "Flexible shift arrangements",
    ],
  },
  {
    id: "construction-labour",
    title: "Construction Site Labour",
    description:
      "Skilled and semi-skilled labour for construction sites including masons, helpers, bar benders, and general site workers for residential, commercial, and infrastructure projects.",
    icon: "construction",
    highlights: [
      "Masons, helpers & bar benders",
      "Residential & commercial projects",
      "Daily wage & contract deployment",
      "Safety-briefed site workforce",
    ],
  },
  {
    id: "professional",
    title: "Professional & Supervisory Staff",
    description:
      "Experienced site supervisors, facility coordinators, and operations leads who manage on-ground teams and ensure service quality across client locations.",
    icon: "briefcase",
    highlights: [
      "Site supervisors & team leads",
      "Facility coordinators",
      "Shift management & reporting",
      "Client liaison & escalation handling",
    ],
  },
  {
    id: "contract-staffing",
    title: "Contract Manpower Deployment",
    description:
      "Flexible contract-based staffing for short-term projects, seasonal demand, and long-term engagements — with end-to-end recruitment, deployment, and compliance support.",
    icon: "clipboard",
    highlights: [
      "Project-based & long-term contracts",
      "Rapid workforce mobilisation",
      "EPFO, ESIC & statutory compliance",
      "Scalable teams across multiple sites",
    ],
  },
];

export const faqs = [
  {
    question: "Which areas does Rudra Manpower serve?",
    answer: `We deploy security, housekeeping, and labour teams across Delhi NCR, including ${company.locations.join(", ")}. Contact us to confirm availability for your site.`,
  },
  {
    question: "Are your security guards PASARA licensed and police verified?",
    answer:
      "Yes. Rudra Manpower is PASARA licensed, and every security deployment goes through police verification and document checks before staff are placed on your premises.",
  },
  {
    question: "What manpower services do you provide?",
    answer:
      "We provide security services (including bouncers and PSO deployment), housekeeping, technical and facility management, horticulture, general labour, construction site labour, professional supervisory staff, and contract manpower deployment.",
  },
  {
    question: "How quickly can you deploy staff?",
    answer:
      "Deployment timelines depend on role, headcount, and location. For standard security and housekeeping requirements in Gurugram, Noida, and nearby areas, we can often mobilise teams within a few days after site assessment.",
  },
  {
    question: "Do you handle EPFO, ESIC, and statutory compliance?",
    answer:
      "Yes. Our contract manpower deployment includes support for EPFO, ESIC, and applicable statutory compliance so your workforce operations stay organised and accountable.",
  },
  {
    question: "How do I get a quote for manpower services?",
    answer: `Share your site location, service type, and headcount through our contact form or call us at ${company.phone}. We will respond with a tailored manpower plan and quote.`,
  },
];

export const sectors = [
  "Corporate Offices",
  "Malls & Retail",
  "Hospitals",
  "BPOs",
  "Industrial Sites",
  "Residential Areas",
  "Hotels",
  "Manufacturing",
  "Construction",
];

export const clients = [
  {
    name: "Mothers Dairy",
    state: "Gurugram (Haryana)",
    service: "Security",
    industry: "FMCG",
    initials: "MD",
    featured: true,
  },
  {
    name: "Rices Mill",
    state: "Uttar Pradesh",
    service: "Labour",
    industry: "Manufacturing",
    initials: "RM",
  },
  {
    name: "Hotel Lemon Tree",
    state: "Gurugram (Haryana)",
    service: "Housekeeping",
    industry: "Hospitality",
    initials: "LT",
    featured: true,
  },
  {
    name: "Paper Mill",
    state: "Uttar Pradesh",
    service: "Security",
    industry: "Manufacturing",
    initials: "PM",
  },
  {
    name: "Gamut Buildcon",
    state: "Noida (UP)",
    service: "Security",
    industry: "Construction",
    initials: "GB",
  },
  {
    name: "Tata Steel",
    state: "Haryana",
    service: "Labour",
    industry: "Manufacturing",
    initials: "TS",
  },
  {
    name: "Sports Fit Gym",
    state: "Dwarka (Delhi)",
    service: "Helper",
    industry: "Fitness",
    initials: "SF",
  },
  {
    name: "Amul",
    state: "Uttar Pradesh",
    service: "Security",
    industry: "FMCG",
    initials: "AM",
  },
];

export const qualityAssurance = [
  "Regular training sessions every 15 days based on site requirements",
  "Briefing and dress code checks before every shift",
  "Incentives for good performance and periodic wage increases",
  "Site-specific SOPs aligned to client expectations",
];

export const vision = {
  title: "Our Vision",
  description:
    "To become Delhi NCR's most trusted manpower partner — known for disciplined teams, transparent operations, and workforce solutions that set the standard for security, facility management, and industrial staffing.",
};

export const mission = {
  title: "Our Mission",
  description:
    "To solve the manpower industry's core challenges — delayed payments, weak verification, high attrition, and poor accountability — by deploying trained, police-verified professionals under military-inspired leadership and fair, transparent employment practices.",
};

export const leadership = [
  {
    name: "Capt Raj Kumar (Retd)",
    role: "Director",
    badge: "Indian Army Veteran",
    bio: "After retiring as a Captain from the Indian Army, Raj Kumar founded Rudra Manpower in 2023 because the same problems kept showing up at client sites — guards not reporting on time, verification done only on paper, and facility managers left guessing who was actually on duty. He still runs operations hands-on, with retired armed forces supervisors handling site assessments, shift briefings, escalation calls, and quality checks across Delhi NCR.",
    highlights: [
      "Retired Captain, Indian Army",
      "Hands-on site assessments before deployment",
      "Police verification mandatory for security staff",
      "PASARA-licensed operations across Delhi NCR",
    ],
  },
];

export const aboutDropdown = [
  {
    href: "/about#who-we-are",
    label: "Who We Are",
    description: "Our story, purpose, and operating regions",
  },
  {
    href: "/about#certificates",
    label: "Certificates",
    description: "PASARA, GeM, Startup India & more",
  },
  {
    href: "/about#vision",
    label: "Vision",
    description: "Where we are headed as a company",
  },
  {
    href: "/about#mission",
    label: "Mission",
    description: "What drives every deployment we make",
  },
  {
    href: "/about#core-values",
    label: "Core Values",
    description: "Discipline, integrity & transparency",
  },
  {
    href: "/about#solutions",
    label: "Our Solutions",
    description: "How we solve industry challenges",
  },
  {
    href: "/about#leadership",
    label: "Our Leadership",
    description: "Army veteran-led management",
  },
  {
    href: "/about#quality-standards",
    label: "Quality Standards",
    description: "Training, briefings & site SOPs",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/careers", label: "Careers" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export const industryLinks = [
  { href: "/industries/hospitality", label: "Hospitality" },
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/industries/construction", label: "Construction" },
];
