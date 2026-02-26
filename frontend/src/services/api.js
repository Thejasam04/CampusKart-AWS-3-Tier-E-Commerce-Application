import axios from "axios";

const API = axios.create({
  baseURL: "http://ecommerce-alb-1337667566.ap-south-1.elb.amazonaws.com",
});

// 🔐 Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;