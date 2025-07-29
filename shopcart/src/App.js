import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Cologne", image: "cologne.jpg", quantity: 0 },
      { id: 2, name: "iWatch", image: "iwatch.jpg", quantity: 0 },
      { id: 3, name: "Mug", image: "mug.jpg", quantity: 0 },
      { id: 4, name: "Wallet", image: "wallet.jpg", quantity: 0 }
    ]
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

    return (
      <div className="container">
        {/* Navbar */}
        <nav className="navbar navbar-light bg-light mb-4 d-flex justify-content-between">
          <h2 className="navbar-brand m-0">ShopCart</h2>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span className="badge bg-primary ms-2">{total}</span>
          </div>
        </nav>

        {/* Products Grid */}
        <div className="row">
          {this.state.products.map(product => (
            <div className="col-12 col-sm-6 col-md-3" key={product.id}>
              <div className="card mb-4">
                <img
                  src={process.env.PUBLIC_URL + "/" + product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p>Quantity: {product.quantity}</p>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => this.handleIncrement(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDecrement(product.id)}
                    disabled={product.quantity === 0}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Cart Button */}
        <div className="text-center mt-4">
          <button className="btn btn-warning" onClick={this.handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    );
  }
}

export default App;
