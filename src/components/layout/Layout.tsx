import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { company } from '@/data/company';

export function Layout({ children }: { children?: ReactNode }) {
  const whatsappLink = `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`;
  const phoneLink = `tel:${company.phones[0].replace(/\s/g, '')}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-20">{children ?? <Outlet />}</main>
      <Footer />

      {/* Floating action buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a
          href={phoneLink}
          className="w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/30 flex items-center justify-center hover:bg-primary-700 transition-colors active:scale-95"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-success-500 text-white shadow-lg shadow-success-500/30 flex items-center justify-center hover:bg-success-600 transition-colors active:scale-95"
          aria-label="WhatsApp chat"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
