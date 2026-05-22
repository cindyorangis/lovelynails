import Link from "next/link";
import { promotion } from "../site-data";

type PromoBannerProps = {
  compact?: boolean;
};

export default function PromoBanner({ compact = false }: PromoBannerProps) {
  if (!promotion.isActive) return null;

  return (
    <section
      className={compact ? "promo promo-compact" : "promo"}
      aria-label="Current promotion"
    >
      <p className="promo-label">{promotion.label}</p>
      <p className="promo-headline">{promotion.headline}</p>
      <p className="promo-details">{promotion.details}</p>
      <Link className="btn btn-primary" href={promotion.ctaHref}>
        {promotion.ctaLabel}
      </Link>
    </section>
  );
}
