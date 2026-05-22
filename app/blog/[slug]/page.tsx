import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, buildTitle } from "../../site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: buildTitle("Blog Post") };
  }

  return {
    title: buildTitle(post.title),
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <article className="container page-stack">
      <p className="eyebrow">{post.publishedAt}</p>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
