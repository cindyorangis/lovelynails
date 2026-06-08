import type { Metadata } from "next";
import Link from "next/link";
import { buildTitle, localDescription, siteConfig } from "../site-data";
import {
  buttonPrimary,
  buttonSecondary,
  card,
  cardGrid,
  cn,
  container,
  ctaRow,
  pageStack,
} from "../../lib/styles";

export const metadata: Metadata = {
  title: buildTitle("Contact & Location"),
  description: localDescription("Contact details and location"),
};

export default function ContactLocationPage() {
  const fullAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    name: siteConfig.name,
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
    url: `${siteConfig.baseUrl}/contact-location`,
  };

  return (
    <div className={cn(container, pageStack)}>
      <h1>Contact & Location</h1>
      <p>
        Find Lovely Nails in North York, Ontario and reach us quickly for
        appointments.
      </p>
      <div className={ctaRow}>
        <a href={`tel:${siteConfig.phone}`} className={buttonPrimary}>
          Call Now
        </a>
        <Link href="/booking" className={buttonSecondary}>
          Book Online
        </Link>
        <a
          href={mapDirectionsUrl}
          target="_blank"
          rel="noreferrer"
          className={buttonSecondary}
        >
          Get Directions
        </a>
      </div>
      <div className={cardGrid}>
        <article className={card}>
          <h2>Address</h2>
          <p>{siteConfig.address.streetAddress}</p>
          <p>
            {siteConfig.address.addressLocality},{" "}
            {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
          </p>
        </article>
        <article className={card}>
          <h2>Phone</h2>
          <p>
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
          </p>
          <h2>Email</h2>
          <p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </article>
        <article className={card}>
          <h2>Getting Here</h2>
          <p>
            We are in North York with street-front access. TTC and nearby
            parking options are available.
          </p>
          <p>
            Tip: open directions before your appointment to avoid delays during
            rush hour.
          </p>
        </article>
      </div>
      <section className={card}>
        <h2>Business Hours</h2>
        <ul>
          {siteConfig.hours.map((hour) => (
            <li key={hour}>{hour}</li>
          ))}
        </ul>
      </section>
      <section className={cn(card, "map-card")}>
        <h2>Map</h2>
        <div className="map-frame-wrap">
          <iframe
            title="Lovely Nails North York Map"
            src={mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
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
