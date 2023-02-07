import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "./config/firebaseConfig";
import { getStorage,ref, uploadBytes } from "firebase/storage";

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp); // For Authentication
const db = getFirestore(firebaseApp); // For Using Database
const storage = getStorage(); // For

export { auth, db };

export async function upload(file, user, setLoading) {
    const fileRef = ref(storage, user.uid);

    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    setLoading(true);
    alert("Upload");
}