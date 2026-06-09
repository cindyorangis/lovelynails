import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { cn, container } from "../lib/styles";
import { primaryNav, siteConfig } from "./site-data";

import Footer from "../components/Footer";

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
        <header className="site-header">
          <div className={cn(container, "nav-wrap")}>
            <Link href="/" className="brand">
              Lovely Nails
            </Link>
            <nav aria-label="Main navigation" className="main-nav">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={item.isCta ? "nav-cta" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
