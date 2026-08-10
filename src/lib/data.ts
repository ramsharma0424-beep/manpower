export const company = {
  name: "Rudra Manpower Services Pvt. Ltd.",
  shortName: "Rudra Manpower",
  tagline: "Your trusted manpower agency for security, housekeeping & workforce solutions in Delhi NCR",
  heroHeadline: "Need a Workforce You Can Actually Rely On?",
  heroSubtext:
    "As a verified manpower agency and reliable staffing company, Rudra Manpower deploys police-verified security guard services, housekeeping services, and labour supply across Delhi NCR — with army veteran-led supervision on every shift.",
  founded: "April 10, 2023",
  email: "rudramanpowerservices@gmail.com",
  phone: "8278065927",
  whatsappPhone: "7005851441",
  website: "https://www.rudramanpowerservice.com",
  contactPerson: "Mr. Raj Kumar",
  region: "Delhi NCR",
  locations: ["Gurugram", "Noida", "Rohtak", "Sonipat", "Manesar", "Faridabad", "Bhiwadi"],
  address: "Gurugram, Haryana, India",
};

export const aboutContent = {
  title: "We're Here to Make Manpower Simple for You",
  summary:
    "If you've ever dealt with absent staff, unclear billing, or security you can't trust — you're not alone. Rudra Manpower is a PASARA licensed security agency and verified manpower agency built to deliver corporate manpower solutions with a retired armed forces team on every deployment.",
  paragraphs: [
    "We started in 2023 because too many businesses in Delhi NCR were stuck with the same problems: delayed wages to workers, no transparency on who's deployed, constant re-hiring, and security staff without proper verification. As a trusted security partner and staffing agency, we set out to fix that.",
    `Today, we deploy PASARA-licensed security guards, trained housekeeping teams, facility management services, and skilled labour across ${company.locations.join(", ")} — for corporates, hospitals, hotels, malls, factories, and construction sites. Whether you need contract staffing for one site or workforce solutions across ten, we scale with you.`,
    "Our promise is simple: you focus on running your business. We'll handle manpower outsourcing, on-ground discipline, and accountability — from security guard services to integrated facility management.",
  ],
};

export const coreValues = [
  {
    title: "Discipline & Integrity",
    description:
      "Every deployment follows clear SOPs, dress codes, and conduct standards — shaped by our army veteran-led security company culture and on-site accountability.",
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
      "You need to know who's on your site — and that they're vetted. We run police verification and document checks on every security personnel supply deployment before day one.",
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
      "PASARA licensed security guard services with police verified security guards for access control, fire safety, perimeter security, parking security, and night watch across corporate, factory, and warehouse sites.",
    icon: "shield",
    highlights: [
      "Corporate security guards & industrial security services",
      "Access control services & visitor management",
      "Fire safety and emergency response",
      "Parking security, perimeter security & night watch",
    ],
  },
  {
    id: "housekeeping",
    title: "Housekeeping Services",
    description:
      "Professional housekeeping services and commercial cleaning for corporate offices, hotel housekeeping, hospital housekeeping, mall and retail cleaning, and residential premises.",
    icon: "sparkles",
    highlights: [
      "Office cleaning & corporate housekeeping",
      "Hotel and hospital housekeeping services",
      "Mall and retail facility hygiene",
      "Deep cleaning & sanitation staff supply",
    ],
  },
  {
    id: "bouncer",
    title: "Bouncer Services",
    description:
      "Trained bouncer services for event security, crowd management, hotel and banquet security, wedding security, and corporate event security across Gurugram, Noida, and Delhi NCR.",
    icon: "bouncer",
    highlights: [
      "Event security & venue security staff",
      "Hotel, banquet & nightclub security",
      "Entry screening and VIP crowd control",
      "Wedding and corporate event security",
    ],
  },
  {
    id: "pso",
    title: "PSO Services",
    description:
      "Personal Security Officers for executive protection, VIP security, bodyguard services, and discreet personal security across Delhi NCR.",
    icon: "pso",
    highlights: [
      "Personal security officer & close protection",
      "Executive protection & VIP security services",
      "Celebrity security & dignitary protection",
      "Executive escort security assignments",
    ],
  },
  {
    id: "technical",
    title: "Technical & Facility Management",
    description:
      "Integrated facility management with technical manpower supply — electricians, plumbers, AC operators, DG operators, HVAC, and MEP manpower services for corporates and industrial sites.",
    icon: "wrench",
    highlights: [
      "Facility management services & maintenance staff",
      "Electrician, plumber & multi-technician support",
      "AC operator and DG operator services",
      "Building maintenance & skilled technical workforce",
    ],
  },
  {
    id: "horticulture",
    title: "Horticulture Services",
    description:
      "Horticulture services including landscaping, garden maintenance, lawn care, indoor plant care, and corporate landscaping across Delhi NCR.",
    icon: "leaf",
    highlights: [
      "Landscaping & garden maintenance services",
      "Lawn care & grounds maintenance",
      "Indoor plant care for corporates",
      "Seasonal landscaping & green space management",
    ],
  },
  {
    id: "labour",
    title: "General Labour & Helpers",
    description:
      "General labour supply and helper staffing for manufacturing, warehouse labour staffing, loading and unloading, and shift-based labour deployment across North India.",
    icon: "users",
    highlights: [
      "Industrial labour & factory helper supply",
      "Warehouse labour staffing & material handling",
      "Manufacturing labour supply & mill labour",
      "Production line helpers on flexible shifts",
    ],
  },
  {
    id: "construction-labour",
    title: "Construction Site Labour",
    description:
      "Construction labour supply with mason and helper supply, bar bender labour, skilled construction workers, and safety-briefed site workforce for residential and commercial projects.",
    icon: "construction",
    highlights: [
      "Construction manpower services & site labour agency",
      "Masons, helpers & bar bender labour",
      "Daily wage labour supply & contract deployment",
      "Safety-briefed construction workforce",
    ],
  },
  {
    id: "professional",
    title: "Professional & Supervisory Staff",
    description:
      "Supervisory staff services with site supervisor supply, facility coordinators, operations lead staffing, and manpower supervision for multi-site contracts.",
    icon: "briefcase",
    highlights: [
      "Site supervisor supply & team lead staffing",
      "Facility coordinator services",
      "Shift management & quality audit staff",
      "Client liaison & on-site supervisor agency",
    ],
  },
  {
    id: "contract-staffing",
    title: "Contract Manpower Deployment",
    description:
      "Contract staffing services and end-to-end manpower outsourcing with EPFO ESIC compliant staffing, project-based staffing, and scalable workforce solutions across Delhi NCR.",
    icon: "clipboard",
    highlights: [
      "Contract manpower supply & flexible staffing",
      "Project-based & seasonal staffing services",
      "Temporary workforce deployment at scale",
      "Multi-site staffing contracts with compliance",
    ],
  },
];

export const faqs = [
  {
    question: "Which areas does Rudra Manpower serve?",
    answer: `We deploy security guard services, housekeeping services, facility management services, and labour supply teams across Delhi NCR, including ${company.locations.join(", ")}. Contact us to confirm availability for your site.`,
  },
  {
    question: "Are your security guards PASARA licensed and police verified?",
    answer:
      "Yes. Rudra Manpower is a PASARA licensed security agency, and every security guard services deployment uses police verified security guards with document checks before staff are placed on your premises.",
  },
  {
    question: "What manpower services do you provide?",
    answer:
      "We provide security services (corporate security guards, bouncers, and PSO services), housekeeping services, technical and facility management services, horticulture services, general labour supply, construction labour supply, supervisory staff services, and contract staffing services with workforce deployment across Delhi NCR.",
  },
  {
    question: "How quickly can you deploy staff?",
    answer:
      "Deployment timelines depend on role, headcount, and location. For standard security and housekeeping requirements in Gurugram, Noida, and nearby areas, we can often mobilise teams within a few days after site assessment.",
  },
  {
    question: "Do you handle EPFO, ESIC, and statutory compliance?",
    answer:
      "Yes. Our contract manpower deployment includes EPFO ESIC compliant staffing and statutory compliance support so your workforce operations stay organised and accountable.",
  },
  {
    question: "How do I get a quote for manpower services?",
    answer: `Share your site location, service type, and headcount through our contact form or call us at ${company.phone}. We will respond with a tailored manpower services plan and quote for security, housekeeping, or labour supply.`,
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
    "To become Delhi NCR's most trusted manpower services partner — known for disciplined teams, transparent operations, and workforce solutions that set the standard for security guard services, facility management services, and industrial staffing.",
};

export const mission = {
  title: "Our Mission",
  description:
    "To solve the manpower industry's core challenges — delayed payments, weak verification, high attrition, and poor accountability — by deploying trained, police-verified professionals under military-inspired leadership, EPFO ESIC compliant staffing, and fair, transparent employment practices.",
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

export type LocationData = {
  slug: string;
  city: string;
  state: string;
  region: string;
  postalCode: string;
  /** Key client types or industries that dominate this city */
  dominantSectors: string[];
  /** 2-3 sentence unique description of why this city matters for Rudra */
  summary: string;
  /** City-specific deployment detail sentence */
  deploymentNote: string;
};

export const locationPages: LocationData[] = [
  {
    slug: "gurugram",
    city: "Gurugram",
    state: "Haryana",
    region: "Delhi NCR",
    postalCode: "122001",
    dominantSectors: ["Corporate Offices", "BPOs", "Malls & Retail", "Hospitals"],
    summary:
      "Gurugram is Rudra Manpower's primary base of operations and home to our registered office. We deploy PASARA-licensed security guards, trained housekeeping staff, and facility management teams across Cyber City, Udyog Vihar, Sohna Road, Golf Course Road, and the Manesar industrial belt.",
    deploymentNote:
      "Same-day site assessments available for Gurugram clients — contact us at 8278065927 to confirm your location.",
  },
  {
    slug: "noida",
    city: "Noida",
    state: "Uttar Pradesh",
    region: "Delhi NCR",
    postalCode: "201301",
    dominantSectors: ["IT Parks", "Corporate Offices", "Manufacturing", "Hospitals"],
    summary:
      "Noida and Greater Noida host a concentration of IT parks, manufacturing units, and large residential complexes that need reliable, police-verified security and housekeeping teams. Rudra Manpower provides multi-shift security guard deployment, corporate housekeeping, and contract labour for clients across Sectors 62, 63, and 135.",
    deploymentNote:
      "We cover Noida, Greater Noida, and the Expressway industrial corridor — call 8278065927 to get a quote for your site.",
  },
  {
    slug: "rohtak",
    city: "Rohtak",
    state: "Haryana",
    region: "Delhi NCR",
    postalCode: "124001",
    dominantSectors: ["Manufacturing", "Industrial Sites", "Construction"],
    summary:
      "Rohtak is a growing industrial hub in Haryana with rising demand for verified security guards, construction labour, and facility staff. Rudra Manpower deploys EPFO-compliant teams for factories, warehouses, and construction sites across Rohtak and the surrounding industrial areas.",
    deploymentNote:
      "Serving Rohtak with police-verified security and construction labour — reach us at 8278065927 to discuss your manpower requirement.",
  },
  {
    slug: "sonipat",
    city: "Sonipat",
    state: "Haryana",
    region: "Delhi NCR",
    postalCode: "131001",
    dominantSectors: ["Manufacturing", "Industrial Sites", "Warehousing"],
    summary:
      "Sonipat's industrial corridors — including the KMP Expressway belt — attract large manufacturing and logistics operations that need dependable security and general labour. Rudra Manpower provides police-verified security guards and shift-based general labour for Sonipat's factories and warehouses.",
    deploymentNote:
      "Contact us at 8278065927 for security guard and labour deployment across Sonipat's industrial zones.",
  },
  {
    slug: "manesar",
    city: "Manesar",
    state: "Haryana",
    region: "Delhi NCR",
    postalCode: "122051",
    dominantSectors: ["Automotive", "Manufacturing", "Industrial Sites"],
    summary:
      "Manesar is home to automotive OEMs, Tier-1 suppliers, and industrial parks that require round-the-clock perimeter security, access control, and technical facility staff. Rudra Manpower has active deployments at Manesar's IMT industrial area with experienced guards trained for factory and shift-work environments.",
    deploymentNote:
      "Active in IMT Manesar — call 8278065927 for PASARA-licensed security and technical workforce.",
  },
  {
    slug: "faridabad",
    city: "Faridabad",
    state: "Haryana",
    region: "Delhi NCR",
    postalCode: "121001",
    dominantSectors: ["Manufacturing", "Industrial Sites", "Residential"],
    summary:
      "Faridabad's mix of heavy industry, residential societies, and commercial spaces creates diverse manpower requirements. Rudra Manpower serves manufacturing plants, residential complexes, and retail outlets across Faridabad with security guards, housekeeping staff, and facility management teams.",
    deploymentNote:
      "Serving clients across Faridabad's industrial and residential zones — reach out at 8278065927 for a free quote.",
  },
  {
    slug: "bhiwadi",
    city: "Bhiwadi",
    state: "Rajasthan",
    region: "Delhi NCR",
    postalCode: "301019",
    dominantSectors: ["Manufacturing", "Industrial Sites", "Warehousing"],
    summary:
      "Bhiwadi's RIICO industrial area is one of the fastest-growing manufacturing belts in the Delhi NCR region. Rudra Manpower deploys PASARA-licensed security guards, construction labour, and facility management staff for factories, logistics parks, and warehouses across Bhiwadi and Neemrana.",
    deploymentNote:
      "Covering Bhiwadi RIICO and Neemrana industrial zones — call 8278065927 to confirm deployment availability.",
  },
];
