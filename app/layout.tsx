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
    default: "NOREN — Strategic Growth & Audience Infrastructure",
    template: "%s · NOREN",
  },
  description:
    "NOREN is a strategic growth agency helping founders, creators and modern brands build audience and distribution infrastructure — brand positioning, content systems, strategic distribution and growth intelligence.",
  keywords: [
    "strategic growth agency",
    "growth infrastructure",
    "audience development",
    "strategic distribution",
    "brand positioning",
    "content systems",
    "community development",
    "growth intelligence",
  ],
  applicationName: "NOREN",
  authors: [{ name: "NOREN" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOREN — Strategic Growth & Audience Infrastructure",
    description:
      "NOREN is a strategic growth agency helping founders, creators and modern brands build audience and distribution infrastructure — positioning, content systems, strategic distribution and growth intelligence.",
    url: "/",
    siteName: "NOREN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOREN — Strategic Growth & Audience Infrastructure",
    description:
      "NOREN is a strategic growth agency helping founders, creators and modern brands build audience and distribution infrastructure — positioning, content systems, strategic distribution and growth intelligence.",
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
