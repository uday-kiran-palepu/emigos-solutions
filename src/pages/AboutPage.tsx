import { Target, Eye, Users, TrendingUp, Shield, Award, MapPin, ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '@/components/common/SEO';
import { CTASection } from '@/components/common/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import { CountUp } from '@/components/common/CountUp';
import { CertificationsTimeline } from '@/components/common/CertificationsTimeline';
import { OurCustomers } from '@/components/common/OurCustomers';
import { company, publishedTeam } from '@/data/company';

const aboutBannerImage = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Emigos Solutions"
        description="Learn about Emigos Solutions, a technology-driven company in Hyderabad specializing in CCTV surveillance, smart door systems, cleaning services, and solar solutions."
        canonicalPath="/about"
      />

      <PageBanner
        eyebrow="About Emigos Solutions"
        title={<>Technology-driven services, <span className="text-primary-300">trusted by Hyderabad</span></>}
        description={company.about.intro}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        image={aboutBannerImage}
      />

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <ScrollReveal className="lg:col-span-7">
              <h2 className="heading-2 text-slate-900 mb-4">Our Story</h2>
              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>{company.about.story}</p>
                <p>{company.about.approach}</p>
                <p className="text-sm sm:text-base text-slate-500">
                  Today, we serve residential, commercial, and industrial clients across Hyderabad and Secunderabad with a growing portfolio of services. Our commitment to quality and customer satisfaction remains at the core of everything we do.
                </p>
              </div>
            </ScrollReveal>

            {/* Center-aligned Animated Statistics */}
            <ScrollReveal delay={0.2} className="lg:col-span-5">
              <div className="card p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                  {company.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-100 transition-colors hover:bg-primary-50/40"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 text-center">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-slate-500 text-center font-medium leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-slate-50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <ScrollReveal>
              <div className="card p-6 sm:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">Our Mission</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To deliver reliable, technology-backed security and facility services that protect what matters most to our clients. We strive to make modern security and energy solutions accessible to homes and businesses across our community.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="card p-6 sm:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-secondary-50 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">Our Vision</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To become the most trusted provider of integrated security, energy, and facility services in our region, known for quality, innovation, and customer-first values.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs sm:text-sm font-medium mb-3">
                Our Values
              </div>
              <h2 className="heading-2 text-slate-900 mb-3">What drives us forward</h2>
              <p className="text-slate-500 text-sm sm:text-base">
                These principles guide every decision we make and every project we deliver.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {company.about.values.map((value, i) => {
              const icons = [Shield, TrendingUp, Users, Award];
              const Icon = icons[i] || Shield;
              return (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="card-hover p-5 sm:p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3.5">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-base mb-1.5">{value.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications and Credentials — Vertical Timeline Layout */}
      <CertificationsTimeline
        eyebrow="Our Credentials"
        title="Our Credentials & Quality Recognitions"
        description="Recognized by government bodies, defense forces, and quality councils for our commitment to excellence."
        bgColor="bg-slate-50"
      />

      {/* Replace Awards with Our Customers Section */}
      <OurCustomers className="bg-white" />

      {/* India Presence */}
      <section className="section-padding bg-slate-50">
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
                  <AboutCityCard key={city.name} name={city.name} image={city.image} primary={city.primary} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Meet the Team — Suitable Sample People with Consistent Professional Layout */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs sm:text-sm font-medium mb-3">
                <Users className="w-4 h-4" />
                Our Team
              </div>
              <h2 className="heading-2 text-slate-900 mb-3">Meet the People Behind Emigos</h2>
              <p className="text-slate-500 text-sm sm:text-base mb-3">
                Our team of trained professionals brings expertise across security systems, solar technology, cleaning, and maintenance.
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-medium border border-slate-200">
                Sample team profiles shown below until verified staff photographs are finalized.
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publishedTeam.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="card-hover overflow-hidden h-full flex flex-col group rounded-2xl border border-slate-200/90 shadow-sm">
                  {/* Consistent Image Container */}
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={member.image}
                      alt={`${member.name} (Sample Profile) at Emigos Solutions`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-900/75 text-white text-[10px] uppercase tracking-wider font-semibold backdrop-blur-xs">
                      Sample Profile
                    </span>
                  </div>

                  {/* Member Details */}
                  <div className="p-5 flex-1 flex flex-col text-center">
                    <h3 className="font-bold text-slate-900 text-base mb-1">{member.name}</h3>
                    <p className="text-primary-600 text-xs font-semibold mb-2.5">{member.designation}</p>
                    {member.bio && (
                      <p className="text-slate-500 text-xs leading-relaxed flex-1">{member.bio}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to work with us?"
        description="Get in touch to discuss your project. We're ready to help with security, energy, and facility solutions."
      />
    </>
  );
}

function AboutCityCard({ name, image, primary }: { name: string; image: string; primary: boolean }) {
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
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary-600 text-white font-medium ml-auto">HQ</span>
        )}
      </div>
    </div>
  );
}
