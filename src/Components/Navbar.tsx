import React, { useState } from "react";
import {
  AppstoreOutlined,
  HeartOutlined,
  HomeOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Favorites",
    key: "fav",
    icon: <HeartOutlined />,
  },
  {
    label: "Account",
    key: "account",
    icon: <UserOutlined />,
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

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Navbar;
