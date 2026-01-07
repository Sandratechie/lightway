import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export interface Property {
  id: string;
  slug: string;
  title: string;
  location: string;
  address: string;
  image: string;
  images: string[];
  status: "Now Selling" | "Pre-Order" | "Coming Soon" | "Sold Out";
  price: string;
  priceRange: { min: number; max: number };
  type: string;
  size: string;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  features: string[];
  amenities: string[];
  paymentPlans: {
    name: string;
    duration: string;
    initialDeposit: string;
    monthlyPayment?: string;
  }[];
  coordinates?: { lat: number; lng: number };
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "roman-heights",
    title: "Roman Heights",
    location: "Arepo, Ogun State",
    address: "KM 28, Lagos-Ibadan Expressway, Arepo, Ogun State",
    image: property1,
    images: [property1, property2, property3],
    status: "Now Selling",
    price: "From ₦25M",
    priceRange: { min: 25000000, max: 45000000 },
    type: "4 Bedroom + BQ",
    size: "400 SQM",
    bedrooms: 4,
    bathrooms: 5,
    description: "Roman Heights is a premium gated community designed for modern living. This exquisite estate offers spacious 4-bedroom duplexes with boys' quarters, set within a secure and serene environment. Each unit is carefully crafted with contemporary architecture and premium finishes, providing the perfect blend of luxury and comfort for discerning homeowners.",
    features: [
      "Modern architectural design",
      "Spacious living and dining areas",
      "Fitted kitchen with granite countertops",
      "All rooms en-suite",
      "Quality tiles and fittings",
      "Ample parking space",
      "Boys' quarters (BQ)",
      "Perimeter fencing",
    ],
    amenities: [
      "24/7 Security surveillance",
      "Gated community",
      "Good road network",
      "Recreational areas",
      "Street lights",
      "Drainage system",
      "Water supply",
      "Electricity supply",
    ],
    paymentPlans: [
      {
        name: "Outright Payment",
        duration: "Immediate",
        initialDeposit: "100%",
      },
      {
        name: "6 Months Plan",
        duration: "6 months",
        initialDeposit: "70%",
        monthlyPayment: "5% per month",
      },
      {
        name: "12 Months Plan",
        duration: "12 months",
        initialDeposit: "50%",
        monthlyPayment: "Spread over 12 months",
      },
    ],
    coordinates: { lat: 6.7174, lng: 3.4516 },
  },
  {
    id: "2",
    slug: "the-naples",
    title: "The Naples",
    location: "Arepo, Ogun State",
    address: "Behind Punch Newspaper, Arepo, Ogun State",
    image: property2,
    images: [property2, property1, property3],
    status: "Pre-Order",
    price: "From ₦30M",
    priceRange: { min: 30000000, max: 50000000 },
    type: "Land (300-500 SQM)",
    size: "300-500 SQM",
    description: "The Naples offers premium residential land in one of Lagos's fastest-growing corridors. This strategic development provides an excellent opportunity for investors and homeowners looking to build their dream homes. With plots ranging from 300 to 500 square meters, The Naples caters to diverse building preferences while maintaining an exclusive community atmosphere.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "Flexible plot sizes",
    ],
    amenities: [
      "Gated and secured estate",
      "Perimeter fencing",
      "Motorable roads",
      "Electricity infrastructure",
      "Water infrastructure",
      "Green spaces",
      "Strategic location",
    ],
    paymentPlans: [
      {
        name: "Outright Payment",
        duration: "Immediate",
        initialDeposit: "100%",
      },
      {
        name: "6 Months Plan",
        duration: "6 months",
        initialDeposit: "60%",
        monthlyPayment: "Spread across 6 months",
      },
      {
        name: "18 Months Plan",
        duration: "18 months",
        initialDeposit: "40%",
        monthlyPayment: "Spread over 18 months",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
  },
  {
    id: "3",
    slug: "novara-court",
    title: "Novara Court",
    location: "Arepo, Ogun State",
    address: "Magboro, Along Lagos-Ibadan Expressway, Ogun State",
    image: property3,
    images: [property3, property1, property2],
    status: "Now Selling",
    price: "From ₦150M",
    priceRange: { min: 150000000, max: 200000000 },
    type: "4 Bedroom Maisonette",
    size: "500 SQM",
    bedrooms: 4,
    bathrooms: 5,
    description: "Novara Court represents the pinnacle of luxury living. This ultra-premium development features exclusively designed 4-bedroom maisonettes that redefine contemporary architecture. Every detail has been meticulously planned to deliver an unparalleled living experience, from the grand entrance foyers to the designer kitchens and spa-like bathrooms.",
    features: [
      "Premium architectural design",
      "Double-height living room",
      "Designer fitted kitchen",
      "Master suite with walk-in closet",
      "Home automation ready",
      "Premium flooring throughout",
      "Landscaped gardens",
      "Private parking garage",
    ],
    amenities: [
      "24/7 Security with CCTV",
      "Swimming pool",
      "Clubhouse",
      "Gym facility",
      "Children's playground",
      "Landscaped gardens",
      "Backup power supply",
      "Treated water supply",
      "High-speed internet ready",
    ],
    paymentPlans: [
      {
        name: "Outright Payment",
        duration: "Immediate",
        initialDeposit: "100%",
      },
      {
        name: "6 Months Plan",
        duration: "6 months",
        initialDeposit: "60%",
        monthlyPayment: "6.67% per month",
      },
      {
        name: "12 Months Plan",
        duration: "12 months",
        initialDeposit: "40%",
        monthlyPayment: "5% per month",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
  },
];

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find((p) => p.slug === slug);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};
