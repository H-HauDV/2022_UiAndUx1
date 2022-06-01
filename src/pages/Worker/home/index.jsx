import React from 'react'
import LRcard from '../../../components/LRcard'
import Layout from '../../../components/layout'

import "./home.scss"
const Home = () => {
  return (
    <Layout>
      <div className="dashBoard">
        <div className="cards">
          <LRcard type="activeWorker"/>
          <LRcard type="lastReport"/>
          <LRcard type="attendance"/>
        </div>
      </div>
    </Layout>
  )
}
export default Home