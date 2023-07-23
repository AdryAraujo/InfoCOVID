const firebaseAuth = require("firebase/auth");
const app = require("../config/firebase");

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
            return res.json(user);
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