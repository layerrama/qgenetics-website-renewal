"use client";

import Image from "next/image";
import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

const pipelineCardImages: Record<string, string> = {
  qbone:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCBkG2Nj1EpqrCYOQ5i2ZSTT8xlUCy1UxXQ3EavyYTHOWG1XvgehPTRIiiYXH8CqyarZu34-gZ8s32uQHMgcEYKhmwgyLt6hZekxZCmS-AQ6gkZr1FLGgzykw7xWi0RYzaX2vtjg0fv8FR2MdpkPzaZhLaKBYtdMi9bK06_1SJm2_YpWXRIU4iFXoRHb8l8UNp1aqpTBVMaLlsY_dLTJc3-jLDCjJcNGQWlekZ5I4-2w6BdgKZ7FXracavaI9d76XOv_j4DzaF3i7pc"
};

export default function PipelineSection() {
  const { lang } = useLanguage();
  const copy = content[lang].pipeline;
  const stages = ["전임상", "1상", "2상", "3상"] as const;

  return (
    <section className="w-full overflow-x-hidden bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="mb-6">
          <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-primary">
            {copy.kicker}
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-3xl">{copy.title}</h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item) => (
            <article
              key={item.id}
              className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-[11px] font-bold tracking-[0.16em] text-primary">{item.kicker}</p>
              <h3
                className={`mt-2 break-words text-xl font-extrabold leading-tight text-slate-900 dark:text-white ${
                  lang === "kr" ? "word-keep-all" : ""
                }`}
              >
                {item.title}
              </h3>

              <div className="mt-3">
                {item.id === "qg3030" ? (
                  <span className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-full border border-green-600/30 bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    {item.status}
                  </span>
                ) : (
                  <span className="inline-flex max-w-full flex-wrap rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.status}
                  </span>
                )}
              </div>

              <div className="mt-4 space-y-1.5">
                {item.desc.map((line, lineIndex) => (
                  <p
                    key={`${item.id}-line-${lineIndex}`}
                    className={`text-sm leading-relaxed text-slate-600 dark:text-slate-300 ${lang === "kr" ? "word-keep-all" : ""}`}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {item.id === "qg3030" ? (
                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                  <div className="relative">
                    <div className="absolute left-0 right-0 top-3 h-0.5 bg-slate-300 dark:bg-slate-600" />
                    <div className="relative grid grid-cols-4 gap-2">
                      {stages.map((stage, stageIndex) => {
                        const isCurrent = stageIndex === 1;
                        return (
                          <div key={stage} className="flex flex-col items-center text-center">
                            <span
                              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold ${
                                isCurrent
                                  ? "border-primary bg-primary text-white"
                                  : "border-slate-300 bg-white text-slate-500 dark:border-slate-500 dark:bg-slate-900 dark:text-slate-300"
                              }`}
                            >
                              {stageIndex + 1}
                            </span>
                            <span className={`mt-2 text-[11px] font-semibold ${isCurrent ? "text-primary" : "text-slate-500 dark:text-slate-300"}`}>
                              {stage}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : null}

              {"hasImage" in item && item.hasImage && pipelineCardImages[item.id] ? (
                <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                  <Image
                    src={pipelineCardImages[item.id]}
                    alt={item.title}
                    width={1200}
                    height={480}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-48 w-full object-cover"
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
