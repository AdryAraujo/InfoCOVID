var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'covid19-app.cdzyg0rxljop.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'TwPFAq8w5NFkYYHlnHw0',
  database : 'covid19_app'
});
  
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  }
});

module.exports = connection;