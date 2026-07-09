import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CoverImage from "@/components/CoverImage";
import JsonLdScript from "@/components/JsonLdScript";
import PageHero from "@/components/PageHero";
import SiteContainer from "@/components/SiteContainer";
import { blogs } from "@/lib/blogs";
import { company } from "@/lib/data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

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
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${company.shortName} Blog`,
          description: "Workforce insights, security staffing tips, and manpower guides for Delhi NCR businesses.",
          url: absoluteUrl("/blogs"),
          publisher: { "@type": "Organization", name: company.name },
          blogPost: blogs.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: absoluteUrl(`/blogs/${post.slug}`),
            datePublished: new Date(post.date).toISOString(),
          })),
        }}
      />
      <PageHero
        eyebrow="Insights"
        title="Blogs & Articles"
        description={`Straight talk on manpower, security, and facility management — so you can make confident hiring decisions for your business in ${company.region}.`}
      />
      <Breadcrumbs items={[{ name: "Blogs", path: "/blogs" }]} />

      <section className="py-14 sm:py-16">
        <SiteContainer>
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((post) => (
              <article
                key={post.slug}
                className="card-elevated group flex flex-col overflow-hidden"
              >
                <CoverImage
                  src={post.image}
                  alt={post.imageAlt}
                  aspect="blog"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
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
