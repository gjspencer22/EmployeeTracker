const mysql = require('mysql');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'bussiness',
password: 'password',
});
 
module.exports = connection;