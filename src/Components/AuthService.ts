import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User} from "firebase/auth";
import {auth} from "../firebaseConfig";
import {useState} from "react";

export class AuthService {

    signin = (email: string, password: string) => {
        // signin logic goes here
        console.log("Signin called with:", email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("mhhr loggedin -> ",user)
                // ...
            })
            .catch((error) => {
                console.log("mhhr catch signinError -> ",error)
            });
    };

    logout = () => {
        signOut(auth)
            .catch((error) => {
                // An error happened.
                console.log("error :>> ", error);
            });
    }
    signup = (email: string, password: string) => {
        // signup logic goes here
        console.log("Signup called with:", email, password);
        console.log("auth :>> ", auth);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("userCredential :>> ", userCredential);
                // Signed up
                const user = userCredential.user;
                console.log("returned user -> ",user)
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
