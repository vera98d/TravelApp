import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  onChildAdded,
  query,
  orderByChild,
  startAfter,
} from "firebase/database";
import { app } from "./firebase";

class ChatsService {
  constructor(firebaseApp) {
    this.db = getDatabase(firebaseApp);
  }

  async getAll(province) {
    const chatsRef = ref(this.db, `chats/${province}`);

    return new Promise((resolve) => {
      onValue(
        chatsRef,
        (snapshot) => {
          const messages = [];
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            messages.push({ ...childSnapshot.val(), id: childKey });
          });

          resolve(messages);
        },
        { onlyOnce: true }
      );
    });
  }

  async insert(province, message, authorId) {
    const createdAt = Date.now();
    const chatsRef = ref(this.db, `chats/${province}`);
    return set(push(chatsRef), { authorId, message, createdAt });
  }

  onChange(province, listener) {
    const chatsRef = query(
      ref(this.db, `chats/${province}`),
      orderByChild("createdAt"),
      startAfter(Date.now())
    );

    return onChildAdded(chatsRef, (snapshot) => {
      listener({ ...snapshot.val(), id: snapshot.key });
    });
  }
}

export default new ChatsService(app);
