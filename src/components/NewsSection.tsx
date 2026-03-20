"use client";

import Link from "next/link";
import { content } from "@/constants/content";
import { getFeaturedNewsPosts } from "@/content/news";
import { useLanguage } from "@/context/LanguageContext";

function formatNewsDate(date: string, lang: "en" | "kr") {
  return new Intl.DateTimeFormat(lang === "kr" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(new Date(date));
}

export default function NewsSection() {
  const { lang } = useLanguage();
  const copy = content[lang].news;
  const posts = getFeaturedNewsPosts(3);

  return (
    <section className="bg-white py-12 font-display">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-primary">
              {copy.kicker}
            </span>
            <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl ${lang === "kr" ? "word-keep-all" : ""}`}>
              {copy.title}
            </h2>
            <p className={`mt-3 text-sm leading-relaxed text-slate-500 md:text-base ${lang === "kr" ? "word-keep-all" : ""}`}>{copy.desc}</p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition-colors hover:border-primary hover:text-primary"
          >
            {copy.viewAll}
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {posts.map((post) => {
            const localized = post.translations[lang];

            return (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  <span>{post.category[lang]}</span>
                  <span className="text-slate-400">{formatNewsDate(post.publishedAt, lang)}</span>
                </div>
                <h3 className={`mt-4 text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-primary ${lang === "kr" ? "word-keep-all" : ""}`}>
                  {localized.title}
                </h3>
                <p className={`mt-4 flex-1 text-sm leading-relaxed text-slate-600 ${lang === "kr" ? "word-keep-all" : ""}`}>{localized.excerpt}</p>
                <span className="mt-6 inline-flex text-sm font-bold text-primary">{copy.readMore}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
