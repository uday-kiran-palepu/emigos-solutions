import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageTransition } from '@/components/motion/PageTransition';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { IndustriesPage } from '@/pages/IndustriesPage';
import { IndustryDetailPage } from '@/pages/IndustryDetailPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ShopPage } from '@/pages/ShopPage';
import { CartPage } from '@/pages/CartPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsAndConditionsPage } from '@/pages/TermsAndConditionsPage';
import { RefundPolicyPage } from '@/pages/RefundPolicyPage';
import { GuidelinesPage } from '@/pages/GuidelinesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/industries/:slug" element={<IndustryDetailPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
      <Route path="/refund-policy" element={<RefundPolicyPage />} />
      <Route path="/guidelines" element={<GuidelinesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function App() {
  return (
    <Layout>
      <PageTransition>
        <AppRoutes />
      </PageTransition>
    </Layout>
  );
}

export default App;
