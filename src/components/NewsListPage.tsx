"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { content } from "@/constants/content";
import type { NewsPost } from "@/content/news";
import { useLanguage } from "@/context/LanguageContext";

function formatNewsDate(date: string, lang: "en" | "kr") {
  return new Intl.DateTimeFormat(lang === "kr" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

export default function NewsListPage({ posts }: { posts: NewsPost[] }) {
  const { lang } = useLanguage();
  const copy = content[lang].news;

  return (
    <div className="app-shell min-h-screen">
      <Navbar />
      <main className="bg-background-light py-12">
        <section className="mx-auto w-full max-w-5xl px-4 md:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-primary">
              {copy.kicker}
            </span>
            <h1 className={`mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl ${lang === "kr" ? "word-keep-all" : ""}`}>{copy.title}</h1>
            <p className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-600 ${lang === "kr" ? "word-keep-all" : ""}`}>{copy.desc}</p>
          </div>

          <div className="mt-8 space-y-5">
            {posts.length ? (
              posts.map((post) => {
                const localized = post.translations[lang];

                return (
                  <Link
                    key={post.slug}
                    href={`/news/${post.slug}`}
                    className="block rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg md:p-8"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                        {post.category[lang]}
                      </div>
                      <span className="text-sm font-medium text-slate-400">{formatNewsDate(post.publishedAt, lang)}</span>
                    </div>
                    <h2 className={`mt-4 text-2xl font-bold leading-tight text-slate-900 md:text-3xl ${lang === "kr" ? "word-keep-all" : ""}`}>
                      {localized.title}
                    </h2>
                    <p className={`mt-4 text-base leading-relaxed text-slate-600 ${lang === "kr" ? "word-keep-all" : ""}`}>{localized.excerpt}</p>
                  </Link>
                );
              })
            ) : (
              <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-slate-500">{copy.empty}</div>
            )}
          </div>
        </section>
      </main>
      <section id="investors" className="scroll-mt-28">
        <Footer />
      </section>
    </div>
  );
}
