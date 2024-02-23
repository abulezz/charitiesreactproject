import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_Auth_Domain,
  projectId: import.meta.env.VITE_Project_ID,
  storageBucket: import.meta.env.VITE_Storage_Bucket,
  messagingSenderId: import.meta.env.VITE_Messaging_Sender_ID,
  appId: import.meta.env.Vite_appId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
