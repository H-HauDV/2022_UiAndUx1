import React, { useState } from "react";
import FirstSection from "../../components/FirstSection";
import Section from "../../components/Section";
import CheckIcon from "@mui/icons-material/Check";
import "./mission.scss";
import { Button, Col, Row } from "antd";

export default function MissionPage() {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <>
      <FirstSection />
      <Section title="Chi tiết nhiệm vụ">
        <div className="mission-details">
          <div className="mission-detail_header">
            <h2 className="mission-detail_title">
              Cắt tỉa cây ở đường Đại Cổ Việt
            </h2>
            <div>
              <Button onClick={() => setIsCompleted(!isCompleted)}>
                {isCompleted ? (
                  <span>Đã hoàn thành</span>
                ) : (
                  <div className="mission-detail_status">
                    <CheckIcon /> <span>Hoàn thành</span>
                  </div>
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
      </Section>
    </>
  );
}
