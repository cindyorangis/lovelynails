import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-medium hover:underline">
                {post.title}
              </h2>
            </Link>
            {post.date && (
              <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            )}
            {post.excerpt && (
              <p className="text-gray-600 mt-1">{post.excerpt}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
