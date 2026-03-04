"use client";

import { content } from "@/constants/content";
import { useLanguage } from "@/context/LanguageContext";

const leaders = [
  {
    name: "Moon-Seok Jang",
    role: "Chief Executive Officer",
    tags: ["Harvard MBA", "Strategic Planning"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCc9iZZA5MKmltSY4z76Ts-2Q4PCwu_DfMgBg2oZOSnLUVik2qZsC5Cf1L3xqYP4LRihyy0u8S7hIjmo4faggca9ddAvOHzqzjcXcd1EoBsYSNN1oVdtvk8ucYbKn4KndgWR8hLvVRgjYbNNMDcjEcrS9uNGDdB2uaq0bY2fIQTxwRG6dt76M6bgHu-H1PmWBIt_Kdek7eiOjWgA41ZL_SZm3HsK0gO_DEKOH5FB1xQ5cwmUPhFln65l0gI_LuC9F4_yhmU9OQNdymu"
  },
  {
    name: "Min-Seok Lee",
    role: "Chief Scientific Officer",
    tags: ["SNU Ph.D", "Bio-Engineering"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoRwBOUBMkdvdWrn5AAcEw_NR0zZtK5ELuYN1T-yOEfWwTKAYLhRfsvAM_-sKA839LIG7tQISu3CGzdRHEi9o0WCUhfdr0QT-cjQwU-qaYaenZDPm-loe-p38X9Jx8cnuEFqJzF_reFSHxUsz_22D_ZJSTbR8FBCoYg-iopCyHAx4TjPGXDzQex2uw9BqwBz3ezqu7_1xfVtybbvCVb-Q3vNg4vU3sUSLYOJt0O6__tpObLGEnZUyiXN2unZsCctQFdjGfIN6CPLBx"
  },
  {
    name: "Tae-Hee Lee",
    role: "Chief Technology Officer",
    tags: ["CJ Group Ex-VP", "Global Markets"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL835RzoENLcGoMdBydiHKpRuaHM6ixus5sPfHtmn194f8ryHHOJIIIT_SzxA6NS2MSHevuZIWuM2e81zrsJg4OiFhhC9KzCibzR3goLRqisnLBH6k0-jDJa0O1cRfPAiRM275qdxbrr3VqxuzfKHt1TAc0XjpQOUPuVg5WryOiXh4foNeaKPMJt6SPLI4o_f175nUB4kYA7gMVK1oA8qp8R84Z3qwqmbBJLBWU1PhKDyHbqzsvoLXIU8DLqTXeDWplSMILJcneIb7"
  }
];

export default function LeadershipSection() {
  const { lang } = useLanguage();
  const copy = content[lang].leadership;

  return (
    <section className="bg-white px-5 py-10 font-display dark:bg-slate-900">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">{copy.kicker}</span>
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
          {copy.title}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{copy.desc}</p>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {leaders.map((leader, index) => (
          <div key={leader.name}>
            <div className="flex items-start gap-4">
              <div
                className="h-20 w-20 shrink-0 rounded-full border-2 border-slate-100 bg-slate-200 bg-cover bg-center bg-no-repeat shadow-md dark:border-slate-800 dark:bg-slate-700"
                style={{ backgroundImage: `url("${leader.image}")` }}
              />
              <div className="flex flex-col pt-1">
                <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">{copy.leaders[index]?.name ?? leader.name}</h3>
                <p className="mb-1 text-sm font-bold text-primary">{copy.leaders[index]?.role ?? leader.role}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {(copy.leaders[index]?.tags ?? leader.tags).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {index < leaders.length - 1 ? <div className="mt-6 h-px w-full bg-slate-100 dark:bg-slate-800" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
