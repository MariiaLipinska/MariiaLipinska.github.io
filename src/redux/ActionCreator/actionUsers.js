import {useDispatch} from "react-redux";
import {
    editDataFirebase,
    getEditDataFirebase,
    getImageFirebase,
    getInfoFirebase,
    setImageToFirebase
} from "../../api/firebaseCalls";

export const actionUsersTypes = {
    CHECK_USER:"CHECK_USER",
    SET_ERROR:"SET_ERROR",
    SET_IMAGE: "SET_IMAGE",
    GET_EDIT_INFO:"GET_EDIT_INFO",
    EDIT_INFO:'EDIT-INFO',
    CHANGE_NAME:'CHANGE-NAME',
    SET_ADMIN:"SET_ADMIN"
}

export const actionsUsers = {
    checkUser: (user) => ({
        type: actionUsersTypes.CHECK_USER,
        payload : user
    }),
    setError: (error) => ({
        type: actionUsersTypes.SET_ERROR,
            payload: error
    }),
    setImage: (image) => ({
        type: actionUsersTypes.SET_IMAGE,
        payload: image
    }),
    getEditInfo:(editInfo)=>({
        type: actionUsersTypes.GET_EDIT_INFO,
        payload: editInfo
    }),
    setAdmin:(admin)=>({
        type: actionUsersTypes.SET_ADMIN,
        payload: admin
    })
}

export const getUser = () => {
        getInfoFirebase()
}
export const getImage = () => async(dispatch) =>{
    getImageFirebase(dispatch)
}
export const setImageFirebase = (image) => async(dispatch) =>{
    await setImageToFirebase(dispatch)
}
export const editInfoFirebase = (item) => async(dispatch) =>{
    await editDataFirebase(item)
}
export const getEditInfo = () => async (dispatch)=>{
  await  getEditDataFirebase(dispatch)
}



