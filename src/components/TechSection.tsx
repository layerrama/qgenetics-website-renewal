"use client";

import { Dna, SearchCheck } from "lucide-react";
import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

const featureIcons = [SearchCheck, Dna] as const;

export default function TechSection() {
  const { lang } = useLanguage();
  const copy = content[lang].tech;

  return (
    <section className="relative overflow-hidden bg-[#0a0f1f] font-display text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(19,109,236,0.35), transparent 40%), radial-gradient(circle at 80% 10%, rgba(120,170,255,0.2), transparent 45%), radial-gradient(circle at 70% 80%, rgba(19,109,236,0.25), transparent 40%)"
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-bold tracking-[0.14em] text-primary">
            {copy.kicker}
          </span>
          <h2
            className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl ${
              lang === "kr" ? "whitespace-pre-line md:whitespace-normal" : ""
            }`}
          >
            {copy.title}
          </h2>
          <p className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg ${lang === "kr" ? "word-keep-all" : ""}`}>{copy.desc}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {copy.features.map((feature, index) => {
            const Icon = featureIcons[index] ?? Dna;
            return (
              <article
                key={`${feature.title}-${index}`}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/75 p-6 shadow-xl backdrop-blur-sm transition-colors hover:border-primary/50"
              >
                <div className="mb-4 inline-flex rounded-xl border border-primary/20 bg-primary/15 p-3 text-primary">
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-extrabold leading-tight text-white">{feature.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed text-slate-300 md:text-base ${lang === "kr" ? "word-keep-all" : ""}`}>
                  {feature.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
