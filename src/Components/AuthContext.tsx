import { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig.ts";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
  userChecked: boolean;
}

// sets the default value for the authentication context.
const defaultValue: AuthContextType = {
  user: null, // by default, the user is set to indicate no provider is present.
  signin: () => {
    throw Error("signin function not implemented");
  },
  signup: () => {
    throw Error("signup function not implemented");
  },
  logout: () => {
    throw Error("logout function not implemented");
  },
  userChecked: false,
};

// Creates a new context for authentication with the default value.
export const AuthContext = createContext(defaultValue);

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [userChecked, setUserChecked] = useState<boolean>(false);
  const signin = (email: string, password: string) => {
    // signin logic goes here
    console.log("Signin called with:", email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signup = (email: string, password: string) => {
    // signup logic goes here
    console.log("Signup called with:", email, password);
    console.log("auth :>> ", auth);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential :>> ", userCredential);
        // Signed up
        const user = userCredential.user;
        setUser(user);

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

  const getActiveUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("active user", user);
        setUser(user);
      } else {
        console.log("no active user");
      }
    });
  };

  useEffect(() => {
    getActiveUser();
    setUserChecked(true);
  }, []);

  console.log("user :>> ", user);

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log("error :>> ", error);
      });
    // logout logic here
    // refactor when we are dealing with a real authentication provider
  };

  return (
    <AuthContext.Provider value={{ user, signin, signup, logout, userChecked }}>
      {props.children}
    </AuthContext.Provider>
  );
};
