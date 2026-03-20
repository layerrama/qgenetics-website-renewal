"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { isSanityConfigured } from "@/sanity/env";

const SanityStudioClient = dynamic(() => import("@/components/SanityStudioClient"), {
  ssr: false
});

const setupVariables = ["NEXT_PUBLIC_SANITY_PROJECT_ID", "NEXT_PUBLIC_SANITY_DATASET"] as const;

export default function AdminPage() {
  if (!isSanityConfigured()) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            Admin Setup
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white">Sanity Admin is ready to connect</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Add your Sanity project information to this Next.js app and the embedded admin studio will appear here at
            <span className="ml-1 font-semibold text-white">/admin</span>.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Required Environment Variables</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {setupVariables.map((item) => (
                <li key={item} className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 font-mono">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-3 text-sm leading-7 text-slate-300">
            <p>1. Create a Sanity project and dataset.</p>
            <p>2. Put the project ID and dataset into your Vercel environment variables.</p>
            <p>3. Redeploy the site, then revisit this page.</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/news"
              className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-bold text-slate-100 transition-colors hover:border-cyan-300 hover:text-cyan-200"
            >
              Go to News
            </Link>
            <a
              href="https://www.sanity.io/docs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              Open Sanity Docs
            </a>
          </div>
        </div>
      </main>
    );
  }

  return <SanityStudioClient />;
}
