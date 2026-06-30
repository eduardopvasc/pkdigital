import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Refund Policy",
  description:
    "How fees, cancellations, and refunds are handled for services provided by NOREN Agency (operated by PK DIGITAL LLC).",
  path: "/refund-policy",
});

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
