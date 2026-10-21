import { SectionHeading } from '@/components/common/SectionHeading';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { approvedCustomers } from '@/data/customers';

interface OurCustomersProps {
  className?: string;
}

export function OurCustomers({ className = '' }: OurCustomersProps) {
  // Duplicate customers array for seamless continuous loop
  const marqueeItems = [...approvedCustomers, ...approvedCustomers];

  return (
    <section className={`py-8 sm:py-10 md:py-12 bg-slate-50 overflow-hidden ${className}`}>
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Customers"
            title="Trusted by institutions & businesses"
            description="We are proud to protect and power leading universities, commercial properties, and organizations with our specialized security and facility solutions."
          />
        </ScrollReveal>

        {/* Continuous horizontal scrolling marquee with compact height */}
        <div className="relative mt-6 sm:mt-8 overflow-hidden py-2">
          {/* Edge gradient fade masks for smooth entrance/exit */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

          <div className="animate-marquee flex gap-5 sm:gap-6 items-center py-2">
            {marqueeItems.map((customer, index) => (
              <div
                key={`${customer.id}-${index}`}
                className="group relative flex-shrink-0 h-16 sm:h-20 w-44 sm:w-56 px-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center transition-all duration-300 hover:shadow-md hover:border-primary-300"
                title={`${customer.name} — ${customer.category}`}
              >
                <img
                  src={customer.logo}
                  alt={`${customer.name} logo`}
                  className="max-h-9 sm:max-h-10 w-auto max-w-[135px] sm:max-w-[165px] object-contain transition-all duration-300 opacity-100 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Supporting credibility note */}
        <div className="text-center mt-4 sm:mt-5">
          <p className="text-xs text-slate-500">
            Verified institutional clients &amp; commercial partners served across Hyderabad and regional sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
