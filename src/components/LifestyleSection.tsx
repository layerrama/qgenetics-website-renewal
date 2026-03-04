"use client";

import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

const qforetImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnqM9IyUTFQm6e3HUF-T4HYaMMJdhCGdbIn1AciEEf4oJlpj5WnuhYBagfQjn16SGypsUxdF7PApGmQHP06zibETAj6lREPHqgvZruLHF1ycM-SG7tsImlH0mpCfXdlyGdlfcGuEahuCyE48yV2T-cKSiuVIO6uKav0WZImhXs85sdRzt_9gKQHLk4YNfXDiZcBRdwnragRmMWMkTAt2ANuJrxbm7IVJ8Y1TURqgwuCCBQCvoF6P_3TZYwDgLplf7nfSeQfy236CoL";

export default function LifestyleSection() {
  const { lang } = useLanguage();
  const copy = content[lang].lifestyle;

  return (
    <section className="bg-white px-5 pb-12 pt-8 font-display dark:bg-slate-900">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">{copy.kicker}</span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
          {copy.title}
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        <div className="w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm dark:bg-slate-800">
          <div className="aspect-[16/9] w-full bg-cover bg-center" style={{ backgroundImage: `url("${qforetImageUrl}")` }} />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">{copy.heading}</h3>
          <p className="text-base font-medium leading-relaxed text-slate-600 dark:text-slate-400">{copy.desc}</p>
        </div>

        <button className="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">
          <span>{copy.button}</span>
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4">
        <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-sm dark:bg-slate-700">
            <span className="material-symbols-outlined">science</span>
          </div>
          <div>
            <p className="text-base font-bold leading-tight text-slate-900 dark:text-white">{copy.features.patent}</p>
            <p className="text-sm font-medium leading-normal text-slate-500 dark:text-slate-400">{copy.features.patentDesc}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-sm dark:bg-slate-700">
            <span className="material-symbols-outlined">eco</span>
          </div>
          <div>
            <p className="text-base font-bold leading-tight text-slate-900 dark:text-white">{copy.features.vegan}</p>
            <p className="text-sm font-medium leading-normal text-slate-500 dark:text-slate-400">{copy.features.veganDesc}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white text-primary shadow-sm dark:bg-slate-700">
            <span className="material-symbols-outlined">public</span>
          </div>
          <div>
            <p className="text-base font-bold leading-tight text-slate-900 dark:text-white">{copy.features.global}</p>
            <p className="text-sm font-medium leading-normal text-slate-500 dark:text-slate-400">{copy.features.globalDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
