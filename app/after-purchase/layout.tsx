import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "After Purchase",
  description:
    "What happens after you check out with NOREN — client portal access, onboarding, kickoff, deliverables, reporting, support, and the delivery timeline.",
  path: "/after-purchase",
});

export default function AfterPurchaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
