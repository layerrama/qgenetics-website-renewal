import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { sanityDataset, sanityProjectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export function getSanityConfig() {
  if (!sanityProjectId || !sanityDataset) {
    return null;
  }

  return defineConfig({
    name: "default",
    title: "Qgenetics Admin",
    projectId: sanityProjectId,
    dataset: sanityDataset,
    basePath: "/admin",
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes
    }
  });
}
