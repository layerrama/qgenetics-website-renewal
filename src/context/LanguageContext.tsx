"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";

export type Language = "en" | "kr";

type LanguageContextValue = {
  lang: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("qgenetics-lang");
    if (saved === "en" || saved === "kr") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "kr" ? "ko" : "en";
  }, [lang]);

  const setLanguage = useCallback((language: Language) => {
    setLang(language);
    window.localStorage.setItem("qgenetics-lang", language);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "kr" : "en";
      window.localStorage.setItem("qgenetics-lang", next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLanguage,
      toggleLanguage
    }),
    [lang, setLanguage, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
