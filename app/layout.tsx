import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  title: "SITEFUL — Building Digital Presence That Drives Growth",
  description:
    "Siteful is a professional web development studio helping businesses, startups, and UMKM build modern, fast, and impactful websites that convert visitors into customers.",
  keywords: [
    "web development",
    "digital agency",
    "modern websites",
    "startup",
    "UI/UX design",
    "SITEFUL",
    "UMKM",
  ],
  openGraph: {
    title: "SITEFUL — Building Digital Presence That Drives Growth",
    description:
      "Professional web development studio helping businesses build modern, fast, and impactful websites.",
    type: "website",
  },
};

// Inline script to prevent FOUC (Flash of Unstyled Content)
// Runs before React hydration to set the correct theme immediately
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('siteful-theme') || 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${manrope.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        className="min-h-screen"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
