/** Local India-context imagery only — do not use foreign Unsplash/stock people photos. */
export const images = {
  hero: "/hero-cyber-city.jpg",
  about: "/about-india.jpg",
  security: "/images/security.jpg",
  housekeeping: "/images/housekeeping.jpg",
  construction: "/images/construction.jpg",
  team: "/images/team.jpg",
  leadership: "/images/leadership.jpg",
  services: "/images/services.jpg",
  bouncer: "/images/bouncer.jpg",
  pso: "/images/pso.jpg",
  technical: "/images/technical.jpg",
  horticulture: "/images/horticulture.jpg",
  labour: "/images/labour.jpg",
  facility: "/images/facility.jpg",
};

/**
 * Blog covers — every slug MUST use a dedicated file under /images/blogs/
 * Never point a blog at a service image (security/team/housekeeping/etc.)
 * or covers will look “repeated” next to service pages.
 */
export const blogImages = {
  "why-police-verification-matters": "/images/blogs/police-verification.jpg",
  "manpower-industry-challenges": "/images/blogs/manpower-challenges.jpg",
  "army-discipline-in-workforce": "/images/blogs/army-discipline.jpg",
  "choosing-housekeeping-partner": "/images/blogs/housekeeping-partner.jpg",
  "construction-labour-delhi-ncr": "/images/blogs/construction-labour.jpg",
  "choose-security-agency-delhi-ncr": "/images/blogs/choose-security-agency.jpg",
  "security-guard-cost-guide-delhi-ncr": "/images/blogs/security-cost.jpg",
  "office-housekeeping-checklist-gurugram-noida": "/images/blogs/housekeeping-checklist.jpg",
  "manpower-services-delhi-ncr-buyers-guide": "/images/blogs/manpower-buyers-guide.jpg",
  "night-shift-security-guards-gurugram": "/images/blogs/night-security.jpg",
  "industrial-manpower-manesar-bhiwadi": "/images/blogs/industrial-manesar.jpg",
  "epfo-esic-compliant-contract-staffing-delhi-ncr": "/images/blogs/epfo-compliance.jpg",
  "bouncer-services-gurugram-events-hotels": "/images/blogs/bouncer-wedding.jpg",
  "facility-management-services-gurugram-guide": "/images/blogs/facility-management.jpg",
  "pso-services-delhi-ncr-executive-protection": "/images/blogs/pso-delhi-ncr.jpg",
  "warehouse-labour-supply-delhi-ncr": "/images/blogs/warehouse-labour.jpg",
  "horticulture-services-gurugram-delhi-ncr": "/images/blogs/horticulture-gurugram.jpg",
  "security-manpower-contracts-sonipat": "/images/blogs/sonipat-security-contracts.jpg",
  "factory-warehouse-security-sonipat": "/images/blogs/factory-warehouse-sonipat.jpg",
  "residential-commercial-security-haryana": "/images/blogs/residential-commercial-security.jpg",
  "security-staff-replacement-attendance": "/images/blogs/staff-replacement-attendance.jpg",
} as const;
