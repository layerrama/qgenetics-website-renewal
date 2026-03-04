"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/language-toggle";
import Logo from "@/components/logo";

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const ids = ["hero", "agingEra", "philosophy", "story", "pipeline", "lifestyle", "expertise", "growth"] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e3ebe5] bg-[#f6f8f6]/90 px-4 py-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-[#111813] hover:bg-[#e9efe9]"
          aria-label={t("common.menu")}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <Logo className="flex items-center gap-2" />
        <LanguageToggle />
      </div>
      <nav className={`hide-scrollbar mt-3 overflow-x-auto transition-all duration-200 ${menuOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0 md:max-h-20 md:opacity-100"}`}>
        <ul className="flex min-w-max items-center gap-2">
          {ids.map((id, index) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-full border px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] ${
                  index === 0 ? "border-[#1ce362] bg-[#e8f9ee] text-[#111813]" : "border-[#d5e0d8] bg-white text-[#4d7a5e]"
                }`}
              >
                {t(`nav.${id}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
