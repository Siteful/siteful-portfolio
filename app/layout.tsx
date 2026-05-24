import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SITEFUL — Crafting Modern Digital Experiences",
  description:
    "Siteful Studio is a professional web development studio specializing in modern websites for businesses, startups, and UMKM. We build high-performance, beautiful digital experiences.",
  keywords: [
    "web development",
    "digital agency",
    "modern websites",
    "startup",
    "UI/UX design",
    "SITEFUL",
  ],
  openGraph: {
    title: "SITEFUL — Crafting Modern Digital Experiences",
    description:
      "Professional web development studio specializing in modern websites for businesses, startups, and UMKM.",
    type: "website",
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
      className={`${inter.variable} ${manrope.variable} antialiased`}
    >
      <body
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        className="min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
