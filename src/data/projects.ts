export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  description: string;
  image: string;
  isSample: boolean;
  published: boolean;
}

export const projects: Project[] = [
  {
    slug: 'sample-cctv-commercial-installation',
    title: 'Commercial CCTV Surveillance Installation',
    category: 'Security',
    location: 'Hyderabad',
    scope: 'Multi-camera surveillance system for a commercial property.',
    description:
      'A demonstration project showing a comprehensive CCTV surveillance setup covering entry points, common areas, and critical zones for a commercial property. Includes dome and bullet cameras with remote monitoring capability.',
    image:
      'https://images.pexels.com/photos/37591155/pexels-photo-37591155.jpeg?auto=compress&cs=tinysrgb&w=1920',
    isSample: true,
    published: true,
  },
  {
    slug: 'sample-smart-door-residential',
    title: 'Residential Smart Door System',
    category: 'Security',
    location: 'Secunderabad',
    scope: 'Smart door lock installation with fingerprint and remote access.',
    description:
      'A demonstration project featuring smart door lock installation with fingerprint, PIN, and smartphone-based access control for a residential property, enhancing home security with keyless entry.',
    image:
      'https://images.pexels.com/photos/6689288/pexels-photo-6689288.jpeg?auto=compress&cs=tinysrgb&w=1920',
    isSample: true,
    published: true,
  },
  {
    slug: 'sample-rooftop-solar-installation',
    title: 'Rooftop Solar Panel Installation',
    category: 'Energy',
    location: 'Hyderabad',
    scope: 'Grid-tied solar panel system for a residential building.',
    description:
      'A demonstration project showing a rooftop solar panel installation designed to reduce electricity costs and move toward energy independence. Includes high-efficiency panels and inverter setup.',
    image:
      'https://images.pexels.com/photos/29206488/pexels-photo-29206488.jpeg?auto=compress&cs=tinysrgb&w=1920',
    isSample: true,
    published: true,
  },
  {
    slug: 'sample-office-cleaning-service',
    title: 'Office Deep Cleaning Service',
    category: 'Facility Management',
    location: 'Hyderabad',
    scope: 'Complete deep cleaning for a commercial office space.',
    description:
      'A demonstration project showing a professional deep cleaning service for a commercial office, including floor care, glass cleaning, sanitization, and restroom maintenance.',
    image:
      'https://images.pexels.com/photos/36303748/pexels-photo-36303748.jpeg?auto=compress&cs=tinysrgb&w=1920',
    isSample: true,
    published: true,
  },
  {
    slug: 'sample-pest-control-treatment',
    title: 'Pest Control Treatment',
    category: 'Facility Management',
    location: 'Hyderabad',
    scope: 'Comprehensive pest control treatment for a residential property.',
    description:
      'A demonstration project showing a professional pest control treatment including termite protection, cockroach control, and preventive measures for a residential property.',
    image:
      'https://images.pexels.com/photos/4176549/pexels-photo-4176549.jpeg?auto=compress&cs=tinysrgb&w=1920',
    isSample: true,
    published: true,
  },
  {
    slug: 'sample-speaker-audio-installation',
    title: 'Public Address Speaker System Installation',
    category: 'Security',
    location: 'Secunderabad',
    scope: 'PA system installation for a commercial space.',
    description:
      'A demonstration project showing a public address and speaker system installation for a commercial space, including amplifier setup, speaker placement, and audio zone configuration.',
    image:
      'https://images.pexels.com/photos/27577330/pexels-photo-27577330.jpeg?auto=compress&cs=tinysrgb&w=1920',
    isSample: true,
    published: true,
  },
];

export const publishedProjects = projects.filter((p) => p.published);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
