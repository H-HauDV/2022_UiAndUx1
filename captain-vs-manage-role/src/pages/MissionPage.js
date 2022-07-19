import React from "react";
import FirstSection from "../components/FirstSection";
import Section from "../components/Section";
import { Link, useNavigate } from "react-router-dom";
import "../scss/missionpage.scss";
import { Popconfirm, Table, Tabs, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;

const data = [
  {
    key: 1,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 2,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 3,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 4,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 5,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 6,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 7,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 8,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 9,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 10,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 11,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 12,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 13,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 14,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 15,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 16,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 17,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 18,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 19,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 20,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
];

export default function MissionPage() {
  const navigate = useNavigate();
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        `selectedRows: : ${selectedRows}`
      );
    },
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "stt",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Nhiệm vụ",
      dataIndex: "mission",
      key: "mission",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Thời hạn",
      dataIndex: "timeEnd",
      key: "timeEnd",
      render: (text) => <>{text}</>,
    },

    {
      title: "Hoạt động",
      key: "action",
      render: (_, record) => (
        <div className="icon-wrapper">
          <EyeOutlined
            style={{ color: "#eea620" }}
            onClick={() => navigate(`${record.key}`)}
          />
          <EditOutlined style={{ color: "#24a567" }} />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            icon={
              <QuestionCircleOutlined
                style={{ fontSize: "16px", color: "red" }}
              />
            }
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => {
              handleDelete(record.key);
              message.success("Xóa thành công");
            }}
            okButtonProps={{ danger: true }}
          >
            <DeleteOutlined style={{ color: "#ff0000" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDelete = (key) => {
    console.log(key);
  };

  return (
    <>
      <FirstSection />

      <Section title="Danh sách nhiệm vụ">
        <Tabs defaultActiveKey="1" className="mission-tabs">
          <TabPane tab="Chưa hoàn thành" key="1">
            <div style={{ padding: "10px 0 26px 0", float: "right" }}>
              <Link className="my-btn btn-success" to="/nhiem-vu/giao-nhiem-vu">
                Giao nhiệm vụ
              </Link>
            </div>

            <Table
              className="mission-table"
              columns={columns}
              dataSource={data}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
            />
          </TabPane>
          <TabPane tab="Đã hoàn thành" key="2">
            <Table
              className="mission-table"
              columns={columns}
              dataSource={data}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              style={{ paddingTop: "74px" }}
            />
          </TabPane>
          <TabPane tab="Quá hạn" key="3">
            <Table
              className="mission-table"
              columns={columns}
              dataSource={data}
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              style={{ paddingTop: "74px" }}
            />
          </TabPane>
        </Tabs>
      </Section>
    </>
  );
}
