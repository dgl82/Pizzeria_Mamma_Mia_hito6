import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("0");

  return (
    <CartContext.Provider value={{ cart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
