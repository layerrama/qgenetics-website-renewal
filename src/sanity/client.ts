import { createClient } from "next-sanity";
import { sanityApiVersion, sanityDataset, sanityProjectId } from "@/sanity/env";

export function getSanityClient() {
  if (!sanityProjectId || !sanityDataset) {
    return null;
  }

  return createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: false
  });
}
