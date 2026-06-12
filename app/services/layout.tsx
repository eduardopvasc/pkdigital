import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "The growth capabilities NOREN delivers as one accountable partnership — strategic growth systems, audience development, content infrastructure, strategic distribution, brand positioning, community development, and growth intelligence.",
  path: "/services",
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
