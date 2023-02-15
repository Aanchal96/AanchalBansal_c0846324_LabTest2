const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'labtest2.cv7cozifsfda.us-east-2.rds.amazonaws.com',
    user: 'Aanchal',
    database: 'labtest2',
    password: 'qwerty123',
});

connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });
  

module.exports = connection;