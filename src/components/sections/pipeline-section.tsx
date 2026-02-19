"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/animated-section";
import { designImages } from "@/content/design-images";

type PipelineItem = { name: string; detail: string };

function toList<T>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[];
  if (value && typeof value === "object") return Object.values(value as Record<string, T>);
  return [];
}

export default function PipelineSection() {
  const { t } = useTranslation();
  const items = toList<PipelineItem>(t("pipeline.items", { returnObjects: true }));

  return (
    <AnimatedSection id="pipeline" className="section-shell pt-6">
      <section className="overflow-hidden rounded-3xl bg-[#132210] p-5 text-white shadow-xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#2b4526] p-5">
          <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${designImages.pipelineHero})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132210] via-[#132210]/80 to-transparent" />
          <h2 className="headline-balance relative z-10 max-w-[14ch] text-3xl font-extrabold leading-[1.18] tracking-tight">{t("pipeline.title")}</h2>
        </div>

        <Accordion.Root type="single" collapsible className="mt-5 space-y-3">
          {items.map((item) => (
            <Accordion.Item key={item.name} value={item.name} className="rounded-2xl border border-[#2b4526] bg-[#1a2c17]">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-4 text-left">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#a1b99d]">{t("pipeline.accordionTitle")}</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pb-4 text-sm text-[#a1b99d]">{item.detail}</Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>
    </AnimatedSection>
  );
}
