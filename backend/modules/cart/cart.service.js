const db = require("../../config/db");

// ➕ Add item to cart
const addToCart = async (userId, productId, quantity) => {
  // Check if product already exists in cart
  const [existing] = await db.query(
    "SELECT * FROM cart_items WHERE user_id = ? AND product_id = ?",
    [userId, productId]
  );

  if (existing.length > 0) {
    // Update quantity
    await db.query(
      "UPDATE cart_items SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?",
      [quantity, userId, productId]
    );
  } else {
    // Insert new item
    await db.query(
      "INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)",
      [userId, productId, quantity]
    );
  }

  return { message: "Product added to cart" };
};

// 📦 Get user's cart
const getCartItems = async (userId) => {
  const [rows] = await db.query(
    `SELECT cart_items.id, products.name, products.price, cart_items.quantity
     FROM cart_items
     JOIN products ON cart_items.product_id = products.id
     WHERE cart_items.user_id = ?`,
    [userId]
  );

  return rows;
};

// ❌ Remove item from cart
const removeFromCart = async (cartItemId, userId) => {
  await db.query(
    "DELETE FROM cart_items WHERE id = ? AND user_id = ?",
    [cartItemId, userId]
  );

  return { message: "Item removed from cart" };
};

module.exports = {
  addToCart,
  getCartItems,
  removeFromCart
};
