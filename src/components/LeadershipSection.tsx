"use client";

import Image from "next/image";
import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadershipSection() {
  const { lang } = useLanguage();
  const copy = content[lang].leadership;

  return (
    <section className="bg-white py-12 font-display">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">{copy.kicker}</span>
        <h2 className={`mt-2 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-3xl ${lang === "kr" ? "word-keep-all" : ""}`}>
          {copy.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {copy.members.map((member) => (
            <article key={member.name} className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <div className="mt-4 min-w-0">
                <h3 className={`break-words text-xl font-extrabold leading-snug text-slate-900 ${lang === "kr" ? "word-keep-all" : ""}`}>
                  {member.name}
                </h3>
                <p className="mt-1 break-words text-sm font-bold leading-relaxed text-primary">{member.role}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  {member.resume.map((line) => (
                    <li key={line} className={`break-words ${lang === "kr" ? "word-keep-all" : ""}`}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
