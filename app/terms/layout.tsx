import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description:
    "The general terms on which NOREN Agency (operated by PK DIGITAL LLC) provides its services, including scope, fees, intellectual property, and liability.",
  path: "/terms",
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
