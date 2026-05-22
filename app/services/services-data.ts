export type ServiceItem = {
  name: string;
  price: string;
  duration: string;
  pricingType: "From" | "Fixed" | "Complimentary";
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
    title: "Spa Treatments",
    items: [
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
      {
        name: "Eyelash Tinting",
        price: "C$20",
        duration: "15 min",
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
    title: "Bridal & Wedding",
    items: [
      {
        name: "Bridal Nail Consultation",
        price: "Complimentary",
        duration: "15 min",
        pricingType: "Complimentary",
        subcategory: "Consultation & Trials",
      },
      {
        name: "Bridal Nail Trial (Full Set)",
        price: "C$75",
        duration: "90 min",
        pricingType: "From",
        subcategory: "Consultation & Trials",
      },
      {
        name: "Luxury Bridal Manicure",
        price: "C$85",
        duration: "75 min",
        pricingType: "From",
        subcategory: "The Big Day (Bride)",
      },
      {
        name: "Luxury Bridal Pedicure",
        price: "C$70",
        duration: "75 min",
        pricingType: "From",
        subcategory: "The Big Day (Bride)",
      },
      {
        name: "Deluxe Bridal Bundle (Mani + Pedi)",
        price: "C$145",
        duration: "150 min",
        pricingType: "From",
        subcategory: "The Big Day (Bride)",
      },
      {
        name: "Bridesmaid Manicure",
        price: "C$45",
        duration: "45 min",
        pricingType: "Fixed",
        subcategory: "Wedding Party & Guests",
      },
      {
        name: "Mother of the Bride/Groom Mani",
        price: "C$45",
        duration: "45 min",
        pricingType: "Fixed",
        subcategory: "Wedding Party & Guests",
      },
      {
        name: "Flower Girl Polish (Under 12)",
        price: "C$12",
        duration: "20 min",
        pricingType: "Fixed",
        subcategory: "Wedding Party & Guests",
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
