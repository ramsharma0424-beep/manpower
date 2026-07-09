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
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isDark = variant === "dark";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${
            isDark ? "text-brand-gold" : "text-brand-gold dark:text-brand-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          isDark ? "text-white" : "text-brand-navy dark:text-stone-100"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? "text-white/75" : "text-stone-600 dark:text-stone-300"
          }`}
        >
          {description}
        </p>
      )}
      <div className={`gold-line mt-6 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
