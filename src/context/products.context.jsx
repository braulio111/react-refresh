import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setCurrentProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};