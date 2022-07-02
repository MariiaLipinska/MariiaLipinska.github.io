import React, {createRef, useEffect, useState} from "react";
import classes from "./AdminPage.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from 'rsuite/Button';
import {fab, faCss3, faFigma, faGit, faGithub, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {useDispatch, useSelector} from "react-redux";
import {editDataFirebase, getEditDataFirebase, setImageToFirebase} from "../../api/firebaseCalls";
import {editInfoFirebase, getEditInfo} from "../../redux/ActionCreator/actionUsers";


const AdminPage = () => {
    const details = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()
    const editDataThunk = (formValue) => dispatch(editInfoFirebase(formValue))
    const getEditDataThunk = () => dispatch(getEditInfo)
    const editData = useSelector((state)=> state.usersReducer)
    const [formValue, setFormValue] = useState({
        fullName: details.fullName,
        dateOfBirth: details.dateOfBirth,
        languages: details.languages,
        aboutMe: details.aboutMe,
        position: details.position,
        years1: details.years1,
        years2: details.years2,
        universities1: details.universities1,
        universities2: details.universities2
    })
const saveButton = ()=>{
    console.log(formValue)
   editDataThunk({formValue})
}


    useEffect(() => {
        dispatch(getEditDataThunk())
        localStorage.getItem("admin")
    }, [])
    return (
        <div className={classes.mainInfo}>
            <h4>Personal information</h4>
            <hr/>
            <form action="">
                <div><span className={classes.info}>Name:</span> <input name="name"
                                                                            onChange={(e) => setFormValue({
                                                                                ...formValue,
                                                                                [e.target.name]: e.target.value
                                                                            })} value={formValue.fullName}/></div>
                <div><span className={classes.info}>Date of birth:</span> <input name="dateOfBirth"
                                                                                 onChange={(e) => setFormValue({
                                                                                     ...formValue,
                                                                                     [e.target.name]: e.target.value
                                                                                 })} value={formValue.dateOfBirth}/>
                </div>
                <div><span className={classes.info}>Position:</span> <input name="position"
                                                                            onChange={(e) => setFormValue({
                                                                                ...formValue,
                                                                                [e.target.name]: e.target.value
                                                                            })} value={formValue.position}/></div>
                <div><span className={classes.info}>Languages:</span> <input name="languages"
                                                                             onChange={(e) => setFormValue({
                                                                                 ...formValue,
                                                                                 [e.target.name]: e.target.value
                                                                             })} value={formValue.languages}/>
                </div>
            </form>
            <br/>
            <h4>About me</h4>
            <hr/>
            <form>
                <textarea className={classes.text} name="aboutMe" onChange={(e) => setFormValue({
                    ...formValue,
                    [e.target.name]: e.target.value
                })} value={formValue.aboutMe}/>
            </form>
            <h4>Education</h4>
            <hr/>
            <div className={classes.infoContainer}>
                <div>
                    <form>
                        <input name="years1" onChange={(e) => setFormValue({
                            ...formValue,
                            [e.target.name]: e.target.value
                        })} value={formValue.years1}/>
                        <input name="years2" onChange={(e) => setFormValue({
                            ...formValue,
                            [e.target.name]: e.target.value
                        })} value={formValue.years2}/>
                    </form>

                </div>
                <div>
                    <form>
                        <input name="universities1" onChange={(e) => setFormValue({
                            ...formValue,
                            [e.target.name]: e.target.value
                        })} value={formValue.universities1}/>
                        <input name="universities2" onChange={(e) => setFormValue({
                            ...formValue,
                            [e.target.name]: e.target.value
                        })} value={formValue.universities2}/>
                    </form>

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
            <div className={classes.buttonContainer}>
                {/*<Button color="blue" appearance="primary" className={classes.button}>Edit</Button>*/}
                <Button color="green" appearance="primary" className={classes.buttonChange} onClick={saveButton}>Save</Button>
                <Button color="red" appearance="primary" className={classes.buttonChange} onClick={saveButton}>Cancel</Button>
            </div>
        </div>
    )
}

export default AdminPage