import { company } from '@/data/company';
import type { CartItem } from '@/context/CartContext';

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

function getProductUrl(slug: string): string {
  const base = company.website || (typeof window !== 'undefined' ? window.location.origin : '');
  return `${base}/shop?product=${slug}`;
}

export function buildWhatsAppMessage(items: CartItem[], totalPrice: number): string {
  const lines: string[] = [];
  lines.push('Hello Emigos Solutions Team,');
  lines.push('');
  lines.push('I would like to enquire about the following products:');
  lines.push('');

  items.forEach((item, index) => {
    const p = item.product;
    const num = index + 1;
    lines.push(`${num}. ${p.name}`);
    lines.push(`Product link: ${getProductUrl(p.slug)}`);
    lines.push(`Quantity: ${item.quantity}`);
    if (p.price > 0) {
      lines.push(`Unit price: ${formatPrice(p.price)}`);
      lines.push(`Line total: ${formatPrice(p.price * item.quantity)}`);
    } else {
      lines.push('Unit price: Please quote');
    }
    lines.push('');
  });

  if (totalPrice > 0) {
    lines.push(`Estimated subtotal: ${formatPrice(totalPrice)}`);
    lines.push('');
  }

  lines.push('Please confirm the final quotation, product availability, delivery charges, and payment process. Kindly share the payment link after confirming the details.');
  lines.push('');
  lines.push('Thank you.');

  return lines.join('\n');
}

export function buildWhatsAppUrl(items: CartItem[], totalPrice: number): string {
  const phone = company.whatsapp.replace(/[^0-9]/g, '');
  const message = buildWhatsAppMessage(items, totalPrice);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
