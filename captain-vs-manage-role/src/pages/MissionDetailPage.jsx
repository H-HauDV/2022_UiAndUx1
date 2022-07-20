import { Col, Row, notification,Button, Form, Input, Space, Select } from "antd";
import React from "react";
import Section from "../components/Section";
import "../scss/missiondetail.scss";
import {
  MinusCircleOutlined,
  PlusOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
const { Option } = Select;
const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{"Người" + i}</Option>);
}
export default function MissionDetailPage() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
    openNotification()
  };
  const openNotification = () => {
    notification.open({
      message: "Thành công",
      description: "Đã tạo phân chia công việc thành công.",
      icon: (
        <CheckCircleOutlined
          className="noti-icon"
          style={{
            color: "#52c41a",
          }}
        />
      ),
    });
  };
  return (
    <>
      <Section title="Giao nhiệm vụ">
        <div className="mission-details">
          <div className="mission-detail_header">
            <h2 className="mission-detail_title">
              Cắt tỉa cây ở đường Đại Cổ Việt
            </h2>
            {/* <div>
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
            </div> */}
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
            </div>
            <div className="mission-detail_content">
              <h4>Mô tả công việc</h4>
              <ul>
                <li>
                  Công việc 1: Cắt hình tròn 50 cây từ số nhà xxx đường Đại Cồ
                  Việt cho đến số nhà yyy Đại Cồ Việt
                </li>
                <li>Công việc 2: Bón phân</li>
                <li>Công việc 3: Tưới cây</li>
                <li>Công việc 4: Dọn dẹp</li>
              </ul>
            </div>
            {/* <div className="mission-detail_content">
              <h4>Yêu cầu</h4>
              <ul>
                <li>50 cây đạt hình tròn</li>
                <li>Phân bón được bón đều</li>
                <li>Tưới đầy đủ </li>
                <li>Khu vực sau khi bảo dưỡng phải sạch sẽ</li>
                <li>Không gây ảnh hưởng đến đường đi người dân</li>
              </ul>
            </div> */}
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: "flex",
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "first"]}
                          rules={[
                            {
                              required: true,
                              message: "Thiếu tên công việc",
                            },
                          ]}
                        >
                          <Input placeholder="Tên công việc" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "last"]}
                          rules={[
                            {
                              required: true,
                              message: "Thiếu nội dung",
                            },
                          ]}
                        >
                          <Input placeholder="Nội dung" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Thêm các mô tả
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Form.Item >
                <Select
                  mode="tags"
                  placeholder="Hãy chọn người để nhận nhiệm vụ này"
                  defaultValue={[]}
                  style={{
                    width: "100%",
                  }}
                  rules={[
                    {
                      required: true,
                      message: "Thiếu người nhận việc",
                    },
                  ]}
                >
                  {children}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  style={{ backgroundColor: "#24a567", border: "none" }}
                  type="primary"
                  htmlType="submit"
                >
                  Xác nhận
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Section>
    </>
  );
}
