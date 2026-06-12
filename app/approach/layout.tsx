import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Approach",
  description:
    "The NOREN Framework — a repeatable, four-phase system (Audit, Architect, Activate, Amplify) that takes a brand from diagnosis to compounding growth.",
  path: "/approach",
});

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
