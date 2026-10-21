import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, Star, Check, Filter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { PageBanner } from '@/components/common/PageBanner';
import { products, productCategories, productFallbackImage } from '@/data/products';
import { useCart } from '@/context/CartContext';

const shopBannerImage = 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=1920';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
}

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [imgError, setImgError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const imageSrc = imgError || showFallback ? productFallbackImage : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className="w-full h-full object-cover transition-transform group-hover:scale-105"
      loading="lazy"
      onError={() => {
        if (!imgError) setImgError(true);
        else setShowFallback(true);
      }}
    />
  );
}

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addItem } = useCart();

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addItem(product);
      setAddedId(productId);
      setTimeout(() => setAddedId(null), 2000);
    }
  };

  return (
    <>
      <SEO
        title="Shop Products | Emigos Solutions"
        description="Browse CCTV cameras, smart door locks, solar panels, cleaning services, and pest control packages from Emigos Solutions. Add items to your cart and enquire via WhatsApp."
        canonicalPath="/shop"
      />

      <PageBanner
        eyebrow="Online Shop"
        title={<>Browse our <span className="text-primary-300">products</span></>}
        description="Quality security, energy, and facility products with expert installation support. Add items to your cart and send an enquiry via WhatsApp."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Shop' }]}
        image={shopBannerImage}
      />

      <section className="section-padding bg-white">
        <div className="container-page">
          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Filter className="w-4 h-4" />
              Filter:
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-primary-200'
              }`}
            >
              All Products
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:border-primary-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.05}>
                <div className="card-hover overflow-hidden h-full flex flex-col group">
                  <div className="aspect-square overflow-hidden bg-slate-100">
                    <ProductImage src={product.image} alt={product.name} />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-xs font-medium text-primary-600 px-2 py-0.5 rounded-full bg-primary-50 mb-2 self-start">
                      {product.category}
                    </span>
                    <h3 className="font-semibold text-slate-900 mb-1">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-3.5 h-3.5 fill-accent-400 text-accent-400" />
                      <span className="text-xs text-slate-500">{product.rating} rating</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3 flex-1">{product.shortDescription}</p>

                    <div className="space-y-1.5 mb-4">
                      {product.features.slice(0, 2).map((f) => (
                        <div key={f} className="flex items-center gap-1.5 text-xs text-slate-500">
                          <Check className="w-3.5 h-3.5 text-success-600" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-auto">
                      <span className="text-xl font-bold text-slate-900">{formatPrice(product.price)}</span>
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-all active:scale-95"
                      >
                        {addedId === product.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            Added
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4" />
                            Add
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              No products found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Toast notification */}
      <AnimatePresence>
        {addedId && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-20 left-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium shadow-xl"
          >
            <Check className="w-4 h-4 text-success-400" />
            Item added to cart
            <Link to="/cart" className="ml-2 text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5" />
              View cart
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
