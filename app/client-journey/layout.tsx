import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Client Journey",
  description:
    "The complete NOREN Agency customer journey — how clients discover us, choose a service plan, check out securely via Whop, complete onboarding, and receive ongoing deliverables and support.",
  path: "/client-journey",
});

export default function ClientJourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
