import {actionUsersTypes} from "../ActionCreator/actionUsers";


const initialState = {
    admin: false,
    email: "lipa50196@i.ua",
    id: null,
    password: null,
    aboutMe: "I am frontend developer, who has just started her work experience. I like to learn something new. That's why I tried to change my life and after being music teacher learn programming. It's interesting and useful thing, because technology is the future. I like to improve my skills and to gain my goals. Also,I have an experience in communication with different people, so it can be useful in team work.",
    fullName: "Maria Lipinska",
    dateOfBirth: "January 5, 1996",
    position: "Frontend Developer",
    languages: "English (Intermediate)",
    universities1: "Lviv music academy (Musicology)",
    universities2: "Logos IT Academy (Frontend developing)",
    years1: "2015-2021",
    years2: "2021-2022"
};


const usersReducer = (state = initialState, action) => {
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
        case actionUsersTypes.SET_ADMIN:
            return {
                ...state,
                admin: action.payload
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

        default:
            return state;
    }
};


export default usersReducer;

