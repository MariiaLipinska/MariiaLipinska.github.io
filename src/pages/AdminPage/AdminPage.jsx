import React from "react";
import classes from "./MainPage.module.css"

const MainPage = () => {
    return (
        <div className={classes.mainInfo}>
            <h3>Profile</h3>
            <div className={classes.colorBorder}></div>
            <div className={classes.infoContainer}>
               <p> Hello! My name is Mariia.
                I've just finished my education in Lviv music academy named after Mykola Lysenko.
                   I've been teaching music for 2 years, but now try my forces in frontend developing.
                   That's why I've learned for 7 months in frontend course.
                   It's difficult and unusual thing for me, but I try to learn carefully,
                   'cause technology is the future.</p>
            </div>
            <h3>Education</h3>
            <div className={classes.colorBorder}></div>
            <div className={classes.education}>
                <div className={classes.infoContainer}>
                    <p>2015-2021</p>
                    <p>2021-2022</p>
                </div>
                <div className={classes.infoContainer}>
                    <p>Lviv national music academy</p>
                    <p>Logos IT Academy</p>
                </div>
            </div>
            <h3>Contacts</h3>
            <div className={classes.colorBorder}></div>
            <div>
                <div className={classes.infoContainer}>

                    <p>2021-2022</p>
                </div>
                <div className={classes.infoContainer}>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <h3>Skills</h3>
            <div className={classes.colorBorder}></div>
            <div className={classes.infoContainer}>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
        </div>

    )
}

export default MainPage