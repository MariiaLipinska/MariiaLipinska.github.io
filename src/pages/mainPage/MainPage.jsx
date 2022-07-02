import React from "react";
import classes from "./MainPage.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCss3, faFigma, faGithub, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {useSelector} from "react-redux";


const MainPage = () => {
    const details = useSelector(state=>state.usersReducer)
    return (
        <div className={classes.mainInfo}>
            <h4>Personal information</h4>
            <hr/>
            <div><span className={classes.info}>Name:</span><span > {details.fullName}</span> </div>
            <div><span className={classes.info}>Date of birth:</span> <span>{details.dateOfBirth}</span></div>
            <div><span className={classes.info}>Position:</span> <span>{details.position}</span></div>
            <div><span className={classes.info}>Languages:</span> <span>{details.languages}</span></div>
            <br/>
            <h4>About me</h4>
            <hr/>
            <p className={classes.text}>
                {details.aboutMe}
            </p>
            <h4>Education</h4>
            <hr/>
            <div className={classes.infoContainer}>
                <div>
                    {details.years1} <br/>
                    {details.years2}
                </div>
                <div>
                    {details.universities1} <br/>
                    {details.universities2}
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