import Link from "next/link";
import CoverImage from "@/components/CoverImage";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";
import SiteContainer from "./SiteContainer";
import { blogs } from "@/lib/blogs";

export default function BlogsPreview() {
  const latest = blogs.slice(0, 3);

  return (
    <section className="py-16 sm:py-20">
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Tips to Help You Hire Smarter"
            description="Practical advice on security, housekeeping, and manpower — written for facility managers and business owners like you."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <article className="card-elevated group flex flex-col overflow-hidden">
                <CoverImage
                  src={post.image}
                  alt={post.imageAlt}
                  aspect="blog"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                    <span className="rounded-sm bg-brand-cream px-2.5 py-0.5 font-medium text-brand-gold dark:bg-stone-800">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy dark:text-stone-100">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-brand-border pt-4 dark:border-stone-700">
                    <span className="text-xs text-stone-400">{post.date}</span>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-sm font-semibold text-brand-gold transition hover:text-brand-gold-dark"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 sm:mt-10">
          <Link href="/blogs" className="btn-primary">
            Read All Articles
          </Link>
        </Reveal>
      </SiteContainer>
    </section>
  );
}
