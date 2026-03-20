"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLanguage } = useLanguage();
  const copy = content[lang];
  const isHome = pathname === "/";
  const navItems = isHome
    ? [
        { href: "#philosophy", label: copy.nav.philosophy },
        { href: "#platform", label: copy.nav.platform },
        { href: "#pipeline", label: copy.nav.pipeline },
        { href: "#leadership", label: copy.nav.leadership },
        { href: "/news", label: copy.nav.news }
      ]
    : [
        { href: "/", label: copy.nav.home },
        { href: "/news", label: copy.nav.news }
      ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-background-dark/95">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between py-3">
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
      </div>

      <nav className="no-scrollbar w-full overflow-x-auto border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-background-dark">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <ul className="flex min-w-max items-center gap-6 py-3">
            {navItems.map((item, index) => {
              const isActive = isHome ? index === 0 : item.href === "/news" ? pathname.startsWith("/news") : item.href === pathname;

              return (
                <li key={item.href}>
                  <Link
                    className={`pb-1 text-xs font-bold transition-colors ${
                      isActive
                        ? "border-b-2 border-primary text-primary"
                        : "text-slate-500 hover:text-primary dark:text-slate-400"
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
