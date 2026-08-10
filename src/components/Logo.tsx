import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/data";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "light" | "dark";
};

const sizes = {
  sm: { img: 36, text: "text-sm sm:text-base" },
  md: { img: 44, text: "text-base sm:text-lg md:text-xl" },
  lg: { img: 52, text: "text-lg sm:text-xl md:text-2xl" },
};

export default function Logo({
  size = "md",
  showText = true,
  variant = "dark",
}: LogoProps) {
  const s = sizes[size];
  const textColor = variant === "light" ? "text-white" : "text-brand-navy dark:text-white";

  return (
    <div className="flex min-w-0 items-center gap-1.5 sm:gap-3">
      <Image
        src="/logo.png"
        alt={`${company.shortName} logo`}
        width={s.img}
        height={s.img}
        className="size-10 shrink-0 rounded-full object-cover sm:size-11 md:size-12 lg:size-[3.25rem]"
        priority
      />
      {showText && (
        <p
          className={`truncate font-display font-extrabold tracking-wide ${textColor} ${s.text}`}
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
    <Link href="/" className="group flex min-w-0 max-w-[calc(100%-4.75rem)] items-center sm:max-w-none">
      <Logo size={size} showText={showText} variant={variant} />
    </Link>
  );
}
