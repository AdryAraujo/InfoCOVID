const connection = require("../config/database")

const getAccesses = (req, res) => {
  return connection.query('SELECT * FROM Acesso', (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return res.status(500).send('Erro ao executar a consulta.');
    } else {
      return res.json(results);
    }
  });
};

const saveUserAccess = (req, res) => {
  const { latitude, longitude, firebaseUid } = req.body;
  return connection.query(`
      INSERT INTO Acesso (firebase_uid, latitude, longitude)
      VALUES ('${firebaseUid}', '${latitude}', '${longitude}')
    `, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return res.status(500).send('Erro ao executar a consulta.');
    } else {
      return res.json({ message: 'Local de acesso salvo com sucesso.' });
    }
  });
};

module.exports = {
  getAccesses,
  saveUserAccess,
};
