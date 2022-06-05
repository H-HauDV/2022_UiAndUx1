import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
const Sidebar = ({ active }) => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/worker">
              <DashboardIcon className="icon" />
              <span className="link">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/worker">
              <PersonOutlineOutlinedIcon className="icon" />
              <span className="link">Profile</span>
            </Link>
          </li>

          <li>
            <Link to="/worker">
              <QueryStatsOutlinedIcon className="icon" />
              <span className="link">Stats</span>
            </Link>
          </li>
          <p className="title">REPORT</p>
          <li>
            <Link to="/worker/report">
              <SummarizeOutlinedIcon className="icon" />
              <span className="link">Report</span>
            </Link>
          </li>
          <li>
            <Link to="/worker/history">
              <WorkHistoryOutlinedIcon className="icon" />
              <span className="link">History</span>
            </Link>
          </li>
          <p className="title">OTHER</p>
          <li>
            <Link to="/worker">
              <SettingsOutlinedIcon className="icon" />
              <span className="link">Setting</span>
            </Link>
          </li>
          <li>
            <Link to="/worker">
              <LogoutOutlinedIcon className="icon" />
              <span className="link">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
