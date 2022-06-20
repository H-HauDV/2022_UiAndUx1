import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { Dropdown, Menu } from "antd";
import MobiMenu from "../MobiMenu";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="navbar">
        <div className="first-item">
          <div className="btn-back">
            <ArrowBackIcon onClick={() => navigate(-1)}></ArrowBackIcon>
          </div>
          <MobiMenu />
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchOutlinedIcon />
          </div>
        </div>

        <div className="last-item">
          <div className="avatar">
            <img
              src="https://res.cloudinary.com/beeyou/image/upload/v1641721299/logo/avatar7_jkzd2h.png"
              alt=""
            />
            <div className="avatar-title">
              <span>Xin chào,</span>
              <br />
              <span style={{ fontWeight: "bold" }}>Nguyễn Văn Hồng</span>
            </div>
          </div>
          <Dropdown overlay={menu} placement="bottomLeft" arrow>
            <ArrowDropDown />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
