const mysql = require('mysql');
const util = require("util");

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'employee',
password: 'password',
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;