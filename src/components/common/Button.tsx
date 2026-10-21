import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export function ButtonLink({ to, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 active:scale-95';
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/25',
    secondary: 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400',
    accent: 'bg-accent-500 text-white font-semibold hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/25',
  };
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export function ButtonExternal({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 active:scale-95';
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/25',
    secondary: 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400',
    accent: 'bg-accent-500 text-white font-semibold hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/25',
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonTo?: string;
}

export function CTASection({
  title = 'Ready to get started?',
  description = 'Contact us today for a free consultation. Our team will assess your needs and recommend the right solution.',
  buttonText = 'Contact Us',
  buttonTo = '/contact',
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-primary-100 text-lg mb-8 text-balance">{description}</p>
            <Link to={buttonTo} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-700 font-medium hover:bg-primary-50 transition-all duration-300 active:scale-95">
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
