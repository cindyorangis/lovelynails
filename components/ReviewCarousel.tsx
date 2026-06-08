// ── Social proof / reviews ───────────────────────────────────── */
// Simple carousel to show up to 3 reviews at a time
import { card, cardGrid, cn, inlineLink, mutedNote } from "../lib/styles";

type Review = {
  id: number | string;
  rating: number;
  text: string;
  author: string;
};

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const maxVisible = 3;
  const visibleReviews = reviews.slice(0, maxVisible);

  return (
    <section aria-label="Client reviews">
      <div className="section-header-row">
        <h2>What clients are saying</h2>
        {reviews.length > maxVisible && (
          <a
            href="https://maps.app.goo.gl/HncsyCXjaVvt3dCq8"
            className={inlineLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            See all reviews →
          </a>
        )}
      </div>
      <div
        className={cn(cardGrid, "reviews-carousel")}
        aria-label={`${visibleReviews.length} featured client reviews`}
      >
        {visibleReviews.map((review: Review) => (
          <blockquote key={review.id} className={cn(card, "card--review")}>
            <div
              className="review__stars"
              aria-label={`${review.rating} out of 5 stars`}
            >
              {"★".repeat(review.rating)}
            </div>
            <p className="review__text">{review.text}</p>
            <footer className="review__author">— {review.author}</footer>
          </blockquote>
        ))}
      </div>
      {reviews.length > maxVisible && (
        <div
          className="reviews-pagination"
          style={{ textAlign: "center", marginTop: "1.5rem" }}
        >
          <span className={mutedNote}>
            Showing up to {maxVisible} of {reviews.length} reviews. View more on{" "}
            <a
              href="https://maps.app.goo.gl/HncsyCXjaVvt3dCq8"
              className={inlineLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
          </span>
        </div>
      )}
    </section>
  );
}
