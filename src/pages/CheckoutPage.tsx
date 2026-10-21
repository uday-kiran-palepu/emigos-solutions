import { Navigate } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';

export function CheckoutPage() {
  // Direct online payment is not enabled. The cart page handles WhatsApp enquiries.
  // Redirect any accidental visits to the cart page.
  return (
    <>
      <SEO
        title="Checkout | Emigos Solutions"
        description="Complete your enquiry via WhatsApp."
        canonicalPath="/checkout"
      />
      <Navigate to="/cart" replace />
    </>
  );
}
