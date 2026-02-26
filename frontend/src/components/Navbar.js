import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const fetchCartCount = async () => {
    try {
      const res = await API.get("/api/cart");
      setCartCount(res.data.length);
    } catch (err) {}
  };

  if (token) {
    fetchCartCount();
  }
}, [token]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CampusKart
        </Link>

        <div>
          <Link className="nav-link d-inline text-white me-3" to="/">
            Home
          </Link>

          <Link className="nav-link d-inline text-white me-3" to="/products">
            Products
          </Link>

          <Link className="nav-link d-inline text-white me-3" to="/cart">
  Cart {cartCount > 0 && `(${cartCount})`}
</Link>

          {token ? (
            <button
              className="btn btn-sm btn-outline-light"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link className="nav-link d-inline text-white" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;