import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growthovo Media — Premium Websites, Free Hosting Forever",
  description:
    "I build clean, fast, and professional websites for businesses ready to grow. Starting from €150, no monthly fees, free hosting forever.",
  keywords: ["web design", "website", "Next.js", "Growthovo", "Romania"],
  openGraph: {
    title: "Growthovo Media — Premium Websites, Free Hosting Forever",
    description:
      "Professional websites from €150. Free hosting forever via Vercel. One-time payment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
