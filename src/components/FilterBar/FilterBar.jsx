import { categories } from '../../data/restaurants';
import './FilterBar.css';

export default function FilterBar({ active, onChange }) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Фильтр по категориям">
      {categories.map(cat => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={active === cat.id}
          className={`filter-btn${active === cat.id ? ' filter-btn--active' : ''}`}
          onClick={() => onChange(cat.id)}
        >
          <span className="filter-btn__emoji">{cat.emoji}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
