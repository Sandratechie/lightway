// Project Images
import naplesHero from "@/assets/projects/naples-hero.jpg";
import romanHeightsHero from "@/assets/projects/roman-heights-hero.jpg";
import novaraHero from "@/assets/projects/novara-hero.jpg";
import roman1 from "@/assets/projects/roman-1.jpg";
import roman2 from "@/assets/projects/roman-2.jpg";
import roman3 from "@/assets/projects/roman-3.jpg";
import naplesBedroom1 from "@/assets/projects/naples-bedroom-1.jpg";
import naplesBedroom2 from "@/assets/projects/naples-bedroom-2.jpg";

// Property Images
import naples4BedBq from "@/assets/properties/naples-4bed-bq.png";
import naples500sqm from "@/assets/properties/naples-500sqm.jpg";
import naples300sqm from "@/assets/properties/naples-300sqm.jpg";
import naples2BedMaisonette from "@/assets/properties/naples-2bed-maisonette.jpg";
import naples3BedApartment from "@/assets/properties/naples-3bed-apartment.jpg";
import roman2BedMaisonette from "@/assets/properties/roman-2bed-maisonette.jpg";
import roman3BedApartment from "@/assets/properties/roman-3bed-apartment.jpg";
import novara300sqm from "@/assets/properties/novara-300sqm.jpg";
import novara500sqm from "@/assets/properties/novara-500sqm.jpg";

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
  projectSlug?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  address: string;
  image: string;
  images: string[];
  status: "Now Selling" | "Pre-Order" | "Coming Soon" | "Sold Out";
  description: string;
  amenities: string[];
  coordinates?: { lat: number; lng: number };
}

// Main Projects
export const projects: Project[] = [
  {
    id: "project-1",
    slug: "the-naples",
    title: "The Naples",
    location: "Voera Estate, Arepo, Ogun State",
    address: "Voera Estate, Behind Punch Newspaper, Arepo, Ogun State",
    image: naplesHero,
    images: [naplesHero, naplesBedroom1, naplesBedroom2],
    status: "Pre-Order",
    description: "The Naples Arepo is a premium residential development tailored towards meeting modern day living with contemporary architecture. The development consists of exquisitely designed 4-bedroom terrace townhouses with BQ and service plots located in a secured and fully serviced community within Voera Estate.",
    amenities: [
      "24/7 Security and Power",
      "Parking Space",
      "Glazed Balconies",
      "Children's Playground",
      "Greenery and Landscaping",
      "Gated Community",
      "Motorable Roads",
      "Street Lights",
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
  },
  {
    id: "project-2",
    slug: "the-roman-heights",
    title: "The Roman Heights",
    location: "Arepo, Ogun State",
    address: "KM 28, Lagos-Ibadan Expressway, Arepo, Ogun State",
    image: romanHeightsHero,
    images: [romanHeightsHero, roman1, roman2, roman3],
    status: "Pre-Order",
    description: "Soaring to New Heights! Roman Heights by Lightway Homes is the ultimate high-rise luxury masterpiece in Arepo; the first of its kind. Get ready to elevate your lifestyle with a rooftop lounge, refreshing swimming pool, convenient lifts, modern office space, a standard gym, uninterrupted power supply, convenient parking and incredible common areas.",
    amenities: [
      "Rooftop Lounge",
      "Swimming Pool",
      "Elevator",
      "Gymnasium",
      "Co-working Space",
      "Automated Gate Access",
      "Central Sewage Treatment",
      "Water Treatment Plant",
      "24/7 Security",
      "Backup Power Supply",
    ],
    coordinates: { lat: 6.7174, lng: 3.4516 },
  },
  {
    id: "project-3",
    slug: "the-novara-courts",
    title: "The Novara Courts",
    location: "Orilemo, Mowe, Ogun State",
    address: "Orilemo, Near Nestlé & Olam Group, Mowe, Ogun State",
    image: novaraHero,
    images: [novaraHero, novara500sqm, novara300sqm],
    status: "Pre-Order",
    description: "The Novara Courts is an eco-friendly mixed residential development strategically located near major industrial hubs including Nestlé and Olam Group. This development offers affordable land plots in a well-planned estate with modern amenities and excellent infrastructure.",
    amenities: [
      "Estate Mall",
      "Gymnasium",
      "Recreational Areas",
      "Street Lights",
      "Motorable Roads",
      "Perimeter Fencing",
      "24/7 Security",
      "Green Spaces",
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
  },
];

// All Properties (individual units within projects)
export const properties: Property[] = [
  // The Naples Properties
  {
    id: "naples-townhouse",
    slug: "the-naples-4bed-terrace-townhouse",
    title: "4 Bedroom + BQ",
    location: "Voera Estate, Arepo, Ogun State",
    address: "Voera Estate, Behind Punch Newspaper, Arepo, Ogun State",
    image: naples4BedBq,
    images: [naples4BedBq, naplesHero, naplesBedroom1, naplesBedroom2],
    status: "Pre-Order",
    price: "From ₦150,000,000",
    priceRange: { min: 150000000, max: 180000000 },
    type: "4 Bedroom Terrace Townhouse + BQ",
    size: "450 SQM",
    bedrooms: 4,
    bathrooms: 5,
    description: "Luxurious 4-bedroom terrace townhouse with boys' quarters at The Naples, Voera Estate. Features contemporary architecture, premium finishes, and spacious living areas designed for modern family living.",
    features: [
      "Contemporary architectural design",
      "Spacious living and dining areas",
      "Modern fitted kitchen",
      "All rooms en-suite",
      "Boys' quarters (BQ)",
      "Private parking space",
      "Glazed balconies",
      "Quality tiles and fittings",
    ],
    amenities: [
      "24/7 Security and Power",
      "Parking Space",
      "Glazed Balconies",
      "Children's Playground",
      "Greenery and Landscaping",
      "Gated Community",
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
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
  },
  {
    id: "naples-500sqm",
    slug: "the-naples-500sqm-serviced-plot",
    title: "500 SQM Serviced Plot",
    location: "Voera Estate, Arepo, Ogun State",
    address: "Voera Estate, Behind Punch Newspaper, Arepo, Ogun State",
    image: naples500sqm,
    images: [naples500sqm, naplesHero],
    status: "Pre-Order",
    price: "From ₦30,000,000",
    priceRange: { min: 30000000, max: 35000000 },
    type: "Serviced Land",
    size: "500 SQM",
    description: "Premium 500 square meter serviced plot at The Naples, Voera Estate. Perfect for building your dream home in a well-planned, secure estate with excellent infrastructure and amenities.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "500 square meters",
    ],
    amenities: [
      "24/7 Security and Power",
      "Gated Community",
      "Motorable Roads",
      "Street Lights",
      "Perimeter Fencing",
      "Green Spaces",
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
        name: "12 Months Plan",
        duration: "12 months",
        initialDeposit: "40%",
        monthlyPayment: "Spread over 12 months",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
  },
  {
    id: "naples-300sqm",
    slug: "the-naples-300sqm-serviced-plot",
    title: "300 SQM Serviced Plot",
    location: "Voera Estate, Arepo, Ogun State",
    address: "Voera Estate, Behind Punch Newspaper, Arepo, Ogun State",
    image: naples300sqm,
    images: [naples300sqm, naplesHero],
    status: "Pre-Order",
    price: "From ₦25,000,000",
    priceRange: { min: 25000000, max: 28000000 },
    type: "Serviced Land",
    size: "300 SQM",
    description: "Affordable 300 square meter serviced plot at The Naples, Voera Estate. Ideal for compact home designs in a secure, well-maintained estate environment.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "300 square meters",
    ],
    amenities: [
      "24/7 Security and Power",
      "Gated Community",
      "Motorable Roads",
      "Street Lights",
      "Perimeter Fencing",
      "Green Spaces",
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
        name: "12 Months Plan",
        duration: "12 months",
        initialDeposit: "40%",
        monthlyPayment: "Spread over 12 months",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
  },
  {
    id: "naples-2bed-maisonette",
    slug: "the-naples-2bed-maisonette",
    title: "2 Bedroom Maisonette",
    location: "Voera Estate, Arepo, Ogun State",
    address: "Voera Estate, Behind Punch Newspaper, Arepo, Ogun State",
    image: naples2BedMaisonette,
    images: [naples2BedMaisonette, naplesHero, naplesBedroom1],
    status: "Coming Soon",
    price: "Contact for Price",
    priceRange: { min: 0, max: 0 },
    type: "2 Bedroom Maisonette",
    size: "180 SQM",
    bedrooms: 2,
    bathrooms: 3,
    description: "Elegant 2-bedroom maisonette at The Naples, designed for young professionals and small families seeking quality living in a premium estate.",
    features: [
      "Modern duplex design",
      "Open-plan living area",
      "Fitted kitchen",
      "All rooms en-suite",
      "Balcony",
      "Quality finishes",
    ],
    amenities: [
      "24/7 Security and Power",
      "Parking Space",
      "Children's Playground",
      "Gated Community",
    ],
    paymentPlans: [
      {
        name: "Contact Sales",
        duration: "TBD",
        initialDeposit: "Contact for details",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
  },
  {
    id: "naples-3bed-apartment",
    slug: "the-naples-3bed-apartment",
    title: "3 Bedroom Apartment",
    location: "Voera Estate, Arepo, Ogun State",
    address: "Voera Estate, Behind Punch Newspaper, Arepo, Ogun State",
    image: naples3BedApartment,
    images: [naples3BedApartment, naplesHero, naplesBedroom2],
    status: "Coming Soon",
    price: "Contact for Price",
    priceRange: { min: 0, max: 0 },
    type: "3 Bedroom Apartment",
    size: "200 SQM",
    bedrooms: 3,
    bathrooms: 4,
    description: "Spacious 3-bedroom apartment at The Naples, offering comfortable living spaces with modern amenities and premium finishes.",
    features: [
      "Contemporary design",
      "Spacious living area",
      "Modern fitted kitchen",
      "All rooms en-suite",
      "Balcony with views",
      "Quality finishes",
    ],
    amenities: [
      "24/7 Security and Power",
      "Parking Space",
      "Children's Playground",
      "Gated Community",
    ],
    paymentPlans: [
      {
        name: "Contact Sales",
        duration: "TBD",
        initialDeposit: "Contact for details",
      },
    ],
    coordinates: { lat: 6.7074, lng: 3.4416 },
    projectSlug: "the-naples",
  },

  // The Roman Heights Properties
  {
    id: "roman-3bed",
    slug: "the-roman-heights-3bed-apartment",
    title: "3 Bedroom Apartment",
    location: "Arepo, Ogun State",
    address: "KM 28, Lagos-Ibadan Expressway, Arepo, Ogun State",
    image: roman3BedApartment,
    images: [roman3BedApartment, romanHeightsHero, roman1, roman2, roman3],
    status: "Pre-Order",
    price: "From ₦60,000,000",
    priceRange: { min: 60000000, max: 75000000 },
    type: "3 Bedroom Apartment",
    size: "180 SQM",
    bedrooms: 3,
    bathrooms: 4,
    description: "Luxurious 3-bedroom apartment in The Roman Heights, Arepo's first high-rise luxury development. Features premium finishes, elevator access, and world-class amenities including rooftop lounge and swimming pool.",
    features: [
      "High-rise luxury living",
      "Elevator access",
      "Spacious living and dining",
      "Modern fitted kitchen",
      "All rooms en-suite",
      "Premium flooring",
      "Smart home ready",
      "Balcony with panoramic views",
    ],
    amenities: [
      "Rooftop Lounge",
      "Swimming Pool",
      "Elevator",
      "Gymnasium",
      "Co-working Space",
      "Automated Gate Access",
      "Central Sewage Treatment",
      "24/7 Security",
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
    projectSlug: "the-roman-heights",
  },
  {
    id: "roman-2bed-maisonette",
    slug: "the-roman-heights-2bed-maisonette",
    title: "2 Bedroom Maisonette",
    location: "Arepo, Ogun State",
    address: "KM 28, Lagos-Ibadan Expressway, Arepo, Ogun State",
    image: roman2BedMaisonette,
    images: [roman2BedMaisonette, romanHeightsHero, roman1, roman2],
    status: "Pre-Order",
    price: "From ₦55,000,000",
    priceRange: { min: 55000000, max: 65000000 },
    type: "2 Bedroom Maisonette",
    size: "150 SQM",
    bedrooms: 2,
    bathrooms: 3,
    description: "Stylish 2-bedroom maisonette in The Roman Heights high-rise development. Perfect for young professionals and small families seeking luxury living with premium amenities.",
    features: [
      "Duplex-style living",
      "Elevator access",
      "Open-plan living area",
      "Modern fitted kitchen",
      "All rooms en-suite",
      "Premium flooring",
      "Balcony",
      "Smart home ready",
    ],
    amenities: [
      "Rooftop Lounge",
      "Swimming Pool",
      "Elevator",
      "Gymnasium",
      "Co-working Space",
      "Automated Gate Access",
      "Central Sewage Treatment",
      "24/7 Security",
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
    projectSlug: "the-roman-heights",
  },

  // The Novara Courts Properties
  {
    id: "novara-600sqm",
    slug: "the-novara-courts-600sqm-plot",
    title: "600 SQM Plot",
    location: "Orilemo, Mowe, Ogun State",
    address: "Orilemo, Near Nestlé & Olam Group, Mowe, Ogun State",
    image: novara500sqm,
    images: [novara500sqm, novaraHero],
    status: "Pre-Order",
    price: "From ₦7,500,000",
    priceRange: { min: 7500000, max: 9000000 },
    type: "Residential Land",
    size: "600 SQM",
    description: "Spacious 600 square meter plot at The Novara Courts, an eco-friendly development near major industrial hubs. Excellent investment opportunity with flexible payment plans.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "600 square meters",
      "Near industrial hubs",
    ],
    amenities: [
      "Estate Mall",
      "Gymnasium",
      "Recreational Areas",
      "Street Lights",
      "Motorable Roads",
      "Perimeter Fencing",
      "24/7 Security",
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
        initialDeposit: "50%",
        monthlyPayment: "Spread across 6 months",
      },
      {
        name: "12 Months Plan",
        duration: "12 months",
        initialDeposit: "30%",
        monthlyPayment: "Spread over 12 months",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
  },
  {
    id: "novara-500sqm",
    slug: "the-novara-courts-500sqm-plot",
    title: "500 SQM Plot",
    location: "Orilemo, Mowe, Ogun State",
    address: "Orilemo, Near Nestlé & Olam Group, Mowe, Ogun State",
    image: novara500sqm,
    images: [novara500sqm, novaraHero],
    status: "Pre-Order",
    price: "From ₦6,500,000",
    priceRange: { min: 6500000, max: 7500000 },
    type: "Residential Land",
    size: "500 SQM",
    description: "Well-sized 500 square meter plot at The Novara Courts. Ideal for building a comfortable family home in a secure, eco-friendly estate environment.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "500 square meters",
    ],
    amenities: [
      "Estate Mall",
      "Gymnasium",
      "Recreational Areas",
      "Street Lights",
      "Motorable Roads",
      "Perimeter Fencing",
      "24/7 Security",
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
        initialDeposit: "50%",
        monthlyPayment: "Spread across 6 months",
      },
      {
        name: "12 Months Plan",
        duration: "12 months",
        initialDeposit: "30%",
        monthlyPayment: "Spread over 12 months",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
  },
  {
    id: "novara-300sqm",
    slug: "the-novara-courts-300sqm-plot",
    title: "300 SQM Plot",
    location: "Orilemo, Mowe, Ogun State",
    address: "Orilemo, Near Nestlé & Olam Group, Mowe, Ogun State",
    image: novara300sqm,
    images: [novara300sqm, novaraHero],
    status: "Pre-Order",
    price: "From ₦4,500,000",
    priceRange: { min: 4500000, max: 5500000 },
    type: "Residential Land",
    size: "300 SQM",
    description: "Affordable 300 square meter plot at The Novara Courts. Perfect entry-point for first-time land buyers looking for a secure investment in a well-planned estate.",
    features: [
      "Dry and solid land",
      "Survey and title documents available",
      "Government-approved layout",
      "Excellent topography",
      "Ready for immediate development",
      "300 square meters",
    ],
    amenities: [
      "Estate Mall",
      "Gymnasium",
      "Recreational Areas",
      "Street Lights",
      "Motorable Roads",
      "Perimeter Fencing",
      "24/7 Security",
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
        initialDeposit: "50%",
        monthlyPayment: "Spread across 6 months",
      },
      {
        name: "12 Months Plan",
        duration: "12 months",
        initialDeposit: "30%",
        monthlyPayment: "Spread over 12 months",
      },
    ],
    coordinates: { lat: 6.7274, lng: 3.4616 },
    projectSlug: "the-novara-courts",
  },
];

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return properties.find((p) => p.slug === slug);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getPropertiesByProject = (projectSlug: string): Property[] => {
  return properties.filter((p) => p.projectSlug === projectSlug);
};
