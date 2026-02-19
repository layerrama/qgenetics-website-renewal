"use client";

import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/animated-section";

type Bullet = { title: string; desc: string };

function toList<T>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[];
  if (value && typeof value === "object") return Object.values(value as Record<string, T>);
  return [];
}

export default function PhilosophySection() {
  const { t } = useTranslation();
  const bullets = toList<Bullet>(t("philosophy.bullets", { returnObjects: true }));

  return (
    <AnimatedSection id="philosophy" className="section-shell pt-6">
      <section className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="headline-balance max-w-[14ch] text-3xl font-extrabold leading-[1.18] tracking-tight text-[#111813]">{t("philosophy.title")}</h2>
        <div className="mt-5 space-y-3">
          {bullets.map((item) => (
            <article key={item.title} className="rounded-2xl border border-[#e3ebe5] bg-[#f6f8f6] p-4">
              <h3 className="text-lg font-bold text-[#111813]">{item.title}</h3>
              <p className="mt-1 text-sm text-[#63886f]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
