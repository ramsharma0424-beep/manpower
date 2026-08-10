import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import JsonLdScript from "@/components/JsonLdScript";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { company } from "@/lib/data";
import { homeKeywords } from "@/lib/keywords";
import { absoluteUrl, createPageMetadata, phoneE164, siteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us - Free Manpower Quote",
  description: `Hire security, housekeeping or staffing in ${company.region}. Call ${company.shortName} at ${company.phone}. Serving Gurugram, Noida, Faridabad & nearby cities.`,
  path: "/contact",
  keywords: homeKeywords(),
});

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${company.shortName}`,
          description: `Get a free manpower quote from ${company.shortName} for security, housekeeping, and labour across ${company.region}.`,
          url: absoluteUrl("/contact"),
          mainEntity: { "@id": `${siteUrl}/#localbusiness` },
        }}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Information"
        description={`Reach out for security, housekeeping, technical, or labour workforce requirements across ${company.region}.`}
      />
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="py-10 sm:py-16">
        <SiteContainer>
          {/* Open in Google Maps — replace with GBP embed once listing is live */}
          <div className="mb-10 overflow-hidden rounded-lg border border-brand-border">
            <iframe
              title="Rudra Manpower Services — Gurugram, Haryana"
              src="https://maps.google.com/maps?q=Gurugram%2C%20Haryana%2C%20India&z=12&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-xl font-semibold text-brand-navy dark:text-stone-100 sm:text-2xl">
                Let&apos;s Talk
              </h2>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-300 sm:mt-4 sm:text-base">
                Fill out the form and our team will respond promptly. For immediate assistance, call
                us directly.
              </p>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                <ContactInfoCard
                  label="Email"
                  value={company.email}
                  href={`mailto:${company.email}`}
                  icon="email"
                />
                <ContactInfoCard
                  label="Phone"
                  value={company.phone}
                  href={`tel:${company.phone}`}
                  icon="phone"
                />
                <LocationsCard />
              </div>
            </div>

            <div className="card-elevated order-1 p-5 sm:p-8 lg:order-2">
              <h2 className="mb-5 font-display text-lg font-semibold text-brand-navy dark:text-stone-100 sm:mb-6 sm:text-xl">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}

function LocationsCard() {
  return (
    <div className="card-elevated flex gap-3 p-4 sm:gap-4 sm:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-brand-cream text-brand-gold dark:bg-stone-800 sm:h-12 sm:w-12">
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-stone-500 dark:text-stone-400">Locations</p>
        <p className="mt-1 text-sm font-medium text-brand-gold sm:text-base">
          {company.region} · {company.address}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {company.locations.map((city) => (
            <span
              key={city}
              className="rounded-sm border border-brand-border bg-brand-cream px-2.5 py-1 text-xs font-medium text-brand-navy dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactInfoCard({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  icon: "email" | "phone" | "location";
}) {
  const icons = {
    email: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
    phone: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    ),
    location: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </>
    ),
  };

  return (
    <div className="card-elevated flex gap-3 p-4 sm:gap-4 sm:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-brand-cream text-brand-gold dark:bg-stone-800 sm:h-12 sm:w-12">
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icons[icon]}
        </svg>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-stone-500 dark:text-stone-400">{label}</p>
        {href ? (
          <a
            href={href}
            className="mt-1 block break-all text-sm font-medium text-brand-gold transition hover:text-brand-gold-dark sm:text-base"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm font-medium text-brand-gold sm:text-base">{value}</p>
        )}
      </div>
    </div>
  );
}
