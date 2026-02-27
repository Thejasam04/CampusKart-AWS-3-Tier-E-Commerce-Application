const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "ecommerce-mysql-db.cxyi2ymc6le6.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Thejas8861",
  database: "ecommerce",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log("Connected to MySQL RDS ✅");

module.exports = pool;
