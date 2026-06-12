import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "NOREN Agency is a strategic growth agency built like a firm — giving modern brands, founders and creators a senior, strategy-led growth function run with rigor.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
