import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

import "./globals.css";
import { siteConfig } from "./site-data";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingBar from "../components/BookingBar";

// next/font/google self-hosts the font at build time — no external
// request at runtime, no layout shift, automatic font-display:swap.
const playfair = Playfair_Display({
  subsets: ["latin"],
  // 400 for body-serif moments (blockquotes, promos)
  // 600 for h2/h3 headings
  // 700 for h1 and the brand wordmark
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair", // exposed as a CSS custom property
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Lovely Nails | Nail Salon in North York, Ontario",
    template: "%s",
  },
  description:
    "Lovely Nails is a trusted nail salon in North York, Ontario offering manicures, pedicures, nail art, and spa services in a clean, welcoming space.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lovely Nails | Nail Salon in North York, Ontario",
    description:
      "Book professional manicures, pedicures, and nail art at Lovely Nails in North York.",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // playfair.variable adds --font-playfair to the <html> element so
    // any CSS on the page can reference it via var(--font-playfair).
    <html lang="en-CA" className={playfair.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BookingBar />
      </body>
    </html>
  );
}
