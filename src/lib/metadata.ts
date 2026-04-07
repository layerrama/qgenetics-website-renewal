export const siteConfig = {
  name: "Qgenetics",
  url: "https://qgenetics.bio",
  description:
    "Qgenetics is advancing Soft Aging through its AI-MSC platform, regenerative medicine research, and clinical pipeline development.",
  ogImage: {
    url: "/logo.png",
    width: 1620,
    height: 540,
    alt: "Qgenetics"
  }
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
