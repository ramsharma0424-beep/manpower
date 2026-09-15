import fs from "fs";

let s = fs.readFileSync("src/lib/blogs.ts", "utf8");
s = s.replace('import { images } from "./images";', 'import { blogImages } from "./images";');

const slugs = [
  "why-police-verification-matters",
  "manpower-industry-challenges",
  "army-discipline-in-workforce",
  "choosing-housekeeping-partner",
  "construction-labour-delhi-ncr",
  "choose-security-agency-delhi-ncr",
  "security-guard-cost-guide-delhi-ncr",
  "office-housekeeping-checklist-gurugram-noida",
  "manpower-services-delhi-ncr-buyers-guide",
  "night-shift-security-guards-gurugram",
  "industrial-manpower-manesar-bhiwadi",
  "epfo-esic-compliant-contract-staffing-delhi-ncr",
  "bouncer-services-gurugram-events-hotels",
  "facility-management-services-gurugram-guide",
];

for (const slug of slugs) {
  const re = new RegExp(`(slug: "${slug}",[\\s\\S]*?image: )images\\.[a-zA-Z-]+`);
  const next = s.replace(re, `$1blogImages["${slug}"]`);
  if (next === s) {
    console.error("failed:", slug);
  } else {
    s = next;
    console.log("ok:", slug);
  }
}

fs.writeFileSync("src/lib/blogs.ts", s);
console.log("blogImages count", (s.match(/blogImages\[/g) || []).length);
console.log("remaining images.", (s.match(/images\./g) || []).length);
