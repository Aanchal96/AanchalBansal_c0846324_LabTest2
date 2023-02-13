const mysql = require('mysql2')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'madt-6114-class-enrollment-system',
//     password: 'root@123'
// });

const connection = mysql.createConnection({
    host: 'db-instance.crfqpxnukjfx.ap-south-1.rds.amazonaws.com',
    user: 'lab-test-2',
    database: 'lab-test-2',
    password: 'uxELY@d_dJ7xRsj)'
});


module.exports = connection;
