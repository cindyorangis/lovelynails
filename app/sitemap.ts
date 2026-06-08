import type { MetadataRoute } from "next";
import { mainNav, siteConfig } from "./site-data";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes = mainNav.map((route) => ({
    url: `${siteConfig.baseUrl}${route.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${siteConfig.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
