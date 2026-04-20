import { Star, Clock, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

export default function RestaurantCard({ restaurant }) {
  const { id, name, cuisine, rating, reviewCount, deliveryTime, deliveryFee, description, image, tags, popular, open } = restaurant;

  return (
    <Link to={`/restaurant/${id}`} className={`restaurant-card glass${!open ? ' restaurant-card--closed' : ''}`}>
      <div className="restaurant-card__image-wrap">
        <img
          src={image}
          alt={name}
          className="restaurant-card__image"
          loading="lazy"
          onError={e => { e.target.src = `https://picsum.photos/seed/${id}/600/400`; }}
        />
        {!open && <div className="restaurant-card__closed-badge">Закрыто</div>}
        {popular && open && <div className="restaurant-card__popular-badge">⭐ Популярное</div>}
        <div className="restaurant-card__image-overlay" />
      </div>

      <div className="restaurant-card__body">
        <div className="restaurant-card__header">
          <h3 className="restaurant-card__name">{name}</h3>
          <div className="restaurant-card__rating">
            <Star size={14} fill="currentColor" className="restaurant-card__star" />
            <span>{rating}</span>
            <span className="restaurant-card__review-count">({reviewCount})</span>
          </div>
        </div>

        <p className="restaurant-card__desc">{description}</p>

        <div className="restaurant-card__tags">
          {tags.map(tag => (
            <span key={tag} className="restaurant-card__tag">{tag}</span>
          ))}
        </div>

        <div className="restaurant-card__footer">
          <div className="restaurant-card__meta">
            <span className="restaurant-card__meta-item">
              <Clock size={13} />
              {deliveryTime} мин
            </span>
            <span className="restaurant-card__meta-item">
              <Truck size={13} />
              {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₸`}
            </span>
          </div>
          <div className="restaurant-card__cta">
            Меню <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
