import type { Metadata } from "next";
import Link from "next/link";
import {
  activePromotions,
  buildTitle,
  localDescription,
  siteConfig,
} from "./site-data";

export const metadata: Metadata = {
  title: buildTitle("Nail Salon in North York, Ontario"),
  description: localDescription("Professional nail salon services"),
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: siteConfig.name,
    image: `${siteConfig.baseUrl}/opengraph-image.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    url: siteConfig.baseUrl,
    areaServed: ["North York", "Toronto", "Ontario"],
    priceRange: "$$",
  };

  return (
    <div className="container page-stack">
      <section className="hero">
        <p className="eyebrow">North York Nail Salon</p>
        <h1>Lovely Nails in North York, Ontario</h1>
        <p>
          Expert manicures, pedicures, and custom nail art with a strong focus
          on hygiene, comfort, and long-lasting results.
        </p>
        <div className="cta-row">
          <Link href="/booking" className="btn btn-primary">
            Book Appointment
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View Services
          </Link>
        </div>
      </section>

      {activePromotions.length > 0 && (
        <section aria-label="Current promotions">
          <h2>Current Offers</h2>
          <div className="card-grid">
            {activePromotions.map((promo) => (
              <article key={promo.id} className="card">
                <p className="eyebrow">{promo.label}</p>
                <h3>{promo.headline}</h3>
                <p>{promo.details}</p>
                <p className="muted-note">
                  Code: <strong>{promo.couponCode}</strong>
                </p>
                <Link href={promo.ctaHref} className="btn btn-primary">
                  {promo.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="card-grid">
        <article className="card">
          <h2>Services</h2>
          <p>Gel, shellac, classic manicures, spa pedicures, and nail art.</p>
        </article>
        <article className="card">
          <h2>Location</h2>
          <p>Conveniently located in North York with easy TTC access.</p>
        </article>
        <article className="card">
          <h2>Clean Standards</h2>
          <p>
            Sanitized tools, fresh liners, and detail-focused care every visit.
          </p>
        </article>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </div>
  );
}
