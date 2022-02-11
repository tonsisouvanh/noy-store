import React, { useContext } from "react";
import Banner from "../components/Banner/Banner";
import Shoptype from "../components/Shoptype/Shoptype";

function Home({products}) {
  return (
    <>
      <Banner />
      <Shoptype products={products} />
    </>
  );
}

export default Home;
