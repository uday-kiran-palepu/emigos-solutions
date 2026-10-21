import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import { company } from '@/data/company';
import { publishedServices } from '@/data/services';
import { SocialLinks } from '@/components/common/SocialLinks';

const contactBannerImage = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920';

type FormStatus = 'idle' | 'submitting' | 'success';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const resetForm = () => {
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  const whatsappLink = `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <SEO
        title="Contact Us | Emigos Solutions"
        description="Contact Emigos Solutions for CCTV, smart doors, solar, cleaning, pest control, and maintenance services in Hyderabad. Call +91 7207086111."
        canonicalPath="/contact"
      />

      <PageBanner
        eyebrow="Get in Touch"
        title={<>Let's talk about <span className="text-primary-300">your project</span></>}
        description="Contact us for a free consultation. Our team will assess your needs and recommend the right solution."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
        image={contactBannerImage}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="heading-3 text-slate-900 mb-2">Contact Information</h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Reach out through any of the following channels. We respond to all inquiries within 24 hours.
                </p>

                <div className="space-y-4">
                  {company.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-4 card p-4 hover:shadow-md transition-shadow group">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">Phone</div>
                        <div className="text-slate-900 font-medium group-hover:text-primary-600 transition-colors">{phone}</div>
                      </div>
                    </a>
                  ))}

                  <a href={`mailto:${company.email}`} className="flex items-center gap-4 card p-4 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Email</div>
                      <div className="text-slate-900 font-medium group-hover:text-secondary-600 transition-colors">{company.email}</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 card p-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Location</div>
                      <div className="text-slate-900 font-medium">{company.location}</div>
                    </div>
                  </div>

                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 card p-4 hover:shadow-md transition-shadow group">
                    <div className="w-12 h-12 rounded-xl bg-success-50 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-6 h-6 text-success-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">WhatsApp</div>
                      <div className="text-slate-900 font-medium group-hover:text-success-600 transition-colors">Chat with us</div>
                    </div>
                  </a>
                </div>

                <div className="card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <span className="text-sm text-slate-400">Business Hours</span>
                  </div>
                  <p className="text-slate-700 text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-slate-400 text-xs mt-1">Sunday: Emergency support &amp; pre-scheduled site visits available.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="card p-6 sm:p-8">
                <h2 className="heading-3 text-slate-900 mb-2">Send us a message</h2>
                <p className="text-slate-500 text-sm mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>

                {status === 'success' ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-success-50 text-success-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="font-semibold text-slate-900">{form.name || 'valued client'}</span>. Our specialist team has received your inquiry and will contact you within 24 hours.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hi Emigos Solutions, I submitted an inquiry for ${form.service || 'your services'}. Name: ${form.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2.5 px-5"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp Now
                      </a>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="btn-secondary text-sm py-2.5 px-5"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name <span className="text-error-500">*</span></label>
                      <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 outline-none transition-colors ${errors.name ? 'border-error-300' : 'border-slate-200 focus:border-primary-400'}`}
                        placeholder="Your full name" />
                      {errors.name && <p className="text-error-600 text-xs mt-1.5">{errors.name}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email <span className="text-error-500">*</span></label>
                        <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 outline-none transition-colors ${errors.email ? 'border-error-300' : 'border-slate-200 focus:border-primary-400'}`}
                          placeholder="you@example.com" />
                        {errors.email && <p className="text-error-600 text-xs mt-1.5">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone <span className="text-error-500">*</span></label>
                        <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 outline-none transition-colors ${errors.phone ? 'border-error-300' : 'border-slate-200 focus:border-primary-400'}`}
                          placeholder="+91 XXXXXXXXXX" />
                        {errors.phone && <p className="text-error-600 text-xs mt-1.5">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service of Interest</label>
                      <select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 outline-none focus:border-primary-400 transition-colors">
                        <option value="">Select a service (optional)</option>
                        {publishedServices.map((service) => (
                          <option key={service.slug} value={service.slug} className="bg-white">{service.shortName}</option>
                        ))}
                        <option value="other" className="bg-white">Other / Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message <span className="text-error-500">*</span></label>
                      <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 outline-none transition-colors resize-none ${errors.message ? 'border-error-300' : 'border-slate-200 focus:border-primary-400'}`}
                        placeholder="Tell us about your requirements..." />
                      {errors.message && <p className="text-error-600 text-xs mt-1.5">{errors.message}</p>}
                    </div>

                    <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                      {status === 'submitting' ? 'Sending...' : (<><Send className="w-4 h-4" /> Send Message</>)}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Follow & Connect Section */}
      <section className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="container-page text-center">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto mb-8">
              <span className="text-xs uppercase tracking-wider text-primary-600 font-bold px-3 py-1 rounded-full bg-primary-50 border border-primary-200 inline-block mb-3">
                Social Network
              </span>
              <h2 className="heading-3 text-slate-900 mb-3">
                Follow &amp; Connect
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Stay updated with my latest insights, projects, and industry trends across social platforms.
              </p>
            </div>

            <div className="flex justify-center">
              <SocialLinks variant="light" size="lg" className="p-3 bg-white rounded-2xl shadow-xs border border-slate-200/80" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
