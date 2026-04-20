import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, User, CreditCard, Banknote, Smartphone, ChevronRight, AlertCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const PAYMENT_METHODS = [
  { id: 'card', label: 'Банковская карта', icon: CreditCard },
  { id: 'cash', label: 'Наличными', icon: Banknote },
  { id: 'online', label: 'Online-платёж', icon: Smartphone },
];

const initialForm = {
  name: '',
  phone: '',
  address: '',
  city: '',
  comment: '',
  payment: 'card',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Введите имя';
  if (!form.phone.trim()) errors.phone = 'Введите номер телефона';
  else if (!/^\+?[0-9\s\-()]{7,15}$/.test(form.phone.trim())) errors.phone = 'Неверный формат номера';
  if (!form.address.trim()) errors.address = 'Введите адрес доставки';
  if (!form.city.trim()) errors.city = 'Введите город';
  return errors;
}

export default function Checkout() {
  const navigate = useNavigate();
  const { items, restaurantName, subtotal, deliveryFee, total, clearCart } = useCart();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (items.length === 0) {
    return (
      <div className="checkout-empty page-enter container">
        <div className="checkout-empty__icon">🛒</div>
        <h2>Корзина пуста</h2>
        <p>Добавьте блюда из меню ресторана</p>
        <button className="btn-primary" onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> На главную
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1800));
    clearCart();
    navigate('/order-success');
  };

  return (
    <div className="checkout page-enter">
      <div className="container">
        <button className="checkout__back btn-ghost" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Назад
        </button>
        <h1 className="checkout__title">Оформление заказа</h1>

        <div className="checkout__layout">
          {/* Form */}
          <form className="checkout-form glass" onSubmit={handleSubmit} noValidate>
            <div className="checkout-form__section">
              <h2 className="checkout-form__section-title">
                <User size={18} /> Личные данные
              </h2>
              <div className="form-row">
                <div className={`form-field${errors.name ? ' form-field--error' : ''}`}>
                  <label className="form-label" htmlFor="name">Имя *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Алексей Иванов"
                    className="form-input"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span className="form-error"><AlertCircle size={13} />{errors.name}</span>
                  )}
                </div>
                <div className={`form-field${errors.phone ? ' form-field--error' : ''}`}>
                  <label className="form-label" htmlFor="phone">Телефон *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (777) 000-00-00"
                    className="form-input"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <span className="form-error"><AlertCircle size={13} />{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="checkout-form__section">
              <h2 className="checkout-form__section-title">
                <MapPin size={18} /> Адрес доставки
              </h2>
              <div className="form-row">
                <div className={`form-field${errors.city ? ' form-field--error' : ''}`}>
                  <label className="form-label" htmlFor="city">Город *</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Алматы"
                    className="form-input"
                    value={form.city}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <span className="form-error"><AlertCircle size={13} />{errors.city}</span>
                  )}
                </div>
              </div>
              <div className={`form-field${errors.address ? ' form-field--error' : ''}`}>
                <label className="form-label" htmlFor="address">Адрес *</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="ул. Абая, 50, кв. 12"
                  className="form-input"
                  value={form.address}
                  onChange={handleChange}
                  autoComplete="street-address"
                />
                {errors.address && (
                  <span className="form-error"><AlertCircle size={13} />{errors.address}</span>
                )}
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="comment">Комментарий курьеру</label>
                <textarea
                  id="comment"
                  name="comment"
                  placeholder="Домофон 123, оставить у двери..."
                  className="form-input form-textarea"
                  value={form.comment}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
            </div>

            <div className="checkout-form__section">
              <h2 className="checkout-form__section-title">
                <CreditCard size={18} /> Способ оплаты
              </h2>
              <div className="payment-methods">
                {PAYMENT_METHODS.map(({ id, label, icon: Icon }) => (
                  <label
                    key={id}
                    className={`payment-method${form.payment === id ? ' payment-method--active' : ''}`}
                    htmlFor={`payment-${id}`}
                  >
                    <input
                      type="radio"
                      id={`payment-${id}`}
                      name="payment"
                      value={id}
                      checked={form.payment === id}
                      onChange={handleChange}
                      className="payment-method__radio"
                    />
                    <div className="payment-method__icon">
                      <Icon size={20} />
                    </div>
                    <span className="payment-method__label">{label}</span>
                    <div className="payment-method__check" />
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className={`checkout-submit btn-primary${loading ? ' checkout-submit--loading' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <span className="checkout-spinner" />
              ) : (
                <>
                  Подтвердить заказ
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Order Summary */}
          <aside className="order-summary glass">
            <h2 className="order-summary__title">Ваш заказ</h2>
            {restaurantName && (
              <p className="order-summary__restaurant">📍 {restaurantName}</p>
            )}
            <ul className="order-summary__items">
              {items.map(item => (
                <li key={item.id} className="order-summary__item">
                  <span className="order-summary__item-name">
                    {item.name}
                    <span className="order-summary__item-qty">×{item.quantity}</span>
                  </span>
                  <span className="order-summary__item-price">
                    {(item.price * item.quantity).toLocaleString('ru-RU')} ₸
                  </span>
                </li>
              ))}
            </ul>
            <div className="order-summary__totals">
              <div className="order-summary__row">
                <span>Сумма</span>
                <span>{subtotal.toLocaleString('ru-RU')} ₸</span>
              </div>
              <div className="order-summary__row">
                <span>Доставка</span>
                <span>{deliveryFee > 0 ? `${deliveryFee} ₸` : 'Бесплатно'}</span>
              </div>
              <div className="order-summary__row order-summary__row--total">
                <span>Итого</span>
                <span>{total.toLocaleString('ru-RU')} ₸</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
