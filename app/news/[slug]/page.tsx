import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsArticlePage from "@/components/NewsArticlePage";
import { absoluteUrl, siteConfig } from "@/lib/metadata";
import { getNewsPostBySlug, getNewsPosts } from "@/lib/news";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getNewsPosts();

  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    return {
      title: "News"
    };
  }

  const title = post.translations.en.title;
  const description = post.translations.en.excerpt;
  const url = absoluteUrl(`/news/${post.slug}`);

  return {
    title,
    description,
    alternates: {
      canonical: `/news/${post.slug}`
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: post.publishedAt,
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage.url),
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          alt: siteConfig.ogImage.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(siteConfig.ogImage.url)]
    }
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <NewsArticlePage post={post} />;
}
