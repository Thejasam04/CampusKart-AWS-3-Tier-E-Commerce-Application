const express = require("express");
const router = express.Router();

const productController = require("./products.controller");
const authMiddleware = require("../../middleware/authMiddleware");

// 🔐 Protect routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

module.exports = router;
