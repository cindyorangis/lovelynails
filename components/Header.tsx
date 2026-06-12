"use client";

import Link from "next/link";
import { cn, container } from "../lib/styles";
import { primaryNav } from "../app/site-data";

export default function Header() {
  return (
    <header className="site-header">
      <div className={cn(container, "nav-wrap")}>
        {/*
          The brand wordmark uses Playfair Display italic at 700 weight.
          font-style: italic is intentional — it gives the wordmark a
          calligraphic, boutique feel that plain upright serif doesn't.
        */}
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
  );
}
