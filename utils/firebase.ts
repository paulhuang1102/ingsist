// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-lHysjdzgeA-QY4_HV2MecUO4QCKWQWs",
  authDomain: "ingsist-ce7ba.firebaseapp.com",
  databaseURL:
    "https://ingsist-ce7ba-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ingsist-ce7ba",
  storageBucket: "ingsist-ce7ba.appspot.com",
  messagingSenderId: "282085928913",
  appId: "1:282085928913:web:1974fe62092c2ab0fe3af0",
  measurementId: "G-MH0VGKFELY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

// const analytics = getAnalytics(app);

export async function getTags() {
  try {
    const snapshot = await get(child(dbRef, `tag`));

    return snapshot
      .val()
      .filter((v: any) => !!v)
      .map((v: any) => v.name);
  } catch (e) {
    console.error(e);
    return null;
  }
}
