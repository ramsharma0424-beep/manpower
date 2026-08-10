import Link from "next/link";
import Logo from "@/components/Logo";
import SiteContainer from "@/components/SiteContainer";
import { aboutDropdown, company, footerPolicies, industryLinks, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="section-dark border-t-4 border-brand-gold text-stone-300">
      <SiteContainer className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7">
          <div className="sm:col-span-2">
            <div className="mb-4">
              <Logo size="lg" variant="light" />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stone-400">
              {company.tagline}. A verified manpower agency deploying security guard services, housekeeping services, and labour workforce since {company.founded}.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-stone-400 transition hover:text-brand-gold">
                  About Us
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
              About Us
            </h3>
            <ul className="space-y-2">
              {aboutDropdown.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-400 transition hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
              Industries
            </h3>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
              Service Areas
            </h3>
            <p className="mb-3 text-sm text-stone-400">
              Manpower deployment across {company.region}:
            </p>
            <ul className="flex flex-wrap gap-2">
              {company.locations.map((city) => (
                <li key={city}>
                  <span className="rounded-sm border border-stone-700 px-2.5 py-1 text-xs text-stone-400">
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href={`mailto:${company.email}`} className="transition hover:text-brand-gold">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone}`} className="transition hover:text-brand-gold">
                  {company.phone}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-stone-800 pt-8">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
            Policies
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerPolicies.map((policy) => (
              <li key={policy.href}>
                <Link
                  href={policy.href}
                  className="text-sm text-stone-400 transition hover:text-brand-gold"
                >
                  {policy.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 text-sm text-stone-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <p className="font-semibold uppercase tracking-wide text-brand-gold">
            PASARA Licensed · Startup India · GeM Registered
          </p>
        </div>
      </SiteContainer>
    </footer>
  );
}
