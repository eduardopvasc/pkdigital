import data from "@/lib/sample-deliverables.json";

/**
 * Single source for the public Sample Deliverables page, the downloadable
 * sample PDFs (generated from the same JSON), and the portal's "delivered
 * files". All sample content is illustrative — clearly watermarked SAMPLE.
 */
export type SampleTable = { head: string[]; rows: string[][] };
export type SampleSection = {
  heading: string;
  body?: string;
  bullets?: string[];
  note?: string;
  table?: SampleTable;
};
export type SampleDoc = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  meta: { label: string; value: string }[];
  sections: SampleSection[];
};

export const SAMPLE_DELIVERABLES: SampleDoc[] = (
  data as { documents: SampleDoc[] }
).documents;

/** Public path to the generated sample PDF for a deliverable. */
export function samplePdfPath(slug: string): string {
  return `/sample-deliverables/${slug}.pdf`;
}
