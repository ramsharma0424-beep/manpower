import Image from "next/image";

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
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        priority={priority}
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
