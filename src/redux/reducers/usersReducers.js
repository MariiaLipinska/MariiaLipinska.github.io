import { actionUsersTypes } from "../ActionCreator/actionUsers";


const initialState = {
    email: "",
    id: "",
    password:""
};


const usersReducer = (state = initialState, action)=> {
    switch (action.type) {
        case actionUsersTypes.CHECK_USER:
            return {
                ...state,
                checkUser: action.user
            };
        // case actionUsersTypes.REMOVE_USER:
        //     return {
        //         ...state,
        //        user: null
        //     }
            case actionUsersTypes.SET_ERROR:
                return {
                            ...state,
                           errorAdmin: action.payload
                        }
        default:
            return state;
    }
};

export default usersReducer;