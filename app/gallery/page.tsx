import type { Metadata } from "next";
import Image from "next/image";
import { buildTitle, localDescription } from "../site-data";
import { galleryCategories, galleryItems } from "./gallery-data";

export const metadata: Metadata = {
  title: buildTitle("Nail Art Gallery"),
  description: localDescription("Gallery of manicure and pedicure work"),
};

export default function GalleryPage() {
  return (
    <div className="container page-stack">
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
        {galleryItems.map((item, index) => (
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

      <section className="card insta-card">
        <h2>More Looks On Instagram</h2>
        <p>
          See our newest sets, seasonal trends, and daily client
          transformations.
        </p>
        <a
          className="btn btn-secondary"
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
