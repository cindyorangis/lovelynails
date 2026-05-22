export type GalleryCategory =
  | "Artificial Nail"
  | "Pedicure"
  | "Waxing"
  | "Facial"
  | "Salon";

export type GalleryEditableItem = {
  file: `${number}.jpg`;
  title: string;
  description: string;
  category: GalleryCategory;
};

// You can edit title/description/category freely.
export const galleryEditableItems: GalleryEditableItem[] = [
  {
    file: "1.jpg",
    title: "Stiletto Glitter Accent",
    description:
      "Sharp stiletto-shaped nails with matte white tones and fine silver glitter accent details.",
    category: "Artificial Nail",
  },
  {
    file: "2.jpg",
    title: "Blue Floral Pearl Set",
    description:
      "Almond-shaped nails with intricate blue floral hand painting and small 3D pearl embellishments.",
    category: "Artificial Nail",
  },
  {
    file: "3.jpg",
    title: "French Tip Glitter Blend",
    description:
      "Square-shaped nails with traditional French tips combined with silver glitter accents.",
    category: "Artificial Nail",
  },
  {
    file: "4.jpg",
    title: "Nude and Gold Swirl Art",
    description:
      "Elegant nude base with white swoops and delicate gold glitter line work.",
    category: "Artificial Nail",
  },
  {
    file: "5.jpg",
    title: "Emerald Marble Inlay",
    description:
      "Deep emerald solids paired with marble-effect accent nails for high contrast.",
    category: "Artificial Nail",
  },
  {
    file: "6.jpg",
    title: "Minimalist Micro Studs",
    description:
      "Soft milky nude almond base accented with tiny minimalist gold micro-studs.",
    category: "Artificial Nail",
  },
  {
    file: "7.jpg",
    title: "Gold Starry Gradient",
    description:
      "Champagne glitter and star sequins over a nude-to-gold gradient base.",
    category: "Artificial Nail",
  },
  {
    file: "8.jpg",
    title: "Pink Shimmer Ombre",
    description:
      "Soft pink ombre style with a fine iridescent shimmer overlay.",
    category: "Artificial Nail",
  },
  {
    file: "9.jpg",
    title: "Cherry Blossom Detail",
    description:
      "Hand-painted cherry blossom branches on a translucent milky base.",
    category: "Artificial Nail",
  },
  {
    file: "10.jpg",
    title: "Gold Metallic French",
    description:
      "Milky nude square nails with delicate metallic gold French-style tip lines.",
    category: "Artificial Nail",
  },
  {
    file: "11.jpg",
    title: "Glossy Nude Stiletto",
    description:
      "Classic long stiletto nails in a clean, high-gloss nude finish.",
    category: "Artificial Nail",
  },
  {
    file: "12.jpg",
    title: "Pastel Grid Design",
    description:
      "Square nails in pink and blue with geometric diamond-grid silver linework.",
    category: "Artificial Nail",
  },
  {
    file: "13.jpg",
    title: "Monochrome Heart Matte",
    description:
      "Matte black and matte white contrast set with a minimalist heart detail.",
    category: "Artificial Nail",
  },
  {
    file: "14.jpg",
    title: "Burgundy Rose Gold Foil",
    description:
      "Long coffin nails in deep burgundy and rose-gold foil with jelly-gloss finish.",
    category: "Artificial Nail",
  },
  {
    file: "15.jpg",
    title: "French Butterfly Luxe",
    description:
      "Long tapered square nails with classic French tips and 3D butterfly rhinestone accents.",
    category: "Artificial Nail",
  },
  {
    file: "16.jpg",
    title: "Full Leg Wax Result",
    description:
      "Smooth waxing result example from our full leg waxing service.",
    category: "Waxing",
  },
  {
    file: "17.jpg",
    title: "Facial Service Snapshot",
    description: "Facial care in progress with professional mask application.",
    category: "Facial",
  },
  {
    file: "18.jpg",
    title: "Classic Ombre Refinement",
    description:
      "Elegant almond nails with soft milky white to nude baby-boomer gradient.",
    category: "Artificial Nail",
  },
  {
    file: "19.jpg",
    title: "Pearl Shimmer Gradient",
    description:
      "Long coffin nails with milky white base and dense pearl shimmer from cuticle.",
    category: "Artificial Nail",
  },
  {
    file: "20.jpg",
    title: "Lavender Glitter Mix",
    description:
      "Coordinated palette of lavender, white, and silver glitter accent nails.",
    category: "Artificial Nail",
  },
  {
    file: "21.jpg",
    title: "Pink Aura Bow",
    description:
      "Square nails with vibrant pink aura centers and 3D translucent bow charm.",
    category: "Artificial Nail",
  },
  {
    file: "22.jpg",
    title: "Aqua Abstract Swirl",
    description:
      "Long square nails with peach-to-aqua gradient and abstract white-blue linework.",
    category: "Artificial Nail",
  },
  {
    file: "23.jpg",
    title: "Chrome Aura Accent",
    description:
      "Almond nails with purple aura base, iridescent chrome finish, and metallic accents.",
    category: "Artificial Nail",
  },
  {
    file: "24.jpg",
    title: "Burgundy Floral Royal",
    description:
      "Almond nails mixing burgundy tones, geometric gold lines, and hand-painted floral details.",
    category: "Artificial Nail",
  },
  {
    file: "25.jpg",
    title: "Salon Pedicure Area",
    description:
      "Interior photo showing pedicure stations and a clean modern salon setup.",
    category: "Pedicure",
  },
  {
    file: "26.jpg",
    title: "Lovely Nails Storefront",
    description:
      "Front exterior view of Lovely Nails on Islington Ave in North York.",
    category: "Salon",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = galleryEditableItems.map((item) => {
  return {
    src: `/gallery/${item.file}`,
    title: item.title.trim(),
    description: item.description.trim(),
    category: item.category,
    alt: `Lovely Nails ${item.title.toLowerCase()} in North York`,
  };
});

export const galleryCategories = Array.from(
  new Set(galleryItems.map((item) => item.category)),
);
