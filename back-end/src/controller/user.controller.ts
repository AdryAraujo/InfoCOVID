import { Request, Response } from "express";
import * as firebaseAuth from "firebase/auth";
import dataSource from "../app-data-source";
import app from "../config/firebase.config";
import { User } from "../entity/user.entity";

const auth = firebaseAuth.getAuth(app);
const userRepository = dataSource.getRepository(User);

export async function login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userCredential = await firebaseAuth.signInWithEmailAndPassword(auth, email, password);

    if (!userCredential) {
        return res.status(400).json({ message: "E-mail e/ou senha incorretos" });
    }

    const user = userCredential.user;

    return res.json(user);
}

export async function signup(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const userCredential = await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
    
        const user = userCredential.user;
        await userRepository.insert({
            uid: user.uid
        });
    
        return res.json(user);
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return res.status(400).json({ code: errorCode, message: errorMessage });
    }
}
