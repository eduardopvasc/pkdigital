import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Work",
  description:
    "The systems and assets NOREN builds across an engagement — content infrastructure, channel architecture, creative direction, distribution, community, and reporting.",
  path: "/work",
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
