"use client";

import Image from "next/image";
import Link from "next/link";
import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const copy = content[lang];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-background-dark/95">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center" aria-label="Go to home">
          <Image
            src="/logo.png"
            alt="Qgenetics Official Logo"
            width={1620}
            height={540}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold tracking-wide text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle language"
          >
            {lang === "en" ? "EN" : "KR"}
          </button>
          <a className="text-sm font-bold tracking-wide text-primary transition-colors hover:text-primary/80" href="#investors">
            {copy.nav.contact}
          </a>
        </div>
      </div>

      <nav className="no-scrollbar w-full overflow-x-auto border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-background-dark">
        <ul className="flex min-w-max items-center gap-6 px-4 py-3">
          <li>
            <a className="border-b-2 border-primary pb-1 text-xs font-bold text-primary" href="#philosophy">
              {copy.nav.philosophy}
            </a>
          </li>
          <li>
            <a className="text-xs font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#platform">
              {copy.nav.platform}
            </a>
          </li>
          <li>
            <a className="text-xs font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#pipeline">
              {copy.nav.pipeline}
            </a>
          </li>
          <li>
            <a className="text-xs font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#healthcare">
              {copy.nav.healthcare}
            </a>
          </li>
          <li>
            <a className="text-xs font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#leadership">
              {copy.nav.leadership}
            </a>
          </li>
          <li>
            <a className="text-xs font-bold text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#investors">
              {copy.nav.investors}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
