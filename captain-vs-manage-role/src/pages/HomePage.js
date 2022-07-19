import React, { useContext } from "react";
import CalendarComp from "../components/CalendarComp";
import Featured from "../components/Featured";
import "../scss/home.scss";
import MissionCard from "../components/MissionCard";
import Section from "../components/Section";
import FirstSection from "../components/FirstSection";
import { Tabs } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import Chart from "../components/Chart";
import { DataContext } from "../store/GlobalState";
import AttendanceReport from "../components/AttendanceReport";
const { TabPane } = Tabs;
const mission = [
  {
    name: "Cắt tỉa cây ở đường Đại Cồ Việt",
    description: "Cắt tỉa lại, tưới 50 cây ...",
    timeEnd: "16:00 PM",
  },
  {
    name: "Cắt tỉa cây ở đường Đại Cồ Việt",
    description: "Cắt tỉa lại, tưới 50 cây ...",
    timeEnd: "16:00 PM",
  },
  {
    name: "Cắt tỉa cây ở đường Đại Cồ Việt",
    description: "Cắt tỉa lại, tưới 50 cây ...",
    timeEnd: "16:00 PM",
  },
];

const HomePage = () => {
  const { state } = useContext(DataContext);
  const { userInfo } = state;
  // const firstSection = () => {
  //   if (userInfo.role === "worker") {
  //     return <FirstSection />;
  //   } else if (userInfo.role === "captain") {
  //     return;
  //   } else if (userInfo.role === "manage") {
  //     return <FirstSection />;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <>
      <AttendanceReport />

      <Section title="Nhiệm vụ">
        <Tabs defaultActiveKey="1" className="mission-tabs">
          <TabPane tab="Chưa hoàn thành" key="1">
            <div className="job-overview">
              {mission.map((item, index) => (
                <MissionCard
                  key={index}
                  data={item}
                  lineColor="#048785"
                  icon={<ClockCircleOutlined style={{ color: "#048785" }} />}
                  iconBackgroundColor="#f1f1f1"
                  timeEndColor="#048785"
                />
              ))}
            </div>
          </TabPane>
          <TabPane tab="Đã hoàn thành" key="2">
            <div className="job-overview">
              {mission.map((item, index) => (
                <MissionCard
                  key={index}
                  data={item}
                  lineColor="#38CEBE"
                  icon={<CheckCircleOutlined style={{ color: "#00CD88" }} />}
                  descriptionColor="#048785"
                  backgroundColor="#C9F9EB"
                  timeEndColor="#048785"
                />
              ))}
            </div>
          </TabPane>
          <TabPane tab="Quá hạn" key="3">
            <div className="job-overview">
              {mission.map((item, index) => (
                <MissionCard
                  key={index}
                  data={item}
                  lineColor="#E27B7B"
                  icon={<CloseCircleOutlined style={{ color: "#FE807E" }} />}
                  titleColor="#850000"
                  backgroundColor="#FEEAEA"
                  timeEndColor="#EF5656"
                />
              ))}
            </div>
          </TabPane>
        </Tabs>
      </Section>
      <Section title="Tiến độ công việc">
        <div className="work-timeline">
          <Featured />
          <Chart />
        </div>
      </Section>
      <Section title="Lịch chấm công">
        <CalendarComp />
      </Section>
      {/* <div className="cards">
        <LRcard type="activeWorker" />
        <LRcard type="lastReport" />
        <LRcard type="attendance" />
      </div>

      <div className="charts"></div> */}
    </>
  );
};
export default HomePage;
