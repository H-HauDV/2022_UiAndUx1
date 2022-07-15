import React from "react";
import WorkerLayout from "../components/WorkerLayout";

import "../scss/workerattendance.scss";
import { Table, Tag } from "antd";

const WorkerAttendance = () => {
  const data = [
    {
      key: "1",
      date: "13/07/2022",
      status: "1",
      workerPercent: "80",
      groupleadPercent: "90",
    },
    {
      key: "2",
      date: "12/07/2022",
      status: "0",
      workerPercent: "80",
      groupleadPercent: "90",
    },
    {
      key: "3",
      date: "11/07/2022",
      status: "-1",
      workerPercent: "80",
      groupleadPercent: "90",
    },
  ];
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (number) => (
        <>
          {number === 1 ? (
            <Tag color="#2ecc71">Đi làm</Tag>
          ) : (
            <>
              {number === -1 ? (
                <Tag color="#e74c3c">Nghỉ không phép</Tag>
              ) : (
                <Tag color="#e67e22">Nghỉ có phép</Tag>
              )}
            </>
          )}
        </>
      ),
    },
    {
      title: "Worker Point",
      dataIndex: "workerPercent",
      key: "workerPercent",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Supervisor Point",
      dataIndex: "groupleadPercent",
      key: "groupleadPercent",
      render: (text) => <p>{text}</p>,
    },
  ];
  return (
    <WorkerLayout title={"Xem chấm công"} active={2}>
      <div className="attendance-container">
        <Table columns={columns} dataSource={data} />
      </div>
    </WorkerLayout>
  );
};

export default WorkerAttendance;
