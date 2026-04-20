import { useState, useMemo, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Truck, ShoppingCart, ChevronRight } from 'lucide-react';
import { restaurants } from '../../data/restaurants';
import { menuItems } from '../../data/menuItems';
import MenuItemCard from '../../components/MenuItemCard/MenuItemCard';
import { useCart } from '../../context/CartContext';
import './RestaurantMenu.css';

export default function RestaurantMenu({ onCartOpen }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurants.find(r => r.id === Number(id));
  const { totalItems, total } = useCart();

  const items = useMemo(
    () => menuItems.filter(m => m.restaurantId === Number(id)),
    [id]
  );

  const categories = useMemo(
    () => [...new Set(items.map(m => m.category))],
    [items]
  );

  const [activeCategory, setActiveCategory] = useState(categories[0] || '');

  const sectionRefs = useRef({});

  const scrollToCategory = (cat) => {
    setActiveCategory(cat);
    const el = sectionRefs.current[cat];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Intersection observer to update active category on scroll
  useEffect(() => {
    if (!categories.length) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.dataset.category);
          }
        });
      },
      { rootMargin: '-120px 0px -60% 0px' }
    );
    categories.forEach(cat => {
      const el = sectionRefs.current[cat];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [categories]);

  if (!restaurant) {
    return (
      <div className="menu-not-found page-enter container">
        <h2>Ресторан не найден</h2>
        <button className="btn-ghost" onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> На главную
        </button>
      </div>
    );
  }

  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = items.filter(i => i.category === cat);
    return acc;
  }, {});

  return (
    <div className="restaurant-menu page-enter">
      {/* Hero Banner */}
      <div className="menu-hero">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="menu-hero__bg"
          onError={e => { e.target.src = `https://picsum.photos/seed/${restaurant.id}/1200/400`; }}
        />
        <div className="menu-hero__overlay" />
        <div className="container menu-hero__content">
          <button className="menu-hero__back btn-ghost" onClick={() => navigate('/')}>
            <ArrowLeft size={18} />
            Назад
          </button>
          <div className="menu-hero__info">
            <h1 className="menu-hero__name">{restaurant.name}</h1>
            <p className="menu-hero__desc">{restaurant.description}</p>
            <div className="menu-hero__meta">
              <span className="menu-hero__meta-item">
                <Star size={14} fill="currentColor" style={{ color: 'var(--color-warning)' }} />
                {restaurant.rating} ({restaurant.reviewCount} отзывов)
              </span>
              <span className="menu-hero__meta-sep">·</span>
              <span className="menu-hero__meta-item">
                <Clock size={14} />
                {restaurant.deliveryTime} мин
              </span>
              <span className="menu-hero__meta-sep">·</span>
              <span className="menu-hero__meta-item">
                <Truck size={14} />
                Доставка {restaurant.deliveryFee} ₸
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Category Nav */}
      <div className="menu-cat-nav glass">
        <div className="container">
          <div className="menu-cat-nav__inner">
            {categories.map(cat => (
              <button
                key={cat}
                className={`menu-cat-btn${activeCategory === cat ? ' menu-cat-btn--active' : ''}`}
                onClick={() => scrollToCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container menu-content">
        {categories.map(cat => (
          <section
            key={cat}
            className="menu-section"
            ref={el => sectionRefs.current[cat] = el}
            data-category={cat}
          >
            <h2 className="menu-section__title">{cat}</h2>
            <div className="menu-section__grid">
              {grouped[cat].map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  restaurantId={restaurant.id}
                  restaurantName={restaurant.name}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Floating cart bar (mobile) */}
      {totalItems > 0 && (
        <div className="menu-cart-bar glass-strong">
          <div className="menu-cart-bar__info">
            <ShoppingCart size={18} />
            <span>{totalItems} позиции</span>
          </div>
          <button className="menu-cart-bar__btn btn-primary" onClick={onCartOpen}>
            Перейти в корзину
            <span>{total.toLocaleString('ru-RU')} ₸</span>
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
