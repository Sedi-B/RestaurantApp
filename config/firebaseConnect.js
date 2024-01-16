import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBRpvw4Hp0nJk7NcvrieqGoyDewNSOYb5w",
  authDomain: "seditaste-a1f37.firebaseapp.com",
  projectId: "seditaste-a1f37",
  storageBucket: "seditaste-a1f37.appspot.com",
  messagingSenderId: "66556468510",
  appId: "1:66556468510:web:2231d003c4bd5b1f6dfd0f",
  measurementId: "G-PN1L5R4K38",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
