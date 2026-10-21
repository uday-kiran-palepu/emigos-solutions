import { LegalPage } from '@/components/common/LegalPage';
import { company } from '@/data/company';

const bannerImage = 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function GuidelinesPage() {
  return (
    <LegalPage
      title="Guidelines"
      seoTitle="Customer Guidelines | Emigos Solutions"
      seoDescription="Guidelines for customers using Emigos Solutions services and products, including site preparation and safety instructions."
      canonicalPath="/guidelines"
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Guidelines' }]}
      bannerImage={bannerImage}
      lastUpdated="October 2025"
      disclaimer="These guidelines are provided for informational purposes. Specific instructions may vary by service and will be communicated during your consultation."
      sections={[
        {
          heading: '1. Site Preparation',
          body: <p>Before our team arrives for installation, please ensure the work area is accessible and clear of obstructions. For CCTV installations, identify the areas you want covered and make sure mounting surfaces are structurally sound.</p>,
        },
        {
          heading: '2. Safety During Installation',
          body: <p>Please keep children and pets away from the work area during installation. Our technicians will need access to electrical panels, network connections, and mounting areas. Follow any specific safety instructions provided by our team.</p>,
        },
        {
          heading: '3. Product Usage',
          body: <p>For smart door locks and CCTV systems, we provide a complete walkthrough after installation. Please follow the user manual for daily operation. Avoid forcing mechanisms or exposing electronic components to water unless rated as waterproof.</p>,
        },
        {
          heading: '4. Maintenance Tips',
          body: <p>To keep your systems performing optimally: clean CCTV camera lenses monthly with a soft dry cloth, replace smart lock batteries when low-battery alerts appear, and schedule solar panel cleaning every 3-6 months.</p>,
        },
        {
          heading: '5. Warranty Claims',
          body: <p>For warranty claims, retain your invoice and warranty card. Contact us at {company.email} with details of the issue. Do not attempt to repair or modify products yourself, as this may void the warranty.</p>,
        },
        {
          heading: '6. Support',
          body: <p>For technical support or service-related questions, call us at {company.phones[0]} or email {company.email}. Our support team is available during business hours, Monday to Saturday, 9 AM to 7 PM.</p>,
        },
      ]}
    />
  );
}
