const express = require("express");
const router = express.Router();

const orderController = require("./orders.controller");
const authMiddleware = require("../../middleware/authMiddleware");

// 🔐 Protected
router.post("/", authMiddleware, orderController.placeOrder);
router.get("/", authMiddleware, orderController.getOrders);

module.exports = router;
