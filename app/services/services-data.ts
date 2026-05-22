export type ServiceItem = {
  name: string;
  price: string;
  duration: string;
  pricingType: "From" | "Fixed";
  subcategory?: string;
  description?: string;
};

export type ServiceCategory = {
  title: string;
  items: ServiceItem[];
};

export function buildServiceValue(categoryTitle: string, serviceName: string) {
  return `${categoryTitle} - ${serviceName}`;
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Artificial Nail",
    items: [
      {
        name: "Bio-gel Shellac Set",
        price: "C$60",
        duration: "60 min",
        pricingType: "From",
        subcategory: "Full Sets",
      },
      {
        name: "UV Gel Shellac Set",
        price: "C$50",
        duration: "60 min",
        pricingType: "From",
        subcategory: "Full Sets",
      },
      {
        name: "Solar Shellac Set",
        price: "C$50",
        duration: "60 min",
        pricingType: "From",
        subcategory: "Full Sets",
      },
      {
        name: "Gel X Shellac Set",
        price: "C$50",
        duration: "60 min",
        pricingType: "From",
        subcategory: "Full Sets",
      },
      {
        name: "Acrylic Shellac Set",
        price: "C$45",
        duration: "60 min",
        pricingType: "From",
        subcategory: "Full Sets",
      },
      {
        name: "Dip Powder With Tip",
        price: "C$50",
        duration: "60 min",
        pricingType: "From",
        subcategory: "Full Sets",
      },
      {
        name: "Dip Powder Overlay",
        price: "C$45",
        duration: "45 min",
        pricingType: "From",
        subcategory: "Full Sets",
      },
      {
        name: "Bio-gel Shellac Fill",
        price: "C$50",
        duration: "45 min",
        pricingType: "From",
        subcategory: "Refills",
      },
      {
        name: "UV Gel Shellac Fill",
        price: "C$40",
        duration: "45 min",
        pricingType: "From",
        subcategory: "Refills",
      },
      {
        name: "Solar Shellac Fill",
        price: "C$40",
        duration: "45 min",
        pricingType: "From",
        subcategory: "Refills",
      },
      {
        name: "Acrylic Shellac Fill",
        price: "C$35",
        duration: "30 min",
        pricingType: "From",
        subcategory: "Refills",
      },
      {
        name: "Nail Art",
        price: "C$5",
        duration: "15 min",
        pricingType: "From",
        subcategory: "Maintenance & Art",
      },
      {
        name: "Take Off Nail",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Maintenance & Art",
      },
      {
        name: "French Nail",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Maintenance & Art",
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
        subcategory: "Standard Care",
      },
      {
        name: "Pedicure Shellac",
        price: "C$45",
        duration: "45 min",
        pricingType: "Fixed",
        subcategory: "Standard Care",
      },
      {
        name: "Deluxe Pedicure",
        price: "C$55",
        duration: "60 min",
        pricingType: "Fixed",
        subcategory: "Standard Care",
      },
      {
        name: "Reg Polish Toes",
        price: "C$15",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Quick Maintenance",
      },
      {
        name: "Shellac Toes",
        price: "C$25",
        duration: "30 min",
        pricingType: "Fixed",
        subcategory: "Quick Maintenance",
      },
      {
        name: "Paraffin Wax",
        price: "C$15",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Quick Maintenance",
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
        name: "Full Face Wax",
        price: "C$30",
        duration: "30 min",
        pricingType: "Fixed",
        subcategory: "Face",
      },
      {
        name: "Eyebrows Wax",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Face",
      },
      {
        name: "Eyebrow Tint + Wax",
        price: "C$25",
        duration: "30 min",
        pricingType: "Fixed",
        subcategory: "Face",
      },
      {
        name: "Lip Wax",
        price: "C$5",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Face",
      },
      {
        name: "Chin Wax",
        price: "C$10",
        duration: "15 min",
        pricingType: "From",
        subcategory: "Face",
      },
      {
        name: "Side Burn Wax",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Face",
      },
      {
        name: "Full Arms Wax",
        price: "C$30",
        duration: "30 min",
        pricingType: "Fixed",
        subcategory: "Body",
      },
      {
        name: "Half Arms Wax",
        price: "C$20",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Body",
      },
      {
        name: "Under Arms Wax",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Body",
      },
      {
        name: "Full Leg Wax",
        price: "C$40",
        duration: "45 min",
        pricingType: "From",
        subcategory: "Body",
      },
      {
        name: "Half Leg Wax",
        price: "C$25",
        duration: "30 min",
        pricingType: "From",
        subcategory: "Body",
      },
      {
        name: "Chest Wax",
        price: "C$25",
        duration: "30 min",
        pricingType: "Fixed",
        subcategory: "Body",
      },
      {
        name: "Back Wax",
        price: "C$30",
        duration: "30 min",
        pricingType: "Fixed",
        subcategory: "Body",
      },
      {
        name: "Stomach Wax",
        price: "C$20",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Body",
      },
      {
        name: "Brazilian Wax",
        price: "C$40",
        duration: "45 min",
        pricingType: "From",
        subcategory: "Intimate",
      },
      {
        name: "Bikini Wax",
        price: "C$20",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Intimate",
      },
    ],
  },
  {
    title: "Spa & Kids",
    items: [
      {
        name: "Facial",
        price: "C$70",
        duration: "60 min",
        pricingType: "From",
        subcategory: "Spa Treatments",
      },
      {
        name: "Massage Body",
        price: "C$70",
        duration: "60 min",
        pricingType: "From",
        subcategory: "Spa Treatments",
      },
      {
        name: "Eyelash Tinting",
        price: "C$20",
        duration: "15 min",
        pricingType: "From",
        subcategory: "Spa Treatments",
      },
      {
        name: "Kid Manicure",
        price: "C$15",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Kids Under 12",
      },
      {
        name: "Kid Pedicure",
        price: "C$25",
        duration: "30 min",
        pricingType: "Fixed",
        subcategory: "Kids Under 12",
      },
      {
        name: "Polish Hand (Kid)",
        price: "C$7",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Kids Under 12",
      },
      {
        name: "Polish Toe (Kid)",
        price: "C$8",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Kids Under 12",
      },
      {
        name: "Shellac Add On",
        price: "C$10",
        duration: "15 min",
        pricingType: "Fixed",
        subcategory: "Kids Under 12",
      },
    ],
  },
];

export const bookingServiceOptions = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    label: `${item.name} (${item.price})`,
    value: buildServiceValue(category.title, item.name),
    category: category.title,
  })),
);
