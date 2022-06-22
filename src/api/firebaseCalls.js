import {
    onSnapshot,
    collection,
    addDoc,
    doc,
    deleteDoc,
    setDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import db, { storage } from "../firebase";
import { actionsUsers } from "../redux/ActionCreator/actionUsers";



export const getInfoFirebase = (dispatch) => {
    const collectionRef = collection(db, "user");
    onSnapshot(collectionRef, (snapshot) => {
        dispatch(
            actionsUsers.checkUser(
                snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            )
        );
    });
};


// export const addInfoFirebase = async (data) => {
//     const collectionRef = collection(db, "user");
//     const docRef = await addDoc(collectionRef, data);
//     docRef.id && console.log("Successfully added");
// };

export const editDataFirebase = async (id, item) => {
    const docRef = doc(db, "editData", id);
    await setDoc(docRef, item);
};
export const getEditDataFirebase = async (dispatch) => {
    const collectionRef = collection(db, "editData");
    onSnapshot(collectionRef, (snapshot) => {
        dispatch(
            actionsUsers.getEditInfo(
                snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            )
        );
    });
};

export const uploadFileToFB = (file, setImage) => {
    const storageRef = ref(storage, `/images/${file.name}`);
    const uploadData = uploadBytesResumable(storageRef, file);

    uploadData.on(
        "state_changed",
        (snapshot) => {
            const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(prog);
        },
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadData.snapshot.ref).then((url) => {
                console.log(url);
                setImage(url);
            });
        }
    )
};

export const setImageToFirebase = (image) => {
console.log(image)
}

export const getImageFirebase = (dispatch) => {
    const collectionRef = collection(db, "user");
    onSnapshot(collectionRef, (snapshot) => {
        dispatch(
            actionsUsers.setImage(
                snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
            )
        );
    })
}

