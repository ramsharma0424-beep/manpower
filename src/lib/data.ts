export const company = {
  name: "Rudra Manpower Services Pvt. Ltd.",
  shortName: "Rudra Manpower",
  tagline: "Your trusted partner for security, housekeeping & manpower in Delhi NCR",
  heroHeadline: "Need a Workforce You Can Actually Rely On?",
  heroSubtext:
    "We know how frustrating it is when guards don't show up, staff turnover disrupts your operations, or you're unsure who's on your premises. That's exactly why we built Rudra — to give you disciplined, verified teams led by a retired Indian Army Captain.",
  founded: "April 10, 2023",
  email: "rudramanpowerservices@gmail.com",
  phone: "70058514441",
  contactPerson: "Mr. Raj Kumar",
  region: "Delhi NCR",
  locations: ["Delhi NCR", "Gurugram", "Noida", "Rohtak"],
  address: "Gurugram, Haryana, India",
};

export const aboutContent = {
  title: "We're Here to Make Manpower Simple for You",
  summary:
    "If you've ever dealt with absent staff, unclear billing, or security you can't trust — you're not alone. Rudra Manpower was built to fix that. Led by a retired Indian Army Captain, we give you teams that show up on time, follow SOPs, and treat your site like their own.",
  paragraphs: [
    "We started in 2023 because too many businesses in Delhi NCR were stuck with the same problems: delayed wages to workers, no transparency on who's deployed, constant re-hiring, and security staff without proper verification. You deserve better than that.",
    "Today, we deploy PASARA-licensed security guards, trained housekeeping teams, and skilled labour across Gurugram, Noida, and Rohtak — for corporates, hospitals, hotels, malls, factories, and construction sites. Whether you manage one facility or ten, we scale with you.",
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
  { value: "8", label: "Service Verticals" },
];

export const certifications = [
  {
    id: "pasara",
    name: "PASARA",
    title: "PASARA Licensed",
    description: "Licensed under the Private Security Agencies Regulation Act",
    colors: "from-blue-700 to-blue-900",
  },
  {
    id: "startup-india",
    name: "Startup India",
    title: "Startup India Recognized",
    description: "Recognized by Department for Promotion of Industry and Internal Trade",
    colors: "from-orange-500 to-orange-600",
  },
  {
    id: "gem",
    name: "GeM",
    title: "GeM Registered",
    description: "Registered on Government e-Marketplace for public procurement",
    colors: "from-green-600 to-green-700",
  },
  {
    id: "gst",
    name: "GST",
    title: "GST Registered",
    description: "Goods and Services Tax compliant operations",
    colors: "from-blue-600 to-indigo-700",
  },
  {
    id: "epfo",
    name: "EPFO",
    title: "EPFO Registered",
    description: "Employees Provident Fund Organisation registered employer",
    colors: "from-red-600 to-red-700",
  },
  {
    id: "esic",
    name: "ESIC",
    title: "ESIC Registered",
    description: "Employees State Insurance Corporation compliant",
    colors: "from-sky-600 to-blue-700",
  },
  {
    id: "mca",
    name: "MCA",
    title: "MCA Incorporated",
    description: "Registered with Ministry of Corporate Affairs, Government of India",
    colors: "from-slate-700 to-slate-900",
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
    state: "Uttar Pradesh",
    service: "Security",
    industry: "FMCG",
    initials: "MD",
    color: "#1d4ed8",
  },
  {
    name: "Rices Mill",
    state: "Uttar Pradesh",
    service: "Labour",
    industry: "Manufacturing",
    initials: "RM",
    color: "#2563eb",
  },
  {
    name: "Hotel Lemon Tree",
    state: "Uttar Pradesh",
    service: "Housekeeping",
    industry: "Hospitality",
    initials: "LT",
    color: "#3b82f6",
  },
  {
    name: "Paper Mill",
    state: "Uttar Pradesh",
    service: "Security",
    industry: "Manufacturing",
    initials: "PM",
    color: "#1e40af",
  },
  {
    name: "Gamut Buildcon",
    state: "Noida (UP)",
    service: "Security",
    industry: "Construction",
    initials: "GB",
    color: "#2563eb",
  },
  {
    name: "Tata Steel",
    state: "Haryana",
    service: "Labour",
    industry: "Manufacturing",
    initials: "TS",
    color: "#1d4ed8",
  },
  {
    name: "Sports Fit Gym",
    state: "Dwarka (Delhi)",
    service: "Helper",
    industry: "Fitness",
    initials: "SF",
    color: "#3b82f6",
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
    name: "Capt. (Retd.) Raj Kumar",
    role: "Director",
    badge: "Indian Army Veteran",
    bio: "A retired Captain from the Indian Army, Capt. (Retd.) Raj Kumar brings decades of command experience, strategic planning, and operational rigour to Rudra Manpower Services. Having led troops in high-pressure environments and managed complex security operations, he instils the same values of discipline, punctuality, and accountability across every deployment — from corporate security to industrial labour.",
    highlights: [
      "Retired Captain, Indian Army",
      "Expertise in security operations & team leadership",
      "Champion of police verification & workforce integrity",
      "Drives PASARA-compliant, mission-first service delivery",
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
    href: "/about#mission",
    label: "Mission",
    description: "What drives every deployment we make",
  },
  {
    href: "/about#vision",
    label: "Vision",
    description: "Where we are headed as a company",
  },
  {
    href: "/about#leadership",
    label: "Our Leadership",
    description: "Army veteran-led management",
  },
  {
    href: "/about#certificates",
    label: "Certificates",
    description: "PASARA, GeM, Startup India & more",
  },
  {
    href: "/about#core-values",
    label: "Core Values",
    description: "Discipline, integrity & transparency",
    suggested: true,
  },
  {
    href: "/about#solutions",
    label: "Our Solutions",
    description: "How we solve industry challenges",
    suggested: true,
  },
  {
    href: "/about#quality-standards",
    label: "Quality Standards",
    description: "Training, briefings & site SOPs",
    suggested: true,
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];
