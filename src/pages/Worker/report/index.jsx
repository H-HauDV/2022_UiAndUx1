import React from 'react'
import Widget from '../../../components/widget'
import Layout from '../../../components/layout'
import moment from 'moment';
import {
  Slider,
  Form,
  DatePicker
} from 'antd';
import "./report.scss"
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const Report = () => {
  return (
    <Layout>
      <div className="dashBoard">
        <div className="widgets">
          <Widget>
            <div className="form">
              <h1 className="title">Report current work</h1>
            <form>
              <div className="formInput" key="0">
                <h3 className="section">Work's code</h3>
                <div><a>2022B.06.WAF1</a></div>
                <br />
                <h3 className="section">Work's description</h3>
                <div>Worker need to cut tree from street a to stree b.</div>
              </div>
              <div className="formInput" key="2">
              <h3 className="section">Report</h3>
                <label>Comment of worker</label>
                <input type="text" placeholder="Can be empty" />
              </div>
         
              <div className="formInput" key="3">
                <label>Progress</label>
                <Slider
                  marks={{
                    0: '',
                    30: 'Ongoing',
                    50: 'Halfway',
                    80: 'Almost done',
                    100: 'Done',
                  }}
                />
              </div>
    
              <div className="formInput" key="4">
                <label>Estimate working day</label>
                <RangePicker
                  defaultValue={[moment('2022-06-02', dateFormat)]}
                  disabled={[true, false]}
                />
              </div>
              <div className="formInput" key="5">
                
              </div>
              <button>Send</button>
            </form>
            </div>
          </Widget>
        </div>
      </div>
    </Layout>
  )
}

export default Report