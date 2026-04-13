import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pasadena Construction & Interiors | Building Pasadena Since 1971",
  description:
    "Family-owned construction, renovation, and interior design firm serving Pasadena and Southern California for over 54 years. Trusted by Ritz-Carlton, UCLA, Edwards Air Force Base, and more.",
  keywords: [
    "Pasadena construction",
    "Pasadena interior design",
    "Pasadena renovation",
    "commercial construction Pasadena",
    "residential remodeling Pasadena",
    "historic restoration",
    "eco-friendly construction",
  ],
  authors: [{ name: "Pasadena Construction & Interiors" }],
  openGraph: {
    title: "Pasadena Construction & Interiors | Since 1971",
    description:
      "Full-service construction, renovation, and interior design. Family-owned in Pasadena since 1971.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}