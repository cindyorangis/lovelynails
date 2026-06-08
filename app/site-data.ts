export const siteConfig = {
  name: "Lovely Nails",
  baseUrl: "https://www.lovely-nails.ca",
  phone: "416-743-1567",
  email: "hello@lovely-nails.ca",
  address: {
    streetAddress: "2938 Islington Ave.",
    addressLocality: "North York",
    addressRegion: "ON",
    postalCode: "M9L 2K5",
    addressCountry: "CA",
  },
  geo: {
    latitude: 43.7615,
    longitude: -79.4111,
  },
  hours: [
    "Sunday: 10:00 AM - 5:00 PM",
    "Monday: 9:30 AM - 7:30 PM",
    "Tuesday: 9:30 AM - 7:30 PM",
    "Wednesday: 9:30 AM - 7:30 PM",
    "Thursday: 9:30 AM - 7:30 PM",
    "Friday: 9:30 AM - 7:30 PM",
    "Saturday: 9:30 AM - 6:30 PM",
  ],
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact-location", label: "Contact & Location" },
  { href: "/booking", label: "Book Now", isCta: true },
];

export const secondaryNav = [
  { href: "/meet-the-team", label: "Meet the Team" },
  { href: "/blog", label: "Blog" },
];

export const mainNav = [...primaryNav, ...secondaryNav];

export type Promotion = {
  id: string;
  isActive: boolean;
  label: string;
  headline: string;
  details: string;
  couponCode: string;
  ctaLabel: string;
  ctaHref: string;
};

export const promotions: Promotion[] = [
  {
    id: "birthday-discount",
    isActive: true,
    label: "Birthday Special",
    headline: "10% off during your birthday week",
    details:
      "Celebrate your special day with 10% off services. Minimum $40 spend required. Valid during your birthday week only. Cannot be combined with any other promotion or offer.",
    couponCode: "BIRTHDAY10",
    ctaLabel: "Use Coupon Code",
    ctaHref: "/booking",
  },
];

export const activePromotions = promotions.filter((promo) => promo.isActive);
export const primaryPromotion = activePromotions[0] ?? null;

export function buildTitle(pageTitle: string) {
  return `${pageTitle} | ${siteConfig.name} North York`;
}

export function localDescription(topic: string) {
  return `${topic} at ${siteConfig.name} in North York, Ontario. Expert manicures, pedicures, nail art, and a clean welcoming salon for every style.`;
}
