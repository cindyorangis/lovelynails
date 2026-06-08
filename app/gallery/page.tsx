import type { Metadata } from "next";
import Image from "next/image";
import { buildTitle, localDescription } from "../site-data";
import {
  galleryCategories,
  serviceGalleryItems,
  shopGalleryItems,
} from "./gallery-data";
import {
  buttonSecondary,
  card,
  cn,
  container,
  pageStack,
} from "../../lib/styles";

export const metadata: Metadata = {
  title: buildTitle("Nail Art Gallery"),
  description: localDescription("Gallery of manicure and pedicure work"),
};

export default function GalleryPage() {
  return (
    <div className={cn(container, pageStack)}>
      <h1>Gallery</h1>
      <p>
        Real styles and finishes from our recent work in North York. Browse
        ideas before your next booking.
      </p>

      <div className="gallery-filters" aria-label="Gallery categories">
        {galleryCategories.map((category) => (
          <span key={category} className="gallery-chip">
            {category}
          </span>
        ))}
      </div>

      <div className="gallery-grid">
        {serviceGalleryItems.map((item, index) => (
          <article key={item.src} className="gallery-card">
            <div className="gallery-image-wrap">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={750}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
                priority={index < 4}
              />
            </div>
            <div className="gallery-meta">
              <h2>{item.title}</h2>
              <p>{item.category}</p>
              <p className="gallery-desc">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {shopGalleryItems.length > 0 && (
        <section className="shop-gallery-section" aria-label="Salon photos">
          <div>
            <h2>Inside & Outside Lovely Nails</h2>
            <p>
              A quick look at the salon space and storefront before your visit.
            </p>
          </div>
          <div className="shop-gallery-grid">
            {shopGalleryItems.map((item) => (
              <article
                key={item.src}
                className="gallery-card shop-gallery-card"
              >
                <div className="shop-gallery-image-wrap">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={900}
                    height={675}
                    sizes="(max-width: 680px) 92vw, 50vw"
                  />
                </div>
                <div className="gallery-meta">
                  <h3>{item.title}</h3>
                  <p className="gallery-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className={cn(card, "insta-card")}>
        <h2>More Looks On Instagram</h2>
        <p>
          See our newest sets, seasonal trends, and daily client
          transformations.
        </p>
        <a
          className={buttonSecondary}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          Follow on Instagram
        </a>
      </section>
    </div>
  );
}
