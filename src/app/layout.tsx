import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://remedyengine.com"),
  title: "RemedyEngine — The engine that runs your clinic",
  description:
    "RemedyEngine automates your whole clinic — WhatsApp booking and reminders, doctor workflows, pharmacy, lab, payments, marketing, and live reports. Paper and manual work goes digital, so your clinic runs smoothly with a smaller team.",
  icons: {
    icon: "/images/favicon-mark.png",
    apple: "/images/favicon-mark.png",
  },
  openGraph: {
    title: "RemedyEngine — The engine that runs your clinic",
    description:
      "Automate the front desk, run the whole clinic, grow with marketing, and monitor everything — one connected engine, WhatsApp-first.",
    url: "https://remedyengine.com",
    siteName: "RemedyEngine",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RemedyEngine — a WhatsApp message becoming a clinical record",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RemedyEngine — The engine that runs your clinic",
    description:
      "Automate the front desk, run the whole clinic, grow with marketing, and monitor everything — one connected engine.",
    images: ["/images/og-image.png"],
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
      className={`${sourceSerif.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper-50 text-ink-900 font-sans">
        {children}
      </body>
    </html>
  );
}
