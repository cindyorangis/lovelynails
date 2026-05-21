import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, buildTitle, localDescription } from "../site-data";

export const metadata: Metadata = {
  title: buildTitle("Nail Care Blog"),
  description: localDescription("Nail care tips and salon updates"),
};

export default function BlogIndexPage() {
  return (
    <div className="container page-stack">
      <h1>Blog</h1>
      <p>Nail care tips, seasonal style ideas, and beauty guidance from our North York team.</p>
      <div className="list-wrap">
        {blogPosts.map((post) => (
          <article key={post.slug} className="list-item">
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <p>{post.publishedAt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}