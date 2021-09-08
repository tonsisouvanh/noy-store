import React,{useState, useContext} from "react";
import ProductList from "../components/Products/ProductList";
// CONTEXT
import ProductContext from "../components/ContextApi/ProductContext";

function Products() {
  const { products, loading, error } = useContext(ProductContext);
  // console.log(products.sort((a,b) => a.permalink > b.permalink ));

  return (
    <>
      <ProductList productItems={products} loading={loading} error={error} />
    </>
  );
}

export default Products;
