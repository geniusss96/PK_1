import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

export default function Navbar({ onCartOpen }) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [badgePop, setBadgePop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (totalItems > 0) {
      setBadgePop(true);
      const t = setTimeout(() => setBadgePop(false), 400);
      return () => clearTimeout(t);
    }
  }, [totalItems]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Рестораны' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <Zap size={18} fill="currentColor" />
            </div>
            <span className="navbar__logo-text">Food<span>Rush</span></span>
          </Link>

          <div className="navbar__links">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__link${location.pathname === link.to ? ' navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar__actions">
            <button
              className="navbar__cart-btn"
              onClick={onCartOpen}
              aria-label="Открыть корзину"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className={`navbar__badge${badgePop ? ' navbar__badge--pop' : ''}`}>
                  {totalItems}
                </span>
              )}
            </button>

            <button
              className="navbar__mobile-toggle"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Меню"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__content glass-strong">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="mobile-drawer__link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="mobile-drawer__cart btn-primary"
            onClick={() => { onCartOpen(); setMobileOpen(false); }}
          >
            <ShoppingCart size={18} />
            Корзина {totalItems > 0 && `(${totalItems})`}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-drawer__overlay" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
}
