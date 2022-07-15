import React from "react";
import "../scss/workingworkerlist.scss";
import { Table, Tag } from "antd";
const WorkingWorkerList = () => {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "stt",
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <>{text}</>,
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
    { key: "1", name: "Đoàn Văn Hậu", tags: ["Đi làm"] },
    { key: "2", name: "Nguyễn Văn Hồng", tags: ["Nghỉ"] },
    { key: "3", name: "Phạm Thành Long", tags: ["Đi làm"] },
    { key: "4", name: "Phạm Thành Long", tags: ["Đi làm"] },
    { key: "5", name: "Phạm Thành Long", tags: ["Đi làm"] },
    { key: "6", name: "Phạm Thành Long", tags: ["Đi làm"] },
    { key: "7", name: "Phạm Thành Long", tags: ["Đi làm"] },
    { key: "8", name: "Phạm Thành Long", tags: ["Đi làm"] },
  ];
  return (
    <div className="card">
      <div className="title">Danh sách công nhân</div>
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{
          y: 240,
        }}
      />
      ;
    </div>
  );
};

export default WorkingWorkerList;
