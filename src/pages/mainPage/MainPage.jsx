import React from "react";
import classes from "./MainPage.module.css"

const MainPage = () => {
    return (

        <div className={classes.mainInfo}>
            <div className={classes.colorBorder}>
                <div className={classes.infoContainer}>
                    <h3>Personal information</h3>
                    <hr/>
                    <p className={classes.text}>
                        I am frontend developer, who has just started her work experience.
                        I like to learn something new. That's why I tried to change my life and after being music
                        teacher learn
                        programming. It's interesting and useful thing, because technology is the future. I like to
                        improve my skills and to gain my goals. Also,
                        I have an experience in communication with different people, so it can be useful in team work.
                    </p>
                </div>
                <div className={classes.infoContainer}>
                    <h3>Education</h3>
                <hr/>
                    <div className={classes.education}>
                    <div className={classes.infoContainer}>
                        <span>2015-2021</span> <br/>
                        <span>2021-2022</span>
                    </div>
                    <div className={classes.infoContainer}>
                        <span>Lviv national music academy</span>
                        <span>Logos IT Academy</span>
                    </div>
                </div>
                </div>

                        </div>

                {/*<div className={classes.infoContainer}>*/}
                    <h3>Skills</h3>
                    <img src="skills-images/html5.png" alt="html"/>
                    <img src="./skills-images/css3.png" alt="css"/>
                    <img src="./skills-images/js.png" alt="js"/>
                    <img src="./skills-images/react.png" alt="react"/>
                    <img src="./skills-images/TS.png" alt="type-script"/>
                    <img src="./skills-images/gitHub.png" alt="html"/>


                {/*</div>*/}
                        <div>

                        {/*    <div className={classes.infoContainer}>*/}
                        {/*        <h3>Contacts</h3>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>

                )
                }

                export default MainPage