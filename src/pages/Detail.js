import React, { useContext } from "react";
import ProductDetail from "../components/Products/ProductDetail";
import ProductRelate from "../components/Products/ProductRelate";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  return (
    <>
      <ProductDetail
        // productDetail={productDetail}
        // loading={loading}
        // error={error}
        id={id}
      />
      <ProductRelate />
    </>
  );
}

export default Detail;
