import React from 'react'
import classes from './Header.module.css'
import {Link} from "react-router-dom";
import {RouteConst} from "../../common/RouteConst";

const Header = () => {
    return (
        <header className={classes.container}>
            <div className={classes.headerMenu}>
                <div className={classes.resume}>
                    <div className={classes.resumeLink}>
                    <Link to={RouteConst.MAIN} className={`${classes.link} ${classes.active}`}>Resume</Link>
                    </div>
                    <div>
                    <Link to={RouteConst.ADMIN} className={`${classes.link} ${classes.active}`}>Admin</Link>
                    </div>
                </div>
                <div>
                    <Link to={RouteConst.LOGIN} className={`${classes.link} ${classes.active}`}><button className={classes.logInButton}>Log in</button></Link>
                </div>
                <Link to={RouteConst.NOT_FOUND_PAGE}></Link>
            </div>
        </header>
    )
}

export default Header;