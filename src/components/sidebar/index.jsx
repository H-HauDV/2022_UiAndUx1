import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
const Sidebar = () => {
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
                    <DashboardIcon className="icon"/>
                    <span>Home</span>
                </li>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <QueryStatsOutlinedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <p className="title">REPORT</p>
                <li>
                    <SummarizeOutlinedIcon className="icon"/>
                    <span>Report</span>
                </li>
                <li>
                    <WorkHistoryOutlinedIcon className="icon"/>
                    <span>History</span>
                </li>
                <p className="title">OTHER</p>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Setting</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>

        </div>
    </div>
  )
}

export default Sidebar