import React from "react";
import "../scss/teampage.scss";
import { GrView } from "react-icons/gr";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Họ và tên",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Mã số nhân viên",
    dataIndex: "msnv",
    key: "msnv",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Số điện thoại",
    dataIndex: "sdt",
    key: "sdt",
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color = "#2ecc71";
          let text = "Đi làm";
          if (tag === "0") {
            color = "#e67e22";
            text = "Nghỉ có phép";
          } else if (tag === "-1") {
            color = "#e74c3c";
            text = "Nghỉ không phép";
          }
          return (
            <div className="tag-container">
              <Tag color={color} key={tag}>
                {text}
              </Tag>
            </div>
          );
        })}
      </>
    ),
  },
  {
    title: "Tiến độ(số nhiệm vụ)",
    dataIndex: "mission",
    key: "mission",
    render: (text) => (
      <div className="mission-wrapper">
        <div className="mission-text">{text}</div>
      </div>
    ),
  },
  {
    title: "Hoạt động",
    key: "action",
    render: (_, record) => (
      <div size="middle">
        <div className="icon-wrapper">
          <GrView className="icon" size="18px" />
        </div>
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    stt: "1",
    msnv: "20184093",
    name: "Đoàn Văn Hậu",
    sdt: "0994785226",
    mission: "4/5",
    status: ["1"],
  },
  {
    key: "2",
    stt: "2",
    msnv: "20184141",
    name: "Phạm Thành Long",
    sdt: "0617885226",
    mission: "4/5",
    status: ["0"],
  },
  {
    key: "3",
    stt: "3",
    msnv: "20184159",
    name: "Nguyễn Cảnh Nam",
    sdt: "0821548597",
    mission: "4/5",
    status: ["-1"],
  },
  {
    key: "4",
    stt: "4",
    msnv: "20184181",
    name: "Nguyễn Duy Quang",
    sdt: "0915787666",
    mission: "4/5",
    status: ["1"],
  },
  {
    key: "5",
    stt: "5",
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    sdt: "0115227889",
    mission: "3/5",
    status: ["1"],
  },
  {
    key: "6",
    stt: "6",
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    sdt: "0115227889",
    mission: "3/5",
    status: ["0"],
  },
  {
    key: "7",
    stt: "7",
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    sdt: "0115227889",
    mission: "3/5",
    status: ["-1"],
  },
];

export default function TeamPage() {
  return (
    <div>
      <div className="team-page-wrapper">
        <div className="team-page-container">
          <div className="team-page-upper">
            <div className="team-page-title">Danh sách nhân viên</div>
          </div>
          <div className="team-page-down">
            <Table
              className="employees-table"
              columns={columns}
              dataSource={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
