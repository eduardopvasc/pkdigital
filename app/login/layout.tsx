import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMeta({
    title: "Client Login",
    description:
      "Sign in to the Noren Agency client portal. Portal access is provided by invitation to active clients.",
    path: "/login",
  }),
  robots: { index: false, follow: false },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
