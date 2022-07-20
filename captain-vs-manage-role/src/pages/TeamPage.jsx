import React, { useContext } from "react";
import "../scss/teampage.scss";
import Section from "../components/Section";
import { Table, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { DataContext } from "../store/GlobalState";
import { Link } from "react-router-dom";
const membersListcolumns = [
  {
    title: "STT",
    dataIndex: "key",
    key: "stt",
    align: "center",
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
    title: "Chức vụ",
    dataIndex: "position",
    key: "position",
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
    align: "center",
    render: (text) => (
      <div className="mission-wrapper">
        <div className="mission-text">{text}</div>
      </div>
    ),
  },
  {
    title: "Hoạt động",
    key: "action",
    align: "center",
    render: (_, record) => (
      <Link to="/thong-tin-nhan-vien" className="icon-wrapper">
        <EyeOutlined style={{ color: "#eea620" }} />
      </Link>
    ),
  },
];
const membersListData = [
  {
    key: 1,
    msnv: "20184093",
    name: "Đoàn Văn Hậu",
    phone: "0994785226",
    position: "Đội trưởng",
    mission: "4/5",
    status: 1,
  },
  {
    key: 2,
    msnv: "20184141",
    name: "Phạm Thành Long",
    phone: "0617885226",
    position: "Nhân viên",
    mission: "4/5",
    status: 0,
  },
  {
    key: 3,
    msnv: "20184159",
    name: "Nguyễn Cảnh Nam",
    phone: "0821548597",
    position: "Nhân viên",
    mission: "4/5",
    status: -1,
  },
  {
    key: 4,
    msnv: "20184181",
    name: "Nguyễn Duy Quang",
    phone: "0915787666",
    position: "Nhân viên",
    mission: "4/5",
    status: 1,
  },
  {
    key: 5,
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    phone: "0115227889",
    position: "Nhân viên",
    mission: "3/5",
    status: 1,
  },
  {
    key: 6,
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    phone: "0115227889",
    position: "Nhân viên",
    mission: "3/5",
    status: 0,
  },
  {
    key: 7,
    msnv: "20184113",
    name: "Nguyễn Văn Hồng",
    phone: "0115227889",
    position: "Nhân viên",
    mission: "3/5",
    status: -1,
  },
];

const teamListcolumns = [
  {
    title: "STT",
    dataIndex: "key",
    key: "stt",
    align: "center",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Đội",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Đội trưởng",
    dataIndex: "captain",
    key: "captain",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "SĐT đội trưởng",
    dataIndex: "phoneCaptain",
    key: "phoneCaptain",
    render: (text) => <p>{text}</p>,
  },

  {
    title: "Số lượng thành viên",
    dataIndex: "numOfMembers",
    key: "numOfMembers",
    align: "center",
    render: (text) => (
      <div className="mission-wrapper">
        <div className="mission-text">{text}</div>
      </div>
    ),
  },
  {
    title: "Hoạt động",
    key: "action",
    align: "center",
    render: (_, record) => (
      <div className="icon-wrapper">
        <Link to="doi">
          <EyeOutlined style={{ color: "#eea620" }} />
        </Link>
      </div>
    ),
  },
];

const teamListData = [
  {
    key: 1,
    name: "Đội 1",
    captain: "Đoàn Văn Hậu",
    phoneCaptain: "0994785226",
    numOfMembers: 7,
  },
  {
    key: 2,
    name: "Đội 2",
    captain: "Đoàn Văn Hậu",
    phoneCaptain: "0994785226",
    numOfMembers: 7,
  },
  {
    key: 3,
    name: "Đội 3",
    captain: "Đoàn Văn Hậu",
    phoneCaptain: "0994785226",
    numOfMembers: 7,
  },
  {
    key: 4,
    name: "Đội 4",
    captain: "Đoàn Văn Hậu",
    phoneCaptain: "0994785226",
    numOfMembers: 7,
  },
  {
    key: 5,
    name: "Đội 5",
    captain: "Đoàn Văn Hậu",
    phoneCaptain: "0994785226",
    numOfMembers: 7,
  },
];

export default function TeamPage() {
  const { state } = useContext(DataContext);
  const { userInfo } = state;
  return (
    <>
      {userInfo.role === "captain" && (
        <Section title="Danh sách nhân viên đội 1">
          <Table
            className="employees-table"
            columns={membersListcolumns}
            dataSource={membersListData}
          />
        </Section>
      )}
      {userInfo.role === "manage" && (
        <Section title="Danh sách các đội">
          <Table
            className="employees-table"
            columns={teamListcolumns}
            dataSource={teamListData}
          />
        </Section>
      )}
    </>
  );
}
