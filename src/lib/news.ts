import { cache } from "react";
import { groq } from "next-sanity";
import { fallbackNewsPosts, type NewsPost } from "@/content/news";
import { getSanityClient } from "@/sanity/client";

type SanityBlockChild = {
  text?: string;
};

type SanityBlock = {
  _type: string;
  children?: SanityBlockChild[];
};

type SanityNewsPost = {
  slug: string;
  publishedAt: string;
  featured?: boolean;
  categoryEn: string;
  categoryKr: string;
  titleEn: string;
  titleKr: string;
  excerptEn: string;
  excerptKr: string;
  bodyEn: SanityBlock[];
  bodyKr: SanityBlock[];
};

const allNewsPostsQuery = groq`
  *[_type == "newsPost"] | order(publishedAt desc) {
    "slug": slug.current,
    publishedAt,
    featured,
    categoryEn,
    categoryKr,
    titleEn,
    titleKr,
    excerptEn,
    excerptKr,
    bodyEn,
    bodyKr
  }
`;

const newsPostBySlugQuery = groq`
  *[_type == "newsPost" && slug.current == $slug][0] {
    "slug": slug.current,
    publishedAt,
    featured,
    categoryEn,
    categoryKr,
    titleEn,
    titleKr,
    excerptEn,
    excerptKr,
    bodyEn,
    bodyKr
  }
`;

async function withTimeout<T>(promise: Promise<T>, ms = 3000) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  try {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error("Sanity request timed out")), ms);
      })
    ]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
}

function sortNewsPosts(posts: NewsPost[]) {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

function blocksToParagraphs(blocks: SanityBlock[] = []) {
  return blocks
    .filter((block) => block._type === "block")
    .map((block) => block.children?.map((child) => child.text ?? "").join("").trim() ?? "")
    .filter(Boolean);
}

function mapSanityPost(post: SanityNewsPost): NewsPost {
  return {
    slug: post.slug,
    publishedAt: post.publishedAt,
    featured: post.featured,
    category: {
      en: post.categoryEn,
      kr: post.categoryKr
    },
    translations: {
      en: {
        title: post.titleEn,
        excerpt: post.excerptEn,
        body: blocksToParagraphs(post.bodyEn)
      },
      kr: {
        title: post.titleKr,
        excerpt: post.excerptKr,
        body: blocksToParagraphs(post.bodyKr)
      }
    }
  };
}

async function fetchSanityNewsPosts() {
  const client = getSanityClient();

  if (!client) {
    return null;
  }

  try {
    const posts = await withTimeout(client.fetch<SanityNewsPost[]>(allNewsPostsQuery));

    if (!posts?.length) {
      return [];
    }

    return posts.filter((post) => post.slug).map(mapSanityPost);
  } catch {
    return null;
  }
}

async function fetchSanityNewsPostBySlug(slug: string) {
  const client = getSanityClient();

  if (!client) {
    return null;
  }

  try {
    const post = await withTimeout(client.fetch<SanityNewsPost | null>(newsPostBySlugQuery, { slug }));
    return post ? mapSanityPost(post) : null;
  } catch {
    return null;
  }
}

export const getNewsPosts = cache(async () => {
  const sanityPosts = await fetchSanityNewsPosts();

  if (sanityPosts && sanityPosts.length) {
    return sortNewsPosts(sanityPosts);
  }

  return sortNewsPosts(fallbackNewsPosts);
});

export const getFeaturedNewsPosts = cache(async (limit = 3) => {
  const posts = await getNewsPosts();

  return posts
    .filter((post) => post.featured)
    .concat(posts.filter((post) => !post.featured))
    .slice(0, limit);
});

export const getNewsPostBySlug = cache(async (slug: string) => {
  const sanityPost = await fetchSanityNewsPostBySlug(slug);

  if (sanityPost) {
    return sanityPost;
  }

  return fallbackNewsPosts.find((post) => post.slug === slug) ?? null;
});
