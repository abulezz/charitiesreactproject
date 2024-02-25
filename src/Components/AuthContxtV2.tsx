import {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User} from "firebase/auth";
import {auth} from "../firebaseConfig";
import firebase from "firebase/compat";
import {app} from "../firebaseConfig";


// 3- export provider
// 4- use the provider as wrapper for the project/routing

// sets the default value for the authentication context.


// 1- create context
export const AuthContextV2 = createContext<User|null>(null);

export const AuthProviderV2 = ({ children }) => {
    const [user, setUser] = useState<User|null>(null);

    useEffect(() => {
        auth.onAuthStateChanged((value)=> {
            setUser(value)});
    }, []);

    return <AuthContextV2.Provider value={user}>{children}</AuthContextV2.Provider>
};


// 2- Use context inside provider (function)
