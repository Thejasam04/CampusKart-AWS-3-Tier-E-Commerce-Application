const orderService = require("./orders.service");

// 🧾 Place Order
const placeOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const result = await orderService.createOrder(userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 📦 View Orders
const getOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await orderService.getOrders(userId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  placeOrder,
  getOrders
};
