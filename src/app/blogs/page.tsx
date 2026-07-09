import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { blogs } from "@/lib/blogs";
import { company } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blogs & Workforce Insights",
  description:
    "Expert tips on hiring security guards, housekeeping staff, and construction labour in Delhi NCR. Practical guides from Rudra Manpower Services.",
  path: "/blogs",
  keywords: [
    "manpower blog Delhi NCR",
    "security staffing tips",
    "housekeeping workforce guide",
    "construction labour advice",
  ],
});

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Blogs & Articles"
        description={`Straight talk on manpower, security, and facility management — so you can make confident hiring decisions for your business in ${company.region}.`}
      />

      <section className="py-14 sm:py-16">
        <SiteContainer>
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((post) => (
              <article
                key={post.slug}
                className="card-elevated group flex flex-col overflow-hidden"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-stone-500 dark:text-stone-400">
                    <span className="rounded-sm bg-brand-cream px-3 py-1 font-medium text-brand-gold dark:bg-stone-800">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-stone-600 dark:text-stone-300">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-brand-gold transition hover:text-brand-gold-dark"
                  >
                    Read full article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
