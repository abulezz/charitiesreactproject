import React, { useState } from "react";
import {
  HeartOutlined,
  HomeOutlined,
  LinkOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
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

const items: MenuProps["items"] = [
  {
    label: <Link to="/">Charities</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="favorites">Favorites</Link>,
    key: "favorites",
    icon: <HeartOutlined />,
  },
  {
    label: <Link to="account">Account</Link>,
    key: "account",
    icon: <UserOutlined />,
  },
  {
    label: <Link to="signin">SignIn</Link>,
    key: "signin",
    icon: <UserOutlined />,
  },
  {
    label: <Link to="signup">SignUp</Link>,
    key: "signup",
    icon: <UserOutlined />,
  },
  {
    label: <Link to="about">About </Link>,
    key: "about",
    icon: <ReadOutlined />,
  },
  {
    label: (
      <a
        href="https://www.every.org/water"
        target="_blank"
        rel="noopener noreferrer"
      >
        every.org
      </a>
    ),
    key: "tribute",
    icon: <LinkOutlined />,
  },
];

function App() {
  const [current, setCurrent] = useState("mail");
  // const [currentLiked, setCurrentLiked] = useState(0);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <BrowserRouter>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
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
          <Route path="/:charity/:ein" element={<CharityDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
