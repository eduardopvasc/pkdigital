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
  // `.portal` scopes the private-client champagne accent tokens.
  return <div className="portal">{children}</div>;
}
