import React, { useContext } from "react";
import Banner from "../components/Banner/Banner";
import Shoptype from "../components/Shoptype/Shoptype";

import { ProductContext } from "../components/ContextApi/ProductContext";
function Home() {
  const { products, loading, error } = useContext(ProductContext);
  return (
    <>
      <Banner />
      <Shoptype products={products} loading={loading} error={error} />
    </>
  );
}

export default Home;
