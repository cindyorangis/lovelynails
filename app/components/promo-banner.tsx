import Link from "next/link";
import { primaryPromotion } from "../site-data";

type PromoBannerProps = {
  compact?: boolean;
};

export default function PromoBanner({ compact = false }: PromoBannerProps) {
  if (!primaryPromotion) return null;

  return (
    <section
      className={compact ? "promo promo-compact" : "promo"}
      aria-label="Current promotion"
    >
      <p className="promo-label">{primaryPromotion.label}</p>
      <p className="promo-headline">{primaryPromotion.headline}</p>
      <p className="promo-details">
        {primaryPromotion.details} Code:{" "}
        <strong>{primaryPromotion.couponCode}</strong>
      </p>
      <Link className="btn btn-primary" href={primaryPromotion.ctaHref}>
        {primaryPromotion.ctaLabel}
      </Link>
    </section>
  );
}
