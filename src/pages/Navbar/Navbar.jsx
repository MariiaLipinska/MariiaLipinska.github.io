import classes from "./Navbar.module.css";
import photo from "./Photo/photo.jpg"
import {uploadFileToFB} from "../../api/firebaseCalls";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getImage} from "../../redux/ActionCreator/actionUsers";

const Navbar = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null)
    const getImageThunk = () => dispatch(getImage)
    const newImage = useSelector((state) => state.usersReducer.image)
    const handleUpload = (e) => {
        e.preventDefault()
        const file = e.target[0].files[0]
        if (!file) return
        uploadFileToFB(file, setImage)
    }

    useEffect(() => {
            dispatch(getImageThunk())
        }, [image]
    )
    const ad = JSON.parse(localStorage.getItem("admin"));

    return (
        <div className={classes.container}>
            <div className={classes.pictureBox}>
                {newImage &&
                    <div><img src={newImage || photo} alt="Mariia" className={classes.picture}/>
                        <br/></div>
                }
            </div>
            {ad && <div className={classes.changeImage}>
                    <form action="" onSubmit={handleUpload}>
                        <input type="file"/>
                        <button type="submit" className={classes.fileButton}>Set image</button>
                    </form>
                </div>
            }
        </div>
    )
}
export default Navbar

