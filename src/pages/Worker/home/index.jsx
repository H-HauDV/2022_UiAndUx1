import React from 'react'
import Sidebar from '../../../components/sidebar'
import Navbar from '../../../components/navbar'

import "./home.scss"
const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widget"></div>
        </div>
    </div>
  )
}

export default Home