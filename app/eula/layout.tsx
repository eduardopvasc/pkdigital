import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "End User License Agreement",
  description:
    "The terms that govern access to and use of NOREN Agency digital materials, client portal, and workspace tools provided during an engagement.",
  path: "/eula",
});

export default function EulaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
