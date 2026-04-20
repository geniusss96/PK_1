import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Home, Clock } from 'lucide-react';
import './OrderSuccess.css';

export default function OrderSuccess() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(35); // 35 minutes mock

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(t => Math.max(0, t - 1));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="order-success page-enter container">
      {/* Confetti animation container */}
      <div className="confetti-container" aria-hidden="true">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: ['#7c3aed', '#f97316', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)]
            }}
          />
        ))}
      </div>

      <div className="order-success__card glass">
        <div className="order-success__icon">
          <Check size={48} />
        </div>
        <h1 className="order-success__title">Заказ оформлен!</h1>
        <p className="order-success__desc">
          Спасибо за заказ. Ресторан уже начал приготовление ваших блюд.
        </p>

        <div className="order-success__meta glass-strong">
          <div className="order-success__time">
            <Clock size={24} className="order-success__time-icon" />
            <div className="order-success__time-info">
              <span>Примерное время доставки</span>
              <strong>~{timeLeft} минут</strong>
            </div>
          </div>
          <div className="order-success__progress">
            <div className="order-success__progress-bar">
              <div className="order-success__progress-fill" style={{ width: '40%' }} />
            </div>
            <div className="order-success__progress-labels">
              <span className="active">Готовится</span>
              <span>В пути</span>
              <span>Доставлен</span>
            </div>
          </div>
        </div>

        <button className="btn-primary order-success__btn" onClick={() => navigate('/')}>
          <Home size={18} />
          Вернуться на главную
        </button>
      </div>
    </div>
  );
}
