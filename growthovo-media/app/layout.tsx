import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growthovo Media — Site-uri Premium, Hosting Gratuit pe Viață",
  description:
    "Construiesc site-uri curate, rapide și profesionale pentru afaceri pregătite să crească. De la 120 EUR, fără abonament lunar, hosting gratuit pe viață.",
  keywords: ["web design", "site web", "Next.js", "Growthovo"],
  openGraph: {
    title: "Growthovo Media — Site-uri Premium, Hosting Gratuit pe Viață",
    description:
      "Site-uri profesionale de la 120 EUR. Hosting gratuit pe viață prin Vercel. Plată unică.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
