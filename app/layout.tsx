import type { Metadata } from "next";
import Link from "next/link";
import PromoBanner from "./components/promo-banner";
import "./globals.css";
import { mainNav, siteConfig } from "./site-data";

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
          <div className="container nav-wrap">
            <Link href="/" className="brand">
              Lovely Nails
            </Link>
            <nav aria-label="Main navigation" className="main-nav">
              {mainNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="container promo-shell">
            <PromoBanner compact />
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <h2>Lovely Nails</h2>
              <p>
                Nail salon in North York, Ontario focused on clean care and
                beautiful results.
              </p>
            </div>
            <div>
              <h2>Visit Us</h2>
              <p>
                {siteConfig.address.streetAddress},{" "}
                {siteConfig.address.addressLocality},{" "}
                {siteConfig.address.addressRegion}{" "}
                {siteConfig.address.postalCode}
              </p>
            </div>
            <div>
              <h2>Contact</h2>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
