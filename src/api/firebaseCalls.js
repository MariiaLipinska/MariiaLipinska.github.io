import {
    onSnapshot,
    collection,
    doc,
    setDoc,
    getDoc
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import db, { storage } from "../firebase";
import { actionsUsers } from "../redux/ActionCreator/actionUsers";

export const getEditDataFirebase = async (dispatch) => {
    const collectionRef = collection(db, "editData");
    onSnapshot(collectionRef, (snapshot) => {
        dispatch(
            actionsUsers.getEditInfo(
                snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))[0]
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
            getDownloadURL(uploadData.snapshot.ref).then(async (url) => {
                console.log(url);
                setImage(url);
                const docRef = doc(db, "user", "34KJ5UIzf9GvV1HJyXPc")
                await setDoc(docRef, {
                   image: url
                });
            });
        }
    )
};
export const editDataFirebase = async ( item, id=
    "tIHffOT5wlwjmHrEmMGH") => {
    const docRef = doc(db, "editData", id);
    await setDoc(docRef, item);
};

export const getImageFirebase = async (dispatch) =>{
    const docRef = doc(db, "user", "34KJ5UIzf9GvV1HJyXPc");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        dispatch(
            actionsUsers.setImage(
                docSnap.data().image
                ))
        console.log("Document data:", docSnap.data());
        // console.log(docSnap.data().image)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}



