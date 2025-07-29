// src/displayProducts.js
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const DisplayProducts = ({ products, onIncrement, onDecrement }) => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="row">
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-3" key={product.id}>
            <div className="card mb-4">
              <img
                src={process.env.PUBLIC_URL + "/" + product.image}
                alt={product.name}
                className="card-img-top"
                style={{ height: 200, objectFit: "cover", cursor: "pointer" }}
                onClick={() => handleShow(product)}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p>Quantity: {product.quantity}</p>
                <button
                  className="btn btn-success me-2"
                  onClick={() => onIncrement(product.id)}
                >
                  +
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDecrement(product.id)}
                  disabled={product.quantity === 0}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={process.env.PUBLIC_URL + "/" + selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid mb-3"
            />
            <p>{selectedProduct.desc}</p>
            <p><strong>Rating:</strong> ⭐ {selectedProduct.ratings} / 5</p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default DisplayProducts;
