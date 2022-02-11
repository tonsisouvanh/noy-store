import React, { useState, useContext } from "react";
import ProductList from "../components/Products/ProductList";
// CONTEXT
import ProductContext from "../components/ContextApi/ProductContext";

function Products({ products, addProduct }) {
  return (
    <>
      <ProductList products={products} addProduct={addProduct} />
    </>
  );
}

export default Products;
