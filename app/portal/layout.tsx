import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Client Portal",
    description:
      "The Noren Agency client portal. Client workspaces are provisioned by invitation for active clients.",
    path: "/portal",
  }),
  robots: { index: false, follow: false },
};

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // `.portal` wrapper for the private client area (NOREN steel-blue system).
  return <div className="portal">{children}</div>;
}
