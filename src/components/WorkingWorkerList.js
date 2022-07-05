import React, { useState } from "react";
import "../scss/workingworkerlist.scss";
import { Space, Table, Tag } from "antd";
const WorkingWorkerList = () => {
  const [bottom, setBottom] = useState("bottomCenter");
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Trạng thái",
      key: "status",
      dataIndex: "status",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = "green";

            if (tag === "Nghỉ") {
              color = "volcano";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      stt: "1",

      name: "Đoàn Văn Hậu",
      tags: ["Đi làm"],
    },
    {
      stt: "2",
      name: "Nguyễn Văn Hồng",
      tags: ["Nghỉ"],
    },
    {
      stt: "3",
      name: "Phạm Thành Long",
      tags: ["Đi làm"],
    },
  ];
  return (
    <div className="card">
      <div className="title">Danh sách công nhân</div>
      <Table
        pagination={{
          position: [bottom],
        }}
        className="table"
        columns={columns}
        dataSource={data}
      />
      ;
    </div>
  );
};

export default WorkingWorkerList;
