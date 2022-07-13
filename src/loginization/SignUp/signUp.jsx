import React from "react";
import "rsuite/dist/rsuite.min.css";
import classes from "./signUp.module.css";
import img from "./image/img.png";

const SignUp = ()=>{

    return(
        <div className={classes.container}>
            <a href="#">
            <img src={img} alt="time"/>
                <div className={classes.statement}>
                    <h1 className={classes.text}>Welcome to login!</h1>
                    <h3 className={classes.question}>If email and password are not correct, admin page will be not available</h3>
                </div>
            </a>
            )
        }
        </div>
    )
}

export default SignUp