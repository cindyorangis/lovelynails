"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BookingBar() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The sentinel sits at the bottom of the hero section in the DOM.
    // We attach it to document.body here so it doesn't need to be
    // threaded through page.tsx — it's purely position-based.
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bar is visible when sentinel has scrolled out of the viewport
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/*
        Sentinel: a zero-height element placed at a fixed pixel offset from
        the top of the page. When it exits the viewport the bar appears.
        400px ≈ bottom of the hero on most screens; adjust if needed.
      */}
      <div
        ref={sentinelRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 400,
          left: 0,
          height: 1,
          width: 1,
          pointerEvents: "none",
        }}
      />

      <div
        className="booking-bar"
        aria-hidden={!visible}
        data-visible={visible}
        role="complementary"
        aria-label="Quick booking"
      >
        <div className="booking-bar__inner">
          <div className="booking-bar__text">
            <span className="booking-bar__name">Lovely Nails</span>
            <span className="booking-bar__tagline">
              North York · Islington Ave
            </span>
          </div>
          <div className="booking-bar__actions">
            <a href="tel:416-743-1567" className="booking-bar__phone">
              416&#8209;743&#8209;1567
            </a>
            <Link href="/booking" className="booking-bar__cta">
              Book now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
