// lib/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejwt',
    password: '258369'
});

connection.connect();
module.exports = connection;