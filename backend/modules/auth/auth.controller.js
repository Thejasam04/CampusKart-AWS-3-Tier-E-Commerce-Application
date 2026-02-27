const bcrypt = require('bcrypt');
const connection = require('../../config/db');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    connection.query(
      "INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
      (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        res.json({ message: "User registered successfully ✅" });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
