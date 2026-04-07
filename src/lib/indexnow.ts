import { absoluteUrl, siteConfig } from "@/lib/metadata";

export const INDEXNOW_KEY = "01F09F8E-4DE6-4124-BC87-5D18B5C61C1D";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY_LOCATION = absoluteUrl(`/${INDEXNOW_KEY}.txt`);

function normalizeUrls(urls: string[]) {
  return [...new Set(urls.filter(Boolean))].filter((url) => url.startsWith(siteConfig.url));
}

export async function submitIndexNowUrls(urls: string[]) {
  const urlList = normalizeUrls(urls);

  if (!urlList.length) {
    return;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({
      host: new URL(siteConfig.url).host,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList
    })
  });

  if (!response.ok) {
    throw new Error(`IndexNow submission failed with status ${response.status}`);
  }
}
