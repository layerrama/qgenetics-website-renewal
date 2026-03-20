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

export default function NewsArticlePage({ post }: { post: NewsPost }) {
  const { lang } = useLanguage();
  const copy = content[lang].news;
  const localized = post.translations[lang];

  return (
    <div className="app-shell min-h-screen">
      <Navbar />
      <main className="bg-background-light py-12">
        <article className="mx-auto w-full max-w-4xl px-4 md:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <Link href="/news" className="inline-flex items-center text-sm font-bold text-primary transition-colors hover:text-primary/75">
              {copy.backToList}
            </Link>
            <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <span className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                {post.category[lang]}
              </span>
              <span className="text-sm font-medium text-slate-400">{formatNewsDate(post.publishedAt, lang)}</span>
            </div>
            <h1 className={`mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl ${lang === "kr" ? "word-keep-all" : ""}`}>{localized.title}</h1>
            <p className={`mt-5 text-lg leading-relaxed text-slate-600 ${lang === "kr" ? "word-keep-all" : ""}`}>{localized.excerpt}</p>

            <div className="mt-8 space-y-5 border-t border-slate-100 pt-8">
              {localized.body.map((paragraph, index) => (
                <p key={`${post.slug}-${index}`} className={`text-base leading-8 text-slate-700 ${lang === "kr" ? "word-keep-all" : ""}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <section id="investors" className="scroll-mt-28">
        <Footer />
      </section>
    </div>
  );
}
