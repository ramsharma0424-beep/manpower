import Link from "next/link";
import JsonLdScript from "@/components/JsonLdScript";
import { createBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLdScript data={createBreadcrumbJsonLd(trail)} />
      <nav aria-label="Breadcrumb" className="border-b border-brand-border bg-brand-cream/40 dark:border-stone-800 dark:bg-stone-900/40">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2.5 text-xs text-stone-500 sm:px-6 sm:text-sm lg:px-8 dark:text-stone-400">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;

            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="font-medium text-brand-navy dark:text-stone-200" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="transition hover:text-brand-gold">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
