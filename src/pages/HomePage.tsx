import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  MapPin,
  TrendingUp,
  Users,
  Sparkles,
  ImageIcon,
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { ButtonLink } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { ServiceOrbit } from '@/components/three/ServiceOrbit';
import { CountUp } from '@/components/common/CountUp';
import { CertificationsTimeline } from '@/components/common/CertificationsTimeline';
import { OurCustomers } from '@/components/common/OurCustomers';
import { company } from '@/data/company';
import { publishedServices } from '@/data/services';
import { publishedIndustries } from '@/data/industries';
import { useState } from 'react';

export function HomePage() {
  return (
    <>
      <SEO
        title="Emigos Solutions | CCTV, Smart Doors, Solar & Cleaning Services in Hyderabad"
        description="Expert CCTV surveillance, smart door systems, solar solutions, and professional cleaning services powered by cutting-edge technology in Hyderabad."
        canonicalPath="/"
      />

      {/* Two-column Hero with Service Orbit */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30 pt-3 sm:pt-4 lg:pt-5 pb-10 lg:pb-12">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent pointer-events-none" />

        <div className="container-page relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT: Text content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs sm:text-sm font-medium mb-3 sm:mb-4"
              >
                <ShieldCheck className="w-4 h-4 text-primary-600" />
                Trusted Security & Facility Services in Hyderabad
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-[1.1] tracking-tight text-balance"
              >
                Your safety, <span className="gradient-text">powered by technology</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 mb-6 max-w-xl leading-relaxed"
              >
                Expert CCTV surveillance, smart door systems, solar solutions, and professional cleaning services for homes and businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <ButtonLink to="/contact" variant="primary">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </ButtonLink>
                <ButtonLink to="/services" variant="secondary">
                  Our Services
                </ButtonLink>
                <ButtonLink to="/shop" variant="accent">
                  Shop Products
                </ButtonLink>
              </motion.div>
            </div>

            {/* RIGHT: Service orbit animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center"
            >
              <ServiceOrbit />
            </motion.div>
          </div>

          {/* Center-aligned Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 lg:mt-10 pt-6 border-t border-slate-200">
            {company.stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 text-center">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 text-center font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Short Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs sm:text-sm font-medium mb-3.5">
                About Emigos Solutions
              </div>
              <h2 className="heading-2 text-slate-900 mb-4 text-balance">
                A technology-driven company you can trust
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                {company.about.intro}
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6">
                {company.about.story}
              </p>
              <ButtonLink to="/about" variant="secondary">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </ButtonLink>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {company.about.values.slice(0, 4).map((value) => (
                  <div key={value.title} className="card p-5 sm:p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                      <Cpu className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">{value.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Solutions for Every Need — Card Layout with Images & Compact Typography */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Solutions for every need"
              description="From security to energy to facility management, we provide comprehensive services backed by technology and expertise."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {publishedServices.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group card-hover p-4 sm:p-5 h-full flex flex-col rounded-2xl"
                >
                  {/* Consistent Image Container */}
                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 mb-4 relative">
                    <img
                      src={service.heroImage.replace('w=1920', 'w=600')}
                      alt={`${service.shortName} service`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-medium text-slate-700 shadow-xs">
                      {service.category}
                    </span>
                  </div>

                  {/* Balanced Text Typography */}
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    {service.shortName}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-2 sm:line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <span className="inline-flex items-center gap-1 text-primary-600 text-xs sm:text-sm font-medium group-hover:gap-2 transition-all mt-auto pt-2 border-t border-slate-100">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <ButtonLink to="/services" variant="secondary">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Certifications & Quality Recognition — Redesigned Alternating Timeline Layout */}
      <CertificationsTimeline
        eyebrow="Certifications & Quality"
        title="Recognized by our commitment and quality"
        description="Our verified certifications, government commendations, and quality registrations reflect our dedication to delivering reliable, professional services."
        bgColor="bg-white"
      />

      {/* Our Customers — Replaces Awards with Horizontal Smooth Scrolling Marquee */}
      <OurCustomers />

      {/* Featured Highlights */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Featured Highlights"
              title="Why customers choose Emigos"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {company.featuredHighlights.map((highlight, i) => {
              const icons = [TrendingUp, ShieldCheck, Users, Cpu];
              const Icon = icons[i] || Sparkles;
              return (
                <ScrollReveal key={highlight.title} delay={i * 0.1}>
                  <div className="card-hover p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-3.5">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-base mb-1.5">{highlight.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Tailored solutions for every sector"
              description="We serve residential, commercial, and industrial clients with solutions designed for their specific needs."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {publishedIndustries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <ScrollReveal key={industry.slug} delay={i * 0.12}>
                  <Link to={`/industries/${industry.slug}`} className="group card-hover p-6 sm:p-7 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-secondary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1.5 group-hover:text-secondary-600 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-secondary-600 text-xs sm:text-sm font-medium group-hover:gap-2 transition-all mt-auto pt-2">
                      Explore solutions
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* India Presence with Location Images */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs sm:text-sm font-medium mb-3.5">
                <MapPin className="w-4 h-4" />
                Service Coverage
              </div>
              <h2 className="heading-2 text-slate-900 mb-4 text-balance">
                {company.indiaPresence.headline}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                {company.indiaPresence.description}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm italic">{company.indiaPresence.note}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {company.indiaPresence.cities.map((city) => (
                  <CityCard key={city.name} name={city.name} image={city.image} primary={city.primary} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Working Approach */}
      <section className="section-padding bg-slate-50 border-t border-slate-100">
        <div className="container-page">
          <ScrollReveal>
            <SectionHeading
              eyebrow="How We Work"
              title="A proven approach to every project"
              description="We follow a structured process to ensure every project meets our quality standards."
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: '01', title: 'Consultation', desc: 'We assess your needs and recommend the right solution.' },
              { step: '02', title: 'Design', desc: 'We plan the system design tailored to your property.' },
              { step: '03', title: 'Installation', desc: 'Our team installs and configures everything professionally.' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and support keep things running.' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="relative card p-5 sm:p-6 h-full">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-200 mb-2">{item.step}</div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* Ready to Get Started CTA removed per Requirement 6 */}
    </>
  );
}

function CityCard({ name, image, primary }: { name: string; image: string; primary: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md group ${
        primary
          ? 'border-primary-300 ring-2 ring-primary-200'
          : 'border-slate-200 hover:border-primary-200'
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-7 h-7 text-slate-300" />
          </div>
        ) : (
          <img
            src={image}
            alt={`${name} — service coverage area`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className={`p-2.5 flex items-center gap-1.5 ${primary ? 'bg-primary-50' : 'bg-white'}`}>
        <MapPin className={`w-3.5 h-3.5 ${primary ? 'text-primary-600' : 'text-slate-400'}`} />
        <span className={`font-medium text-xs sm:text-sm ${primary ? 'text-primary-700' : 'text-slate-600'}`}>{name}</span>
        {primary && (
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-primary-600 text-white font-medium ml-auto">HQ</span>
        )}
      </div>
    </div>
  );
}
