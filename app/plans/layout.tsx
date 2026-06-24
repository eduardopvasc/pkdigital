import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Plans",
  description:
    "Clear engagement tiers for structured growth — Foundation, Growth, Scale and Operator. Listed in GBP. Custom scopes available on request.",
  path: "/plans",
});

export default function PlansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
