type GeometricDividerProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function GeometricDivider({
  variant = "light",
  className = "",
}: GeometricDividerProps) {
  const fill = variant === "dark" ? "#0a0a0a" : "#ffffff";

  return (
    <div className={`relative h-10 w-full overflow-hidden sm:h-14 ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,80 L0,25 Q200,5 500,20 L1200,0 L1200,80 Z" fill={fill} />
        <path d="M0,80 L0,40 L280,55 L1200,30 L1200,80 Z" fill="#e32619" opacity="0.95" />
        <path d="M0,80 L0,55 L180,65 L1200,50 L1200,80 Z" fill="#0a0a0a" />
      </svg>
    </div>
  );
}
