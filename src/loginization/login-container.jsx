import React from "react";
import "rsuite/dist/rsuite.min.css";
import classes from "./login-container.module.css";
import RsuiteLoginForm from "./rsuite/LogIn/rsuite-login-form";
import SignUp from "./SignUp/signUp";


const LoginContainer = () => {
    return (
        <div className={classes.container}>

            <RsuiteLoginForm/>
            <SignUp/>

        </div>
    )
}

export default LoginContainer