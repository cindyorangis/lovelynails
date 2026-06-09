"use client";

import Link from "next/link";
import { cn, container } from "../lib/styles";
import { secondaryNav, siteConfig } from "../app/site-data";

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

export default function Footer() {
  const today = getTodayDay();

  return (
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
          <a
            href={siteConfig.address.streetAddress}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.address.streetAddress},{" "}
            {siteConfig.address.addressLocality},{" "}
            {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
          </a>
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul className="footer-links">
            {secondaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cn(container, "footer-bottom")}>
        <p>© {new Date().getFullYear()} Lovely Nails. All rights reserved.</p>
      </div>
    </footer>
  );
}
