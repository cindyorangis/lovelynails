import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  activePromotions,
  buildTitle,
  localDescription,
  siteConfig,
} from "./site-data";
import { serviceGalleryItems } from "./gallery/gallery-data";
import { serviceCategories } from "./services/services-data";
import {
  buttonPrimary,
  buttonSecondary,
  card,
  cardGrid,
  cn,
  container,
  ctaRow,
  inlineLink,
  mutedNote,
  pageStack,
} from "../lib/styles";

import ReviewsCarousel from "../components/ReviewCarousel";

type FeatureIconName = "sparkle" | "shield" | "map-pin";

export const metadata: Metadata = {
  title: buildTitle("Nail Salon in North York, Ontario"),
  description: localDescription("Professional nail salon services"),
};

const featureCards = [
  {
    id: "services",
    iconName: "sparkle" satisfies FeatureIconName,
    title: "Full Service Menu",
    body: "Gel, shellac, acrylic, dip powder, spa pedicures, waxing, facials, and bridal packages — all under one roof.",
    href: "/services",
    cta: "See all services",
  },
  {
    id: "hygiene",
    iconName: "shield" satisfies FeatureIconName,
    title: "Clean-First Standards",
    body: "Single-use files and buffers, autoclaved metal tools, fresh basin liners every client. We don't cut corners on hygiene.",
    href: "/booking",
    cta: "Book now",
  },
  {
    id: "location",
    iconName: "map-pin" satisfies FeatureIconName,
    title: "Easy to Get To",
    body: "Located on Islington Ave in North York. Street parking available and a short walk from the 37 Islington bus.",
    href: "/contact-location",
    cta: "Get directions",
  },
] as const;

function FeatureIcon({ name }: { name: FeatureIconName }) {
  if (name === "sparkle") {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 2.75 13.72 8.8 19.25 12 13.72 15.2 12 21.25 10.28 15.2 4.75 12 10.28 8.8 12 2.75Z" />
        <path d="M5.25 3.75 5.9 6.1 8.25 6.75 5.9 7.4 5.25 9.75 4.6 7.4 2.25 6.75 4.6 6.1 5.25 3.75Z" />
        <path d="M19 4.75 19.45 6.3 21 6.75 19.45 7.2 19 8.75 18.55 7.2 17 6.75 18.55 6.3 19 4.75Z" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 2.75 19 5.6V11.1C19 15.55 16.22 19.65 12 21.25 7.78 19.65 5 15.55 5 11.1V5.6L12 2.75Z" />
        <path d="M8.75 11.6 10.85 13.7 15.55 8.95" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M12 21.25S5.75 15.15 5.75 9.65A6.25 6.25 0 0 1 12 3.75a6.25 6.25 0 0 1 6.25 5.9C18.25 15.15 12 21.25 12 21.25Z" />
      <path d="M12 12.15a2.35 2.35 0 1 0 0-4.7 2.35 2.35 0 0 0 0 4.7Z" />
    </svg>
  );
}

const homepageGallerySources = new Set([
  "/gallery/3.jpg",
  "/gallery/15.jpg",
  "/gallery/18.jpg",
  "/gallery/20.jpg",
  "/gallery/22.jpg",
  "/gallery/24.jpg",
]);

const homepageGalleryItems = serviceGalleryItems.filter((item) =>
  homepageGallerySources.has(item.src),
);

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
    <div className={cn(container, pageStack)}>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="hero hero--with-image">
        <div className="hero__text">
          <p className="eyebrow">North York Nail Salon</p>
          <h1>Lovely Nails in North York, Ontario</h1>
          <p>
            Expert manicures, pedicures, and custom nail art — with a
            clean&#8209;first approach and results that actually last.
          </p>
          <div className={ctaRow}>
            <Link href="/booking" className={buttonPrimary}>
              Book Appointment
            </Link>
            <Link href="/services" className={buttonSecondary}>
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
      <section className="home-gallery-section" aria-label="Featured nail work">
        <div className="section-header-row">
          <h2>Recent Nail Looks</h2>
          <Link href="/gallery" className={inlineLink}>
            View gallery
          </Link>
        </div>
        <div className="home-gallery-grid">
          {homepageGalleryItems.map((item, index) => (
            <div key={item.src} className="home-gallery-tile">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 680px) 46vw, (max-width: 1024px) 30vw, 320px"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </section>

      {activePromotions.length > 0 && (
        <section aria-label="Current promotions" className="promotions-section">
          <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Current Offers
          </h2>
          <div className="promo-grid" data-count={activePromotions.length}>
            {activePromotions.map((promo) => (
              <article key={promo.id} className={cn(card, "promo-card")}>
                <p className="eyebrow">{promo.label}</p>
                <h3>{promo.headline}</h3>
                <p>{promo.details}</p>
                <p className={mutedNote}>
                  Code: <strong>{promo.couponCode}</strong>
                </p>
                <Link
                  href={promo.ctaHref}
                  className={cn(buttonPrimary, "mt-auto")}
                >
                  {promo.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── Feature cards ────────────────────────────────────────────── */}
      <section aria-label="Why Lovely Nails">
        <div className={cardGrid}>
          {featureCards.map((f) => (
            <article key={f.id} className={cn(card, "card--feature")}>
              <span className="card__icon" aria-hidden="true">
                <FeatureIcon name={f.iconName} />
              </span>
              <h2>{f.title}</h2>
              <p>{f.body}</p>
              <Link href={f.href} className={inlineLink}>
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
          <Link href="/services" className={inlineLink}>
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
                className={buttonSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions
              </a>
            </div>
            <div className="location-detail">
              <h3>Phone</h3>
              <a href={`tel:${siteConfig.phone}`} className={inlineLink}>
                {siteConfig.phone}
              </a>
            </div>
            <div className="location-detail">
              <h3>Email</h3>
              <a href={`mailto:${siteConfig.email}`} className={inlineLink}>
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
