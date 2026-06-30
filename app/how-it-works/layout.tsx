import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "How It Works",
  description:
    "The full NOREN client journey — from first visit and choosing a plan to secure Whop checkout, private client portal access, onboarding, and service delivery.",
  path: "/how-it-works",
});

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
