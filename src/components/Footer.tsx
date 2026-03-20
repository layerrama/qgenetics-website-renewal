"use client";

import Image from "next/image";
import Link from "next/link";
import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const cta = content[lang].cta;
  const copy = content[lang].footer;
  const emailHref = `mailto:${copy.email}`;
  const linkedinHref = "https://www.linkedin.com/company/qgenetics/";

  return (
    <footer className="border-t border-slate-100 bg-slate-50 py-12 font-display dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:px-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center" aria-label="Go to home">
            <Image src="/logo.png" alt="Qgenetics Official Logo" width={1620} height={540} className="h-8 w-auto" />
          </Link>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{cta.kicker}</span>
          <h3 className={`text-2xl font-bold leading-tight text-slate-900 dark:text-white ${lang === "kr" ? "word-keep-all" : ""}`}>
            {cta.title}
          </h3>
          <p className={`max-w-[520px] text-sm leading-relaxed text-slate-500 dark:text-slate-400 ${lang === "kr" ? "word-keep-all" : ""}`}>
            {cta.desc}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            className="flex items-center gap-3 text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary"
            href={emailHref}
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span className="text-sm font-medium">{copy.email}</span>
          </a>
          <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined mt-0.5 text-[20px]">call</span>
            <div className="flex flex-col gap-2">
              {copy.phones.map((phone) => {
                const phoneHref = `tel:${phone.number.replace(/[^+\d]/g, "")}`;

                return (
                  <a
                    key={`${phone.label}-${phone.number}`}
                    className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary"
                    href={phoneHref}
                  >
                    <span className="w-[104px] shrink-0 text-slate-500 dark:text-slate-400">{phone.label}</span>
                    <span>{phone.number}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
            <span className="material-symbols-outlined text-[20px]">location_on</span>
            <span className={`text-sm font-medium ${lang === "kr" ? "whitespace-pre-line md:whitespace-normal" : ""}`}>{copy.address}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex gap-4">
            <a
              className="flex size-10 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm transition-all hover:bg-primary/5 hover:text-primary dark:border-slate-700 dark:bg-slate-800"
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Qgenetics LinkedIn"
            >
              <span className="text-sm font-bold">In</span>
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm transition-all hover:bg-primary/5 hover:text-primary dark:border-slate-700 dark:bg-slate-800"
              href="#"
            >
              <span className="text-sm font-bold">X</span>
            </a>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500">{copy.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
