import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Charities from "./Pages/Charities";
import About from "./Pages/About";
import Account from "./Pages/Account";
import NotFound from "./Pages/NotFound";
import Favorites from "./Pages/Favorites";
import ProtectedRoute from "./Components/ProtectedRoute";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import CharityDetails from "./Pages/CharityDetails";
import {AuthProviderV2} from "./Components/AuthContxtV2";
import {Menu} from "./Components/Menu";

function App() {
  return (
    <AuthProviderV2>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Charities />} />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/charities/:ein" element={<CharityDetails />} />
        </Routes>
      </BrowserRouter>
    </AuthProviderV2>
  );
}

export default App;
