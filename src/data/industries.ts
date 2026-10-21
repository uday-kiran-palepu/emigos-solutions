import {
  Building2,
  Home,
  Factory,
  type LucideIcon,
} from 'lucide-react';

export interface IndustrySolution {
  title: string;
  description: string;
  serviceSlug: string;
}

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  overview: string;
  solutions: IndustrySolution[];
  seoTitle: string;
  seoDescription: string;
  published: boolean;
}

export const industries: Industry[] = [
  {
    slug: 'commercial',
    name: 'Commercial Sector',
    shortName: 'Commercial',
    icon: Building2,
    tagline: 'Security and facility solutions for businesses.',
    description:
      'Comprehensive security, cleaning, and maintenance solutions for offices, retail stores, and commercial buildings.',
    overview:
      'Commercial properties need reliable security, consistent cleanliness, and responsive maintenance to protect assets, impress customers, and support operations. We serve offices, retail stores, shopping centers, and commercial buildings with tailored solutions that scale from single-location setups to multi-site deployments.',
    solutions: [
      {
        title: 'CCTV Surveillance',
        description:
          'Multi-camera systems with remote monitoring for retail loss prevention and office security.',
        serviceSlug: 'cctv-surveillance',
      },
      {
        title: 'Access Control',
        description:
          'Card-based and biometric entry management for offices and restricted areas.',
        serviceSlug: 'smart-door-systems',
      },
      {
        title: 'Commercial Cleaning',
        description:
          'Scheduled cleaning for offices, restrooms, and common areas to maintain a professional environment.',
        serviceSlug: 'cleaning-services',
      },
      {
        title: 'Maintenance Contracts',
        description:
          'Annual maintenance covering all installed systems with priority support.',
        serviceSlug: 'maintenance-support',
      },
    ],
    seoTitle: 'Commercial Security & Facility Solutions | Emigos Solutions',
    seoDescription:
      'CCTV, access control, cleaning, and maintenance solutions for commercial properties in Hyderabad.',
    published: true,
  },
  {
    slug: 'residential',
    name: 'Residential Sector',
    shortName: 'Residential',
    icon: Home,
    tagline: 'Safe, smart, and clean homes.',
    description:
      'Home security, smart door systems, cleaning, and pest control for apartments and individual houses.',
    overview:
      'Your home should be safe, comfortable, and clean. We provide residential solutions including CCTV cameras, smart door locks, home cleaning, and pest control. Whether you live in an apartment or an independent house, we tailor our services to your space and budget.',
    solutions: [
      {
        title: 'Home CCTV',
        description:
          'Affordable camera setups with mobile monitoring for apartments and houses.',
        serviceSlug: 'cctv-surveillance',
      },
      {
        title: 'Smart Door Locks',
        description:
          'Keyless entry with fingerprint, PIN, and smartphone unlocking for front doors.',
        serviceSlug: 'smart-door-systems',
      },
      {
        title: 'Home Cleaning',
        description:
          'Deep cleaning and regular maintenance for kitchens, bathrooms, and living spaces.',
        serviceSlug: 'cleaning-services',
      },
      {
        title: 'Pest Control',
        description:
          'Termite treatment, cockroach control, and general pest prevention for homes.',
        serviceSlug: 'pest-control',
      },
    ],
    seoTitle: 'Residential Security & Home Services | Emigos Solutions',
    seoDescription:
      'Home CCTV, smart door locks, cleaning, and pest control services for apartments and houses in Hyderabad.',
    published: true,
  },
  {
    slug: 'industrial',
    name: 'Industrial Sector',
    shortName: 'Industrial',
    icon: Factory,
    tagline: 'Built for demanding environments.',
    description:
      'Heavy-duty surveillance, solar energy, industrial cleaning, and maintenance for factories and warehouses.',
    overview:
      'Industrial facilities operate in demanding environments that require robust solutions. We provide industrial-grade CCTV systems, solar installations to reduce energy costs, specialized cleaning for warehouses and factories, and maintenance contracts that keep operations running with minimal downtime.',
    solutions: [
      {
        title: 'Industrial Surveillance',
        description:
          'Wide-area camera coverage with PTZ cameras and perimeter monitoring for factories and warehouses.',
        serviceSlug: 'cctv-surveillance',
      },
      {
        title: 'Solar Energy',
        description:
          'Rooftop solar installations to reduce electricity costs for industrial facilities.',
        serviceSlug: 'solar-solutions',
      },
      {
        title: 'Industrial Cleaning',
        description:
          'Equipment cleaning, floor scrubbing, and post-construction cleanup for industrial spaces.',
        serviceSlug: 'cleaning-services',
      },
      {
        title: 'Equipment Maintenance',
        description:
          'Preventive maintenance and on-call repair for all installed security and energy systems.',
        serviceSlug: 'maintenance-support',
      },
    ],
    seoTitle: 'Industrial Security & Energy Solutions | Emigos Solutions',
    seoDescription:
      'CCTV, solar energy, industrial cleaning, and maintenance for factories and warehouses in Hyderabad.',
    published: true,
  },
];

export const publishedIndustries = industries.filter((i) => i.published);

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
