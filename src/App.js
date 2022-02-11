import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { commerce } from "./lib/Commerce";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail";

function App() {
  const [products, setProducts] = useState([]);
  const [basketData, setBastketData] = useState({});
  // const [products, setProducts] = useState([]);
  // const [products, setProducts] = useState([]);

  // Fetching data
  const fetchProducts = async () => {
    const res = await commerce.products.list();
    setProducts((res && res.data) || []);
  };

  const fetchBastketData = async () => {
    const res = await commerce.cart.retrieve();
    setBastketData(res);
  };

  const addProduct = async (productId, quantity) => {
    const res = await commerce.cart.add(productId, quantity);
    setBastketData(res.cart);
  };

  //Use effect
  useEffect(() => {
    fetchProducts();
    fetchBastketData();
  }, []);

  console.log("basket", basketData);

  return (
    <div className="App">
      <Router>
        <Navbar basketData={basketData} />
        <Switch>
          <Route exact path="/">
            <Home products={products} />
          </Route>

          <Route path="/page/products/:type">
            <Products products={products} addProduct={addProduct} />
          </Route>

          <Route path="/page/product-detail/:id">
            <Detail products={products} addProduct={addProduct} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
