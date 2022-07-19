import { DatePicker, Slider, Tabs } from "antd";
import React from "react";
import FirstSection from "../components/FirstSection";
import Section from "../components/Section";
import "../scss/report.scss";
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
export default function ReportPage() {
  const marks = {
    10: "On going",
    50: "Halfway",
    80: "Almost done",
    100: "Done",
  };

  return (
    <>
      <FirstSection />
      <Section title="Danh sách nhiệm vụ">
        <Tabs defaultActiveKey="1" className="mission-tabs">
          <TabPane tab="Theo tuần" key="1">
            <div className="report-wrapper">
              <div className="report-header">
                <h2>Report current work</h2>
              </div>
              <div className="report-content">
                <div className="report-content-item">
                  <h4>Descibe of this work</h4>
                  <p>Worker need to cut tree from street A to street B</p>
                </div>
                <div className="report-content-item">
                  <h4>Comment of worker</h4>
                  <input type="text" />
                </div>
                <div className="report-content-item">
                  <h4>Progress</h4>
                  <Slider marks={marks} step={10} defaultValue={0} />
                </div>
                <div className="report-content-item">
                  <h4>Estimate working day</h4>
                  <RangePicker />
                </div>
              </div>
              <div className="report-footer">
                <button className="my-btn btn-success">Send</button>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Theo tháng" key="2">
            {" "}
            <div className="report-wrapper">
              <div className="report-header">
                <h2>Report current work</h2>
              </div>
              <div className="report-content">
                <div className="report-content-item">
                  <h4>Descibe of this work</h4>
                  <p>Worker need to cut tree from street A to street B</p>
                </div>
                <div className="report-content-item">
                  <h4>Comment of worker</h4>
                  <input type="text" />
                </div>
                <div className="report-content-item">
                  <h4>Progress</h4>
                  <Slider marks={marks} step={10} defaultValue={0} />
                </div>
                <div className="report-content-item">
                  <h4>Estimate working day</h4>
                  <RangePicker />
                </div>
              </div>
              <div className="report-footer">
                <button className="my-btn btn-success">Send</button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Section>
    </>
  );
}
