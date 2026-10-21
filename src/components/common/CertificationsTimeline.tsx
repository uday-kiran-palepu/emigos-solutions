import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, X, ZoomIn } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { publishedCertifications } from '@/data/company';

interface CertificationsTimelineProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  bgColor?: string;
}

export function CertificationsTimeline({
  eyebrow = 'Certifications & Quality',
  title = 'Recognized by our commitment and quality',
  description = 'Our official certifications, government commendations, and industry recognitions reflect our dedication to dependable, professional services.',
  bgColor = 'bg-white',
}: CertificationsTimelineProps) {
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className={`section-padding ${bgColor} relative`}>
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </ScrollReveal>

        {/* ================= DESKTOP TIMELINE LAYOUT (md and up) ================= */}
        <div className="hidden md:block relative mt-16 max-w-5xl mx-auto">
          {/* Central Connecting Vertical Line */}
          <div
            className="absolute left-1/2 top-4 bottom-8 w-0.5 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-200 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-16">
            {publishedCertifications.map((cert, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={cert.name} className="relative grid grid-cols-2 gap-10 lg:gap-14 items-center">
                  {/* Central Node Badge */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-primary-500 shadow-lg text-primary-600 transition-transform duration-300 hover:scale-110"
                    aria-hidden="true"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-600" />
                  </div>

                  {/* LEFT SIDE: Even = Details (left-aligned), Odd = Image */}
                  <ScrollReveal delay={0.1} className={isEven ? 'pr-6 text-left' : 'pl-0'}>
                    {isEven ? (
                      <DetailsCard cert={cert} />
                    ) : (
                      <ImageCard cert={cert} onPreview={() => setActiveModalImage({ src: cert.image, title: cert.name })} />
                    )}
                  </ScrollReveal>

                  {/* RIGHT SIDE: Even = Image, Odd = Details (left-aligned) */}
                  <ScrollReveal delay={0.2} className={isEven ? 'pl-0' : 'pl-6 text-left'}>
                    {isEven ? (
                      <ImageCard cert={cert} onPreview={() => setActiveModalImage({ src: cert.image, title: cert.name })} />
                    ) : (
                      <DetailsCard cert={cert} />
                    )}
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RESPONSIVE STACKED LAYOUT (small & medium devices) ================= */}
        <div className="block md:hidden mt-12 space-y-8">
          {publishedCertifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={index * 0.1}>
              <div className="space-y-4">
                {/* 1. Certification Image (Displayed directly without decorative containers or borders) */}
                {cert.image ? (
                  <div
                    className="relative max-h-72 w-full flex items-center justify-center cursor-pointer group"
                    onClick={() => setActiveModalImage({ src: cert.image, title: cert.name })}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      className="max-h-72 w-auto object-contain rounded-xl drop-shadow-md transition-transform duration-300 group-hover:scale-102"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-slate-900/80 text-white text-[11px] font-medium flex items-center gap-1 backdrop-blur-xs shadow-sm">
                      <ZoomIn className="w-3 h-3" />
                      View Certificate
                    </div>
                  </div>
                ) : null}

                {/* 2. Left-aligned Details Card */}
                <DetailsCard cert={cert} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificate High-Resolution View */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-1">
                  {activeModalImage.title}
                </h4>
                <button
                  onClick={() => setActiveModalImage(null)}
                  className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                  aria-label="Close certificate modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="max-h-[75vh] overflow-auto flex items-center justify-center bg-slate-50 rounded-xl p-2">
                <img
                  src={activeModalImage.src}
                  alt={activeModalImage.title}
                  className="w-auto h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DetailsCard({
  cert,
}: {
  cert: (typeof publishedCertifications)[number];
}) {
  return (
    <div className="card p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200/90 text-left">
      <div className="flex flex-wrap items-center gap-2 mb-3 justify-start">
        <span className="text-xs font-semibold text-primary-700 px-3 py-1 rounded-full bg-primary-50 border border-primary-200">
          {cert.year}
        </span>
        {cert.org && <span className="text-xs font-medium text-slate-500">{cert.org}</span>}
      </div>

      <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 leading-snug">{cert.name}</h3>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{cert.description}</p>

      {cert.regNumber && (
        <div className="inline-block text-[11px] font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80">
          {cert.regNumber}
        </div>
      )}
    </div>
  );
}

function ImageCard({
  cert,
  onPreview,
}: {
  cert: (typeof publishedCertifications)[number];
  onPreview: () => void;
}) {
  if (!cert.image) {
    return (
      <div className="h-64 lg:h-72 p-6 flex flex-col items-center justify-center text-center rounded-2xl bg-gradient-to-br from-primary-50/70 to-primary-100/40 border border-primary-200/60 shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-3">
          <BadgeCheck className="w-8 h-8 text-primary-600" />
        </div>
        <h4 className="font-bold text-slate-900 text-sm mb-1">{cert.name}</h4>
        <p className="text-xs text-slate-500 max-w-xs">{cert.org}</p>
        <div className="mt-3 text-[11px] font-mono text-primary-700 px-2.5 py-1 rounded bg-white border border-primary-200">
          Official Govt Record
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onPreview}
      className="group relative h-64 lg:h-72 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-102"
      title="Click to view full certificate"
    >
      <img
        src={cert.image}
        alt={`${cert.name} certificate`}
        className="max-h-full max-w-full object-contain rounded-xl drop-shadow-md transition-all duration-300 group-hover:drop-shadow-xl"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span className="px-3 py-1.5 rounded-full bg-slate-900/80 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-xs shadow-lg">
          <ZoomIn className="w-3.5 h-3.5" />
          Click to Zoom
        </span>
      </div>
    </div>
  );
}
