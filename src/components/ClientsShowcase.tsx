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

const chipBtn = (active: boolean) =>
  `shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
    active
      ? "border-brand-gold bg-brand-gold text-stone-950"
      : "border-brand-border bg-white text-stone-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
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

  const displayClients = preview
    ? [
        ...clients.filter((client) => client.featured),
        ...clients.filter((client) => !client.featured),
      ].slice(0, 6)
    : filtered;

  if (preview) {
    return (
      <section className="section-muted py-12 sm:py-20">
        <SiteContainer>
          <div className="mb-8 text-center sm:mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
              Trusted By
            </p>
            <h2 className="font-display text-2xl font-semibold text-brand-navy dark:text-stone-100 sm:text-4xl">
              Our Esteemed Clients
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-stone-600 dark:text-stone-300 sm:text-base">
              Leading enterprises across Delhi NCR trust us for security, housekeeping, and manpower
              solutions — including Mothers Dairy and Hotel Lemon Tree in Gurugram.
            </p>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
            {displayClients.map((client) => (
              <ClientCard key={client.name} client={client} showMeta />
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link href="/clients" className="btn-primary">
              View All Clients
            </Link>
          </div>
        </SiteContainer>
      </section>
    );
  }

  return (
    <section className="section-muted py-10 sm:py-16">
      <SiteContainer>
        <div className="space-y-6 lg:hidden">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              By Service
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {clientServiceFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setServiceFilter(filter)}
                  className={chipBtn(serviceFilter === filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              By Industry
            </p>
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {clientIndustryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setIndustryFilter(filter)}
                  className={chipBtn(industryFilter === filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <aside className="hidden lg:block lg:w-56 lg:shrink-0">
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
              <div className="card-elevated flex h-40 items-center justify-center border-dashed sm:h-48">
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  No clients match the selected filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
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
    <div className="card-elevated group flex h-full flex-col items-center justify-center p-3 sm:p-6">
      <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-sm border border-brand-border bg-brand-cream font-display text-sm font-semibold tracking-wide text-brand-gold shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:border-brand-gold/50 dark:border-stone-700 dark:bg-stone-800 sm:mb-4 sm:h-16 sm:w-16 sm:text-lg">
        {client.initials}
      </div>
      <p className="line-clamp-2 text-center text-xs font-semibold leading-snug text-brand-navy sm:text-sm dark:text-stone-100">
        {client.name}
      </p>
      {showMeta && (
        <div className="mt-1.5 flex flex-col items-center gap-1 sm:mt-2">
          <span className="rounded-sm border border-brand-border bg-brand-cream px-1.5 py-0.5 text-[10px] font-medium text-brand-gold sm:px-2 sm:text-xs dark:border-stone-700 dark:bg-stone-800">
            {client.service}
          </span>
          <span className="line-clamp-2 text-center text-[10px] text-stone-400 sm:text-xs dark:text-stone-500">{client.state}</span>
        </div>
      )}
    </div>
  );
}
