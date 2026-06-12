import type { Metadata } from "next";

/**
 * Per-route metadata helper. The root layout sets the title template
 * ("%s · NOREN Agency"), so `title` here is the page-specific segment.
 * Every page gets a canonical URL and consistent Open Graph tags.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · NOREN Agency`,
      description,
      url: path,
      siteName: "NOREN Agency",
      type: "website",
    },
  };
}
