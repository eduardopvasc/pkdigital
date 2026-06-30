import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Sample Deliverables",
  description:
    "Illustrative sample deliverables produced in a NOREN engagement — Strategy Brief, Content Plan, Monthly Performance Report, and Growth Roadmap. Clearly watermarked samples.",
  path: "/sample-deliverables",
});

export default function SampleDeliverablesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
