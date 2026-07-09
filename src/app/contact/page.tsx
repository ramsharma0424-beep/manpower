import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { company } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us — Get a Free Manpower Quote",
  description: `Ready to hire security, housekeeping, or labour in ${company.region}? Contact ${company.shortName} at ${company.phone} or request a free quote online. We respond quickly.`,
  path: "/contact",
  keywords: [
    "contact Rudra Manpower",
    "manpower quote Delhi NCR",
    "hire security guards Gurugram",
    "housekeeping staff Noida",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Information"
        description={`Reach out for security, housekeeping, technical, or labour workforce requirements across ${company.region}.`}
      />

      <section className="py-16">
        <SiteContainer>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-stone-100">
                Let&apos;s Talk
              </h2>
              <p className="mt-4 text-stone-600 dark:text-stone-300">
                Fill out the form and our team will respond promptly. For immediate assistance, call
                us directly.
              </p>

              <div className="mt-8 space-y-6">
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
                <ContactInfoCard
                  label="Location"
                  value={`${company.region} · ${company.address}`}
                  icon="location"
                />
              </div>
            </div>

            <div className="card-elevated p-8">
              <h2 className="mb-6 font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
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
    <div className="card-elevated flex gap-4 p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-brand-cream text-brand-gold dark:bg-stone-800">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {icons[icon]}
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-stone-500 dark:text-stone-400">{label}</p>
        {href ? (
          <a
            href={href}
            className="mt-1 block font-medium text-brand-gold transition hover:text-brand-gold-dark"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 font-medium text-brand-gold">{value}</p>
        )}
      </div>
    </div>
  );
}
