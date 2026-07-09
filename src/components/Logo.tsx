import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/data";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "light" | "dark";
};

const sizes = {
  sm: { img: 40, text: "text-base sm:text-lg" },
  md: { img: 48, text: "text-lg sm:text-xl" },
  lg: { img: 56, text: "text-xl sm:text-2xl" },
};

export default function Logo({ size = "md", showText = true, variant = "dark" }: LogoProps) {
  const s = sizes[size];
  const textColor = variant === "light" ? "text-white" : "text-brand-navy dark:text-white";

  return (
    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <Image
        src="/logo.png"
        alt={`${company.shortName} logo`}
        width={s.img}
        height={s.img}
        className="shrink-0 rounded-full object-cover"
        priority
      />
      {showText && (
        <p className={`truncate font-bold uppercase tracking-wide ${textColor} ${s.text}`}>
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
    <Link href="/" className="group flex min-w-0 shrink items-center">
      <Logo size={size} showText={showText} variant={variant} />
    </Link>
  );
}
