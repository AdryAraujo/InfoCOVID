import { Button, IconButton, InputAdornment, Link, TextField } from "@mui/material";
import React from "react";
import './InputsLogin.css';
import logo from "../assets/img/logoSemNome.png";

function InputsLogin() {
    return (
        <div className="TelaInicial__container-login">
            <img className='small-logo' src={logo} alt="logo"/>
            <p>Faça seu login no <br /> <span>Info Covid</span> </p>
            <form className="login-form" >
                <TextField className='form__input'
                    id="email"
                    label="Email"
                    variant="outlined"
                    margin='none'
                    placeholder='Digite seu email'
                    fullWidth
                    name="email" />

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
                            <IconButton aria-label="toggle password visibility" edge="end">
                                {/* <Visibility /> */}
                            </IconButton>
                        </InputAdornment>
                    } />

                <Button
                    className='form__input'
                    variant="contained"
                    type='submit'>
                    Entrar
                </Button>
                <p className='p-cadastro'>Ainda não possui uma conta? <Link to='/cadastro' className='link-cadastro'>Cadastre-se!</Link></p>
            </form>
        </div>
    )

}
export default InputsLogin;