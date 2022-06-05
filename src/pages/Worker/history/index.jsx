import React from "react";
import Widget from "../../../components/widget";
import { Table, Tag, Space } from "antd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import "./history.scss";
import { Link } from "react-router-dom";
const History = () => {
  const data = [
    {
      key: "1",
      name: "John Brown",
      applyTime: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      applyTime: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      applyTime: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const columns = [
    {
      title: "Report Name",
      dataIndex: "name",
      key: "name",
      //render: (text) => <a>{text}</a>,
    },
    {
      title: "Apply Time",
      dataIndex: "applyTime",
      key: "time",
    },
    {
      title: "Edit Time",
      dataIndex: "time",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "tags",
      render: (_) => (
        <>
          <Tag color="blue" className="table-tag">
            <Link to="/worker/history/detail">
              <VisibilityIcon fontSize="small" color="primary" />
            </Link>
          </Tag>
          <Tag color="green" className="table-tag">
            <Link to="/worker/history/edit">
              <BorderColorIcon fontSize="small" color="success" />
            </Link>
          </Tag>
        </>
      ),
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  return (
    <div>
      <div className="dashBoard">
        <div className="widgets">
          <Widget>
            <h1 className="title">Report current work</h1>
            <Table columns={columns} dataSource={data} />;
          </Widget>
        </div>
      </div>
    </div>
  );
};

export default History;
