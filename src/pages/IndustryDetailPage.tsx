import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { CTASection } from '@/components/common/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import { getIndustry } from '@/data/industries';
import { getService } from '@/data/services';

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustry(slug) : undefined;

  if (!industry || !industry.published) {
    return <Navigate to="/industries" replace />;
  }

  const bannerImage = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920';

  return (
    <>
      <SEO
        title={industry.seoTitle}
        description={industry.seoDescription}
        canonicalPath={`/industries/${industry.slug}`}
      />

      <PageBanner
        eyebrow={industry.tagline}
        title={industry.name}
        description={industry.overview}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/industries' },
          { label: industry.shortName },
        ]}
        image={bannerImage}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="heading-2 text-slate-900 mb-4">Solutions for this sector</h2>
            <p className="text-slate-500 text-lg max-w-2xl mb-12">
              We provide the following services tailored to {industry.shortName.toLowerCase()} clients.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {industry.solutions.map((solution, i) => {
              const service = getService(solution.serviceSlug);
              const ServiceIcon = service?.icon;
              return (
                <ScrollReveal key={solution.title} delay={i * 0.1}>
                  <Link to={`/services/${solution.serviceSlug}`} className="group card-hover p-6 h-full flex items-start gap-4">
                    {ServiceIcon && (
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                        <ServiceIcon className="w-6 h-6 text-primary-600" />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">{solution.description}</p>
                      <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <ScrollReveal>
            <h2 className="heading-2 text-slate-900 mb-12 text-center">Why {industry.shortName} clients choose us</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Tailored Solutions', desc: 'We customize every service to fit the specific needs of your sector.' },
              { title: 'Experienced Team', desc: 'Our technicians have experience working across residential, commercial, and industrial sites.' },
              { title: 'Ongoing Support', desc: 'We provide maintenance and support to keep your systems running long after installation.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-secondary-50 flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-secondary-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Serving the ${industry.shortName.toLowerCase()} sector`}
        description="Contact us to discuss how we can help with your specific needs."
      />
    </>
  );
}
