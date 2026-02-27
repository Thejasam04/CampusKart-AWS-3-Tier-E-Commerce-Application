const db = require("../../config/db");

const getAllProducts = async () => {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
};

const getProductById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM products WHERE id = ?",
        [id]
    );
    return rows[0];
};

module.exports = {
    getAllProducts,
    getProductById
};
