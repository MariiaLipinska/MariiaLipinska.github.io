import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpbxaSBNMlupZGToMJIhdyb4JzN46FQEQ",
    authDomain: "resume-project-6b691.firebaseapp.com",
    projectId: "resume-project-6b691",
    storageBucket: "resume-project-6b691.appspot.com",
    messagingSenderId: "483934856946",
    appId: "1:483934856946:web:93e70e1f489522826c926b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
export default  getFirestore();