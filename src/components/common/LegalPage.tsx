import { SEO } from '@/components/common/SEO';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import type { ReactNode } from 'react';
import type { Crumb } from '@/components/common/Breadcrumbs';

interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  breadcrumbs: Crumb[];
  bannerImage: string;
  lastUpdated: string;
  sections: LegalSection[];
  disclaimer?: string;
}

export function LegalPage({
  title, seoTitle, seoDescription, canonicalPath, breadcrumbs, bannerImage, lastUpdated, sections, disclaimer,
}: LegalPageProps) {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} canonicalPath={canonicalPath} />
      <PageBanner
        title={title}
        description={seoDescription}
        breadcrumbs={breadcrumbs}
        image={bannerImage}
      />

      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <ScrollReveal>
            <p className="text-slate-400 mb-8">Last updated: {lastUpdated}</p>
            <div className="space-y-8 text-slate-600 leading-relaxed">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">{section.heading}</h2>
                  <div>{section.body}</div>
                </div>
              ))}
            </div>

            {disclaimer && (
              <div className="mt-8 p-4 rounded-xl bg-accent-50 border border-accent-200">
                <p className="text-sm text-accent-700">{disclaimer}</p>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
