// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdV01YK62WTi425JC7srITu7S5CW4WIOw",
  authDomain: "task-manager-app-351a1.firebaseapp.com",
  projectId: "task-manager-app-351a1",
  storageBucket: "task-manager-app-351a1.firebasestorage.app",
  messagingSenderId: "515468420474",
  appId: "1:515468420474:web:0faf6ab8b9621bce9b22c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };