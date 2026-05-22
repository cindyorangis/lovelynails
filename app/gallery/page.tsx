import type { Metadata } from "next";
import { buildTitle, localDescription } from "../site-data";

export const metadata: Metadata = {
  title: buildTitle("Nail Art Gallery"),
  description: localDescription("Gallery of manicure and pedicure work"),
};

const items = [
  "French tip gel set",
  "Soft pink chrome manicure",
  "Floral spring nail art",
  "Classic red polish",
  "Bridal neutral set",
  "Glossy black almond nails",
];

export default function GalleryPage() {
  return (
    <div className="container page-stack">
      <h1>Gallery</h1>
      <p>Explore recent work from our North York nail technicians.</p>
      <div className="gallery-grid">
        {items.map((item) => (
          <article key={item} className="gallery-tile">
            <h2>{item}</h2>
          </article>
        ))}
      </div>
    </div>
  );
}
