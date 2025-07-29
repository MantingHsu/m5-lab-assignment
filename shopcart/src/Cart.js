// Cart.js
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ items }) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <h3>Your Cart</h3>

      {totalQuantity === 0 ? (
        <>
          <p>Your cart has {totalQuantity} items.</p>
          <Link to="/" className="btn btn-primary">Continue Shopping</Link>
        </>
      ) : (
        <>
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
          <Link to="/signin" className="btn btn-success">Check Out</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
