import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag, ArrowLeft, MessageCircle, Info } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { PageBanner } from '@/components/common/PageBanner';
import { useCart } from '@/context/CartContext';
import { buildWhatsAppUrl, formatPrice } from '@/utils/whatsapp';

const cartBannerImage = 'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  const whatsappUrl = items.length > 0 ? buildWhatsAppUrl(items, totalPrice) : '';

  return (
    <>
      <SEO
        title="Your Cart | Emigos Solutions"
        description="Review the items in your shopping cart and send an enquiry via WhatsApp."
        canonicalPath="/cart"
      />

      <PageBanner
        eyebrow="Shopping Cart"
        title="Your Cart"
        description={totalItems > 0 ? `You have ${totalItems} item${totalItems > 1 ? 's' : ''} in your cart.` : 'Your cart is currently empty.'}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Shop', to: '/shop' }, { label: 'Cart' }]}
        image={cartBannerImage}
      />

      <section className="section-padding bg-white">
        <div className="container-page max-w-5xl">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-slate-400" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Your cart is empty</h2>
              <p className="text-slate-500 mb-8">Browse our products and add items to your cart.</p>
              <Link to="/shop" className="btn-primary">
                Browse Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-slate-900">Items ({totalItems})</h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-slate-400 hover:text-error-600 transition-colors"
                  >
                    Clear all
                  </button>
                </div>

                {/* Enquiry notice */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-accent-50 border border-accent-200">
                  <Info className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    This cart initiates an <strong>enquiry and quotation request</strong>, not a direct order.
                    Our team will confirm availability, pricing, and delivery before sharing a payment link.
                  </p>
                </div>

                {items.map((item) => (
                  <div key={item.product.id} className="card p-4 flex gap-4">
                    <Link to={`/shop?product=${item.product.slug}`} className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 block">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <Link to={`/shop?product=${item.product.slug}`}>
                            <h3 className="font-semibold text-slate-900 text-sm hover:text-primary-600 transition-colors">{item.product.name}</h3>
                          </Link>
                          <span className="text-xs text-slate-400">{item.product.category}</span>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-slate-400 hover:text-error-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center font-medium text-slate-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        {item.product.price > 0 ? (
                          <span className="font-bold text-slate-900">{formatPrice(item.product.price * item.quantity)}</span>
                        ) : (
                          <span className="text-sm text-slate-400 italic">Quote on request</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 transition-colors mt-4">
                  <ArrowLeft className="w-4 h-4" />
                  Continue shopping
                </Link>
              </div>

              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="card p-6 sticky top-24">
                  <h3 className="font-semibold text-slate-900 mb-4">Enquiry Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>Items ({totalItems})</span>
                      <span className="font-medium text-slate-900">
                        {totalPrice > 0 ? formatPrice(totalPrice) : '—'}
                      </span>
                    </div>
                    {totalPrice > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Estimated subtotal</span>
                        <span className="font-medium text-slate-900">{formatPrice(totalPrice)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-600">
                      <span>Delivery</span>
                      <span className="text-slate-400">Confirmed by team</span>
                    </div>
                  </div>
                  <div className="border-t border-slate-200 mt-4 pt-4">
                    {totalPrice > 0 && (
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-semibold text-slate-900">Est. Total</span>
                        <span className="text-2xl font-bold text-slate-900">{formatPrice(totalPrice)}</span>
                      </div>
                    )}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Final pricing, delivery charges, and availability will be confirmed by our team via WhatsApp.
                    </p>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full mt-2"
                    style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Proceed via WhatsApp
                  </a>
                  <Link to="/contact" className="btn-secondary w-full mt-3">
                    Contact Us Instead
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
