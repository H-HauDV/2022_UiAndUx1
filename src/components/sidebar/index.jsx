import React from 'react'
import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Logo</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>Report</span>
                </li>
                <li>
                    <span>History</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color</div>
    </div>
  )
}

export default Sidebar