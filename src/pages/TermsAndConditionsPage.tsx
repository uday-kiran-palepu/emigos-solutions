import { LegalPage } from '@/components/common/LegalPage';
import { company } from '@/data/company';

const bannerImage = 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      seoTitle="Terms & Conditions | Emigos Solutions"
      seoDescription="Read the terms and conditions of using the services and website of Emigos Solutions."
      canonicalPath="/terms-and-conditions"
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
      bannerImage={bannerImage}
      lastUpdated="October 2025"
      disclaimer="This is a standard terms and conditions template. It should be reviewed and approved by legal counsel before publication."
      sections={[
        {
          heading: '1. Acceptance of Terms',
          body: <p>By accessing and using the {company.name} website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>,
        },
        {
          heading: '2. Services',
          body: <p>{company.name} provides security, energy, and facility management services including CCTV surveillance, smart door systems, solar solutions, cleaning, pest control, and maintenance support. Specific service terms will be outlined in individual service agreements.</p>,
        },
        {
          heading: '3. Quotations and Pricing',
          body: <p>All quotations are valid for 30 days from the date of issue. Prices may vary based on site conditions, material costs, and project scope. Final pricing will be confirmed in writing before work begins.</p>,
        },
        {
          heading: '4. Warranties',
          body: <p>Product warranties are provided by manufacturers and vary by product. Installation workmanship is warranted by {company.name}. Specific warranty terms will be included in your service agreement.</p>,
        },
        {
          heading: '5. Limitation of Liability',
          body: <p>{company.name} shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>,
        },
        {
          heading: '6. Intellectual Property',
          body: <p>All content on this website, including text, graphics, logos, and design elements, is the property of {company.name} and may not be reproduced without written permission.</p>,
        },
        {
          heading: '7. Contact',
          body: <p>For questions about these terms, please contact us at {company.email} or call {company.phones[0]}.</p>,
        },
      ]}
    />
  );
}
