import React from "react";
import "../scss/progresspage.scss";
import Section from "../components/Section";
import { Tabs } from "antd";
import {
  CheckCircleTwoTone,
  ClockCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import MissionCard from "../components/MissionCard";
import WorkingProgressGeneral from "../components/WorkingProgressGeneral";
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
export default function ProgressPage() {
  return (
    <div>
      {" "}
      <div className="progress-page-wrapper">
        <div className="progress-page-container">
          <div className="progress-page-upper">
            <div className="progress-page-title">Tiến độ</div>
          </div>
          <div className="progress-page-down">
            <div className="progress-page-general">
              <WorkingProgressGeneral
                title="Tiến độ tổng"
                percent={80}
                work={"4/5"}
              />
              <WorkingProgressGeneral
                title="Tiến độ tháng này"
                percent={66.6}
                work={"6/9"}
              />
            </div>
            <div className="progress-page-small">
              <Section title="Nhiệm vụ tháng này">
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
                          backgroundColor="#ffffff"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
