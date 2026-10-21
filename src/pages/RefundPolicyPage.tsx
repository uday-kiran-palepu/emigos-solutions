import { LegalPage } from '@/components/common/LegalPage';
import { company } from '@/data/company';

const bannerImage = 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      seoTitle="Refund Policy | Emigos Solutions"
      seoDescription="Read the refund and cancellation policy of Emigos Solutions for products and services."
      canonicalPath="/refund-policy"
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Refund Policy' }]}
      bannerImage={bannerImage}
      lastUpdated="October 2025"
      disclaimer="This is a standard refund policy template. It should be reviewed and approved by legal counsel before publication."
      sections={[
        {
          heading: '1. Product Refunds',
          body: <p>Products purchased through our shop may be eligible for a refund within 7 days of delivery, provided the product is in its original packaging and unused. Refunds will be processed to the original payment method within 7-10 business days.</p>,
        },
        {
          heading: '2. Damaged or Defective Products',
          body: <p>If you receive a damaged or defective product, please contact us within 48 hours of delivery with photographic evidence. We will arrange a replacement or full refund at no additional cost to you.</p>,
        },
        {
          heading: '3. Service Cancellations',
          body: <p>Service bookings may be cancelled free of charge up to 24 hours before the scheduled appointment. Cancellations made less than 24 hours before the appointment may be subject to a cancellation fee of 25% of the service cost.</p>,
        },
        {
          heading: '4. Non-Refundable Items',
          body: <p>Custom orders, specially procured items, and services that have already been rendered are non-refundable. Installation charges for completed installations are also non-refundable.</p>,
        },
        {
          heading: '5. Refund Process',
          body: <p>To request a refund, please contact us at {company.email} with your order details and reason for the refund request. Our team will review your request and respond within 2-3 business days.</p>,
        },
        {
          heading: '6. Contact Us',
          body: <p>For any questions about our refund policy, please contact us at {company.email} or call {company.phones[0]}.</p>,
        },
      ]}
    />
  );
}
