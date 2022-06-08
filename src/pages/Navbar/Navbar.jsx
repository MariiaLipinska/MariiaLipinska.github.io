import classes from "./Navbar.module.css"
import {Link} from "react-router-dom"
import {RouteConst} from "../../common/RouteConst";
import photo from "./Photo/Mariia.jpg"
import {setImageToFirebase, uploadFileToFB} from "../../api/firebaseCalls";
import {useEffect, useState} from "react";

const Navbar = () => {
    const [image, setImage] = useState("")

    const handleUpload = (e) =>{
        e.preventDefault()
        const file = e.target[0].files[0]
        if(!file) return
        uploadFileToFB(file,setImage)
    }
    useEffect(()=>{
        setImageToFirebase()
        },[image]
    )


    return (
        <div className={classes.container}>
            <div className={classes.pictureBox}>
                <img src={photo} alt="Mariia" className={classes.picture}/>
                <br/>
                <h2>Mariia Lipinska</h2>
                <br/>
                <div className={classes.workContainer}>
                    <h4>Frontend Developer</h4>
                </div>

            </div>
            <div className={classes.changeImage}>
                <form action="" onSubmit={handleUpload}>
                <input type="file"/>
                <button type = "submit">Upload image</button>
            </form>
                {image !== "" && <img src={image} alt="" style={{height:"280px", width: "200px"}}/>}
            </div>

        </div>

    )
}
export default Navbar