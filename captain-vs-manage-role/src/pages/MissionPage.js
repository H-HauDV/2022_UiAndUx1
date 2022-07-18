import React, { useState } from "react";
import FirstSection from "../components/FirstSection";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import "../scss/missionpage.scss";
import { Button, Col, Row, Table, Tabs } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import Test from "../components/Test";

const { TabPane } = Tabs;

export default function MissionPage() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

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
          <EyeOutlined className="icon-show" />
          <EditOutlined className="icon-edit" />
          <DeleteOutlined className="icon-delete" />
        </div>
      ),
    },
  ];

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
  return (
    <>
      <FirstSection />

      {/* <Section title="Chi tiết nhiệm vụ">
        <div className="mission-details">
          <div className="mission-detail_header">
            <h2 className="mission-detail_title">
              Cắt tỉa cây ở đường Đại Cổ Việt
            </h2>
            <div>
              <Button
                onClick={() => setIsCompleted(!isCompleted)}
                style={isCompleted ? { backgroundColor: "#24a567" } : null}
              >
                {isCompleted ? (
                  <span className="mission-detail_complete">Đã hoàn thành</span>
                ) : (
                  <span className="mission-detail_uncomplete">Hoàn thành</span>
                )}
              </Button>
            </div>
          </div>
          <div className="mission-detail_body">
            <div className="mission-detail_overview">
              <div>
                <Row gutter={[16, 16]}>
                  <Col className="gutter-row" span={4}>
                    <div>
                      <span className="row-name">Người phụ trách</span>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div className="people-name">
                      <span className="avatar">
                        <img
                          src="https://res.cloudinary.com/beeyou/image/upload/v1641721299/logo/avatar7_jkzd2h.png"
                          alt=""
                        />
                      </span>
                      <span>Nguyễn Văn Hồng</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row gutter={[16, 16]}>
                  <Col className="gutter-row" span={4}>
                    <div>
                      <span className="row-name">Thời hạn</span>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div>
                      <span style={{ fontWeight: 700, color: "#048785" }}>
                        16:00 PM
                      </span>
                      - 5/6/2022
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row gutter={[16, 16]}>
                  <Col className="gutter-row" span={4}>
                    <div>
                      <span className="row-name">Dự án</span>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div>
                      <span style={{ fontWeight: 700, color: "#000" }}>
                        Cây xanh Hà Nội
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row gutter={[16, 16]}>
                  <Col className="gutter-row" span={4}>
                    <div>
                      <span className="row-name">Liên hệ công việc</span>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <div className="people-name">
                      <span className="avatar">
                        <img
                          src="https://res.cloudinary.com/beeyou/image/upload/v1641721299/logo/avatar7_jkzd2h.png"
                          alt=""
                        />
                      </span>
                      <span>Đoàn Văn Hậu - Đội trưởng đội X</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="mission-detail_content">
              <h4>Mô tả công việc</h4>
              <ul>
                <li>
                  Cắt hình tròn 50 cây từ số nhà xxx đường Đại Cồ Việt cho đến
                  số nhà yyy Đại Cồ Việt
                </li>
                <li>Bón phân</li>
                <li>Tưới cây</li>
                <li>Dọn dẹp</li>
              </ul>
            </div>
            <div className="mission-detail_content">
              <h4>Yêu cầu</h4>
              <ul>
                <li>50 cây đạt hình tròn</li>
                <li>Phân bón được bón đều</li>
                <li>Tưới đầy đủ </li>
                <li>Khu vực sau khi bảo dưỡng phải sạch sẽ</li>
                <li>Không gây ảnh hưởng đến đường đi người dân</li>
              </ul>
            </div>
          </div>
        </div>
      </Section> */}
      <Section title="Danh sách nhiệm vụ">
        <Tabs defaultActiveKey="1" className="mission-tabs">
          <TabPane tab="Chưa hoàn thành" key="1">
            <Link to="/nhiem-vu/giao-nhiem-vu">Giao nhiệm vụ</Link>{" "}
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
            />
          </TabPane>
        </Tabs>
      </Section>
    </>
  );
}
