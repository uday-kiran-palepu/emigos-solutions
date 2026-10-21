export interface Customer {
  id: string;
  name: string;
  category: string;
  logo: string;
  isWide?: boolean;
}

export const approvedCustomers: Customer[] = [
  {
    id: 'sushant-university',
    name: 'Sushant University',
    category: 'Higher Education Institution',
    logo: '/images/customers/sushant-university.png',
    isWide: true,
  },
  {
    id: 'bsf',
    name: 'Border Security Force (BSF)',
    category: 'Defense & Surveillance Projects',
    logo: '/images/customers/bsf-logo.svg',
  },
  {
    id: 'viet-eng',
    name: 'Visakha Institute of Engg & Tech',
    category: 'Campus Technology Client',
    logo: '/images/customers/viet-logo.svg',
  },
  {
    id: 'hitesh-realty',
    name: 'Hitesh Realty',
    category: 'Commercial Properties',
    logo: '/images/customers/hitesh-realty.svg',
  },
  {
    id: 'kr-group',
    name: 'KR Group 101 Companies',
    category: 'Enterprise Client',
    logo: '/images/customers/kr-group.svg',
  },
  {
    id: 'founders-counseling',
    name: 'Founders Career Counseling',
    category: 'Institutional Client',
    logo: '/images/customers/founders-counseling.svg',
  },
  {
    id: 'the-park-hotel',
    name: 'The Park Hotels Hyderabad',
    category: 'Hospitality Partner',
    logo: '/images/customers/the-park-hotel.svg',
  },
];
