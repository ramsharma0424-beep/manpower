import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** CSS-only reveal — no IntersectionObserver / client JS hydration cost. */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <div className={`reveal-in ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
