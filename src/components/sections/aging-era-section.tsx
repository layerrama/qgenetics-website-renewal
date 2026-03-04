"use client";

import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/animated-section";

export default function AgingEraSection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="agingEra" className="section-shell pt-6">
      <section className="relative overflow-hidden rounded-3xl border border-[#d9e5dc] bg-white p-5 shadow-sm">
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#1ce362]/15 blur-2xl" />
        <div className="pointer-events-none absolute -left-14 bottom-0 h-28 w-28 rounded-full bg-[#dceee1] blur-2xl" />
        <h2 className="headline-balance max-w-[14ch] text-3xl font-extrabold leading-[1.18] tracking-tight text-[#111813]">{t("agingEra.title")}</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#63886f]">{t("agingEra.body")}</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <article className="rounded-2xl border border-[#e3ebe5] bg-[#f6f8f6] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d7a5e]">{t("agingEra.yearLabel")}</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight text-[#111813]">2100</p>
          </article>
          <article className="rounded-2xl border border-[#e3ebe5] bg-[#f6f8f6] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#4d7a5e]">{t("agingEra.populationLabel")}</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight text-[#111813]">3.1B</p>
          </article>
        </div>
        <div className="mt-3 rounded-2xl border border-[#d6e8dc] bg-[#ebf7ef] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#2d4034]">{t("agingEra.demandLabel")}</p>
        </div>
      </section>
    </AnimatedSection>
  );
}
