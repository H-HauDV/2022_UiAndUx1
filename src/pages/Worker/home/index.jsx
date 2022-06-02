import React from 'react'
import LRcard from '../../../components/LRcard'
import Layout from '../../../components/layout'
import Featured from '../../../components/featured'
import Chart from '../../../components/chart'

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

        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
      </div>
    </Layout>
  )
}
export default Home