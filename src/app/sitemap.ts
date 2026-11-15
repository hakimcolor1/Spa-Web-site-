import type { MetadataRoute } from "next";
import { treatments, specialists, blogPosts } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lumiere-spa.vercel.app";

  const staticPages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/treatments", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/facial-skincare", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/book", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/specialists", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/membership", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/reviews", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const treatmentPages = treatments.map((t) => ({
    url: `/treatments/${t.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const specialistPages = specialists.map((s) => ({
    url: `/specialists/${s.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = blogPosts.map((b) => ({
    url: `/blog/${b.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...treatmentPages, ...specialistPages, ...blogPages].map(
    (page) => ({
      ...page,
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
    })
  );
}
