"use client";

import { NextStudio } from "next-sanity/studio";
import { getSanityConfig } from "@/sanity/config";

export default function SanityStudioClient() {
  const config = getSanityConfig();

  if (!config) {
    return null;
  }

  return <NextStudio config={config} />;
}
