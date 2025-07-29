// SignIn.js
import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleFBLogin = () => {
    // Simulated FB Login
    setTimeout(() => {
      navigate("/checkout");
    }, 1000);
  };

  return (
    <div className="text-center">
      <h2>Sign In</h2>
      <button className="btn btn-primary mt-3" onClick={handleFBLogin}>
        Sign in with Facebook
      </button>
    </div>
  );
};

export default SignIn;
