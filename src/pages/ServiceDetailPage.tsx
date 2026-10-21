import { useParams, Navigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Check, ArrowRight, Phone, ImageIcon } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { ButtonLink, ButtonExternal, CTASection } from '@/components/common/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import { getService, getRelatedServices } from '@/data/services';
import { company } from '@/data/company';

const serviceDetailImages: Record<string, string> = {
  'cctv-surveillance': 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'smart-door-systems': 'https://images.pexels.com/photos/6689288/pexels-photo-6689288.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'solar-solutions': 'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'cleaning-services': 'https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'pest-control': 'https://images.pexels.com/photos/4176541/pexels-photo-4176541.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'maintenance-support': 'https://images.pexels.com/photos/38145576/pexels-photo-38145576.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

function ServiceImage({ slug, heroImage, name }: { slug: string; heroImage: string; name: string }) {
  const [imgError, setImgError] = useState(false);
  const detailImage = serviceDetailImages[slug] || heroImage;

  if (imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-2" />
          <p className="text-sm text-slate-400">{name} image</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={detailImage}
      alt={`${name} — professional service by Emigos Solutions`}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setImgError(true)}
    />
  );
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service || !service.published) {
    return <Navigate to="/services" replace />;
  }

  const related = getRelatedServices(service.relatedServices);

  return (
    <>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        canonicalPath={`/services/${service.slug}`}
        ogType="article"
      />

      <PageBanner
        eyebrow={service.category}
        title={service.name}
        description={service.tagline}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.shortName },
        ]}
        image={service.heroImage}
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink to="/contact" variant="primary">
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </ButtonLink>
          <ButtonExternal href={`tel:${company.phones[0].replace(/\s/g, '')}`} variant="secondary">
            <Phone className="w-4 h-4" />
            Call Us
          </ButtonExternal>
        </div>
      </PageBanner>

      {/* Overview + Service Image */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="heading-3 text-slate-900">Overview</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">{service.overview}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="h-64 lg:h-80 rounded-2xl overflow-hidden card relative group">
                <ServiceImage slug={service.slug} heroImage={service.heroImage} name={service.shortName} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <div className="space-y-12">
            {service.sections.map((section, i) => (
              <ScrollReveal key={section.heading} delay={i * 0.1}>
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-4">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{section.heading}</h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-slate-600 leading-relaxed">{section.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="heading-2 text-slate-900 mb-4 text-center">Key Features</h2>
            <p className="text-slate-500 text-lg text-center max-w-2xl mx-auto mb-12">
              Everything included with our {service.shortName.toLowerCase()} service.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.05}>
                <div className="card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-success-50 flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-success-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="heading-2 text-slate-900 mb-4 text-center">Applications</h2>
            <p className="text-slate-500 text-lg text-center max-w-2xl mx-auto mb-12">
              Where our {service.shortName.toLowerCase()} make a difference.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.applications.map((app, i) => (
              <ScrollReveal key={app} delay={i * 0.05}>
                <div className="flex items-center gap-3 card p-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-slate-700 text-sm">{app}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-page max-w-3xl">
            <ScrollReveal>
              <h2 className="heading-2 text-slate-900 mb-4 text-center">Frequently Asked Questions</h2>
              <p className="text-slate-500 text-lg text-center mb-12">
                Common questions about our {service.shortName.toLowerCase()}.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <details className="card p-6 group">
                    <summary className="cursor-pointer font-semibold text-slate-900 flex items-center justify-between list-none">
                      {faq.question}
                      <span className="text-primary-600 text-2xl transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="text-slate-600 mt-4 leading-relaxed">{faq.answer}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-page">
            <ScrollReveal>
              <h2 className="heading-2 text-slate-900 mb-4 text-center">Related Services</h2>
              <p className="text-slate-500 text-lg text-center mb-12">
                Services that complement our {service.shortName.toLowerCase()}.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel, i) => {
                const RelIcon = rel.icon;
                return (
                  <ScrollReveal key={rel.slug} delay={i * 0.1}>
                    <Link to={`/services/${rel.slug}`} className="group card-hover p-6 h-full flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                        <RelIcon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                          {rel.shortName}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{rel.shortDescription}</p>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready for ${service.shortName.toLowerCase()}?`}
        description="Contact us today for a free consultation and quote. Our team is ready to help."
        buttonText="Get a Quote"
        buttonTo="/contact"
      />
    </>
  );
}
