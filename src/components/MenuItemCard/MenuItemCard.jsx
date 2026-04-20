import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './MenuItemCard.css';

export default function MenuItemCard({ item, restaurantId, restaurantName }) {
  const { addItem, removeItem, getItemQuantity } = useCart();
  const quantity = getItemQuantity(item.id);
  const [popping, setPopping] = useState(false);

  const handleAdd = () => {
    addItem(item, restaurantId, restaurantName);
    setPopping(true);
    setTimeout(() => setPopping(false), 400);
  };

  return (
    <article className={`menu-item glass${item.popular ? ' menu-item--popular' : ''}`}>
      <div className="menu-item__content">
        <div className="menu-item__info">
          {item.popular && (
            <span className="menu-item__popular-badge">🔥 Популярное</span>
          )}
          <h4 className="menu-item__name">{item.name}</h4>
          <p className="menu-item__desc">{item.description}</p>
          <div className="menu-item__footer">
            <span className="menu-item__price">{item.price.toLocaleString('ru-RU')} ₸</span>
            <div className={`menu-item__controls${popping ? ' menu-item__controls--pop' : ''}`}>
              {quantity === 0 ? (
                <button className="menu-item__add-btn" onClick={handleAdd} aria-label="Добавить в корзину">
                  <Plus size={18} />
                </button>
              ) : (
                <div className="menu-item__qty-controls">
                  <button
                    className="menu-item__qty-btn"
                    onClick={() => removeItem(item.id)}
                    aria-label="Убрать"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="menu-item__qty">{quantity}</span>
                  <button
                    className="menu-item__qty-btn"
                    onClick={handleAdd}
                    aria-label="Добавить"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="menu-item__image-wrap">
          <img
            src={item.image}
            alt={item.name}
            className="menu-item__image"
            loading="lazy"
            onError={e => { e.target.src = `https://picsum.photos/seed/${item.id + 100}/300/300`; }}
          />
        </div>
      </div>
    </article>
  );
}
