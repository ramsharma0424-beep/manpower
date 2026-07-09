import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  aspect?: "video" | "wide" | "hero" | "blog";
  className?: string;
};

const aspectClasses = {
  video: "aspect-video",
  wide: "aspect-[16/10]",
  hero: "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[3/2]",
  blog: "aspect-[16/10] sm:aspect-video",
};

export default function CoverImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  aspect = "wide",
  className = "",
}: CoverImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-stone-200 dark:bg-stone-800 ${aspectClasses[aspect]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
      />
    </div>
  );
}
