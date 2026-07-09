type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
};

export default function SiteContainer({
  children,
  className = "",
  narrow = false,
}: SiteContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-10 xl:px-12 ${
        narrow ? "max-w-6xl" : "max-w-7xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}
