const cartService = require("./cart.service");

// ➕ Add to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { product_id, quantity } = req.body;

    const result = await cartService.addToCart(
      userId,
      product_id,
      quantity || 1
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 📦 View cart
const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const items = await cartService.getCartItems(userId);

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ❌ Remove item
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItemId = req.params.id;

    const result = await cartService.removeFromCart(
      cartItemId,
      userId
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart
};
