// src/Cart.js
import React from "react";

const Cart = ({ items }) => {
  return (
    <div>
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {items.map(product => (
            <div className="col-12 col-md-4" key={product.id}>
              <div className="card mb-3">
                <img
                  src={process.env.PUBLIC_URL + "/" + product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p>{product.desc}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Rating: ⭐ {product.ratings}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
