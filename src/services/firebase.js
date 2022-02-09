import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMfnnUGYTXhdXkFZqeShFEIdOQIyPD_-c",
  projectId: "team-jo-project2",
  databaseURL: "https://team-jo-project2-default-rtdb.firebaseio.com/",
  authDomain: "team-jo-project2.firebaseapp.com",
  storageBucket: "team-jo-project2.appspot.com",
  messagingSenderId: "234842686074",
  appId: "1:234842686074:web:868ca8b5750c7079e631c3",
};

export const app = initializeApp(firebaseConfig);
