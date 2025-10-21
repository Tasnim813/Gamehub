// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2r311D8hALQ30G0-O1xql8Waqq_dvCnE",
  authDomain: "aaighnment-nine.firebaseapp.com",
  projectId: "aaighnment-nine",
  storageBucket: "aaighnment-nine.firebasestorage.app",
  messagingSenderId: "796847630687",
  appId: "1:796847630687:web:c41442e11aeb065fa7eeea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);