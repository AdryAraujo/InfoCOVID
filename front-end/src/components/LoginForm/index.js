import React, { useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import logo from "../../assets/img/logoSemNome.png";
import './styles.css';

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    function handleToggleVisibility() {
        setShowPassword(!showPassword)
    }

    return (
        <div className="login-form-container">
            <img className='small-logo' src={logo} alt="logo" />
            <p>Faça seu login no <br /> <span>Info Covid</span> </p>
            <form className="login-form" >
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
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end" onClick={handleToggleVisibility}>
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    }
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    className='form__input'
                    variant="contained"
                    type='submit'>
                    Entrar
                </Button>
                <p className='p-cadastro'>Ainda não possui uma conta? <Link to='/cadastro'>Cadastre-se!</Link></p>
            </form>
        </div>
    )

}
export default LoginForm;