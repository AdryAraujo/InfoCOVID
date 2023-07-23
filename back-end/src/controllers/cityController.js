const connection = require("../config/database")

const cityController = (req, res) => {
    const state = req.params.state;
    connection.query(`SELECT * FROM Municipio WHERE UF = '${state}';`, (err, results) => {
        if (err) {
          console.error('Erro ao executar a consulta:', err);
          res.status(500).send('Erro ao executar a consulta.');
        } else {
          res.json(results);
        }
      });
};
  
module.exports = cityController;
  