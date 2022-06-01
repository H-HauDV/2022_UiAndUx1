import React from 'react'
import Widget from '../../../components/widget'
import Layout from '../../../components/layout'

import "./home.scss"
const Home = () => {
  return (
    <Layout>
      <div className="dashBoard">
        <div className="widgets">
          <Widget/>
          <Widget/>
          <Widget/>
        </div>
      </div>
    </Layout>
  )
}
export default Home