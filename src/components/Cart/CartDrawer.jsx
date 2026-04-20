import { useCart } from '../../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, restaurantName, totalItems, subtotal, deliveryFee, total, addItem, removeItem, deleteItem, clearCart, restaurantId } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}
      <aside className={`cart-drawer glass-strong${isOpen ? ' cart-drawer--open' : ''}`}>
        <div className="cart-drawer__header">
          <div className="cart-drawer__title-group">
            <ShoppingBag size={20} />
            <h2 className="cart-drawer__title">Корзина</h2>
            {totalItems > 0 && (
              <span className="cart-drawer__count">{totalItems}</span>
            )}
          </div>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Закрыть">
            <X size={20} />
          </button>
        </div>

        {restaurantName && totalItems > 0 && (
          <div className="cart-drawer__restaurant">
            <span>📍 {restaurantName}</span>
            <button className="cart-drawer__clear" onClick={clearCart}>Очистить</button>
          </div>
        )}

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty__icon">🛒</div>
              <p className="cart-empty__text">Корзина пуста</p>
              <p className="cart-empty__hint">Добавьте блюда из меню ресторана</p>
            </div>
          ) : (
            <ul className="cart-items">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item__info">
                    <span className="cart-item__name">{item.name}</span>
                    <span className="cart-item__price">{(item.price * item.quantity).toLocaleString('ru-RU')} ₸</span>
                  </div>
                  <div className="cart-item__controls">
                    <button
                      className="cart-item__btn"
                      onClick={() => removeItem(item.id)}
                      aria-label="Уменьшить"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="cart-item__qty">{item.quantity}</span>
                    <button
                      className="cart-item__btn"
                      onClick={() => addItem(item, restaurantId, restaurantName)}
                      aria-label="Увеличить"
                    >
                      <Plus size={14} />
                    </button>
                    <button
                      className="cart-item__btn cart-item__btn--delete"
                      onClick={() => deleteItem(item.id)}
                      aria-label="Удалить"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-summary">
              <div className="cart-summary__row">
                <span>Сумма заказа</span>
                <span>{subtotal.toLocaleString('ru-RU')} ₸</span>
              </div>
              <div className="cart-summary__row">
                <span>Доставка</span>
                <span>{deliveryFee > 0 ? `${deliveryFee} ₸` : 'Бесплатно'}</span>
              </div>
              <div className="cart-summary__row cart-summary__row--total">
                <span>Итого</span>
                <span>{total.toLocaleString('ru-RU')} ₸</span>
              </div>
            </div>
            <button className="cart-checkout btn-primary" onClick={handleCheckout}>
              Оформить заказ
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
