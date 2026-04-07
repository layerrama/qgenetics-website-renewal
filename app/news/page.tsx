import type { Metadata } from "next";
import NewsListPage from "@/components/NewsListPage";
import { absoluteUrl, siteConfig } from "@/lib/metadata";
import { getNewsPosts } from "@/lib/news";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "News",
  description: "Latest Qgenetics company updates, platform progress, and pipeline announcements.",
  alternates: {
    canonical: "/news"
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/news"),
    title: `News | ${siteConfig.name}`,
    description: "Latest Qgenetics company updates, platform progress, and pipeline announcements.",
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
    title: `News | ${siteConfig.name}`,
    description: "Latest Qgenetics company updates, platform progress, and pipeline announcements.",
    images: [absoluteUrl(siteConfig.ogImage.url)]
  }
};

export default async function NewsPage() {
  const posts = await getNewsPosts();

  return <NewsListPage posts={posts} />;
}
