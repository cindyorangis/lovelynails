export const siteConfig = {
  name: "Lovely Nails",
  baseUrl: "https://www.lovelynailsnorthyork.ca",
  phone: "+1-416-555-0188",
  email: "hello@lovelynailsnorthyork.ca",
  address: {
    streetAddress: "1234 Yonge Street",
    addressLocality: "North York",
    addressRegion: "ON",
    postalCode: "M2N 5X2",
    addressCountry: "CA",
  },
  geo: {
    latitude: 43.7615,
    longitude: -79.4111,
  },
  hours: [
    "Monday: 10:00 AM - 7:00 PM",
    "Tuesday: 10:00 AM - 7:00 PM",
    "Wednesday: 10:00 AM - 7:00 PM",
    "Thursday: 10:00 AM - 8:00 PM",
    "Friday: 10:00 AM - 8:00 PM",
    "Saturday: 9:00 AM - 6:00 PM",
    "Sunday: 10:00 AM - 5:00 PM",
  ],
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/contact-location", label: "Contact & Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/meet-the-team", label: "Meet the Team" },
  { href: "/blog", label: "Blog" },
];

export function buildTitle(pageTitle: string) {
  return `${pageTitle} | ${siteConfig.name} North York`;
}

export function localDescription(topic: string) {
  return `${topic} at ${siteConfig.name} in North York, Ontario. Expert manicures, pedicures, nail art, and a clean welcoming salon for every style.`;
}

export const blogPosts = [
  {
    slug: "best-manicure-for-your-lifestyle",
    title: "How to Choose the Best Manicure for Your Lifestyle",
    excerpt: "Gel, shellac, or classic polish? Learn which finish lasts best for your day-to-day routine.",
    publishedAt: "2026-05-10",
    content:
      "If your week includes lots of typing, cleaning, or gym time, durability matters. Gel manicures are ideal for long wear, while classic polish is perfect for flexibility and quick color changes.",
  },
  {
    slug: "nail-care-between-appointments",
    title: "5 Nail Care Habits Between Appointments",
    excerpt: "Keep your nails healthy and strong between salon visits with these simple habits.",
    publishedAt: "2026-04-21",
    content:
      "Hydrate cuticles daily, avoid using nails as tools, wear gloves for household chores, and file in one direction. These small habits help your manicure last and protect natural nail strength.",
  },
  {
    slug: "wedding-and-event-nail-tips",
    title: "Wedding and Event Nail Prep Timeline",
    excerpt: "Plan your nail appointment timing so your look is perfect on event day.",
    publishedAt: "2026-03-30",
    content:
      "For weddings and major events, book trial designs 2-3 weeks in advance and your final appointment 1-2 days before the event. Bring outfit photos so colors and accents can match beautifully.",
  },
];