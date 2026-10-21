import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';
import { company } from '@/data/company';
import { footerNavigation } from '@/data/navigation';
import { SocialLinks } from '@/components/common/SocialLinks';

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Emigos<span className="text-primary-400"> Solutions</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {company.description}
            </p>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Connect With Us
              </p>
              <SocialLinks variant="dark" size="sm" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {footerNavigation.services.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-slate-400 text-sm hover:text-primary-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerNavigation.main.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-slate-400 text-sm hover:text-primary-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-400 text-sm hover:text-primary-400 transition-colors">
                    <Phone className="w-4 h-4 shrink-0" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-slate-400 text-sm hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {company.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col items-center text-center gap-3">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {footerNavigation.legal.map((item) => (
              <Link key={item.to} to={item.to} className="text-slate-500 text-xs sm:text-sm hover:text-primary-400 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
