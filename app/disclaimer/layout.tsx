import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer",
  description:
    "The terms governing your use of the pkdigitalllc.com website and the information it contains, including limits on guarantees and liability.",
  path: "/disclaimer",
});

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
