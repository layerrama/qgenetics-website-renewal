"use client";

import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const isKr = i18n.language.startsWith("kr");

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(isKr ? "en" : "kr")}
      className="rounded-full border border-sage-200 bg-white px-3 py-2 text-xs font-bold tracking-[0.1em] text-sage-900 transition hover:border-primary sm:text-sm"
      aria-label={t("common.changeLanguage")}
    >
      {isKr ? "EN" : "KR"}
    </button>
  );
}
