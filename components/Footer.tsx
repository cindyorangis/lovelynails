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
          <p>
            {siteConfig.address.streetAddress},{" "}
            {siteConfig.address.addressLocality},{" "}
            {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
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
  );
}
