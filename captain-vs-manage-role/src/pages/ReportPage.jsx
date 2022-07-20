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
      <Section title="Báo cáo nhiệm vụ">
        <Tabs defaultActiveKey="1" className="mission-tabs">
          <TabPane tab="Theo tuần" key="1">
            <div className="report-wrapper">
              <div className="report-header">
                <h2>Báo cáo nhiệm vụ</h2>
              </div>
              <div className="report-content">
                <div className="report-content-item">
                  <h4>Mô tả nhiệm vụ</h4>
                  <p>Công nhân cần cắt tỉa cây từ phố A đến phố F</p>
                </div>
                <div className="report-content-item">
                  <h4>Mô tả tiến độ</h4>
                  <input type="text" />
                </div>
                <div className="report-content-item">
                  <h4>Tiến độ</h4>
                  <Slider marks={marks} step={10} defaultValue={0} />
                </div>
                <div className="report-content-item">
                  <h4>Thời gian hoàn thành</h4>
                  <RangePicker />
                </div>
              </div>
              <div className="report-footer">
                <button className="my-btn btn-success">Gửi báo cáo</button>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Theo tháng" key="2">
            {" "}
            <div className="report-wrapper">
              <div className="report-header">
                <h2>Báo cáo nhiệm vụ</h2>
              </div>
              <div className="report-content">
                <div className="report-content-item">
                  <h4>Mô tả nhiệm vụ</h4>
                  <p>Công nhân cần cắt tỉa cây từ phố A đến phố F</p>
                </div>
                <div className="report-content-item">
                  <h4>Mô tả tiến độ</h4>
                  <input type="text" />
                </div>
                <div className="report-content-item">
                  <h4>Tiến độ</h4>
                  <Slider marks={marks} step={10} defaultValue={0} />
                </div>
                <div className="report-content-item">
                  <h4>Thời gian hoàn thành</h4>
                  <RangePicker />
                </div>
              </div>
              <div className="report-footer">
                <button className="my-btn btn-success">Gửi báo cáo</button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Section>
    </>
  );
}
