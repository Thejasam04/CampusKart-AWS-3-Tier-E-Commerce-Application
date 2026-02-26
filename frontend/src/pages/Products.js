import React, { useEffect, useState } from "react";
import API from "../services/api";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://ecommerce-alb-1337667566.ap-south-1.elb.amazonaws.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

const handleAddToCart = async (productId) => {
  try {
    await API.post("/api/cart", {
      product_id: productId,
      quantity: 1
    });

    alert("Added to cart");
  } catch (error) {
    alert("Please login first");
    console.log(error);
  }
};

  return (
  <div className="container mt-4">
    <h2 className="mb-4">Products</h2>
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-bold">{product.name}</h5>
              <p className="card-text text-muted">
                {product.description}
              </p>

              <div className="mt-auto">
                <h6 className="text-primary fw-bold">
                  ₹ {product.price}
                </h6>

              <button
  className="btn btn-dark btn-sm w-100 mt-2"
  onClick={() => handleAddToCart(product.id)}
>
  Add to Cart
</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Products;