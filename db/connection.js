const mysql = require('mysql12');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'employees',
password: 'password',
});

module.exports = db;