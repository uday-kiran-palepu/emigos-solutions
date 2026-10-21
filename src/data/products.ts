export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  shortDescription: string;
  features: string[];
  inStock: boolean;
  rating: number;
}

// Fallback image for products missing a valid image
export const productFallbackImage =
  'https://images.pexels.com/photos/37591155/pexels-photo-37591155.jpeg?auto=compress&cs=tinysrgb&w=800';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'HD Dome Camera 4MP',
    slug: 'hd-dome-camera-4mp',
    category: 'CCTV & Surveillance',
    price: 3499,
    image: 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=800',
    shortDescription: '4-megapixel indoor/outdoor dome camera with night vision and remote viewing.',
    features: ['4MP resolution', 'Night vision up to 30m', 'IP67 weatherproof', 'Mobile app remote view'],
    inStock: true,
    rating: 4.5,
  },
  {
    id: 'p2',
    name: 'Bullet Camera 8MP',
    slug: 'bullet-camera-8mp',
    category: 'CCTV & Surveillance',
    price: 4999,
    image: 'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=800',
    shortDescription: '8-megapixel outdoor bullet camera with wide-angle lens and motion detection.',
    features: ['8MP Ultra HD', 'Wide-angle 110° lens', 'Smart motion detection', 'PoE support'],
    inStock: true,
    rating: 4.7,
  },
  {
    id: 'p3',
    name: 'Smart Door Lock — Fingerprint',
    slug: 'smart-door-lock-fingerprint',
    category: 'Smart Door Systems',
    price: 8999,
    image: 'https://images.pexels.com/photos/37538043/pexels-photo-37538043.jpeg?auto=compress&cs=tinysrgb&w=800',
    shortDescription: 'Biometric smart lock with fingerprint, PIN, RFID, and app-based unlocking.',
    features: ['Fingerprint + PIN + RFID', 'Smartphone unlock', 'Temporary access codes', 'Tamper alarm'],
    inStock: true,
    rating: 4.6,
  },
  {
    id: 'p4',
    name: 'Video Door Phone Pro',
    slug: 'video-door-phone-pro',
    category: 'Smart Door Systems',
    price: 6499,
    image: 'https://images.pexels.com/photos/6682880/pexels-photo-6682880.jpeg?auto=compress&cs=tinysrgb&w=800',
    shortDescription: 'Two-way video door phone with 7-inch indoor monitor and night-vision camera.',
    features: ['7" color monitor', 'Two-way audio', 'Night vision camera', 'Intercom support'],
    inStock: true,
    rating: 4.4,
  },
  {
    id: 'p5',
    name: 'Solar Panel 450W Mono',
    slug: 'solar-panel-450w-mono',
    category: 'Solar Solutions',
    price: 12999,
    image: 'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=800',
    shortDescription: '450W monocrystalline solar panel with high efficiency and 25-year warranty.',
    features: ['450W monocrystalline', '21% efficiency', '25-year performance warranty', 'IP68 junction box'],
    inStock: true,
    rating: 4.8,
  },
  {
    id: 'p6',
    name: 'Solar Hybrid Inverter 3kVA',
    slug: 'solar-hybrid-inverter-3kva',
    category: 'Solar Solutions',
    price: 18999,
    image: 'https://images.pexels.com/photos/17762230/pexels-photo-17762230.jpeg?auto=compress&cs=tinysrgb&w=800',
    shortDescription: '3kVA hybrid solar inverter with battery charging and grid-tie support.',
    features: ['3kVA capacity', 'Hybrid grid + battery', 'MPPT controller', 'LCD display'],
    inStock: true,
    rating: 4.5,
  },
  {
    id: 'p7',
    name: 'Deep Cleaning Service — 3BHK',
    slug: 'deep-cleaning-service-3bhk',
    category: 'Cleaning Services',
    price: 2999,
    image: 'https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&w=800',
    shortDescription: 'Complete deep cleaning for a 3BHK home including kitchen, bathrooms, and floors.',
    features: ['Full home deep clean', 'Kitchen degreasing', 'Bathroom sanitization', 'Floor polishing'],
    inStock: true,
    rating: 4.7,
  },
  {
    id: 'p8',
    name: 'Termite Treatment — 1 Year',
    slug: 'termite-treatment-1-year',
    category: 'Pest Control',
    price: 3999,
    image: 'https://images.pexels.com/photos/4176541/pexels-photo-4176541.jpeg?auto=compress&cs=tinysrgb&w=800',
    shortDescription: 'Comprehensive termite treatment with 1-year warranty and follow-up visits.',
    features: ['Soil + wood treatment', '1-year warranty', '2 follow-up visits', 'Safe chemicals'],
    inStock: true,
    rating: 4.3,
  },
];

export const productCategories = Array.from(new Set(products.map((p) => p.category)));

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
