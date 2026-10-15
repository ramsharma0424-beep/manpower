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
  title: "Manpower Blog Delhi NCR | Security, Housekeeping & Staffing Tips",
  description:
    "Fresh guides on manpower, security guards, housekeeping, horticulture, facility management and labour hiring across Gurugram, Noida and Delhi NCR.",
  path: "/blogs",
  keywords: [
    "manpower blog Delhi NCR",
    "security staffing tips Gurugram",
    "housekeeping workforce guide Noida",
    "contract staffing advice Delhi NCR",
    "facility management tips Gurgaon",
    "horticulture services Gurugram",
    "industrial manpower Manesar",
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
          description:
            "Workforce insights, security staffing tips, and manpower guides for Delhi NCR businesses.",
          url: absoluteUrl("/blogs"),
          publisher: { "@type": "Organization", name: company.name },
          blogPost: blogs.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: absoluteUrl(`/blogs/${post.slug}`),
            datePublished: post.isoDate,
            dateModified: post.isoDate,
          })),
        }}
      />
      <PageHero
        eyebrow="Insights"
        title="Manpower, Security & Facility Guides for Delhi NCR"
        description={`Updated articles on security guards, housekeeping, contract staffing, and industrial manpower — written for facility managers and business owners in ${company.region}.`}
      />
      <Breadcrumbs items={[{ name: "Blogs", path: "/blogs" }]} />

      <section className="py-12 sm:py-16">
        <SiteContainer>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              <article
                key={post.slug}
                className="card-elevated group flex h-full flex-col overflow-hidden"
              >
                <Link href={`/blogs/${post.slug}`} className="block overflow-hidden">
                  <CoverImage
                    src={post.image}
                    alt={post.imageAlt}
                    aspect="blog"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                    <span className="rounded-sm bg-brand-cream px-2.5 py-0.5 font-medium text-brand-gold dark:bg-stone-800">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
                    <Link href={`/blogs/${post.slug}`} className="hover:text-brand-gold">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="mt-4 text-sm font-medium text-brand-gold hover:underline"
                  >
                    Read article →
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
