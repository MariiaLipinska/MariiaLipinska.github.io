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

// export const login = (formData, setError, setAdmin) => {
//     const collectionRef = collection(db, `${formData.user}${formData.password}`);
//     onSnapshot(collectionRef, (snapshot) => {
//         const doc = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//         doc.length === 0
//             ? setError("Email or Password aare incorrect")
//             : setAdmin(doc[0]);
//     })
    // snapshot.docs.map((doc) => ({
    //   ...doc.data(),
    //   id: doc.id,
    // }));
    // });
};

export const addInfoFirebase = async (data) => {
    const collectionRef = collection(db, "user");
    const docRef = await addDoc(collectionRef, data);
    docRef.id && console.log("Successfully added");
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
}
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

