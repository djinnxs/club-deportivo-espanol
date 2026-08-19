import Image from "next/image";

export function TeamShield({
  src,
  alt,
  size = 32,
  className = "",
}: {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-zinc-200 ${className}`}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-contain p-0.5"
        />
      ) : (
        <span
          className="h-3/5 w-3/5 rounded-full cde-gradient"
          aria-hidden
        />
      )}
    </span>
  );
}