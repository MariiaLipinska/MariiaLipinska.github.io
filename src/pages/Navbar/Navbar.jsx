import classes from "./Navbar.module.css"
import photo from "./Photo/photo.jpg"
import {addInfoFirebase, editInfoFirebase, setImageToFirebase, uploadFileToFB} from "../../api/firebaseCalls";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getImage, setImageFirebase} from "../../redux/ActionCreator/actionUsers";


const Navbar = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState("")
    const editImageThunk = (image)=>dispatch(setImageFirebase(image))
    const {admin} = useSelector(state => state.usersReducer)
    const editImage = useSelector((state)=> state.usersReducer.setImage)
    const getImageThunk = ()=>dispatch(getImage)
    const handleUpload = (e) => {
        e.preventDefault()
        const file = e.target[0].files[0]
        if (!file) return
        uploadFileToFB(file, setImage)
    }
    const changeImage = (image)=>{
       dispatch(editImageThunk(setImage))
    }
    useEffect(() => {
            getImageThunk(image)
        }, [image]
    )
    const ad = JSON.parse(localStorage.getItem("admin"));
    return (
        <div className={classes.container}>
            <div className={classes.pictureBox}>
                <img src={!image ? photo : image} alt="Mariia" className={classes.picture}/>
                <br/>
            </div>
            {
                ad && <div className={classes.changeImage}>
                    <form action="" onSubmit={handleUpload}>
                        <input type="file"/>
                        <button type="submit" className={classes.fileButton} onClick={changeImage}>Set image</button>
                    </form>
                </div>
            }
        </div>

    )
}
export default Navbar