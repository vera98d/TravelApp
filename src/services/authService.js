import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";

class AuthService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  getAuth = () => this.auth;

  logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = res.user;
      await addDoc(collection(getFirestore(), "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  logout = () => {
    signOut(this.auth);
  };
}

export default new AuthService(app);
