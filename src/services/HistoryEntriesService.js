import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

class HistoryEntriesService {
  getAll = async (province) => {
    const docRef = collection(getFirestore(), province);
    const querySnapshot = await getDocs(docRef);
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
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
