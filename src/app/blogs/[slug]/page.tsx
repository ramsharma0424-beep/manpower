import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogContent from "@/components/BlogContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import CoverImage from "@/components/CoverImage";
import JsonLdScript from "@/components/JsonLdScript";
import SiteContainer from "@/components/SiteContainer";
import { blogs } from "@/lib/blogs";
import { company, leadership } from "@/lib/data";
import { absoluteImageUrl, absoluteUrl, createPageMetadata, siteUrl } from "@/lib/seo";

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
    publishedTime: post.isoDate,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  const relatedLinks = post.related ?? [
    { href: "/services", label: "All services" },
    { href: "/locations", label: "Service areas" },
    { href: "/services/security", label: "Security" },
    { href: "/services/housekeeping", label: "Housekeeping" },
    { href: "/services/contract-staffing", label: "Contract staffing" },
  ];

  const author = leadership[0];
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    ...(post.directAnswer ? { abstract: post.directAnswer } : {}),
    image: [absoluteImageUrl(post.image)],
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      description: `${author.name} is a retired Indian Army Captain and ${author.role.toLowerCase()} of ${company.name}.`,
      url: absoluteUrl("/about#leadership"),
      worksFor: { "@id": `${siteUrl}/#organization` },
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    },
    mainEntityOfPage: absoluteUrl(`/blogs/${post.slug}`),
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    inLanguage: "en-IN",
    about: {
      "@type": "Thing",
      name: post.category,
    },
  };

  return (
    <>
      <JsonLdScript data={articleJsonLd} />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLdScript
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      )}

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
          <p className="mt-3 text-sm text-stone-400">
            By{" "}
            <Link href="/about#leadership" className="text-brand-gold hover:text-brand-gold-dark">
              {author.name}
            </Link>
            , {author.role}, {company.shortName}
          </p>
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

        {post.directAnswer && (
          <p className="mb-10 border-l-2 border-brand-gold pl-4 text-base leading-relaxed text-stone-700 dark:text-stone-200">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-brand-gold">
              Quick answer
            </span>
            {post.directAnswer}
          </p>
        )}

        <BlogContent blocks={post.blocks} />

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl font-semibold text-brand-navy dark:text-stone-100">
              Frequently asked questions
            </h2>
            <div className="mt-4 space-y-3">
              {post.faqs.map((faq) => (
                <details key={faq.question} className="group card-elevated overflow-hidden">
                  <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-brand-navy marker:content-none dark:text-stone-100 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.question}
                      <span className="mt-0.5 shrink-0 text-brand-gold transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-brand-border px-5 py-4 text-sm leading-relaxed text-stone-600 dark:border-stone-700 dark:text-stone-300">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm border border-brand-border px-3 py-1.5 text-stone-600 transition hover:border-brand-gold hover:text-brand-gold dark:text-stone-300"
            >
              {link.label}
            </Link>
          ))}
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
