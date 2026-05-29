import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  activePromotions,
  buildTitle,
  localDescription,
  siteConfig,
} from "./site-data";
import { serviceCategories } from "./services/services-data";

import ReviewsCarousel from "../components/ReviewCarousel";

export const metadata: Metadata = {
  title: buildTitle("Nail Salon in North York, Ontario"),
  description: localDescription("Professional nail salon services"),
};

const featureCards = [
  {
    id: "services",
    icon: "✦",
    title: "Full Service Menu",
    body: "Gel, shellac, acrylic, dip powder, spa pedicures, waxing, facials, and bridal packages — all under one roof.",
    href: "/services",
    cta: "See all services",
  },
  {
    id: "hygiene",
    icon: "◈",
    title: "Clean-First Standards",
    body: "Single-use files and buffers, autoclaved metal tools, fresh basin liners every client. We don't cut corners on hygiene.",
    href: "/booking",
    cta: "Book now",
  },
  {
    id: "location",
    icon: "◉",
    title: "Easy to Get To",
    body: "Located on Islington Ave in North York. Street parking available and a short walk from the 37 Islington bus.",
    href: "/contact-location",
    cta: "Get directions",
  },
];

// Pull a few representative reviews — move these to site-data if you want
// to manage them centrally or fetch from Google Places API later.
const featuredReviews = [
  {
    id: "r1",
    author: "Julie Santopolo",
    rating: 5,
    text: "I have been coming here for a couple of years now. I am very pleased with the service that nail technique provides. Always on time and done in one hour for my refill and shellac. The value for the service is great. Will keep coming back to Lovely 💅",
  },
  {
    id: "r2",
    author: "Alisha Makhija",
    rating: 5,
    text: "This is my new favourite place to go for my nails. The staff pays attention to details and takes their time to give you the exact nails you want. They are very polite and patient as I took so long to choose the color. Absolutely in love with my new nails 😍 Thank You.",
  },
  {
    id: "r3",
    author: "Evy Grace Yap",
    rating: 5,
    text: "I had an amazing afternoon! It's very close to where I live, and it's the best nail spa in my area so far. The staff is very approachable, and you can tell they really know what they're doing!",
  },
  {
    id: "r4",
    author: "Michi O",
    rating: 5,
    text: "The owner did my nails and another staff member did my toes. I don't live around here, I just looked at the reviews from Google and decided to do my nails because my car was taking about 3 hours to get fixed. I am so happy and pleased with the service, the quality and hospitality especially from the owner. She is so nice and sweet. Thank you so much. 💕",
  },
  {
    id: "r5",
    author: "Elysse Powell",
    rating: 5,
    text: "Amazing experience. Not only was my pedi/mani perfect, but the atmosphere was so fun & friendly! Best experience I've had in a long time. Can't wait to come back!",
  },
  {
    id: "r6",
    author: "Padmanie C",
    rating: 5,
    text: "The service provided here is absolutely outstanding. Julie is an absolute sweetheart! She pays attention to detail and has a great personality. Everyone is so welcoming and kind. The atmosphere is nice and cozy. The work they do is amazing as they take their time with their work! I'd definitely recommend it here! 10/10 - Paddy",
  },
  {
    id: "r7",
    author: "Kiley Pierson",
    rating: 5,
    text: "Lovely Nails is such a great place! The salon is always clean, relaxing, and has such a welcoming atmosphere. Kim and Helen are truly amazing. They are both so friendly, professional, and incredibly talented at what they do. They take their time, pay attention to every detail, and make sure your nails come out perfect. You can tell they really care about their clients and take pride in their work. I'm always so happy with my nails and get so many compliments. I highly recommend Lovely Nails you won't be disappointed! 💅✨",
  },
  {
    id: "r8",
    author: "Sruthy Krishnan",
    rating: 5,
    text: "I have become a regular here now, and every time I visit I receive amazing service. All the ladies working here are very welcoming and truly wonderful. They always take great care of me and make sure I am happy with the results. Definitely the best nail salon I have visited so far. Highly recommend!",
  },
];

function getServicePrice(categoryTitle: string, serviceName: string) {
  return serviceCategories
    .find((category) => category.title === categoryTitle)
    ?.items.find((item) => item.name === serviceName)?.price;
}

const priceAnchors = [
  {
    label: "Manicures",
    price: getServicePrice("Manicure", "Basic Manicure"),
  },
  {
    label: "Pedicures",
    price: getServicePrice("Pedicure", "Pedicure Regular"),
  },
  {
    label: "Nail art",
    price: getServicePrice("Artificial Nail", "Nail Art"),
  },
].filter((item): item is { label: string; price: string } =>
  Boolean(item.price),
);

export default function HomePage() {
  const fullAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

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
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="hero hero--with-image">
        <div className="hero__text">
          <p className="eyebrow">North York Nail Salon</p>
          <h1>Lovely Nails in North York, Ontario</h1>
          <p>
            Expert manicures, pedicures, and custom nail art — with a
            clean&#8209;first approach and results that actually last.
          </p>
          <div className="cta-row">
            <Link href="/booking" className="btn btn-primary">
              Book Appointment
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View Services
            </Link>
          </div>
        </div>

        {/*
          Replace the src below with your best gallery photo.
          Suggested: a close-up of a recent nail set, ideally landscape-ish
          and well-lit. Dimensions: 1200×800 px minimum.
          Place the file at /public/hero-nails.webp
        */}
        <div className="hero__image-wrap">
          <Image
            src="/hero-nails.webp"
            alt="Hero image at Lovely Nails in North York"
            fill
            priority
            className="hero__image"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── Active promotions ────────────────────────────────────────── */}
      {activePromotions.length > 0 && (
        <section aria-label="Current promotions" className="promotions-section">
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Current Offers
          </h2>
          <div className="promo-grid" data-count={activePromotions.length}>
            {activePromotions.map((promo) => (
              <article key={promo.id} className="card promo-card">
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

      {/* ── Feature cards ────────────────────────────────────────────── */}
      <section aria-label="Why Lovely Nails">
        <div className="card-grid">
          {featureCards.map((f) => (
            <article key={f.id} className="card card--feature">
              <span className="card__icon" aria-hidden="true">
                {f.icon}
              </span>
              <h2>{f.title}</h2>
              <p>{f.body}</p>
              <Link href={f.href} className="inline-link">
                {f.cta} →
              </Link>
            </article>
          ))}
        </div>
        <div className="price-anchor-bar" aria-label="Starting prices">
          <p className="price-anchor-bar__intro">Starting prices</p>
          <div className="price-anchor-list">
            {priceAnchors.map((item) => (
              <p key={item.label} className="price-anchor">
                <span>{item.label}</span>
                <strong>from {item.price}</strong>
              </p>
            ))}
          </div>
          <Link href="/services" className="inline-link">
            Full price list
          </Link>
        </div>
      </section>

      {/* ── Social proof / reviews ───────────────────────────────────── */}
      {featuredReviews.length > 0 && (
        <ReviewsCarousel reviews={featuredReviews} />
      )}

      {/* ── Visit us (map embed + contact) ──────────────────────────── */}
      <section aria-label="Location and contact">
        <h2>Visit us</h2>
        <div className="location-grid">
          <div className="location-grid__map">
            <iframe
              title="Lovely Nails location on Google Maps"
              src={mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="location-grid__details">
            <div className="location-detail">
              <h3>Address</h3>
              <p>
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.addressLocality},{" "}
                {siteConfig.address.addressRegion}{" "}
                {siteConfig.address.postalCode}
              </p>
              <a
                href={mapDirectionsUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </div>
            <div className="location-detail">
              <h3>Phone</h3>
              <a href={`tel:${siteConfig.phone}`} className="inline-link">
                {siteConfig.phone}
              </a>
            </div>
            <div className="location-detail">
              <h3>Email</h3>
              <a href={`mailto:${siteConfig.email}`} className="inline-link">
                {siteConfig.email}
              </a>
            </div>
            <div className="location-detail">
              <h3>Walk-ins</h3>
              <p>
                Welcome based on availability. Pre-booking recommended for
                evenings and weekends.
              </p>
            </div>
          </div>
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
