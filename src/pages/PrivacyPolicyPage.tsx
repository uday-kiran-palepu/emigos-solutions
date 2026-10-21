import { LegalPage } from '@/components/common/LegalPage';
import { company } from '@/data/company';

const bannerImage = 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      seoTitle="Privacy Policy | Emigos Solutions"
      seoDescription="Read the privacy policy of Emigos Solutions to understand how we handle your data."
      canonicalPath="/privacy-policy"
      breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      bannerImage={bannerImage}
      lastUpdated="October 2025"
      disclaimer="This is a standard privacy policy template. It should be reviewed and approved by legal counsel before publication."
      sections={[
        {
          heading: '1. Introduction',
          body: <p>{company.name} ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you use our website or services.</p>,
        },
        {
          heading: '2. Information We Collect',
          body: (
            <>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number when you contact us through our forms</li>
                <li>Service preferences and project details you share with us</li>
                <li>Basic browsing information such as pages visited and time spent on our site</li>
              </ul>
            </>
          ),
        },
        {
          heading: '3. How We Use Your Information',
          body: (
            <>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send you relevant updates about our services (only with your consent)</li>
                <li>Improve our website and service offerings</li>
              </ul>
            </>
          ),
        },
        {
          heading: '4. Information Sharing',
          body: <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, under strict confidentiality agreements.</p>,
        },
        {
          heading: '5. Data Security',
          body: <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>,
        },
        {
          heading: '6. Your Rights',
          body: <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at {company.email}.</p>,
        },
        {
          heading: '7. Contact Us',
          body: <p>If you have questions about this privacy policy, please contact us at {company.email} or call {company.phones[0]}.</p>,
        },
      ]}
    />
  );
}
