import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Company Information",
  description:
    "NOREN Agency corporate details — operating entity (PK DIGITAL LLC), business and registered addresses, phone, email, and business hours.",
  path: "/company-information",
});

export default function CompanyInformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
