import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { cn, container } from "../lib/styles";
import { primaryNav, secondaryNav, siteConfig } from "./site-data";

// Get the current day of the week
function getTodayDay(): string {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}

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
  const today = getTodayDay();

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
        <footer className="site-footer">
          <div className={cn(container, "footer-grid")}>
            <div>
              <h2>Business Hours</h2>
              <ul>
                {siteConfig.hours.map((hour) => {
                  const isToday = hour.includes(today);
                  return (
                    <li
                      key={hour}
                      className={isToday ? "hour-today" : ""}
                      aria-current={isToday ? "date" : undefined}
                    >
                      {hour}
                    </li>
                  );
                })}
              </ul>
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
            <div>
              <h2>More</h2>
              <ul className="footer-links">
                {secondaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
