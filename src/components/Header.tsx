import React from "react";
import { Layout } from "antd";
import logo from "../assets/svgs/logo.svg";
import { pageLinks } from "../data";
import { Space } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
const { Header } = Layout;

const HeaderPage = () => {
  return (
    <Header className="flex fixed w-full items-center z-10 justify-between bg-white px-28 text-lg">
      <div>
        <img src={logo} className="nav-logo" alt="backRoads" />
      </div>
      <ul className="flex space-x-4">
        {pageLinks.map((link) => (
          <li key={link.id} className="capitalize">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
      <Space>
        <a className="" href="#main">
          <FacebookFilled style={{ fontSize: "24px", color: "#08c" }} />
        </a>
        <a className="" href="#main">
          <LinkedinFilled style={{ fontSize: "24px", color: "#08c" }} />
        </a>
        <a className="" href="#main">
          <GithubFilled style={{ fontSize: "24px" }} />
        </a>
      </Space>
    </Header>
  );
};

export default HeaderPage;
