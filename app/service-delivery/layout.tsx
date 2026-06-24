import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Service Delivery",
  description:
    "How a NOREN Agency engagement is delivered — from one-time purchase and onboarding to deliverables, cadence, and what we need from you. Digital delivery only.",
  path: "/service-delivery",
});

export default function ServiceDeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
