import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { ButtonLink, CTASection } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import { publishedServices } from '@/data/services';

const servicesBannerImage = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Services');

  const categories = ['All Services', ...Array.from(new Set(publishedServices.map((s) => s.category)))];

  const filteredServices =
    selectedCategory === 'All Services'
      ? publishedServices
      : publishedServices.filter((s) => s.category === selectedCategory);

  return (
    <>
      <SEO
        title="Our Services | Emigos Solutions"
        description="Professional services including CCTV installation, industrial cleaning, smart doors, solar solutions, pest control, and maintenance support in Hyderabad."
        canonicalPath="/services"
      />

      <PageBanner
        eyebrow="What We Offer"
        title={<>Comprehensive services for <span className="text-primary-300">security, energy & facilities</span></>}
        description="From CCTV surveillance to solar energy, smart doors to professional cleaning, we deliver technology-backed solutions for homes and businesses across Hyderabad."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        image={servicesBannerImage}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Full Portfolio"
              title="Explore our services"
              description="Click any service to learn more about what we offer and how we can help."
            />

            {/* Category Filter Buttons below description, neatly centered with consistent spacing */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8 max-w-4xl mx-auto">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25 scale-102 ring-2 ring-primary-600 ring-offset-2'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, i) => (
                <motion.div
                  key={service.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="h-full"
                >
                  <Link to={`/services/${service.slug}`} className="group card-hover p-4 sm:p-5 h-full flex flex-col rounded-2xl">
                    <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 mb-4 relative">
                      <img
                        src={service.heroImage.replace('w=1920', 'w=600')}
                        alt={`${service.shortName} service`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 right-2.5 text-[11px] font-medium text-slate-700 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs shadow-xs">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                      {service.shortName}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary-600 text-xs sm:text-sm font-medium group-hover:gap-2 transition-all mt-auto pt-2 border-t border-slate-100">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Integrated Solutions"
              title="Services that work together"
              description="Many of our clients combine services for comprehensive protection and facility management."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Security Package', desc: 'Combine CCTV surveillance with smart door systems for complete property security.', services: ['CCTV Surveillance', 'Smart Door Systems'] },
              { title: 'Facility Package', desc: 'Bundle cleaning and pest control services for a complete facility maintenance plan.', services: ['Cleaning Services', 'Pest Control'] },
              { title: 'Energy + Support', desc: 'Install solar panels with an annual maintenance contract for worry-free energy.', services: ['Solar Solutions', 'Maintenance Support'] },
            ].map((pkg, i) => (
              <ScrollReveal key={pkg.title} delay={i * 0.1}>
                <div className="card p-6 h-full">
                  <h3 className="font-semibold text-slate-900 mb-2">{pkg.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{pkg.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.services.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <ButtonLink to="/contact" variant="primary">
              Request a Custom Package
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="Contact us for a free consultation. We'll assess your needs and recommend the right solution."
      />
    </>
  );
}
