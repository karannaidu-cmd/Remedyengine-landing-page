import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        absoluteUrl("/images/og-image.webp"),
        absoluteUrl("/images/hero-banner.webp"),
      ],
    },
    {
      url: absoluteUrl("/book-demo"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteUrl("/images/og-image.webp")],
    },
  ];
}
