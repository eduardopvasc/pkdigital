import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Acceptable Use Policy",
  description:
    "The standards that apply when you use the norenagency.com website and when you engage NOREN Agency (operated by PK DIGITAL LLC) for services.",
  path: "/acceptable-use",
});

export default function AcceptableUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
