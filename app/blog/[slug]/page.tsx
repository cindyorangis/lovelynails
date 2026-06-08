import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  let post;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
      {post.date && <p className="text-sm text-gray-500 mb-8">{post.date}</p>}
      <article
        className="prose prose-neutral"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
