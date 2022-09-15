import { useState, createContext, useContext } from "react";

const INITIAL_STATE = {
  items: [],
  totalPrice: 0,
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  const addItem = (producto, cantidad) => {
    if (cart.items.some((item) => item.nombre === producto.nombre)) {
      alert("El elemento ya esta en el carrito");

      return;
    }

    setCart({
      ...cart,
      items: [...cart.items, { nombre: producto.nombre, cantidad }],
      totalPrice: cart.totalPrice + producto.precio * cantidad,
    });
  };

  const clear = () => {
    setCart(INITIAL_STATE);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
