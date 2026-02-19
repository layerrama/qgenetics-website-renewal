"use client";

import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/animated-section";
import { designImages } from "@/content/design-images";

export default function StorySection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="story" className="section-shell pt-6">
      <section className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="headline-balance max-w-[14ch] text-3xl font-extrabold leading-[1.18] tracking-tight text-[#111813]">{t("story.title")}</h2>
        <div className="mt-4 h-44 w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${designImages.philosophyStory})` }} />
        <p className="mt-4 text-sm leading-relaxed text-[#63886f]">{t("story.body")}</p>
      </section>
    </AnimatedSection>
  );
}
