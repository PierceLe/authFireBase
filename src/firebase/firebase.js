import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0p2LWNfXfiMYrISoeG-GOIDdfgD8KZGg",
  authDomain: "syncs-hacks.firebaseapp.com",
  projectId: "syncs-hacks",
  storageBucket: "syncs-hacks.appspot.com",
  messagingSenderId: "532115676111",
  appId: "1:532115676111:web:d79ec049f867646a3290ba",
  measurementId: "G-RTELQMVDYP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
