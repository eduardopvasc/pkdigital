import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Talk to PK Digital LLC about your brand. Request a proposal or reach us directly at contact@pkdigitalllc.com or +1 (954) 676-1050.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
