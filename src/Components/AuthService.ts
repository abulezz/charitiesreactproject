import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export class AuthService {
  signin = (email: string, password: string) => {
    // signin logic goes here
    console.log("Signin called with:", email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("mhhr loggedin -> ", user);
        const id = user.uid;
        return id;
      })
      .catch((error) => {
        console.log("mhhr catch signinError -> ", error);
      });
  };

  logout = () => {
    signOut(auth).catch((error) => {
      // An error happened.
      console.log("error :>> ", error);
    });
  };
  signup = (email: string, password: string) => {
    // signup logic goes here
    console.log("Signup called with:", email, password);
    console.log("auth :>> ", auth);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential :>> ", userCredential);
        // Signed up
        const user = userCredential.user;
        console.log("returned user -> ", user);
        const id = user.uid;
        const docRef = setDoc(doc(db, "users", id), {
          favourites: [],
        });
        console.log("docRef", docRef);
        // setUser(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode :>> ", errorCode);
        console.log("errorMessage :>> ", errorMessage);
        // ..
      });
  };
}
