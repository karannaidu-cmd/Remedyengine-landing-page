import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 186px, 206px",
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={siteConfig.logo.url}
        alt={siteConfig.logo.alt}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        priority={priority}
        sizes={sizes}
        className={cn("h-9 w-auto", imageClassName)}
      />
    </span>
  );
}
