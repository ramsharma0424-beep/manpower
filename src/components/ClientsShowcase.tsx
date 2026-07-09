"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  clientIndustryFilters,
  clientServiceFilters,
  clients,
} from "@/lib/data";
import SiteContainer from "./SiteContainer";

type ClientsShowcaseProps = {
  preview?: boolean;
};

const filterBtn = (active: boolean) =>
  `block w-full border-l-2 py-2 pl-4 text-left text-sm transition -ml-0.5 ${
    active
      ? "border-brand-gold font-semibold text-brand-navy dark:text-brand-gold"
      : "border-transparent text-stone-500 hover:text-brand-gold dark:text-stone-400"
  }`;

export default function ClientsShowcase({ preview = false }: ClientsShowcaseProps) {
  const [serviceFilter, setServiceFilter] = useState<string>("Show All");
  const [industryFilter, setIndustryFilter] = useState<string>("Show All");

  const filtered = useMemo(() => {
    return clients.filter((client) => {
      const matchesService =
        serviceFilter === "Show All" || client.service === serviceFilter;
      const matchesIndustry =
        industryFilter === "Show All" || client.industry === industryFilter;
      return matchesService && matchesIndustry;
    });
  }, [serviceFilter, industryFilter]);

  const displayClients = preview ? clients.slice(0, 6) : filtered;

  if (preview) {
    return (
      <section className="section-muted py-20">
        <SiteContainer>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Trusted By
            </p>
            <h2 className="font-display text-3xl font-semibold text-brand-navy dark:text-stone-100 sm:text-4xl">
              Our Esteemed Clients
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600 dark:text-stone-300">
              Leading enterprises across Delhi NCR trust us for security, housekeeping, and manpower
              solutions.
            </p>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {displayClients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/clients" className="btn-primary">
              View All Clients
            </Link>
          </div>
        </SiteContainer>
      </section>
    );
  }

  return (
    <section className="py-16">
      <SiteContainer>
        <div className="flex flex-col gap-10 lg:flex-row">
          <aside className="lg:w-56 lg:shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  By Service
                </p>
                <ul className="space-y-1 border-l-2 border-brand-border dark:border-stone-700">
                  {clientServiceFilters.map((filter) => (
                    <li key={filter}>
                      <button
                        type="button"
                        onClick={() => setServiceFilter(filter)}
                        className={filterBtn(serviceFilter === filter)}
                      >
                        {filter}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  By Industry
                </p>
                <ul className="space-y-1 border-l-2 border-brand-border dark:border-stone-700">
                  {clientIndustryFilters.map((filter) => (
                    <li key={filter}>
                      <button
                        type="button"
                        onClick={() => setIndustryFilter(filter)}
                        className={filterBtn(industryFilter === filter)}
                      >
                        {filter}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {displayClients.length === 0 ? (
              <div className="card-elevated flex h-48 items-center justify-center border-dashed">
                <p className="text-stone-500 dark:text-stone-400">
                  No clients match the selected filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4">
                {displayClients.map((client) => (
                  <ClientCard key={client.name} client={client} showMeta />
                ))}
              </div>
            )}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

type Client = (typeof clients)[number];

function ClientCard({
  client,
  showMeta = false,
}: {
  client: Client;
  showMeta?: boolean;
}) {
  return (
    <div className="card-elevated group flex flex-col items-center justify-center p-6">
      <div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-sm text-lg font-bold text-white shadow-sm transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundColor: client.color }}
      >
        {client.initials}
      </div>
      <p className="text-center text-sm font-semibold text-brand-navy dark:text-stone-100">
        {client.name}
      </p>
      {showMeta && (
        <div className="mt-2 flex flex-col items-center gap-1">
          <span className="rounded-sm bg-brand-cream px-2.5 py-0.5 text-xs font-medium text-brand-gold dark:bg-stone-800">
            {client.service}
          </span>
          <span className="text-xs text-stone-400">{client.state}</span>
        </div>
      )}
    </div>
  );
}
