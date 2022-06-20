import React from "react";
import classes from "./MainPage.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {fab, faCss3, faFigma, faGit, faGithub, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';


const MainPage = () => {
    return (
        <div className={classes.mainInfo}>
            <h4>Personal information</h4>
            <hr/>
            <div><span className={classes.info}>Fullname:</span><span contentEditable="false"> Mariia Lipinska</span> </div>
            <div><span className={classes.info}>Date of birth:</span> <span contentEditable="false">January 5, 1996</span></div>
            <div><span className={classes.info}>Position:</span> <span contentEditable="false">Frontend Developer</span></div>
            <br/>
            <h4>About me</h4>
            <hr/>
            <p className={classes.text}>
                I am frontend developer, who has just started her work experience.
                I like to learn something new. That's why I tried to change my life and after being music
                teacher learn
                programming. It's interesting and useful thing, because technology is the future. I like to
                improve my skills and to gain my goals. Also,
                I have an experience in communication with different people, so it can be useful in team work.
            </p>
            <h4>Education</h4>
            <hr/>
            <div className={classes.infoContainer}>
                <div>
                    2015-2021 <br/>
                    2021-2022
                </div>
                <div>
                    Lviv music academy (Musicology) <br/>
                    Logos IT Academy (Frontend developing)
                </div>
            </div>
            <h4>Technologies</h4>
            <hr/>
            <div className={classes.technologies}>
                <div className={classes.technologiesWrapper}>
                    <div>
                        <FontAwesomeIcon icon={faJs} className={classes.icon}/>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHtml5} className={classes.icon}/>
                        <p>HTML5</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCss3} className={classes.icon}/>
                        <p>CSS3</p>
                    </div>
                </div>
                <div className={classes.technologiesWrapper2}>
                    <div>
                        <FontAwesomeIcon icon={faGithub} className={classes.icon}/>
                        <p>GitHub</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faReact} className={classes.icon}/>
                        <p>React</p>

                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFigma} className={classes.icon}/>
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainPage