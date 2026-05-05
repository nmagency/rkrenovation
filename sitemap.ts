import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const serviceSlugs = ["nettoyage-drone", "toiture", "facade", "hydrofuge"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${base}/politique-de-confidentialite`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    { url: `${base}/plan-du-site`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
  const services: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...staticPages, ...services];
}
