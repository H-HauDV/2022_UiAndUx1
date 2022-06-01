import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
const Sidebar = ({active}) => {
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
                    <span className="link"><a href="/worker">Home</a></span>
                </li>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <span className="link"><a href="/worker">Profile</a></span>
                </li>
                <li>
                    <QueryStatsOutlinedIcon className="icon"/>
                    <span className="link"><a href="/worker">Stats</a></span>
                </li>
                <p className="title">REPORT</p>
                <li>
                    <SummarizeOutlinedIcon className="icon"/>
                    <span className="link"><a href="/worker/report">Report</a></span>
                </li>
                <li>
                    <WorkHistoryOutlinedIcon className="icon"/>
                    <span className="link"><a href="/worker">History</a></span>
                </li>
                <p className="title">OTHER</p>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span className="link"><a href="/worker">Setting</a></span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span className="link"><a href="/worker">Logout</a></span>
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