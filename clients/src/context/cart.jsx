import axios from "axios";
import { useContext, useState, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, []);

  //default axios
  axios.defaults.headers.common["Authorization"] = cart?.token;

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

//custom hook

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
