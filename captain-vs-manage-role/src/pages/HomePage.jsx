import React, { useContext } from "react";
import CalendarComp from "../components/CalendarComp";
import Featured from "../components/Featured";
import "../scss/home.scss";
import MissionCard from "../components/MissionCard";
import Section from "../components/Section";
import { Table, Tabs } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  EyeOutlined,
  FallOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import Chart from "../components/Chart";
import { DataContext } from "../store/GlobalState";
import AttendanceReport from "../components/AttendanceReport";
import ManagerWorkingProgress from "../components/ManagerWorkingProgress";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};
const labels = [
  "Đội 1",
  "Đội 2",
  "Đội 3",
  "Đội 4",
  "Đội 5",
  "Đội 6",
  "Đội 7",
  "Đội 8",
  "Đội 9",
  "Đội 10",
];
const data = {
  labels,
  datasets: [
    {
      label: "Tiến độ",
      data: labels.map((label) => {
        if (label.includes("1")) return 83.33;
        else if (label.includes("2")) return 92;
        else if (label.includes("3")) return 83.33;
        else if (label.includes("4")) return 70;
        else if (label.includes("5")) return 93;
        else if (label.includes("6")) return 92;
        else if (label.includes("7")) return 64;
        else if (label.includes("8")) return 92;
        else if (label.includes("9")) return 72;
      }),
      backgroundColor: "#37cb95",
    },
  ],
};

const columns = [
  {
    title: "STT",
    dataIndex: "key",
    key: "stt",
    align: "center",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Tên đội",
    dataIndex: "team",
    key: "team",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Đội trưởng",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Nhiệm vụ",
    dataIndex: "mission",
    key: "mission",
    align: "center",
    render: (text) => (
      <div className="mission-wrapper">
        <div className="mission-text">{text}</div>
      </div>
    ),
  },
  {
    title: "Tiến độ",
    dataIndex: "prog",
    key: "prog",
    render: (_, { prog }) => (
      <div className="prog-container">
        {Math.floor(Math.random() * 2) === 1 ? (
          <>
            <div className="prog">{prog}</div>
            <FallOutlined className="icon-down" />
          </>
        ) : (
          <>
            <div className="prog">{prog}</div>
            <RiseOutlined className="icon-up" />
          </>
        )}
      </div>
    ),
  },

  {
    title: "Hoạt động",
    key: "action",
    align: "center",
    render: (_, record) => (
      <Link to="/tien-do-nho" className="icon-wrapper">
        <EyeOutlined style={{ color: "#eea620" }} />
      </Link>
    ),
  },
];
const tableData = [
  {
    key: 1,
    team: "Đội 1",
    name: "Đoàn Văn Hậu",
    mission: "4/5",
    prog: 83.33,
  },
  {
    key: 2,
    team: "Đội 2",
    name: "Phạm Thành Long",
    mission: "4/5",
    prog: 92,
  },
  {
    key: 3,
    team: "Đội 3",
    name: "Nguyễn Cảnh Nam",
    mission: "4/5",
    prog: 83.33,
  },
  {
    key: 4,
    team: "Đội 4",
    name: "Nguyễn Duy Quang",
    mission: "4/5",
    prog: 70,
  },
  {
    key: 5,
    team: "Đội 5",
    name: "Nguyễn Văn Hồng",
    mission: "3/5",
    prog: 92,
  },
  {
    key: 6,
    team: "Đội 6",
    name: "Nguyễn Văn Hồng",
    mission: "3/5",
    prog: 92,
  },
  {
    key: 7,
    team: "Đội 7",
    name: "Nguyễn Văn Hồng",
    mission: "3/5",
    prog: 64,
  },
];

const HomePage = () => {
  const { state } = useContext(DataContext);
  const { userInfo } = state;

  return (
    <>
      {userInfo.role === "captain" && (
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
                      icon={
                        <ClockCircleOutlined style={{ color: "#048785" }} />
                      }
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
                      icon={
                        <CheckCircleOutlined style={{ color: "#00CD88" }} />
                      }
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
                      icon={
                        <CloseCircleOutlined style={{ color: "#FE807E" }} />
                      }
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
              <Chart title={"Thống kê điểm danh trong 5 tháng"} />
            </div>
          </Section>
        </>
      )}
      {userInfo.role === "manage" && (
        <>
          <Section title="Tiến độ" hasDatePicker="true">
            <div className="manager-progress-page-wrapper">
              <div className="progress-page-container">
                <div className="progress-page-down">
                  <ManagerWorkingProgress />
                  <div className="attend-chart-wrapper">
                    <div className="chart-wrapper">
                      <Chart title="Tỷ lệ điểm danh" />
                    </div>
                  </div>
                </div>
                <div className="under">
                  <div className="all-work-chart-wrapper">
                    <div className="title">Tiến độ từng đội</div>
                    <Bar
                      className="all-work-chart"
                      options={options}
                      data={data}
                    />
                  </div>
                  <div className="all-work-table-wrapper">
                    <Table
                      className="progress-table"
                      columns={columns}
                      dataSource={tableData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </>
      )}

      <Section title="Lịch chấm công">
        <CalendarComp />
      </Section>
    </>
  );
};
export default HomePage;
