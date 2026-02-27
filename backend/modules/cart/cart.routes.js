const express = require("express");
const router = express.Router();

const cartController = require("./cart.controller");
const authMiddleware = require("../../middleware/authMiddleware");

// 🔐 All cart routes protected
router.post("/", authMiddleware, cartController.addToCart);
router.get("/", authMiddleware, cartController.getCart);
router.delete("/:id", authMiddleware, cartController.removeFromCart);

module.exports = router;
