"use client";

import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/animated-section";

export default function AgingEraSection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="agingEra" className="section-shell pt-6">
      <section className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="headline-balance max-w-[14ch] text-3xl font-extrabold leading-[1.18] tracking-tight text-[#111813]">{t("agingEra.title")}</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#63886f]">{t("agingEra.body")}</p>
      </section>
    </AnimatedSection>
  );
}
