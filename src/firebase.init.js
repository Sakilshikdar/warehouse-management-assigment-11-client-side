// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAeOkUpOnX_g0PnDeMTaIJcpVbzRNd8Yw",
  authDomain: "wearhouse-63077.firebaseapp.com",
  projectId: "wearhouse-63077",
  storageBucket: "wearhouse-63077.appspot.com",
  messagingSenderId: "185931475266",
  appId: "1:185931475266:web:f1e9f716c15d319284c0db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;