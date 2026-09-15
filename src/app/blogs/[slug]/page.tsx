import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContent from "@/components/BlogContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import CoverImage from "@/components/CoverImage";
import JsonLdScript from "@/components/JsonLdScript";
import SiteContainer from "@/components/SiteContainer";
import { blogs } from "@/lib/blogs";
import { company } from "@/lib/data";
import { absoluteImageUrl, absoluteUrl, createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return createPageMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blogs/${post.slug}`,
    image: post.image,
    keywords: post.keywords,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [absoluteImageUrl(post.image)],
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: { "@type": "Organization", name: company.name, url: absoluteUrl("/") },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    },
    mainEntityOfPage: absoluteUrl(`/blogs/${post.slug}`),
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
  };

  return (
    <>
      <JsonLdScript data={articleJsonLd} />

      <section className="premium-hero py-16 text-white sm:py-20 lg:py-24">
        <SiteContainer narrow>
          <Link
            href="/blogs"
            className="text-sm text-brand-gold transition hover:text-brand-gold-dark"
          >
            ← Back to Blogs
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-stone-400">
            <span className="rounded-sm bg-white/10 px-3 py-1 text-stone-100">{post.category}</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-2xl font-semibold sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-stone-300 sm:text-lg">{post.excerpt}</p>
          <div className="gold-line mt-6" />
        </SiteContainer>
      </section>

      <Breadcrumbs
        items={[
          { name: "Blogs", path: "/blogs" },
          { name: post.title, path: `/blogs/${post.slug}` },
        ]}
      />

      <SiteContainer narrow className="py-12 sm:py-16">
        <CoverImage
          src={post.image}
          alt={post.imageAlt}
          aspect="blog"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="mb-10 rounded-lg"
        />

        <BlogContent blocks={post.blocks} />

        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <Link href="/services" className="rounded-sm border border-brand-border px-3 py-1.5 text-stone-600 transition hover:border-brand-gold hover:text-brand-gold dark:text-stone-300">
            All services
          </Link>
          <Link href="/locations" className="rounded-sm border border-brand-border px-3 py-1.5 text-stone-600 transition hover:border-brand-gold hover:text-brand-gold dark:text-stone-300">
            Service areas
          </Link>
          <Link href="/services/security" className="rounded-sm border border-brand-border px-3 py-1.5 text-stone-600 transition hover:border-brand-gold hover:text-brand-gold dark:text-stone-300">
            Security
          </Link>
          <Link href="/services/housekeeping" className="rounded-sm border border-brand-border px-3 py-1.5 text-stone-600 transition hover:border-brand-gold hover:text-brand-gold dark:text-stone-300">
            Housekeeping
          </Link>
          <Link href="/services/contract-staffing" className="rounded-sm border border-brand-border px-3 py-1.5 text-stone-600 transition hover:border-brand-gold hover:text-brand-gold dark:text-stone-300">
            Contract staffing
          </Link>
        </div>

        <div className="card-elevated mt-12 p-8">
          <h2 className="font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
            Need help with your site?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            Whether it&apos;s security, housekeeping, facility staff, or construction labour — tell us
            your location and headcount. We&apos;ll respond with a tailored plan for {company.region}.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote
            </Link>
            <a href={`tel:${company.phone}`} className="btn-secondary">
              Call {company.phone}
            </a>
          </div>
        </div>
      </SiteContainer>
    </>
  );
}
