"use client";

import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBBBmEyVyf5H1PB-cuaKFt8YzJeufpACg_LogcTmr57Gwr_Vo-53tfubyG4VhjisPbEikHbaHie7m66MlN9k-rjFDBt26kXNgVuw2IFyxjaHN-OtS1ArxlZhnJCiJ_53JMUP6XGLp_Hk7GVMS5YspLloJ3hyNEKfNArSb3JLnME36jRVJ9hkPwGnAV5Z3VfDaSwihgWbMV3wtN0GhV4QR03ej7qTzyO6yYlThunYvtzOAF_RUKEmQorIDoE5RPhWtCRbQQfTW7dk8uf";

export default function HeroSection() {
  const { lang } = useLanguage();
  const copy = content[lang].hero;

  return (
    <main className="relative flex w-full flex-col">
      <div className="@container">
        <div
          className="relative flex min-h-[560px] w-full flex-col items-center justify-center overflow-hidden bg-cover bg-center p-6 text-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(16, 24, 34, 0.4) 0%, rgba(19, 109, 236, 0.6) 100%), url('${heroImageUrl}')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent opacity-90 dark:from-background-dark" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />

          <div className="relative z-10 mx-auto mt-8 flex max-w-lg flex-col items-center gap-6">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-lg drop-shadow-lg backdrop-blur-sm">
              {copy.kicker}
            </span>
            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              {copy.title}
            </h1>
            <p
              className={`mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-blue-100 opacity-95 drop-shadow-lg md:text-lg ${
                lang === "kr" ? "word-keep-all" : ""
              }`}
            >
              {copy.subcopyPre}
              {copy.subcopyStrong ? <span className="text-white font-bold">{copy.subcopyStrong}</span> : null}
              {copy.subcopyPost}
            </p>
            <a
              href="#the-answer"
              className="relative mt-4 flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-primary shadow-xl transition-all hover:scale-105 hover:bg-blue-50 hover:shadow-2xl active:scale-95 sm:w-auto"
            >
              <span className="text-sm font-bold tracking-wide">{copy.button}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
