const firebaseAuth = require("firebase/auth");
const app = require("../config/firebase");
const connection = require("../config/database");

const auth = firebaseAuth.getAuth(app);

async function signin(req, res) {
    const { email, password } = req.body;
    return firebaseAuth
        .signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return res.json(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return res.status(400).json({ code: errorCode, message: errorMessage });
        });
}

async function signup(req, res) {
    const { email, password } = req.body;
    return firebaseAuth
        .createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return connection.query(`
                INSERT INTO Usuario
                VALUES ('${user.uid}')
            `, (err, results) => {
                if (err) {
                    console.error('Erro ao executar a consulta:', err);
                    return res.status(500).send('Erro ao executar a consulta.');
                } else {
                    return res.json(user);
                }
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return res.status(400).json({ code: errorCode, message: errorMessage });
        });
}

module.exports = {
    signin,
    signup
};