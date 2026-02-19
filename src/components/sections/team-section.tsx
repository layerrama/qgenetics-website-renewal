"use client";

import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/animated-section";
import { designImages } from "@/content/design-images";

type Member = { name: string; bio: string };

function toList<T>(value: unknown): T[] {
  if (Array.isArray(value)) return value as T[];
  if (value && typeof value === "object") return Object.values(value as Record<string, T>);
  return [];
}

export default function TeamSection() {
  const { t } = useTranslation();
  const members = toList<Member>(t("expertise.members", { returnObjects: true }));
  const facePositions = ["center 18%", "center 24%", "center 22%"];

  return (
    <AnimatedSection id="expertise" className="section-shell pt-6">
      <section className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="headline-balance max-w-[14ch] text-3xl font-extrabold leading-[1.18] tracking-tight text-[#111813]">{t("expertise.title")}</h2>
        <div className="mt-5 space-y-3">
          {members.map((member, index) => (
            <article key={member.name} className="flex items-start gap-3 rounded-2xl border border-[#e3ebe5] bg-[#f6f8f6] p-4">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#1ce362]/30 bg-white">
                <img
                  src={designImages.team[index] ?? designImages.team[0]}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: facePositions[index] ?? "center 20%" }}
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#111813]">{member.name}</h3>
                <p className="mt-1 text-sm text-[#63886f]">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
