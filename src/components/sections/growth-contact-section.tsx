"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/animated-section";

export default function GrowthContactSection() {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="growth" className="section-shell pb-8 pt-6">
      <section className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="headline-balance max-w-[14ch] text-3xl font-extrabold leading-[1.18] tracking-tight text-[#111813]">{t("growth.title")}</h2>

        <Tabs.Root defaultValue="media" className="mt-5">
          <Tabs.List className="grid grid-cols-2 rounded-xl bg-[#dbe6dc] p-1">
            <Tabs.Trigger value="media" className="rounded-lg px-3 py-2 text-xs font-bold data-[state=active]:bg-white">{t("growth.media")}</Tabs.Trigger>
            <Tabs.Trigger value="roadmap" className="rounded-lg px-3 py-2 text-xs font-bold data-[state=active]:bg-white">{t("growth.roadmap")}</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="media" className="mt-4 rounded-xl border border-[#edf2ee] bg-[#f6f8f6] p-4 text-sm text-[#63886f]">
            {t("growth.mediaDesc")}
          </Tabs.Content>

          <Tabs.Content value="roadmap" className="mt-4 rounded-xl border border-[#edf2ee] bg-[#f6f8f6] p-4 text-sm text-[#63886f]">
            {t("growth.roadmapDesc")}
          </Tabs.Content>
        </Tabs.Root>

        <footer className="mt-6 rounded-3xl bg-[#f1f5f2] p-4">
          <h3 className="text-xl font-extrabold text-[#111813]">{t("contact.title")}</h3>
          <p className="mt-2 text-sm text-[#63886f]">{t("contact.body")}</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[#4d7a5e]">{t("contact.tagline")}</p>
        </footer>
      </section>
    </AnimatedSection>
  );
}
