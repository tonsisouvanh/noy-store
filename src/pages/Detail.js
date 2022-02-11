import React, { useContext } from "react";
import ProductDetail from "../components/Products/ProductDetail";
import ProductRelate from "../components/Products/ProductRelate";
import { useParams } from "react-router-dom";
function Detail({ products }) {
  const { id } = useParams();
  return (
    <>
      <ProductDetail products={products} id={id} />
      <ProductRelate products={products} />
    </>
  );
}

export default Detail;
