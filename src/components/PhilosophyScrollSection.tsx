"use client";

import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";
import { designImages } from "@/content/design-images";

export default function PhilosophyScrollSection() {
  const { lang } = useLanguage();
  const items = content[lang].philosophy;
  const cardImages = [null, designImages.philosophyStory] as const;

  return (
    <section className="relative overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 py-6 lg:grid-cols-2 lg:gap-16 lg:py-10">
          {items.map((item, index) => (
            <article
              key={`${item.kicker}-${index}`}
              id={item.kicker === "THE ANSWER" ? "the-answer" : undefined}
              className="h-full min-h-[400px] rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900 lg:min-h-[480px] lg:p-12"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <span className="text-xl font-bold tracking-widest text-primary lg:text-2xl">{item.kicker}</span>
                  <h3 className="mb-6 mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white lg:text-5xl">
                    {item.title}
                  </h3>
                  <p className={`text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:text-xl ${lang === "kr" ? "word-keep-all" : ""}`}>
                    {item.desc}
                  </p>
                </div>

                {index === 0 ? (
                  <div className="mt-8 w-full aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                    <div className="h-full w-full p-4">
                      <div className="flex h-full flex-col">
                        <div className="flex flex-wrap items-baseline gap-3">
                          <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            {lang === "en" ? "2.1 Billion" : "21억 명"}
                          </p>
                          <span className="inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                            <span className="material-symbols-outlined text-sm">trending_up</span>
                            {lang === "en" ? "+15% Growth" : "+15% 성장"}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {lang === "en" ? "Projected population over 60 by 2050" : "2050년 60세 이상 인구 전망"}
                        </p>
                        <div className="relative mt-2 min-h-0 flex-1">
                          <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 360 150">
                            <defs>
                              <linearGradient id="philosophyChartGradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#136dec" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#136dec" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="149" x2="360" y2="149" stroke="#cbd5e1" strokeWidth="1" />
                            <line x1="0" y1="100" x2="360" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                            <line x1="0" y1="50" x2="360" y2="50" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                            <path
                              d="M0,130 C40,125 80,110 120,95 C160,80 200,60 240,45 C280,30 320,15 360,5"
                              fill="url(#philosophyChartGradient)"
                              stroke="none"
                            />
                            <path
                              d="M0,130 C40,125 80,110 120,95 C160,80 200,60 240,45 C280,30 320,15 360,5"
                              fill="none"
                              stroke="#136dec"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                            />
                            <circle cx="0" cy="130" r="4" fill="white" stroke="#136dec" strokeWidth="2" />
                            <circle cx="120" cy="95" r="4" fill="white" stroke="#136dec" strokeWidth="2" />
                            <circle cx="240" cy="45" r="4" fill="white" stroke="#136dec" strokeWidth="2" />
                            <circle cx="360" cy="5" r="4" fill="#136dec" stroke="#136dec" strokeWidth="2" />
                          </svg>
                        </div>
                        <div className="mt-1 flex w-full justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                          <span>2020</span>
                          <span>2030</span>
                          <span>2040</span>
                          <span>2050</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {cardImages[index] ? (
                  <div className="mt-8 w-full aspect-video overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url("${cardImages[index]}")` }}
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
