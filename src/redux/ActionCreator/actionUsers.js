import {useDispatch} from "react-redux";
import {getImageFirebase, getInfoFirebase} from "../../api/firebaseCalls";

export const actionUsersTypes = {
    CHECK_USER:"CHECK_USER",
    SET_ERROR:"SET_ERROR",
    SET_IMAGE: "SET_IMAGE"
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
}

export const getUser = () => {
        getInfoFirebase()
}
export const getImage = () => async(dispatch) =>{
    getImageFirebase(dispatch)
}



