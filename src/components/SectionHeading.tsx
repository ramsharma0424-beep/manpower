type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  variant = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const isDark = variant === "dark";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col sm:mb-12 ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] ${
            isDark ? "text-brand-gold" : "text-brand-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <div className={`section-heading-accent ${align === "center" ? "justify-center" : ""}`}>
        <h2
          className={`font-display text-2xl font-extrabold uppercase tracking-wide sm:text-3xl lg:text-4xl ${
            isDark ? "text-white" : "text-brand-gold"
          }`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-white/80" : "text-stone-700 dark:text-stone-300"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
      <div className={`brand-line mt-5 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
