import Image from "next/image";

type CoverImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  aspect?: "video" | "wide" | "hero" | "blog";
  objectPosition?: string;
  className?: string;
};

const aspectClasses = {
  video: "aspect-video",
  wide: "aspect-[16/10]",
  hero: "aspect-[5/4] sm:aspect-[4/5] lg:aspect-[4/5]",
  blog: "aspect-[16/10] sm:aspect-video",
};

export default function CoverImage({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  aspect = "wide",
  objectPosition = "center",
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
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
