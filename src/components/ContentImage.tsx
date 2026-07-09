import CoverImage from "@/components/CoverImage";

type ContentImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function ContentImage({
  src,
  alt,
  priority = false,
  className = "",
}: ContentImageProps) {
  return (
    <CoverImage
      src={src}
      alt={alt}
      priority={priority}
      aspect="wide"
      sizes="(max-width: 768px) 100vw, 50vw"
      className={`rounded-lg ${className}`}
    />
  );
}
