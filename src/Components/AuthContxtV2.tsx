import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import firebase from "firebase/compat";
import { app } from "../firebaseConfig";

export const AuthContextV2 = createContext<User | null>(null);

export const AuthProviderV2 = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((value) => {
      setUser(value);
    });
  }, []);

  return (
    <AuthContextV2.Provider value={user}>{children}</AuthContextV2.Provider>
  );
};
