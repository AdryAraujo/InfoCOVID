import React from "react";
import './TelaLogin.css';
import InputsLogin from '../components/InputsLogin';
import ImagemLogin from "../assets/img/login.png";

function TelaLogin(){
    return(
        <div className="container-total">
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
