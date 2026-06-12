import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "How We Work",
  description:
    "How NOREN works — a repeatable, four-stage engagement (Discovery, Strategy, Infrastructure, Optimization) that takes a brand from diagnosis to compounding growth.",
  path: "/approach",
});

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
