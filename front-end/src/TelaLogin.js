import { TextField } from "@mui/material";
import React from "react";
import './TelaLogin.css';

function TelaLogin(){
    return(
        <div className="container">
            <div className="container-img">

            </div>
            <div className="container-login">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
    
        </div>
    )
}
export default TelaLogin;
