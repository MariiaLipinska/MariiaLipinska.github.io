import React from "react";
import "rsuite/dist/rsuite.min.css";
import classes from "./signUp.module.css"

const SignUp = ()=>{
    return(
        <div className={classes.container}>
            <h1 className={classes.text}>Welcome to login</h1>
            <h3 className={classes.question}>Do not have an account?</h3>
            <button className={classes.signUpButton}>Sign Up</button>
        </div>
    )
}

export default SignUp