import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/data";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean | "desktop";
  variant?: "light" | "dark";
};

const sizes = {
  sm: { img: 36, text: "text-sm sm:text-base" },
  md: { img: 40, text: "text-sm sm:text-lg md:text-xl" },
  lg: { img: 48, text: "text-base sm:text-xl md:text-2xl" },
};

export default function Logo({
  size = "md",
  showText = true,
  variant = "dark",
}: LogoProps) {
  const s = sizes[size];
  const textColor = variant === "light" ? "text-white" : "text-brand-navy dark:text-white";
  const textVisibility =
    showText === "desktop" ? "hidden sm:block" : showText ? "block" : "hidden";

  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <Image
        src="/logo.png"
        alt={`${company.shortName} logo`}
        width={s.img}
        height={s.img}
        className="size-8 shrink-0 rounded-full object-cover sm:size-10 md:size-12"
        priority
      />
      {showText !== false && (
        <p
          className={`${textVisibility} truncate font-bold uppercase tracking-wide ${textColor} ${s.text}`}
        >
          {company.shortName}
        </p>
      )}
    </div>
  );
}

export function LogoLink({
  size = "md",
  showText = true,
  variant = "dark",
}: LogoProps) {
  return (
    <Link href="/" className="group flex min-w-0 max-w-[calc(100%-5rem)] items-center sm:max-w-none">
      <Logo size={size} showText={showText} variant={variant} />
    </Link>
  );
}
