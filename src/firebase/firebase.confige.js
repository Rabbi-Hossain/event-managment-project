// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTyLmuTess1F9d4xMQxuVlLfAyuIg3tzM",
  authDomain: "event-management-project-f6187.firebaseapp.com",
  projectId: "event-management-project-f6187",
  storageBucket: "event-management-project-f6187.appspot.com",
  messagingSenderId: "905237506378",
  appId: "1:905237506378:web:dca6434c4e8556fbe2f9b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app