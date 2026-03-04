"use client";

import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadershipSection() {
  const { lang } = useLanguage();
  const copy = content[lang].leadership;

  return (
    <section className="bg-white px-5 py-12 font-display">
      <div className="mx-auto w-full max-w-6xl">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">{copy.kicker}</span>
        <h2 className={`mt-2 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-3xl ${lang === "kr" ? "word-keep-all" : ""}`}>
          {copy.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {copy.members.map((member) => (
            <article key={member.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="aspect-[3/4] w-full rounded-xl bg-slate-200" />
              <div className="mt-4">
                <h3 className={`text-xl font-extrabold leading-tight text-slate-900 ${lang === "kr" ? "word-keep-all" : ""}`}>
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-primary">{member.role}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                {member.resume.map((line) => (
                  <li key={line} className={lang === "kr" ? "word-keep-all" : ""}>
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
