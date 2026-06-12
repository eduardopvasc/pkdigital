import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Framework",
  description:
    "The NOREN Framework™ — a proprietary methodology for building growth infrastructure across positioning, content infrastructure, distribution, audience development and growth intelligence.",
  path: "/framework",
});

export default function FrameworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
