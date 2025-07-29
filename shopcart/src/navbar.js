// src/navbar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ total }) => {
  return (
    <nav className="navbar navbar-light bg-light mb-4 d-flex justify-content-between">
      <Link to="/" className="navbar-brand m-0 text-decoration-none">
        <h2>ShopCart</h2>
      </Link>
      <Link to="/cart" className="text-decoration-none text-dark">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span className="badge bg-primary ms-2">{total}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
