import React from "react";
import CalendarComp from "../components/CalendarComp";
import Featured from "../components/Featured";
import "../scss/home.scss";
import MissionCard from "../components/MissionCard";
import Section from "../components/Section";
import FirstSection from "../components/FirstSection";
import { Tabs } from "antd";
import {
  CheckCircleTwoTone,
  ClockCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
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
  return (
    <>
      <FirstSection />

      <Section title="Nhiệm vụ">
        <Tabs defaultActiveKey="1" className="mission-tabs">
          <TabPane tab="Chưa hoàn thành" key="1">
            <div className="job-overview">
              {mission.map((item, index) => (
                <MissionCard
                  key={index}
                  data={item}
                  lineColor="#048785"
                  icon={<ClockCircleTwoTone twoToneColor="#048785" />}
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
                  icon={<CheckCircleTwoTone twoToneColor="#00CD88" />}
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
                  icon={<CloseCircleTwoTone twoToneColor="#FE807E" />}
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
          {/* <Chart /> */}
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
