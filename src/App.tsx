import { useState } from "react";
import Charities from "./Views/Charities";
import { Button, Row, Col } from "antd";
import Navbar from "./Components/Navbar";
import * as ReactDom from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./Views/NotFound";
import Home from "./Views/Home";
import About from "./Views/About";
import Favorites from "./Views/Favorites";
import Account from "./Views/Account";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar />
      <h1>H2All</h1> */}
      {/* <Charities /> */}
    </>
  );
}

export default App;
