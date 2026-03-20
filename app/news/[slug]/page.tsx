import { notFound } from "next/navigation";
import NewsArticlePage from "@/components/NewsArticlePage";
import { getNewsPostBySlug, getNewsPosts } from "@/content/news";

export function generateStaticParams() {
  return getNewsPosts().map((post) => ({
    slug: post.slug
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <NewsArticlePage post={post} />;
}
