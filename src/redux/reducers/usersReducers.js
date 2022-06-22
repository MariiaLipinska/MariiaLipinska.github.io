import { actionUsersTypes } from "../ActionCreator/actionUsers";


const initialState = {
    email: "",
    id: "",
    password:"",
    aboutMe:"",
    fullName:"",
    dateOfBirth:"",
    position:"",
    universities:"",
    years:""
};


const usersReducer = (state = initialState, action)=> {
    switch (action.type) {
        case actionUsersTypes.CHECK_USER:
            return {
                ...state,
                checkUser: action.user
            };
            case actionUsersTypes.SET_ERROR:
                return {
                            ...state,
                           errorAdmin: action.payload
                        }
        case actionUsersTypes.SET_IMAGE:
            return {
                ...state,
                image: action.payload
            }
        case actionUsersTypes.EDIT_INFO:
            return {
                ...state,
                info: action.payload
            }
        case actionUsersTypes.GET_EDIT_INFO:
            return {
                ...state,
                info: action.payload
            }
        default:
            return state;
    }
};

export default usersReducer;