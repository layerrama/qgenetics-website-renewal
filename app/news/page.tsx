import NewsListPage from "@/components/NewsListPage";
import { getNewsPosts } from "@/lib/news";

export const revalidate = 60;

export default async function NewsPage() {
  const posts = await getNewsPosts();

  return <NewsListPage posts={posts} />;
}
