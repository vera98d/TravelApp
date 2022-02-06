import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

class HistoryEntriesService {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCMfnnUGYTXhdXkFZqeShFEIdOQIyPD_-c",
      authDomain: "team-jo-project2.firebaseapp.com",
      projectId: "team-jo-project2",
      storageBucket: "team-jo-project2.appspot.com",
      messagingSenderId: "234842686074",
      appId: "1:234842686074:web:868ca8b5750c7079e631c3",
    };
    initializeApp(firebaseConfig);
  }

  getAll = async (province) => {
    const docRef = collection(getFirestore(), province);
    const querySnapshot = await getDocs(docRef);
    return querySnapshot.docs.map((doc) => doc.data());
  };

  insert = async (title, city, description, imageLink, province) => {
    try {
      await addDoc(collection(getFirestore(), province), {
        title: title,
        city: city,
        description: description,
        image: imageLink,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
}

export default new HistoryEntriesService();
