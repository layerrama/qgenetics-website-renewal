"use client";

import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/animated-section";
import { designImages } from "@/content/design-images";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="hero" className="section-shell pt-4">
      <section className="relative overflow-hidden rounded-3xl border border-[#dce7dd]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${designImages.hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1911]/35 via-[#0d1911]/55 to-[#0d1911]/72" />
        <div className="relative z-10 px-6 py-16 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-1 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#1ce362]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">{t("hero.badge")}</span>
          </div>
          <h1 className="headline-balance mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white [text-shadow:0_3px_16px_rgba(0,0,0,0.45)]">
            <span className="block">{t("hero.titleLine1")}</span>
            <span className="mt-1 block text-[#ccffd8]">{t("hero.titleLine2")}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[312px] text-sm leading-relaxed text-[#e9f6ec] [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]">{t("hero.description")}</p>
          <button className="mt-7 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#111813] transition hover:bg-[#1ce362]">
            {t("common.explore")}
          </button>
        </div>
      </section>
    </AnimatedSection>
  );
}
