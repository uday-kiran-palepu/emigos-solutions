import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ShoppingCart } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { MobileNavigation } from './MobileNavigation';
import { useCart } from '@/context/CartContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname === to || location.pathname.startsWith(to + '/');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3'
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container-page flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group py-0.5">
            <img
              src="/images/brand/emigos-logo.png"
              alt="Emigos Solutions"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.to)
                          ? 'text-primary-600'
                          : 'text-slate-600 hover:text-primary-600'
                      }`}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl p-2 shadow-xl">
                        <NavLink
                          to={item.to}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition-colors"
                        >
                          All Services
                        </NavLink>
                        <div className="h-px bg-slate-100 my-1" />
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            className={({ isActive: active }) =>
                              `block px-3 py-2 rounded-lg text-sm transition-colors ${
                                active
                                  ? 'bg-primary-50 text-primary-600'
                                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
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
                  className={({ isActive: active }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/cart" className="relative p-2 text-slate-600 hover:text-primary-600 transition-colors" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/contact" className="btn-primary text-sm">
              Get a Quote
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <Link to="/cart" className="relative p-2 text-slate-600" aria-label="Cart">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden p-2 text-slate-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
