import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { navigation } from '@/data/navigation';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Emigos Solutions"
        description="The page you are looking for could not be found. Browse our services or contact us for assistance."
        canonicalPath="/404"
      />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-primary-50/30 relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container-page relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-8xl sm:text-9xl font-bold gradient-text mb-4"
            >
              404
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-2 text-slate-900 mb-4"
            >
              Page not found
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-lg mb-10"
            >
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Link to="/" className="btn-primary">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6"
            >
              <p className="text-sm text-slate-400 mb-4">Or explore our services:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {navigation
                  .filter((item) => item.label !== 'Home')
                  .map((item) => (
                    <Link key={item.to} to={item.to}
                      className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
