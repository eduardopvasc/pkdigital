import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// High-contrast editorial serif — the NOREN Agency display face.
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
});

const mono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://norenagency.com"),
  title: {
    default: "NOREN Agency — Strategic Social Media & Content Systems",
    template: "%s · NOREN Agency",
  },
  description:
    "NOREN Agency is a strategic social media agency focused on content systems, audience development, community management and long-term brand growth.",
  keywords: [
    "social media agency",
    "social media strategy",
    "content strategy",
    "content production",
    "creative direction",
    "community management",
    "organic growth",
    "audience development",
    "analytics and reporting",
  ],
  applicationName: "NOREN Agency",
  authors: [{ name: "NOREN Agency" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOREN Agency — Strategic Social Media & Content Systems",
    description:
      "NOREN Agency is a strategic social media agency focused on content systems, audience development, community management and long-term brand growth.",
    url: "/",
    siteName: "NOREN Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOREN Agency — Strategic Social Media & Content Systems",
    description:
      "NOREN Agency is a strategic social media agency focused on content systems, audience development, community management and long-term brand growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
