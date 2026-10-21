import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronDown, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '@/data/navigation';
import { useCart } from '@/context/CartContext';

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const { totalItems } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white border-l border-slate-200 z-50 lg:hidden overflow-y-auto shadow-2xl"
          >
            <div className="flex items-center justify-between p-5 border-b border-slate-200">
              <span className="font-display font-bold text-slate-900">Menu</span>
              <button onClick={onClose} className="p-2 text-slate-600" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-5 space-y-1">
              {navigation.map((item) => {
                if (item.children) {
                  const isExpanded = expandedItem === item.label;
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setExpandedItem(isExpanded ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm font-medium"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="ml-3 mt-1 space-y-1 border-l border-slate-200 pl-3">
                          <NavLink
                            to={item.to}
                            onClick={onClose}
                            className="block px-4 py-2.5 rounded-lg text-sm text-slate-500 hover:text-primary-600 hover:bg-slate-50 transition-colors"
                          >
                            All Services
                          </NavLink>
                          {item.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              onClick={onClose}
                              className={({ isActive }) =>
                                `block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                  isActive ? 'text-primary-600 bg-primary-50' : 'text-slate-500 hover:text-primary-600 hover:bg-slate-50'
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? 'text-primary-600 bg-primary-50' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="pt-3 border-t border-slate-200 mt-3">
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Cart {totalItems > 0 && `(${totalItems})`}
                </Link>
              </div>
              <Link to="/contact" onClick={onClose} className="btn-primary w-full mt-4">
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
