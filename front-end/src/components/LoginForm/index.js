import React, { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/img/logoSemNome.png";
import './styles.css';
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState()

    function handleToggleVisibility() {
        setShowPassword(!showPassword)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await login(email, password);
            if (response.status === 200) {
                navigate('/')
            }
        } catch (error) {
            setError('E-mail e/ou senha incorretos.');
            console.error('Signin Error:', error);
        }
    }

    return (
        <div className="login-form-container">
            <img className='small-logo' src={logo} alt="logo" />
            <p>Faça seu login no <br /> <span>Info Covid</span> </p>
            <form className="login-form" onSubmit={handleSubmit}>
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
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Digite sua senha'
                    name="senha"
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" onClick={handleToggleVisibility}>
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    className='form__input'
                    variant="contained"
                    type='submit'>
                    Entrar
                </Button>

                {error && <p className='error-message'>{error}</p>}

                <p className='p-cadastro'>Ainda não possui uma conta? <Link to='/cadastro'>Cadastre-se!</Link></p>
            </form>
        </div>
    )

}
export default LoginForm;