const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'labtest2.cv7cozifsfda.us-east-2.rds.amazonaws.com',
    user: 'aanchal',
    database: 'labtest2',
    password: 'qwerty123',
});

module.exports = connection;