# Roadmap

## Build sinlge Charity page

1. Create a component page for it ("CharityDetails.tsx).
2. Add route to navigate to that component. That route's path should include the id of the charity (look in spike how to have a dynamic route. or better in react-router docs).
3. In the Home component, create a Link (react router link) that takes to the details page, that link should contain the actual id of the charity (inserting a variable in the string).
4. in the CharityDetails component, we should use the useParams hook (React-router) to get the id from the charity.
   4.1 crete a state variable to store the information of that single charity
   4.2 do a fetch to the corresponding endpoint , sending the charit id, and set the state variable with the result of the fetch
   4.3 we will probably need an useEffect to call the fetch function when the component loads.
   4.4 display in JSX (in the html part) all the information stored inside the state variable

## Build SignIn/SignUp/Account

1. Create a component page for (Account/Signin/UP)
2. Create the routes for the new pages
3. Create the authcontext component
4. Import React createContext, useEffect, useState, ReactNode, and auth from firebase
5. In the sign in page and sign up pages create User, User,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut, and import them in Auth context, then create a Type for User
6. Created ProtectedRoute component and (import React, { useContext } from "react";
   import { AuthContext } from "../contexts/AuthContext";
   import { Navigate } from "react-router-dom";)
7. create a the user checking function using a protectedroute variable with childern props
8. Wrap the account root with ProtectedRoot
