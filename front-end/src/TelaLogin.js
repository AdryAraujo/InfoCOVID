import { TextField } from "@mui/material";
import React from "react";
import './TelaLogin.css';
import InputsLogin from './components/InputsLogin';
import ImagemLogin from "./assets/img/login.png";

function TelaLogin(){
    return(
        <div className="container">
            <div className="container-img">
                <img src={ImagemLogin} alt="Info Covid"/>
            </div>
            <div className="container-login">
                <InputsLogin/>
            </div>
        </div>
    )
}
export default TelaLogin;
