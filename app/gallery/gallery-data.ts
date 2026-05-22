export type GalleryEditableItem = {
  file: `${number}.jpg`;
  title: string;
  category: string;
  alt?: string;
};

// Fill these in when ready. Keep `file` as-is, then edit `title` and `category`.
export const galleryEditableItems: GalleryEditableItem[] = [
  {
    file: "1.jpg",
    title: "Stiletto / Glitter Accent",
    category:
      "Sharp, stiletto-shaped nails with a mix of matte white and fine silver glitter accents.",
  },
  {
    file: "2.jpg",
    title:
      "Almond-shaped nails featuring intricate blue floral hand-painting and small 3D pearl embellishments.",
    category: "Floral Art / Embellished",
  },
  {
    file: "3.jpg",
    title:
      "Square-shaped nails with a traditional French tip, featuring a mix of solid white and silver glitter tips.",
    category: "French Tip / Glitter Ombré",
  },
  {
    file: "4.jpg",
    title: "Nude & Gold Swirl Art",
    category:
      "Almond-shaped nude base featuring elegant white swoops and delicate gold glitter line work.",
  },
  {
    file: "5.jpg",
    title: "Emerald Marble Inlay",
    category:
      "A high-contrast mix of deep emerald green solid nails and marble-effect accent nails.",
  },
  {
    file: "6.jpg",
    title: "Minimalist Micro-Studs",
    category:
      "A soft, milky nude almond base accented with tiny, minimalist gold micro-studs or beads.",
  },
  {
    file: "7.jpg",
    title: "Gold Starry Gradient",
    category:
      "Champagne gold glitter mixed with star-shaped sequins on a nude-to-gold gradient base.",
  },
  {
    file: "8.jpg",
    title: "Pink Shimmer Ombré",
    category:
      'Soft pink "boomer" or ombré style with a fine iridescent shimmer overlay.',
  },
  {
    file: "9.jpg",
    title: "Cherry Blossom Art",
    category:
      "Detailed hand-painted cherry blossom branches on a milky white translucent base.",
  },
  {
    file: "10.jpg",
    title: "Gold Metallic French",
    category:
      'Square-shaped milky nude nails with a delicate metallic gold "cuff" or French line at the tip.',
  },
  {
    file: "11.jpg",
    title: "High-Gloss Nude Stiletto",
    category:
      "Classic stiletto nails in a clean, high-gloss solid nude/beige polish.",
  },
  {
    file: "12.jpg",
    title:
      "Square nails in a pastel mix of pink and blue, featuring a diamond-grid pattern with silver linework.",
    category: "Pastel Geometric Grid",
  },
  {
    file: "13.jpg",
    title: "Monochrome Heart Matte",
    category:
      'A high-contrast "His & Hers" style with one hand in matte black and the other in matte white with a minimalist heart detail.',
  },
  {
    file: "14.jpg",
    title: "Burgundy & Rose Gold Foil",
    category:
      "Long coffin-shaped nails in deep burgundy and rose-gold glitter with foil accents and a jelly-gloss finish.",
  },
  {
    file: "15.jpg",
    title: "French Tip Butterfly Luxe",
    category:
      "Long tapered square nails with a classic white French tip and an intricate 3D butterfly/rhinestone accent.",
  },
  {
    file: "16.jpg",
    title: "Full Leg Waxing",
    category: "Smooth hair removal services.",
  },
  {
    file: "17.jpg",
    title: "Facial",
    category: "Professional cream or clay mask application.",
  },
  {
    file: "18.jpg",
    title: "Classic Ombré Refinement",
    category:
      'Elegant almond-shaped nails with a soft, milky white-to-nude "Baby Boomer" gradient.',
  },
  {
    file: "19.jpg",
    title: "Pearl Shimmer Gradient",
    category:
      "Long coffin-shaped nails with a milky white base and a dense silver/pearl shimmer gradient from the cuticle.",
  },
  {
    file: "20.jpg",
    title: "Lavender & Glitter Mix",
    category:
      "Square nails featuring a coordinated palette of lavender, solid white, and a full-coverage silver glitter accent.",
  },
  {
    file: "21.jpg",
    title: "Pink Aura & 3D Bow",
    category:
      'Square nails with a "blush" or "aura" center in vibrant pink, topped with a 3D translucent bow charm.',
  },
  {
    file: "22.jpg",
    title: "Aqua Dream Abstract",
    category:
      'Long square nails with a soft peach-to-aqua gradient and abstract white and blue "swirl" linework.',
  },
  {
    file: "23.jpg",
    title: "Cyber-Chrome Aura",
    category:
      'Almond nails featuring a purple "aura" base, iridescent chrome finish, and 3D metallic silver accents.',
  },
  {
    file: "24.jpg",
    title: "Burgundy Royal Floral",
    category:
      'Almond nails with a mix of deep burgundy, gold geometric "caged" lines, and hand-painted ruby florals.',
  },
  {
    file: "25.jpg",
    title: "Our Salon Interior",
    category:
      "An interior shot of our professional pedicure stations and a clean, modern workstation area.",
  },
  {
    file: "26.jpg",
    title: "Our Salon Storefront",
    category:
      "The storefront of Lovely Nail on Islington Ave, showing the salon's signage and accessibility.",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

const fallbackCategory = "Nail Design";

export const galleryItems: GalleryItem[] = galleryEditableItems.map(
  (item, index) => {
    const padded = String(index + 1).padStart(2, "0");
    const fallbackTitle = `Design ${padded}`;
    const title = item.title.trim() || fallbackTitle;
    const category = item.category.trim() || fallbackCategory;

    return {
      src: `/gallery/${item.file}`,
      title,
      category,
      alt:
        item.alt?.trim() ||
        `Lovely Nails ${category.toLowerCase()} style ${padded} in North York`,
    };
  },
);

export const galleryCategories = Array.from(
  new Set(galleryItems.map((item) => item.category)),
);
