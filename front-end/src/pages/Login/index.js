import React from "react";
import ImagemLogin from "../../assets/img/login.png";
import LoginForm from "../../components/LoginForm";
import './styles.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-img">
                <img src={ImagemLogin} alt="Info Covid" />
            </div>
            <LoginForm />
        </div>
    )
}
export default Login;
