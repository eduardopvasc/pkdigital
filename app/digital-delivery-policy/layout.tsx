import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Digital Delivery Policy",
  description:
    "How NOREN Agency delivers its services digitally — no physical product or shipping, when delivery is made, and how timing depends on scope.",
  path: "/digital-delivery-policy",
});

export default function DigitalDeliveryPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
