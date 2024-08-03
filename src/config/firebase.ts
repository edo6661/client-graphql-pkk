// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7R8gNZClXEXaU-LzSrIvEQ2eWSAgwsKU",
  authDomain: "pendaftaran-kkn-kkp.firebaseapp.com",
  projectId: "pendaftaran-kkn-kkp",
  storageBucket: "pendaftaran-kkn-kkp.appspot.com",
  messagingSenderId: "425327452114",
  appId: "1:425327452114:web:2b92f7a2b96c866e63f20b",
  measurementId: "G-BES4KDTEDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export {
  app,
  storage
}