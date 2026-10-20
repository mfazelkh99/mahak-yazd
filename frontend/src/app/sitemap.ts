import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mahakyazd.ir",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}