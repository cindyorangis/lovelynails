import type { Metadata } from "next";

import "./globals.css";
import { siteConfig } from "./site-data";

import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingBar from "../components/BookingBar";

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
    <html lang="en-CA">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BookingBar />
      </body>
    </html>
  );
}
