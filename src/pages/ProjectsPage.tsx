import { SEO } from '@/components/common/SEO';
import { CTASection } from '@/components/common/Button';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import { publishedProjects } from '@/data/projects';
import { MapPin } from 'lucide-react';

const projectsBannerImage = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects | Emigos Solutions"
        description="Explore sample projects and demonstrations of our security, solar, and facility service capabilities in Hyderabad."
        canonicalPath="/projects"
      />

      <PageBanner
        eyebrow="Our Work"
        title={<>Projects & <span className="text-primary-300">case studies</span></>}
        description="We've completed 40+ projects across security, energy, and facility services. Below are demonstration projects showing the types of work we can deliver."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
        image={projectsBannerImage}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          {publishedProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {publishedProjects.map((project, i) => (
                  <ScrollReveal key={project.slug} delay={i * 0.1}>
                    <div className="card-hover overflow-hidden h-full flex flex-col group">
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={`${project.title} — sample project by Emigos Solutions`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {project.isSample && (
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-accent-500 text-white text-xs font-medium shadow-md">
                            Sample Project
                          </span>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs font-medium text-primary-600 px-2.5 py-1 rounded-full bg-primary-50 mb-3 self-start">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                        <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
          ) : (
            <ScrollReveal>
              <div className="card p-12 sm:p-16 text-center max-w-2xl mx-auto">
                <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📁</span>
                </div>
                <h2 className="heading-3 text-slate-900 mb-3">Project showcase coming soon</h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  We have completed over 40 projects across CCTV installation, smart door systems, solar energy,
                  cleaning, and pest control. Detailed case studies with verified client information, project scope,
                  and outcomes will be published here once approved.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-400 italic">
                  Content awaiting client approval
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <CTASection
        title="Start your project with us"
        description="Contact us to discuss your needs. We'll help you plan and execute a solution that works."
      />
    </>
  );
}
