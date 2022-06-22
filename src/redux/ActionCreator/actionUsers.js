import {useDispatch} from "react-redux";
import {getEditDataFirebase, getImageFirebase, getInfoFirebase} from "../../api/firebaseCalls";

export const actionUsersTypes = {
    CHECK_USER:"CHECK_USER",
    SET_ERROR:"SET_ERROR",
    SET_IMAGE: "SET_IMAGE",
    GET_EDIT_INFO:"GET_EDIT_INFO"
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
    })
}

export const getUser = () => {
        getInfoFirebase()
}
export const getImage = () => async(dispatch) =>{
    getImageFirebase(dispatch)
}
export const getInfo = () => async (dispatch)=>{
    getEditDataFirebase()
}



