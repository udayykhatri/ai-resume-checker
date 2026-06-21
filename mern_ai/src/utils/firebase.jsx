
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  //apiKey: "add your own api key",
  authDomain: "ai-resume-checker-65d52.firebaseapp.com",
  projectId: "ai-resume-checker-65d52",
  storageBucket: "ai-resume-checker-65d52.firebasestorage.app",
  messagingSenderId: "991923243315",
  appId: "1:991923243315:web:7e891e2fa9dcd145bf1646",
  measurementId: "G-JT1PE3ZRE4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};