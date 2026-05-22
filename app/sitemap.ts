import type { MetadataRoute } from "next";
import { blogPosts, mainNav, siteConfig } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = mainNav.map((route) => ({
    url: `${siteConfig.baseUrl}${route.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
