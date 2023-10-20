// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, /*import from env*/
  authDomain: "aadith-estate.firebaseapp.com",
  projectId: "aadith-estate",
  storageBucket: "aadith-estate.appspot.com",
  messagingSenderId: "226815774566",
  appId: "1:226815774566:web:1814e591afec62d6ba82a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

