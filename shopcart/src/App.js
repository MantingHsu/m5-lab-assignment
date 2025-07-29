import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import productsData from "./products";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";
import Cart from "./Cart";
import SignIn from "./SignIn";
import Checkout from "./Checkout";

class App extends Component {
  state = {
    products: productsData
  };

  handleIncrement = (id) => {
    const products = this.state.products.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + 1 } : product
    );
    this.setState({ products });
  };

  handleDecrement = (id) => {
    const products = this.state.products.map(product =>
      product.id === id && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    this.setState({ products });
  };

  handleClearCart = () => {
    const products = this.state.products.map(p => ({ ...p, quantity: 0 }));
    this.setState({ products });
  };

  render() {
    const total = this.state.products.reduce((sum, p) => sum + p.quantity, 0);
    const cartItems = this.state.products.filter(p => p.quantity > 0);

    return (
      <Router>
        <div className="container">
          <Navbar total={total} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <DisplayProducts
                    products={this.state.products}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                  />
                  <div className="text-center mt-4">
                    <button className="btn btn-warning" onClick={this.handleClearCart}>
                      Clear Cart
                    </button>
                  </div>
                </>
              }
            />

            <Route
              path="/cart"
              element={<Cart items={cartItems} />}
            />

            <Route
              path="/signin"
              element={<SignIn />}
            />

            <Route
              path="/checkout"
              element={<Checkout />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
