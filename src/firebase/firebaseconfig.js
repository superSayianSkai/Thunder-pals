import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDHn-AvrZyOJVHDOOEEJ78dSf0D2H6Zr3U",
  authDomain: "thunderpals-4651b.firebaseapp.com",
  projectId: "thunderpals-4651b",
  storageBucket: "thunderpals-4651b.appspot.com",
  messagingSenderId: "619988160422",
  appId: "1:619988160422:web:58a444e961766da9b3c967",
  measurementId: "G-KK5BPSHD0G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
