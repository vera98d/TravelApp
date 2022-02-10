import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCMfnnUGYTXhdXkFZqeShFEIdOQIyPD_-c",
      authDomain: "team-jo-project2.firebaseapp.com",
      projectId: "team-jo-project2",
      storageBucket: "team-jo-project2.appspot.com",
      messagingSenderId: "234842686074",
      appId: "1:234842686074:web:868ca8b5750c7079e631c3",
    };
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
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

export default new AuthService();
