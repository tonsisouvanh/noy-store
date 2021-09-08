import React, { useState, createContext, useEffect } from "react";
import Commerce from "../../lib/Commerce";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await Commerce.products.list();
      setProducts((res && res.data) || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading, error, setProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
