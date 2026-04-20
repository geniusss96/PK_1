import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
  restaurantId: null,
  restaurantName: '',
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, restaurantId, restaurantName } = action.payload;
      // If adding from different restaurant, clear cart first
      if (state.restaurantId && state.restaurantId !== restaurantId) {
        return {
          restaurantId,
          restaurantName,
          items: [{ ...item, quantity: 1 }],
        };
      }
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        return {
          ...state,
          restaurantId,
          restaurantName,
          items: state.items.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        restaurantId,
        restaurantName,
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM': {
      const existing = state.items.find(i => i.id === action.payload);
      if (existing && existing.quantity > 1) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
          ),
        };
      }
      const newItems = state.items.filter(i => i.id !== action.payload);
      return {
        ...state,
        items: newItems,
        restaurantId: newItems.length === 0 ? null : state.restaurantId,
        restaurantName: newItems.length === 0 ? '' : state.restaurantName,
      };
    }
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}

const STORAGE_KEY = 'foodrush_cart';

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryFee = state.restaurantId ? (totalItems > 0 ? 99 : 0) : 0;
  const total = subtotal + deliveryFee;

  const addItem = (item, restaurantId, restaurantName) => {
    dispatch({ type: 'ADD_ITEM', payload: { item, restaurantId, restaurantName } });
  };
  const removeItem = (itemId) => dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  const deleteItem = (itemId) => dispatch({ type: 'DELETE_ITEM', payload: itemId });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const getItemQuantity = (itemId) => {
    const item = state.items.find(i => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider value={{
      items: state.items,
      restaurantId: state.restaurantId,
      restaurantName: state.restaurantName,
      totalItems,
      subtotal,
      deliveryFee,
      total,
      addItem,
      removeItem,
      deleteItem,
      clearCart,
      getItemQuantity,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
