const mysql = require('mysql2/promise');
require('dotenv').config();

//TODO : Initaliser la database
const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASES,
    port:process.env.DB_PORT
});

module.exports = db;