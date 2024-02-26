import React, { useContext, useState } from "react";
import {
  HeartOutlined,
  HomeOutlined,
  LinkOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as AntdMenu } from "antd";
import { Link } from "react-router-dom";
import { AuthContextV2 } from "./AuthContxtV2";

const AuthenticatedMenu = () => {
  const [current, setCurrent] = useState("mail");

  const authenticatedItems: MenuProps["items"] = [
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
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <AntdMenu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={authenticatedItems}
    />
  );
};

const UnauthenticatedMenu = () => {
  const [current, setCurrent] = useState("mail");

  const unauthenticatedItems: MenuProps["items"] = [
    {
      label: <Link to="/">Charities</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="signin">SignIn</Link>,
      key: "signin",
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
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <AntdMenu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={unauthenticatedItems}
    />
  );
};

export const Menu = () => {
  const user = useContext(AuthContextV2);

  return user ? <AuthenticatedMenu /> : <UnauthenticatedMenu />;
};
