import classes from "./Navbar.module.css"
import photo from "./Photo/photo.jpg"
import {addInfoFirebase, editInfoFirebase, setImageToFirebase, uploadFileToFB} from "../../api/firebaseCalls";
import {useEffect, useState} from "react";



const Navbar = () => {
    const [image, setImage] = useState("")
    // const path = useLocation().pathname;
    // const showChangeImage = () => {
    //     switch (path) {
    //         case RouteConst.MAIN:
    //             return false;
    //         default:
    //             return true;
    //     }
    // };

    const handleUpload = (e) =>{
        e.preventDefault()
        const file = e.target[0].files[0]
        if(!file) return
        uploadFileToFB(file,setImage)
    }
    useEffect(()=>{
        setImageToFirebase(image)
        },[image]
    )


    return (
        <div className={classes.container}>
            <div className={classes.pictureBox}>
                <img src={!image ? photo : image} alt="Mariia" className={classes.picture}/>
                <br/>
                {/*<h2>Mariia Lipinska</h2>*/}
                {/*<br/>*/}
                {/*<div className={classes.workContainer}>*/}
                {/*    <h4>Frontend Developer</h4>*/}
                {/*</div>*/}

            </div>
            <div className={classes.changeImage}>
                <form action="" onSubmit={handleUpload}>
                <input type="file"/>
                <button type = "submit" className={classes.fileButton}>Set image</button>
            </form>
            </div>
        </div>

    )
}
export default Navbar