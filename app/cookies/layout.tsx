import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description:
    "How NOREN Agency (operated by PK Digital LLC) uses cookies and similar technologies on norenagency.com, and how you can control them.",
  path: "/cookies",
});

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
