import { notFound } from "next/navigation";
import NewsArticlePage from "@/components/NewsArticlePage";
import { getNewsPostBySlug, getNewsPosts } from "@/lib/news";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getNewsPosts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <NewsArticlePage post={post} />;
}
