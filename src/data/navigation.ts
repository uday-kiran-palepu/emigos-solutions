import { publishedServices } from './services';
import { publishedIndustries } from './industries';

export interface NavItem {
  label: string;
  to: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: publishedServices.map((service) => ({
      label: service.shortName,
      to: `/services/${service.slug}`,
    })),
  },
  { label: 'Projects', to: '/projects' },
  { label: 'Shop', to: '/shop' },
  { label: 'Contact Us', to: '/contact' },
];

export const footerNavigation = {
  main: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Industries', to: '/industries' },
    { label: 'Projects', to: '/projects' },
    { label: 'Shop', to: '/shop' },
    { label: 'Contact Us', to: '/contact' },
  ],
  services: publishedServices.map((s) => ({
    label: s.shortName,
    to: `/services/${s.slug}`,
  })),
  industries: publishedIndustries.map((i) => ({
    label: i.shortName,
    to: `/industries/${i.slug}`,
  })),
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-and-conditions' },
    { label: 'Refund Policy', to: '/refund-policy' },
    { label: 'Guidelines', to: '/guidelines' },
  ],
};

export const allRoutes: string[] = [
  '/',
  '/about',
  '/services',
  ...publishedServices.map((s) => `/services/${s.slug}`),
  '/industries',
  ...publishedIndustries.map((i) => `/industries/${i.slug}`),
  '/projects',
  '/shop',
  '/cart',
  '/checkout',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/refund-policy',
  '/guidelines',
];
