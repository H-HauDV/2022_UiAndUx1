import React from "react";
import "../scss/teampage.scss";

import { Table, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "STT",
    dataIndex: "key",
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
    dataIndex: "phone",
    key: "phone",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <div className="tag-container">
        {status === 0 ? <Tag color={"#e67e22"}>Nghỉ có phép</Tag> : null}

        {status === 1 ? <Tag color={"#2ecc71"}>Đi làm</Tag> : null}
        {status === -1 ? <Tag color={"#e74c3c"}>Nghỉ không phép</Tag> : null}
      </div>
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
      <div className="icon-wrapper">
        <EyeOutlined />
      </div>
    ),
  },
];
const data = [
  {
    key: 1,
    msnv: "20184093",
    name: "Đoàn Văn Hậu",
    phone: "0994785226",
    mission: "4/5",
    status: 1,
  },
  {
    key: 2,
    msnv: "20184141",
    name: "Phạm Thành Long",
    phone: "0617885226",
    mission: "4/5",
    status: 0,
  },
  {
    key: 3,
    msnv: "20184159",
    name: "Nguyễn Cảnh Nam",
    phone: "0821548597",
    mission: "4/5",
    status: -1,
  },
  {
    key: 4,
    msnv: "20184181",
    name: "Nguyễn Duy Quang",
    phone: "0915787666",
    mission: "4/5",
    status: 1,
  },
  {
    key: 5,
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    phone: "0115227889",
    mission: "3/5",
    status: 1,
  },
  {
    key: 6,
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    phone: "0115227889",
    mission: "3/5",
    status: 0,
  },
  {
    key: 7,
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    phone: "0115227889",
    mission: "3/5",
    status: -1,
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
