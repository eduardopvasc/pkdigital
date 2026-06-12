import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// High-contrast editorial serif — the PK Digital display face.
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
  metadataBase: new URL("https://pkdigitalllc.com"),
  title: {
    default: "PK Digital LLC — Growth-Focused Social Media Agency",
    template: "%s · PK Digital",
  },
  description:
    "PK Digital LLC is a strategy-led social media agency helping brands, businesses, and founders build a stronger social presence through content strategy, creative direction, community management, and organic growth.",
  keywords: [
    "social media agency",
    "social media strategy",
    "content strategy",
    "creative direction",
    "community management",
    "organic growth",
    "personal branding",
    "social media management",
  ],
  applicationName: "PK Digital",
  authors: [{ name: "PK Digital LLC" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PK Digital LLC — Growth-Focused Social Media Agency",
    description:
      "Strategy-led social media agency for brands, businesses, and founders — social media strategy, content, creative direction, community, and organic growth.",
    url: "/",
    siteName: "PK Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PK Digital LLC — Growth-Focused Social Media Agency",
    description:
      "Strategy-led social media agency for brands, businesses, and founders — social media strategy, content, creative direction, community, and organic growth.",
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
