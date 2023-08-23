import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/img/logoSemNome.png";
import { useAuth } from "../../contexts/AuthContext";
import './styles.css';

function Signup() {
    const { signup } = useAuth()
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState()

    async function handleSubmit(e) {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('A senha e a confirmação de senha não correspondem')
            return
        }

        try {
            const response = await signup(email, password);
            if (response.status === 200) {
                navigate('/')
            }
        } catch (error) {
            setError('Usuário já cadastrado.');
            console.error('Signup Error:', error);
        }
    }

    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <img className='small-logo' src={logo} alt="logo" />
                <p>Cadastre-se no <br /> <span>Info Covid</span> </p>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <TextField className='form__input'
                        id="email"
                        label="Email"
                        variant="outlined"
                        margin='none'
                        placeholder='Digite seu email'
                        fullWidth
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        className='form__input'
                        id="senha"
                        label="Senha"
                        variant="outlined"
                        margin='none'
                        type={'password'}
                        placeholder='Digite sua senha'
                        name="senha"
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                        className='form__input'
                        id="senha"
                        label="Confirmar Senha"
                        variant="outlined"
                        margin='none'
                        type={'password'}
                        placeholder='Confirme sua senha'
                        name="senha"
                        fullWidth
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <Button
                        className='form__input'
                        variant="contained"
                        type='submit'
                    >
                        Cadastrar
                    </Button>

                    {error && <p className='error-message'>{error}</p>}
                    
                    <p className='p-cadastro'>Já possui uma conta? <Link to='/login'>Faça seu login!</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Signup;
