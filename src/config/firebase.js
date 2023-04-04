
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC0jnwlcgbpjVeb0nKjVsYcW70ou1URCnA",
  authDomain: "tiktok-jornada-fb224.firebaseapp.com",
  projectId: "tiktok-jornada-fb224",
  storageBucket: "tiktok-jornada-fb224.appspot.com",
  messagingSenderId: "88058901081",
  appId: "1:88058901081:web:da5d6d9f67293b4264b748"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;