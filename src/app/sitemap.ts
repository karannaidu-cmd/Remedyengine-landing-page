import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/engines", priority: 0.9, changeFrequency: "monthly" },
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly" },
    { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
    { path: "/book-demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return paths.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
