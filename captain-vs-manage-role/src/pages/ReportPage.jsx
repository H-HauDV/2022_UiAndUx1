import { DatePicker, Slider, Tabs, Tooltip, notification } from "antd";
import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import Section from "../components/Section";
import { useEffect } from "react";
import "../scss/report.scss";
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
export default function ReportPage() {
  useEffect(() => {
    document.title = "Báo cáo";
  }, []);
  const marks = {
    10: "Mới bắt đầu",
    50: "Một nửa",
    80: "Gần hoàn thành",
    100: "Đã hoàn thành",
  };
  const openNotification = () => {
    notification.open({
      message: "Thành công",
      description: "Báo cáo đã được gửi.",
      icon: (
        <CheckCircleOutlined
          className="noti-icon"
          style={{
            color: "#52c41a",
          }}
        />
      ),
    });
  };
  return (
    <>
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
                <Tooltip title="Phần này có thể bỏ trống">
                  <div className="report-content-item">
                    <h4>Mô tả tiến độ</h4>
                    <input type="text" />
                  </div>
                </Tooltip>
                <Tooltip title="Hãy kéo thả thanh này để chọn tiến độ">
                  <div className="report-content-item">
                    <h4>Tiến độ</h4>
                    <Slider marks={marks} step={10} defaultValue={0} />
                  </div>
                </Tooltip>
                <Tooltip title="Thời gian ước tính hoàn thành">
                  <div className="report-content-item">
                    <h4>Thời gian hoàn thành</h4>
                    <RangePicker />
                  </div>
                </Tooltip>
              </div>
              <div className="report-footer">
                <button
                  onClick={openNotification}
                  className="my-btn btn-success"
                >
                  Gửi báo cáo
                </button>
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
                <button
                  onClick={openNotification}
                  className="my-btn btn-success"
                >
                  Gửi báo cáo
                </button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Section>
    </>
  );
}
