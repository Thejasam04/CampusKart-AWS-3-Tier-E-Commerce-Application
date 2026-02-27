const db = require("../../config/db");

// 🧾 Create Order
const createOrder = async (userId) => {
  // 1️⃣ Get cart items
  const [cartItems] = await db.query(
    "SELECT * FROM cart_items WHERE user_id = ?",
    [userId]
  );

  if (cartItems.length === 0) {
    return { message: "Cart is empty" };
  }

  // 2️⃣ Create order
  const [orderResult] = await db.query(
    "INSERT INTO orders (user_id) VALUES (?)",
    [userId]
  );

  const orderId = orderResult.insertId;

  // 3️⃣ Insert into order_items
  for (let item of cartItems) {
    await db.query(
      "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)",
      [orderId, item.product_id, item.quantity]
    );
  }

  // 4️⃣ Clear cart
  await db.query(
    "DELETE FROM cart_items WHERE user_id = ?",
    [userId]
  );

  return { message: "Order placed successfully", order_id: orderId };
};

// 📦 Get User Orders
const getOrders = async (userId) => {
  const [orders] = await db.query(
    `SELECT orders.id AS order_id, products.name, products.price, order_items.quantity
     FROM orders
     JOIN order_items ON orders.id = order_items.order_id
     JOIN products ON order_items.product_id = products.id
     WHERE orders.user_id = ?`,
    [userId]
  );

  return orders;
};

module.exports = {
  createOrder,
  getOrders
};
