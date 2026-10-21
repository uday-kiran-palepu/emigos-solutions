import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { CTASection } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import { publishedIndustries } from '@/data/industries';

const industriesBannerImage = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries We Serve | Emigos Solutions"
        description="We serve commercial, residential, and industrial sectors in Hyderabad with tailored security, energy, and facility solutions."
        canonicalPath="/industries"
      />

      <PageBanner
        eyebrow="Sectors We Serve"
        title={<>Solutions for <span className="text-primary-300">every sector</span></>}
        description="We tailor our services to the unique needs of each sector, ensuring the right solutions for every environment."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
        image={industriesBannerImage}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Sectors"
              title="Industries we serve"
              description="Click any sector to see the solutions we provide and how we can help."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {publishedIndustries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <ScrollReveal key={industry.slug} delay={i * 0.15}>
                  <Link to={`/industries/${industry.slug}`} className="group card-hover p-8 h-full block">
                    <div className="w-16 h-16 rounded-2xl bg-secondary-50 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                      <Icon className="w-8 h-8 text-secondary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-secondary-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{industry.description}</p>
                    <span className="inline-flex items-center gap-1 text-secondary-600 text-sm font-medium group-hover:gap-2 transition-all">
                      View solutions
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a solution for your sector?"
        description="Contact us to discuss how we can tailor our services to your specific industry needs."
      />
    </>
  );
}
