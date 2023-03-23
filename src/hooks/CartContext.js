import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const DeleteCard = id => {
    const updatedCart = cart.filter(task => task.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const AddComicInCart = comic => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const comicAlreadyInCart = storedCart.find(item => item.id === comic.id);
    if (comicAlreadyInCart) {
      alert('Esse item já está no carrinho');
    } else {
      const updatedCart = [...storedCart, comic];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert('Adicionao ao carrinho');
    }
  };

  return (
    <CartContext.Provider
      value={{
        DeleteCard,
        AddComicInCart,
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with CartContext');
  }

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
