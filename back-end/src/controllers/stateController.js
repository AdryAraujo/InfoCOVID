const connection = require("../config/database")

const stateController = (req, res) => {
    connection.query('SELECT * FROM Estado', (err, results) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
          res.status(500).send('Erro ao executar a consulta.');
        } else {
          res.json(results);
        }
      });
};
  
module.exports = stateController;
  