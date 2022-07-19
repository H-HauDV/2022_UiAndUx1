import React, { useContext } from "react";
import "../scss/progresspage.scss";
import { Link } from 'react-router-dom';
import { DataContext } from "../store/GlobalState";
import ProgressCard from "../components/ProgressCard";
import ManagerWorkingProgress from "../components/ManagerWorkingProgress";
import { DatePicker } from "antd";
import WorkingProgressGeneral from "../components/WorkingProgressGeneral";
import Chart from "../components/Chart";
import { EyeOutlined, FallOutlined, RiseOutlined } from "@ant-design/icons";
import { Table } from "antd";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
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
export const data = {
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
      <Link  to="/tien-do-nho" className="icon-wrapper">
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
export default function ProgressPage() {
  const { state } = useContext(DataContext);
  const { userInfo } = state;
  return (
    <div>
      {userInfo.role === "captain" ? (
        <>
          <div className="captain-progress-page-wrapper">
            <div className="progress-page-container">
              <div className="progress-page-upper">
                <div className="progress-page-title">Tiến độ công việc</div>
                <div className="progress-page-description">
                  Tiến độ đến thời điểm hiện tại (30/05/2022 - 30/06/2022)
                </div>
              </div>
              <div className="progress-page-down">
                <div className="progress-page-general">
                  <div className="chart-wrapper">
                    <WorkingProgressGeneral
                      title="Tiến độ tổng"
                      percent={80}
                      work={"4/5"}
                    />
                  </div>

                  <div className="prog-card-wrapper-1">
                    <ProgressCard
                      title="Cắt tỉa cây từ hết đường Đại Cồ Việt đến hết Lê Duẩn"
                      percent={100}
                      min={10}
                      max={10}
                    />
                    <ProgressCard
                      title="Cắt tỉa cây từ phố đi bộ đến hết Bà Triệu"
                      percent={100}
                      min={10}
                      max={10}
                    />
                  </div>
                </div>
                <div className="progress-page-small">
                  <ProgressCard
                    title="Cắt tỉa cây từ hết đường Đại Cồ Việt đến hết Lê Duẩn"
                    percent={100}
                    min={10}
                    max={10}
                  />
                  <ProgressCard
                    title="Cắt tỉa cây từ phố đi bộ đến hết Bà Triệu"
                    percent={100}
                    min={10}
                    max={10}
                  />
                  <ProgressCard
                    title="Cắt tỉa cây từ phố đi bộ đến hết Bà Triệu"
                    percent={100}
                    min={10}
                    max={10}
                  />
                  <ProgressCard
                    title="Cắt tỉa cây từ phố đi bộ đến hết Bà Triệu"
                    percent={100}
                    min={10}
                    max={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="manager-progress-page-wrapper">
            <div className="progress-page-container">
              <div className="progress-page-upper">
                <div className="progress-page-title">Tiến độ</div>
                <div className="progress-page-calender">
                  <DatePicker />
                </div>
              </div>
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
        </>
      )}
    </div>
  );
}
