import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Image } from "antd";
import { captainMenu, workerMenu } from "../app-info/menu-list-data";
import { DataContext } from "../store/GlobalState";

export default function Menu() {
  const { state } = useContext(DataContext);
  const { userInfo } = state;

  let menu;
  if (userInfo.role === "worker") menu = workerMenu;
  else menu = captainMenu;

  return (
    <div className="menu">
      <div className="top">
        <span className="logo">
          <Image
            width={60}
            preview={false}
            src="https://res.cloudinary.com/beeyou/image/upload/v1654848083/logo/Logo_snepav.png"
          />
        </span>
      </div>

      <div className="center">
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "sidebar-btn active" : "sidebar-btn"
                }
              >
                {item.icon}
                <span className="link">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
