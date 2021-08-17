import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ProductProvider from './lib/ProductProvider'

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products";
import Footer from "./components/Footer/Footer";
import Detail from "./pages/Detail";

//CONTEXT
import { ProductProvider } from "./components/ContextApi/ProductContext";
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/page/products/:type" component={Products}></Route>
            <Route path="/page/product-detail/:id" component={Detail}></Route>
          </Switch>
          <Footer />
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
