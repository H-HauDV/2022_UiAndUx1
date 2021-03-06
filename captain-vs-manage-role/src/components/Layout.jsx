import React from "react";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import "../scss/layout.scss";

const Layout = ({ children }) => {
  const location = useLocation();

  if (location.pathname.indexOf("login") > 0) return children;
  if (location.pathname.indexOf("worker") > 0) return children;

  return (
    <div className="main">
      <Sidebar />
      <div className="mainContainer">
        <Navbar />
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
