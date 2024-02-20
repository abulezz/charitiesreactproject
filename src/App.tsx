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
import Charities from "./Pages/Charities";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Favorites",
    key: "favorites",
    icon: <HeartOutlined />,
  },
  {
    label: "Account",
    key: "account",
    icon: <UserOutlined />,
  },
  {
    label: "About",
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

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Charities />
      {/* <RouterProvider router={router} /> */}
      {/* <Navbar />
      <h1>H2All</h1>
      <Charities /> */}
    </>
  );
}

export default App;
