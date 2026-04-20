import { useState, useMemo } from 'react';
import { Search, MapPin } from 'lucide-react';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import { restaurants } from '../../data/restaurants';
import './Home.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return restaurants.filter(r => {
      const matchCat = activeCategory === 'all' || r.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch = !q ||
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.tags.some(t => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="home page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
        </div>
        <div className="container hero__content">
          <div className="hero__label">
            <MapPin size={14} />
            <span>Доставка по всему городу</span>
          </div>
          <h1 className="hero__title">
            Еда, которую<br />
            <span className="hero__title-gradient">ты заслуживаешь</span>
          </h1>
          <p className="hero__subtitle">
            Лучшие рестораны города — прямо к твоей двери. Быстро, вкусно, с любовью.
          </p>
          <div className="hero__search glass">
            <Search size={20} className="hero__search-icon" />
            <input
              type="text"
              placeholder="Поиск по ресторанам или кухне..."
              className="hero__search-input"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Поиск ресторанов"
            />
            {searchQuery && (
              <button
                className="hero__search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Очистить поиск"
              >
                ✕
              </button>
            )}
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">120+</span>
              <span className="hero__stat-label">Ресторанов</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">30 мин</span>
              <span className="hero__stat-label">Среднее время</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">4.8 ★</span>
              <span className="hero__stat-label">Средний рейтинг</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="catalog container">
        <div className="catalog__header">
          <div className="catalog__title-group">
            <h2 className="catalog__title">Рестораны</h2>
            <span className="catalog__count glass">{filtered.length}</span>
          </div>
          <FilterBar active={activeCategory} onChange={setActiveCategory} />
        </div>

        {filtered.length === 0 ? (
          <div className="catalog__empty">
            <div className="catalog__empty-icon">🍽️</div>
            <h3>Ничего не найдено</h3>
            <p>Попробуйте другой запрос или категорию</p>
            <button className="btn-ghost" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="restaurant-grid">
            {filtered.map((r, i) => (
              <div
                key={r.id}
                className="restaurant-grid__item"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <RestaurantCard restaurant={r} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
