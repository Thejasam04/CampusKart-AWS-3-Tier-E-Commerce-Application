import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-modern">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "85vh" }}>

          {/* Left Content */}
          <div className="col-md-6">
            <h1 className="modern-title">
              Simplify Your
              <br />
              Campus Life
            </h1>

            <p className="modern-subtitle">
              Discover essential books, stationery and tools curated
              for students.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Link to="/products" className="btn btn-dark btn-lg px-4">
                Explore Store
              </Link>

              <Link to="/cart" className="btn btn-outline-dark btn-lg px-4">
                View Cart
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="Campus Setup"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;