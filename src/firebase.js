import {getAuth} from "firebase/auth";
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA_torS_78UrEmX4d3WZRxQrN1wfsRoFDw",
    authDomain: "ultimeme-d055d.firebaseapp.com",
    projectId: "ultimeme-d055d",
    storageBucket: "ultimeme-d055d.appspot.com",
    messagingSenderId: "750233864055",
    appId: "1:750233864055:web:b8b8dcfe369364b3718372"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();
const db = getFirestore(app)
export {db}
export default app;