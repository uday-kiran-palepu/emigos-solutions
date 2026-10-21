import {
  Cctv,
  DoorClosed,
  SunMedium,
  Sparkles,
  Bug,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceSection {
  heading: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  icon: LucideIcon;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  overview: string;
  sections: ServiceSection[];
  features: ServiceFeature[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
  published: boolean;
}

export const services: Service[] = [
  {
    slug: 'cctv-surveillance',
    name: 'CCTV Surveillance Systems',
    shortName: 'CCTV Surveillance',
    category: 'Security',
    icon: Cctv,
    tagline: 'See everything. Miss nothing.',
    shortDescription:
      'Professional CCTV camera installation, video door phones, and biometric access systems for homes and businesses.',
    heroImage:
      'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Our CCTV surveillance solutions provide round-the-clock monitoring and recording for residential, commercial, and industrial properties. We install high-definition cameras, video door phones, and biometric systems tailored to your security requirements. From single-camera home setups to multi-camera enterprise networks, we handle design, installation, configuration, and ongoing support.',
    sections: [
      {
        heading: 'Comprehensive Camera Solutions',
        body: 'We offer a range of camera types including dome cameras, bullet cameras, PTZ (pan-tilt-zoom) cameras, and wireless IP cameras. Each installation is planned to maximize coverage and eliminate blind spots. Our cameras support night vision, motion detection, and remote viewing via mobile apps so you can monitor your property from anywhere.',
      },
      {
        heading: 'Video Door Phones & Intercoms',
        body: 'See and speak with visitors before opening the door. Our video door phone systems combine a weather-resistant outdoor camera with an indoor monitor, giving you visual and audio communication at your entrance. We install both single-unit and multi-apartment intercom configurations.',
      },
      {
        heading: 'Biometric Access Control',
        body: 'Replace keys with fingerprints. Our biometric systems provide secure, keyless entry for offices, restricted areas, and residential complexes. Features include attendance logging, multiple user management, and integration with existing security infrastructure.',
      },
    ],
    features: [
      {
        title: 'HD & 4K Cameras',
        description: 'Crystal-clear footage with high-resolution cameras that capture every detail.',
      },
      {
        title: 'Night Vision',
        description: 'Infrared and low-light cameras that record clearly even in complete darkness.',
      },
      {
        title: 'Remote Monitoring',
        description: 'View live feeds and recordings from your smartphone, tablet, or computer.',
      },
      {
        title: 'Motion Detection Alerts',
        description: 'Get instant notifications when motion is detected in monitored areas.',
      },
      {
        title: 'Video Door Phones',
        description: 'Two-way audio and video communication with visitors at your door.',
      },
      {
        title: 'Biometric Systems',
        description: 'Fingerprint-based access control for secure, keyless entry.',
      },
    ],
    applications: [
      'Residential homes and apartments',
      'Retail stores and shopping centers',
      'Office buildings and corporate campuses',
      'Industrial facilities and warehouses',
      'Schools and educational institutions',
      'Hospitals and healthcare facilities',
    ],
    faqs: [
      {
        question: 'How many cameras do I need for my property?',
        answer:
          'The number depends on your property size, layout, and security goals. We conduct a site assessment to determine optimal camera placement and coverage. Most homes need 4-8 cameras, while businesses typically require 8-16 or more.',
      },
      {
        question: 'Can I view my cameras remotely?',
        answer:
          'Yes. All our camera systems support remote viewing via mobile apps and web browsers, so you can monitor your property from anywhere with an internet connection.',
      },
      {
        question: 'Do you provide installation and setup?',
        answer:
          'Absolutely. We handle the complete installation including cabling, mounting, configuration, and testing. We also provide a walkthrough so you know how to use your system.',
      },
      {
        question: 'What warranty do you offer?',
        answer:
          'Our installations come with a service warranty. Product warranties vary by manufacturer and typically range from 1 to 2 years. Contact us for specific warranty details.',
      },
    ],
    relatedServices: ['smart-door-systems', 'maintenance-support'],
    seoTitle: 'CCTV Surveillance Systems in Hyderabad | Emigos Solutions',
    seoDescription:
      'Professional CCTV camera installation, video door phones, and biometric access systems in Hyderabad. HD cameras, night vision, and remote monitoring by Emigos Solutions.',
    published: true,
  },
  {
    slug: 'smart-door-systems',
    name: 'Smart Door Systems',
    shortName: 'Smart Doors',
    category: 'Security',
    icon: DoorClosed,
    tagline: 'Your entrance, redefined.',
    shortDescription:
      'Smart door locks, automated doors, and access control systems for modern homes and businesses.',
    heroImage:
      'https://images.pexels.com/photos/6689288/pexels-photo-6689288.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Upgrade your entrance with smart door systems that combine security, convenience, and modern design. We install smart locks, automated doors, and access control systems that let you manage entry from your phone, fingerprint, or key card. Whether it\u2019s a single front door or a multi-entrance office building, we have the right solution.',
    sections: [
      {
        heading: 'Smart Door Locks',
        body: 'Keyless entry is no longer a luxury. Our smart locks support fingerprint, PIN code, RFID card, and smartphone unlocking. Features include temporary access codes for guests, activity logs, and auto-lock timers. We work with leading brands to ensure durability and reliability.',
      },
      {
        heading: 'Automated Doors',
        body: 'Sliding, swing, and folding automated doors for commercial and residential use. Our automated door systems include motion sensors, safety mechanisms, and remote control operation. Ideal for retail entrances, office lobbies, and accessibility-compliant access points.',
      },
      {
        heading: 'Access Control Systems',
        body: 'Manage who enters your building and when. Our access control systems support card-based, biometric, and mobile credentials. Features include time-based access rules, visitor management, and integration with CCTV and alarm systems for comprehensive security.',
      },
    ],
    features: [
      {
        title: 'Fingerprint Unlock',
        description: 'Fast, secure biometric access that eliminates the need for keys.',
      },
      {
        title: 'Remote Access',
        description: 'Lock and unlock doors from your smartphone, from anywhere.',
      },
      {
        title: 'Temporary Codes',
        description: 'Grant time-limited access to guests, delivery, or service staff.',
      },
      {
        title: 'Activity Logs',
        description: 'Track who entered and when with detailed access history.',
      },
      {
        title: 'Auto-Lock',
        description: 'Doors automatically lock after a set time for peace of mind.',
      },
      {
        title: 'Tamper Alerts',
        description: 'Instant notifications if someone attempts to force the door.',
      },
    ],
    applications: [
      'Residential front doors and gates',
      'Office buildings and co-working spaces',
      'Retail stores and showrooms',
      'Hotels and serviced apartments',
      'Gated communities and apartment complexes',
      'Server rooms and restricted areas',
    ],
    faqs: [
      {
        question: 'What happens if the battery dies on a smart lock?',
        answer:
          'Most smart locks provide low-battery warnings well in advance. Many models also include a backup key override or an emergency power port for charging via USB. We recommend replacing batteries when you receive the first low-battery alert.',
      },
      {
        question: 'Can smart door locks work with my existing door?',
        answer:
          'In most cases, yes. Smart locks are designed to fit standard door preparations. We assess your door during the site visit and recommend compatible models. Some doors may need minor modifications.',
      },
      {
        question: 'Do you offer access control for multiple doors?',
        answer:
          'Yes. We design and install multi-door access control systems for offices, apartments, and commercial buildings. These systems centralize management so you can control all doors from a single interface.',
      },
    ],
    relatedServices: ['cctv-surveillance', 'maintenance-support'],
    seoTitle: 'Smart Door Systems & Access Control in Hyderabad | Emigos Solutions',
    seoDescription:
      'Smart door locks, automated doors, and access control systems in Hyderabad. Fingerprint, keypad, and smartphone entry solutions by Emigos Solutions.',
    published: true,
  },
  {
    slug: 'solar-solutions',
    name: 'Solar Energy Solutions',
    shortName: 'Solar Solutions',
    category: 'Energy',
    icon: SunMedium,
    tagline: 'Power your future with the sun.',
    shortDescription:
      'Solar panel installation, maintenance, and energy solutions for homes and businesses looking to reduce electricity costs.',
    heroImage:
      'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Harness the power of the sun with our solar energy solutions. We design, install, and maintain solar panel systems for residential rooftops, commercial buildings, and industrial facilities. Our goal is to help you reduce electricity bills and move toward energy independence with reliable, efficient solar technology.',
    sections: [
      {
        heading: 'Rooftop Solar Installation',
        body: 'We install grid-tied and off-grid solar systems on residential and commercial rooftops. Our process includes site survey, energy audit, system design, panel installation, inverter setup, and grid connection. We use high-efficiency panels and reliable inverters to maximize energy output.',
      },
      {
        heading: 'Solar Maintenance & Cleaning',
        body: 'Keep your solar panels performing at their best. Dust, debris, and bird droppings can reduce panel efficiency by 15-25%. Our maintenance service includes panel cleaning, electrical inspection, performance monitoring, and component repair. Regular maintenance extends system life and maintains energy output.',
      },
      {
        heading: 'Energy Consultation',
        body: 'Not sure what size system you need? We provide energy audits and consultation to help you understand your consumption, potential savings, and the right system size for your needs. We also advise on government incentives and financing options where available.',
      },
    ],
    features: [
      {
        title: 'High-Efficiency Panels',
        description: 'Monocrystalline and polycrystalline panels with proven energy output.',
      },
      {
        title: 'Grid-Tied & Off-Grid',
        description: 'Systems that connect to the grid or operate independently with battery backup.',
      },
      {
        title: 'Net Metering Support',
        description: 'We help you set up net metering to sell excess power back to the grid.',
      },
      {
        title: 'Panel Cleaning',
        description: 'Professional cleaning service to maintain optimal panel efficiency.',
      },
      {
        title: 'Performance Monitoring',
        description: 'Track your energy production in real-time with monitoring apps.',
      },
      {
        title: 'Warranty & Support',
        description: 'Product warranties and ongoing maintenance to protect your investment.',
      },
    ],
    applications: [
      'Residential rooftops and homes',
      'Commercial buildings and offices',
      'Industrial facilities and factories',
      'Schools and institutions',
      'Agricultural pumps and rural electrification',
      'Retail stores and shopping complexes',
    ],
    faqs: [
      {
        question: 'How much can I save on electricity with solar?',
        answer:
          'Savings depend on your system size, energy consumption, and sunlight availability. Most residential customers see a 50-80% reduction in electricity bills. We provide a detailed savings estimate during your consultation.',
      },
      {
        question: 'How long does installation take?',
        answer:
          'A typical residential installation takes 2-3 days after system design and approvals. Commercial installations may take 1-2 weeks depending on system size and complexity.',
      },
      {
        question: 'Do solar panels work during power cuts?',
        answer:
          'Grid-tied systems shut off during power cuts for safety. If you need power during outages, we recommend a hybrid or off-grid system with battery backup.',
      },
      {
        question: 'How often should solar panels be cleaned?',
        answer:
          'We recommend cleaning every 3-6 months depending on local dust and pollution levels. Regular cleaning can improve efficiency by 15-25%.',
      },
    ],
    relatedServices: ['maintenance-support', 'cleaning-services'],
    seoTitle: 'Solar Panel Installation in Hyderabad | Emigos Solutions',
    seoDescription:
      'Solar energy solutions including panel installation, maintenance, and cleaning in Hyderabad. Reduce electricity bills with rooftop solar by Emigos Solutions.',
    published: true,
  },
  {
    slug: 'cleaning-services',
    name: 'Professional Cleaning Services',
    shortName: 'Cleaning Services',
    category: 'Facility Management',
    icon: Sparkles,
    tagline: 'Spotless spaces, every time.',
    shortDescription:
      'Professional cleaning for homes, offices, and industrial spaces including deep cleaning, floor care, and sanitization.',
    heroImage:
      'https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Our professional cleaning services cover residential, commercial, and industrial spaces. We use quality cleaning products and trained staff to deliver thorough, reliable results. From one-time deep cleaning to scheduled maintenance, we tailor our service to your space and requirements.',
    sections: [
      {
        heading: 'Home & Apartment Cleaning',
        body: 'Keep your living space fresh and hygienic. Our home cleaning service includes dusting, mopping, kitchen and bathroom sanitization, glass cleaning, and more. We offer one-time deep cleaning and regular scheduled visits. Our team uses safe, effective products and respects your home.',
      },
      {
        heading: 'Office & Commercial Cleaning',
        body: 'A clean workplace boosts productivity and makes the right impression. We provide daily, weekly, and monthly cleaning for offices, retail spaces, and commercial buildings. Services include floor care, restroom sanitization, waste management, and common area maintenance.',
      },
      {
        heading: 'Industrial & Specialized Cleaning',
        body: 'We handle cleaning for warehouses, factories, and industrial facilities. This includes high-area cleaning, equipment cleaning, floor scrubbing, and post-construction cleanup. Our team follows safety protocols and uses industrial-grade equipment for thorough results.',
      },
    ],
    features: [
      {
        title: 'Deep Cleaning',
        description: 'Comprehensive cleaning that reaches every corner of your space.',
      },
      {
        title: 'Floor Care',
        description: 'Tile, marble, granite, and wooden floor cleaning and polishing.',
      },
      {
        title: 'Sanitization',
        description: 'Disinfection of high-touch surfaces for a hygienic environment.',
      },
      {
        title: 'Glass & Window Cleaning',
        description: 'Streak-free cleaning for windows, partitions, and glass facades.',
      },
      {
        title: 'Trained Staff',
        description: 'Background-verified, trained cleaning professionals.',
      },
      {
        title: 'Eco-Friendly Products',
        description: 'Safe, effective cleaning products that protect your health and surfaces.',
      },
    ],
    applications: [
      'Homes and apartments',
      'Offices and co-working spaces',
      'Retail stores and malls',
      'Schools and educational institutions',
      'Hospitals and clinics',
      'Warehouses and factories',
    ],
    faqs: [
      {
        question: 'Do you bring your own cleaning supplies and equipment?',
        answer:
          'Yes. Our team arrives with all necessary cleaning products, tools, and equipment. You do not need to provide anything unless you have specific product preferences.',
      },
      {
        question: 'How long does a deep cleaning take?',
        answer:
          'A standard 2-3 BHK home deep cleaning takes 4-6 hours. Larger spaces or commercial properties may take longer. We provide a time estimate when you book.',
      },
      {
        question: 'Can I schedule regular cleaning visits?',
        answer:
          'Absolutely. We offer daily, weekly, bi-weekly, and monthly cleaning schedules for homes and offices. Contact us to set up a plan that works for you.',
      },
    ],
    relatedServices: ['pest-control', 'maintenance-support'],
    seoTitle: 'Professional Cleaning Services in Hyderabad | Emigos Solutions',
    seoDescription:
      'Home, office, and industrial cleaning services in Hyderabad. Deep cleaning, floor care, sanitization, and glass cleaning by Emigos Solutions.',
    published: true,
  },
  {
    slug: 'pest-control',
    name: 'Pest Control Services',
    shortName: 'Pest Control',
    category: 'Facility Management',
    icon: Bug,
    tagline: 'Unwanted guests? Not anymore.',
    shortDescription:
      'Effective pest control for homes and businesses covering termites, cockroaches, rodents, and general pest management.',
    heroImage:
      'https://images.pexels.com/photos/4176541/pexels-photo-4176541.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Protect your property from pests with our professional pest control services. We handle termite treatment, cockroach control, rodent management, and general pest prevention for residential and commercial properties. Our treatments are safe for families and pets while being effective against pests.',
    sections: [
      {
        heading: 'Termite Treatment',
        body: 'Termites cause structural damage that can be expensive to repair. Our termite treatment includes inspection, soil treatment, wood treatment, and barrier creation to protect your property. We use proven chemicals and techniques that create long-lasting protection against subterranean and drywood termites.',
      },
      {
        heading: 'Cockroach & Insect Control',
        body: 'Cockroaches, ants, bedbugs, and other insects are more than a nuisance \u2014 they spread disease. Our treatment targets nesting areas and entry points with gel bait, spray treatment, and residual barriers. We provide both one-time treatment and ongoing prevention plans.',
      },
      {
        heading: 'Rodent Management',
        body: 'Rats and mice damage property, contaminate food, and spread disease. Our rodent management includes trapping, baiting, entry-point sealing, and ongoing monitoring. We identify how rodents enter your property and seal those access points to prevent re-entry.',
      },
    ],
    features: [
      {
        title: 'Termite Protection',
        description: 'Comprehensive termite treatment with long-lasting barrier protection.',
      },
      {
        title: 'Safe Chemicals',
        description: 'Products that are effective against pests but safe for family and pets.',
      },
      {
        title: 'Cockroach & Ant Control',
        description: 'Targeted gel bait and spray treatment for complete insect elimination.',
      },
      {
        title: 'Rodent Trapping',
        description: 'Strategic trapping and baiting with entry-point sealing.',
      },
      {
        title: 'Bedbug Treatment',
        description: 'Thorough heat and chemical treatment for bedbug infestations.',
      },
      {
        title: 'Preventive Plans',
        description: 'Regular inspections and treatments to keep pests from returning.',
      },
    ],
    applications: [
      'Residential homes and apartments',
      'Restaurants and food service',
      'Hotels and hospitality',
      'Offices and commercial buildings',
      'Warehouses and storage facilities',
      'Schools and healthcare facilities',
    ],
    faqs: [
      {
        question: 'Is the treatment safe for children and pets?',
        answer:
          'Yes. We use products that are approved for residential use and safe when applied according to guidelines. We advise keeping children and pets away from treated areas until they dry, usually 2-4 hours.',
      },
      {
        question: 'How often should pest control be done?',
        answer:
          'For prevention, we recommend quarterly treatments. For active infestations, a follow-up may be needed after 2-3 weeks. Termite treatment provides protection for several years with proper maintenance.',
      },
      {
        question: 'Do I need to leave my home during treatment?',
        answer:
          'For most treatments, you can stay in your home. We may ask you to vacate specific rooms during application and for 2-4 hours after. For extensive treatments, we will advise you in advance.',
      },
    ],
    relatedServices: ['cleaning-services', 'maintenance-support'],
    seoTitle: 'Pest Control Services in Hyderabad | Emigos Solutions',
    seoDescription:
      'Professional pest control for homes and businesses in Hyderabad. Termite treatment, cockroach control, rodent management, and general pest prevention.',
    published: true,
  },
  {
    slug: 'maintenance-support',
    name: 'Maintenance & Support',
    shortName: 'Maintenance',
    category: 'Support',
    icon: Wrench,
    tagline: 'We keep things running.',
    shortDescription:
      'Ongoing maintenance and technical support for all installed systems including CCTV, smart doors, solar panels, and more.',
    heroImage:
      'https://images.pexels.com/photos/38145576/pexels-photo-38145576.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Our maintenance and support service ensures that your installed systems continue to perform reliably. We offer annual maintenance contracts (AMC), on-call repairs, and preventive maintenance for CCTV systems, smart door systems, solar installations, and other equipment we install. Fast response times and experienced technicians keep your systems running.',
    sections: [
      {
        heading: 'Annual Maintenance Contracts',
        body: 'An AMC gives you priority support at predictable costs. Our contracts include scheduled inspections, preventive maintenance, and discounted repair rates. We offer AMCs for individual systems or comprehensive packages covering all your installed equipment.',
      },
      {
        heading: 'On-Call Repair Service',
        body: 'Something not working? Our technicians are available for on-call repairs. We diagnose the issue, provide a transparent estimate, and fix the problem quickly. Most service calls are completed within 24-48 hours.',
      },
      {
        heading: 'Preventive Maintenance',
        body: 'The best repair is the one you never need. Our preventive maintenance includes system health checks, firmware updates, cleaning, and component testing. Regular maintenance catches issues early, extends equipment life, and prevents costly breakdowns.',
      },
    ],
    features: [
      {
        title: 'Priority Response',
        description: 'AMC customers get priority scheduling for all service calls.',
      },
      {
        title: 'Scheduled Inspections',
        description: 'Regular system check-ups to catch issues before they cause problems.',
      },
      {
        title: 'Firmware Updates',
        description: 'Keep your systems current with the latest firmware and software.',
      },
      {
        title: 'Component Replacement',
        description: 'Quick replacement of worn or failed components with quality parts.',
      },
      {
        title: 'Transparent Pricing',
        description: 'Clear estimates before any work begins. No hidden charges.',
      },
      {
        title: 'Multi-System Support',
        description: 'One contract covers all your installed systems for simplicity.',
      },
    ],
    applications: [
      'CCTV and surveillance systems',
      'Smart door and access control systems',
      'Solar panel installations',
      'Office and commercial facilities',
      'Residential complexes and apartments',
      'Industrial facilities',
    ],
    faqs: [
      {
        question: 'What is covered under an AMC?',
        answer:
          'AMCs typically include scheduled inspections, preventive maintenance, firmware updates, and discounted repair rates. Coverage varies by contract type. Contact us for a detailed AMC proposal tailored to your systems.',
      },
      {
        question: 'Do you provide support for systems installed by others?',
        answer:
          'In many cases, yes. We can assess your existing systems and provide maintenance support. Contact us with details of your equipment for an evaluation.',
      },
      {
        question: 'How fast is your response time?',
        answer:
          'AMC customers receive priority response, typically within 24 hours. On-call repairs are usually scheduled within 24-48 hours depending on the issue and location.',
      },
    ],
    relatedServices: ['cctv-surveillance', 'smart-door-systems', 'solar-solutions'],
    seoTitle: 'Maintenance & Support Services in Hyderabad | Emigos Solutions',
    seoDescription:
      'Annual maintenance contracts, on-call repairs, and preventive maintenance for CCTV, smart doors, solar, and security systems in Hyderabad.',
    published: true,
  },
];

export const publishedServices = services.filter((s) => s.published);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => getService(slug))
    .filter((s): s is Service => s !== undefined && s.published);
}
