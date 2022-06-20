import React from "react";

import { Link, useLocation } from "react-router-dom";

import { Image } from "antd";
import { workerMenu } from "../../menu-list-data";

export default function Menu() {
  const location = useLocation();
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
          {workerMenu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={
                  location.pathname.indexOf(item.link) < 0
                    ? "sidebar-btn"
                    : "sidebar-btn active"
                }
              >
                {item.icon}
                <span className="link">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
