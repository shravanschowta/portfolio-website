import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

type PortfolioImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  className?: string;
};

/** Local /public images — avoids remote optimizer failures. */
export function PortfolioImage({
  className,
  sizes,
  ...props
}: PortfolioImageProps) {
  return (
    <Image
      {...props}
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      className={cn(className)}
    />
  );
}
