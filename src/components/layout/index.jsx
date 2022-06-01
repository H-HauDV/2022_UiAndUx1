import React from 'react'
import Sidebar from '../sidebar'
import Navbar from '../navbar'


import "./layout.scss"
const Layout = ({children}) => {
  return (
    <div className="main">
        <Sidebar/>
        <div className="mainContainer">
          <Navbar/>
          {children}
        </div>
    </div>
  )
}

export default Layout