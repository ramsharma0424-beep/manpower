/** SEO & LLM keywords sourced from rudramanpower - keywords.xlsx */

export const keywordPages = {
  Home: [
    "manpowerservices",
    "manpoweragency",
    "staffingagency",
    "securityguardservices",
    "housekeepingservices",
    "facilitymanagementservices",
    "workforcesolutions",
    "contractstaffing",
    "laboursupplyagency",
    "PASARAlicensedsecurityagency",
    "policeverifiedsecurityguards",
    "armyveteran-ledsecuritycompany",
    "verifiedmanpoweragency",
    "reliablestaffingcompany",
    "corporatemanpowersolutions",
    "trustedsecuritypartner",
  ],
  "Services (main)": [
    "manpowerservices",
    "securityservices",
    "housekeepingservices",
    "bouncerservices",
    "PSOservices",
    "facilitymanagementservices",
    "horticultureservices",
    "generallaboursupply",
    "constructionlaboursupply",
    "contractstaffingservices",
    "supervisorystaffservices",
    "workforcedeployment",
    "manpoweroutsourcing",
    "facilitysupportservices",
    "integratedfacilitymanagement",
  ],
  "Security Services": [
    "securityguardservices",
    "corporatesecurityguards",
    "industrialsecurityservices",
    "securityguardagency",
    "policeverifiedsecurityguards",
    "PASARAlicensedsecurityagency",
    "accesscontrolservices",
    "firesafetyandemergencyresponse",
    "perimetersecurity",
    "parkingsecurityservices",
    "nightwatchsecurity",
    "armedandunarmedsecurityguards",
    "securitypersonnelsupply",
    "factorysecurityguards",
    "warehousesecurity",
  ],
  "Housekeeping Services": [
    "housekeepingservices",
    "commercialcleaningservices",
    "officecleaningservices",
    "corporatehousekeeping",
    "hotelhousekeepingservices",
    "hospitalhousekeepingservices",
    "mallandretailcleaning",
    "residentialhousekeepingservices",
    "facilityhygieneservices",
    "deepcleaningservices",
    "sanitationstaffsupply",
    "housekeepingstaffingagency",
    "cleaningandhygienemanpower",
  ],
  "Bouncer Services": [
    "bouncerservices",
    "eventsecurityservices",
    "crowdmanagementservices",
    "venuesecuritystaff",
    "hotelandbanquetsecurity",
    "nightclubsecurity",
    "weddingsecurityservices",
    "corporateeventsecurity",
    "trainedbouncersagency",
    "entryscreeningandaccesscontrol",
    "VIPcrowdcontrol",
    "securityforevents",
  ],
  "PSO Services": [
    "PSOservices",
    "personalsecurityofficer",
    "executiveprotectionservices",
    "VIPsecurityservices",
    "closeprotectionofficer",
    "bodyguardservices",
    "celebritysecurity",
    "personalbodyguardagency",
    "executiveescortsecurity",
    "dignitaryprotection",
    "discreetpersonalsecurity",
  ],
  "Technical & Facility Management": [
    "facilitymanagementservices",
    "technicalmanpowersupply",
    "electriciansupplyservices",
    "plumberstaffing",
    "ACoperatorservices",
    "DGoperatorservices",
    "multi-techniciansupport",
    "facilitymaintenancestaff",
    "HVACtechniciansupply",
    "MEPmanpowerservices",
    "buildingmaintenancestaff",
    "skilledtechnicalworkforce",
  ],
  "Horticulture Services": [
    "horticultureservices",
    "landscapingservices",
    "gardenmaintenanceservices",
    "lawncareservices",
    "indoorplantcareservices",
    "gardeningstaffsupply",
    "seasonallandscapingmaintenance",
    "groundsmaintenanceservices",
    "greenspacemanagement",
    "corporatelandscapingservices",
  ],
  "General Labour & Helpers": [
    "generallaboursupply",
    "industriallabourservices",
    "factoryhelpersupply",
    "warehouselabourstaffing",
    "loadingandunloadingstaff",
    "materialhandlinglabour",
    "manufacturinglaboursupply",
    "helperstaffingagency",
    "milllaboursupply",
    "productionlinehelpers",
    "shift-basedlabourdeployment",
  ],
  "Construction Site Labour": [
    "constructionlaboursupply",
    "constructionmanpowerservices",
    "masonandhelpersupply",
    "barbenderlabour",
    "skilledconstructionworkers",
    "semi-skilledlaboursupply",
    "sitelabouragency",
    "dailywagelaboursupply",
    "constructionworkforcedeployment",
    "safety-briefedconstructionworkers",
  ],
  "Professional & Supervisory Staff": [
    "supervisorystaffservices",
    "sitesupervisorsupply",
    "facilitycoordinatorservices",
    "operationsleadstaffing",
    "teamleadsupply",
    "shiftmanagementstaff",
    "on-sitesupervisoragency",
    "clientliaisonstaffing",
    "manpowersupervisionservices",
    "qualityauditstaff",
  ],
  "Contract Manpower Deployment": [
    "contractstaffingservices",
    "contractmanpowersupply",
    "flexiblestaffingsolutions",
    "project-basedstaffing",
    "seasonalstaffingservices",
    "temporaryworkforcedeployment",
    "statutorycompliancestaffing",
    "EPFOESICcompliantstaffing",
    "end-to-endmanpoweroutsourcing",
    "scalableworkforcesolutions",
    "multi-sitestaffingcontracts",
  ],
} as const;

export type KeywordPageName = keyof typeof keywordPages;

export const keywordPagePaths: Record<KeywordPageName, string> = {
  Home: "/",
  "Services (main)": "/services",
  "Security Services": "/services/security",
  "Housekeeping Services": "/services/housekeeping",
  "Bouncer Services": "/services/bouncer",
  "PSO Services": "/services/pso",
  "Technical & Facility Management": "/services/technical",
  "Horticulture Services": "/services/horticulture",
  "General Labour & Helpers": "/services/labour",
  "Construction Site Labour": "/services/construction-labour",
  "Professional & Supervisory Staff": "/services/professional",
  "Contract Manpower Deployment": "/services/contract-staffing",
};

export function readableKeyword(keyword: string): string {
  const known: Array<[RegExp, string]> = [
    [/pasara/gi, "PASARA "],
    [/manpowerservices/gi, "manpower services"],
    [/manpoweragency/gi, "manpower agency"],
    [/staffingagency/gi, "staffing agency"],
    [/securityguardservices/gi, "security guard services"],
    [/housekeepingservices/gi, "housekeeping services"],
    [/facilitymanagementservices/gi, "facility management services"],
    [/workforcesolutions/gi, "workforce solutions"],
    [/contractstaffing/gi, "contract staffing"],
    [/laboursupplyagency/gi, "labour supply agency"],
    [/policeverifiedsecurityguards/gi, "police verified security guards"],
    [/armyveteran-ledsecuritycompany/gi, "army veteran-led security company"],
    [/verifiedmanpoweragency/gi, "verified manpower agency"],
    [/reliablestaffingcompany/gi, "reliable staffing company"],
    [/corporatemanpowersolutions/gi, "corporate manpower solutions"],
    [/trustedsecuritypartner/gi, "trusted security partner"],
    [/securityservices/gi, "security services"],
    [/bouncerservices/gi, "bouncer services"],
    [/psoservices/gi, "PSO services"],
    [/horticultureservices/gi, "horticulture services"],
    [/generallaboursupply/gi, "general labour supply"],
    [/constructionlaboursupply/gi, "construction labour supply"],
    [/contractstaffingservices/gi, "contract staffing services"],
    [/supervisorystaffservices/gi, "supervisory staff services"],
    [/workforcedeployment/gi, "workforce deployment"],
    [/manpoweroutsourcing/gi, "manpower outsourcing"],
    [/facilitysupportservices/gi, "facility support services"],
    [/integratedfacilitymanagement/gi, "integrated facility management"],
  ];

  let result = keyword;
  for (const [pattern, replacement] of known) {
    result = result.replace(pattern, replacement);
  }

  return result
    .replace(/PASARA/g, "PASARA ")
    .replace(/PSO/g, "PSO ")
    .replace(/EPFO/g, "EPFO ")
    .replace(/ESIC/g, "ESIC ")
    .replace(/HVAC/g, "HVAC ")
    .replace(/MEP/g, "MEP ")
    .replace(/VIP/g, "VIP ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/-/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

export function allKeywords(): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const keywords of Object.values(keywordPages)) {
    for (const keyword of keywords) {
      const readable = readableKeyword(keyword);
      if (!seen.has(readable)) {
        seen.add(readable);
        result.push(readable);
      }
    }
  }

  return result;
}

export const seoKeywords = allKeywords();

export const serviceKeywordMap: Record<string, KeywordPageName> = {
  security: "Security Services",
  housekeeping: "Housekeeping Services",
  bouncer: "Bouncer Services",
  pso: "PSO Services",
  technical: "Technical & Facility Management",
  horticulture: "Horticulture Services",
  labour: "General Labour & Helpers",
  "construction-labour": "Construction Site Labour",
  professional: "Professional & Supervisory Staff",
  "contract-staffing": "Contract Manpower Deployment",
};

export function keywordsForPage(page: KeywordPageName): string[] {
  return keywordPages[page].map(readableKeyword);
}

export function keywordsForService(serviceId: string): string[] {
  const page = serviceKeywordMap[serviceId];
  return page ? keywordsForPage(page) : [];
}

export function homeKeywords(): string[] {
  return keywordsForPage("Home");
}

export function servicesMainKeywords(): string[] {
  return keywordsForPage("Services (main)");
}

/** Natural sentence weaving top keywords into readable copy */
export function keywordPhrase(keywords: string[], count = 6): string {
  const picked = keywords.slice(0, count);
  if (picked.length === 0) return "";
  if (picked.length === 1) return picked[0];
  return `${picked.slice(0, -1).join(", ")}, and ${picked[picked.length - 1]}`;
}
