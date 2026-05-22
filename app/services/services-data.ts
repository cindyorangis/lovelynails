export type ServiceItem = {
  name: string;
  price: string;
  duration: string;
  pricingType: "From" | "Fixed";
  description?: string;
};

export type ServiceCategory = {
  title: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Artificial Nail",
    items: [
      {
        name: "Bio-gel Shellac Set",
        price: "C$60",
        duration: "60 min",
        pricingType: "From",
      },
      {
        name: "Bio-gel Shellac Fill",
        price: "C$50",
        duration: "45 min",
        pricingType: "From",
      },
      {
        name: "UV Gel Shellac Set",
        price: "C$50",
        duration: "60 min",
        pricingType: "From",
      },
      {
        name: "UV Gel Shellac Fill",
        price: "C$40",
        duration: "45 min",
        pricingType: "From",
      },
      {
        name: "Acrylic Shellac Set",
        price: "C$45",
        duration: "60 min",
        pricingType: "From",
      },
      {
        name: "Acrylic Shellac Fill",
        price: "C$35",
        duration: "30 min",
        pricingType: "From",
      },
      {
        name: "Solar Shellac Set",
        price: "C$50",
        duration: "60 min",
        pricingType: "From",
      },
      {
        name: "Solar Shellac Fill",
        price: "C$40",
        duration: "45 min",
        pricingType: "From",
      },
      {
        name: "Gel X Shellac Set",
        price: "C$50",
        duration: "60 min",
        pricingType: "From",
      },
      {
        name: "Dip Powder With Tip",
        price: "C$50",
        duration: "60 min",
        pricingType: "From",
      },
      {
        name: "Dip Powder Overlay",
        price: "C$45",
        duration: "45 min",
        pricingType: "From",
      },
      {
        name: "Nail Art",
        price: "C$5",
        duration: "15 min",
        pricingType: "From",
      },
      {
        name: "Take Off Nail",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "French Nail",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
      },
    ],
  },
  {
    title: "Pedicure",
    items: [
      {
        name: "Pedicure Regular",
        price: "C$35",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Pedicure Shellac",
        price: "C$45",
        duration: "45 min",
        pricingType: "Fixed",
      },
      {
        name: "Deluxe Pedicure",
        price: "C$55",
        duration: "60 min",
        pricingType: "Fixed",
        description:
          "Soak your feet in natural sea with lavender bubbles to detoxify and deodorize, followed by sugar scrub, mud mask, paraffin wax treatment, hot stone massage, and hot towel.",
      },
      {
        name: "Reg Polish Toes",
        price: "C$15",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Shellac Toes",
        price: "C$25",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Paraffin Wax",
        price: "C$15",
        duration: "15 min",
        pricingType: "Fixed",
      },
    ],
  },
  {
    title: "Manicure",
    items: [
      {
        name: "Manicure Shellac",
        price: "C$35",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Basic Manicure",
        price: "C$20",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Shellac Color Hands",
        price: "C$20",
        duration: "15 min",
        pricingType: "From",
      },
      {
        name: "Hand Nail Cut",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
      },
    ],
  },
  {
    title: "Waxing",
    items: [
      {
        name: "Eyebrows Wax",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Chin Wax",
        price: "C$10",
        duration: "15 min",
        pricingType: "From",
      },
      {
        name: "Lip Wax",
        price: "C$5",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Full Face Wax",
        price: "C$30",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Side Burn Wax",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Full Arms Wax",
        price: "C$30",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Half Arms Wax",
        price: "C$20",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Under Arms Wax",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Full Leg Wax",
        price: "C$40",
        duration: "45 min",
        pricingType: "From",
      },
      {
        name: "Half Leg Wax",
        price: "C$25",
        duration: "30 min",
        pricingType: "From",
      },
      {
        name: "Chest Wax",
        price: "C$25",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Back Wax",
        price: "C$30",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Stomach Wax",
        price: "C$20",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Eyebrow Tint + Wax",
        price: "C$25",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Bikini Wax",
        price: "C$20",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Brazilian Wax",
        price: "C$40",
        duration: "45 min",
        pricingType: "From",
      },
    ],
  },
  {
    title: "Kids Under 12",
    items: [
      {
        name: "Kid Manicure",
        price: "C$15",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Kid Pedicure",
        price: "C$25",
        duration: "30 min",
        pricingType: "Fixed",
      },
      {
        name: "Polish Hand (Kid)",
        price: "C$7",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Polish Toe (Kid)",
        price: "C$8",
        duration: "15 min",
        pricingType: "Fixed",
      },
      {
        name: "Shellac Add On",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
      },
    ],
  },
  {
    title: "Eyelash, Facial & Massage",
    items: [
      {
        name: "Eyelash Tinting",
        price: "C$20",
        duration: "15 min",
        pricingType: "From",
      },
      {
        name: "Facial",
        price: "C$70",
        duration: "60 min",
        pricingType: "From",
      },
      {
        name: "Massage Body",
        price: "C$70",
        duration: "60 min",
        pricingType: "From",
      },
    ],
  },
];

export const bookingServiceOptions = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    label: `${item.name} (${item.price})`,
    value: `${category.title} - ${item.name}`,
    category: category.title,
  })),
);
