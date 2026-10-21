import { motion } from 'framer-motion';
import { useEffect } from 'react';
import type { Crumb } from './Breadcrumbs';
import type { ReactNode } from 'react';

interface PageBannerProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  breadcrumbs?: Crumb[];
  image: string;
  children?: ReactNode;
}

const BASE_URL = 'https://www.emigossolutions.com';

function useBreadcrumbJsonLd(breadcrumbs?: Crumb[], canonicalPath?: string) {
  useEffect(() => {
    const existing = document.getElementById('breadcrumb-jsonld');
    if (existing) existing.remove();

    if (!breadcrumbs || breadcrumbs.length === 0) return;

    const path = canonicalPath ?? window.location.pathname;
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: crumb.to ? `${BASE_URL}${crumb.to}` : `${BASE_URL}${path}`,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-jsonld';
    script.textContent = JSON.stringify(breadcrumbList);
    document.head.appendChild(script);

    return () => {
      const toRemove = document.getElementById('breadcrumb-jsonld');
      if (toRemove) toRemove.remove();
    };
  }, [breadcrumbs, canonicalPath]);
}

export function PageBanner({ eyebrow, title, description, breadcrumbs, image, children }: PageBannerProps) {
  useBreadcrumbJsonLd(breadcrumbs);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[250px] sm:h-[300px] lg:h-[350px]">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-page relative z-10">
            <div className="max-w-3xl">
              {eyebrow && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-medium mb-3.5 backdrop-blur-xs"
                >
                  {eyebrow}
                </motion.div>
              )}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-[1.2] tracking-tight text-balance"
              >
                {title}
              </motion.h1>
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl"
                >
                  {description}
                </motion.p>
              )}
              {children && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6"
                >
                  {children}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
