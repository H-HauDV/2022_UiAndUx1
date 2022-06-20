import React from "react";
import Menu from "../Menu";
import "./sidebar.scss";

const Sidebar = ({ active }) => {
  return (
    <div className="sidebar">
      <Menu />
    </div>
  );
};

export default Sidebar;
