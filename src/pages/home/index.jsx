import React from "react";
import CalendarComp from "../../components/calendar";
import Featured from "../../components/featured";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import "./home.scss";
import MissionCard from "../../components/MissionCard";
import Section from "../../components/Section";
import FirstSection from "../../components/FirstSection";
const mission = [
  {
    name: "Cắt tỉa cây ở đường Đại Cồ Việt Cắt tỉa cây ở đường Đại Cồ Việt",
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
        <div className="job-overview">
          {mission.map((item, index) => (
            <MissionCard
              key={index}
              data={item}
              lineColor="#048785"
              icon={<AccessTimeIcon />}
              iconColor="#048785"
              iconBackgroundColor="#f1f1f1"
              timeEndColor="#048785"
            />
          ))}
        </div>

        <span className="text-divider">
          -------------------Đã hoàn thành-------------------
        </span>

        <div className="job-overview">
          {mission.map((item, index) => (
            <MissionCard
              key={index}
              data={item}
              lineColor="#38CEBE"
              icon={<CheckCircleOutlineIcon />}
              iconColor="#ffffff"
              iconBackgroundColor="#00CD88"
              descriptionColor="#048785"
              backgroundColor="#C9F9EB"
              timeEndColor="#048785"
            />
          ))}
        </div>

        <span className="text-divider">
          -------------------Quá hạn-------------------
        </span>

        <div className="job-overview">
          {mission.map((item, index) => (
            <MissionCard
              key={index}
              data={item}
              lineColor="#E27B7B"
              icon={<HighlightOffIcon />}
              iconColor="#fff"
              iconBackgroundColor="#FE807E"
              titleColor="#850000"
              backgroundColor="#FEEAEA"
              timeEndColor="#EF5656"
            />
          ))}
        </div>
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
