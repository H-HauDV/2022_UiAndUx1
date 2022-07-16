import React from "react";
import WorkerLayout from "../components/WorkerLayout";
import { motion } from "framer-motion";

import "../scss/workerattendance.scss";
import { Table, Tag } from "antd";

const WorkerAttendance = () => {
  const data = [
    {
      key: "1",
      date: "13/07/2022",
      status: 1,
      workerPercent: "80",
      groupleadPercent: "90",
    },
    {
      key: "2",
      date: "12/07/2022",
      status: 0,
      workerPercent: "0",
      groupleadPercent: "0",
    },
    {
      key: "3",
      date: "11/07/2022",
      status: -1,
      workerPercent: "0",
      groupleadPercent: "0",
    },
  ];
  const columns = [
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Trạng thái",
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
      title: "Điểm công nhân chấm",
      dataIndex: "workerPercent",
      key: "workerPercent",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Điểm giám sát viên chấm",
      dataIndex: "groupleadPercent",
      key: "groupleadPercent",
      render: (text) => <p>{text}</p>,
    },
  ];
  return (
    <WorkerLayout title={"Xem chấm công"} active={2}>
      <div className="attendance-container">
        <Table columns={columns} dataSource={data} />
        <div className="help-card-wrapper">
          <motion.div
            className="help-card"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="upper">Thắc mắc về chấm công?</div>
            <div className="down">Gọi ngay 19001554</div>
          </motion.div>
        </div>
      </div>
    </WorkerLayout>
  );
};

export default WorkerAttendance;
