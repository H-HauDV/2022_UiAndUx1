import React from "react";
import FirstSection from "../../components/FirstSection";
import Section from "../../components/Section";
import CheckIcon from "@mui/icons-material/Check";
import "./mission.scss";

export default function MissionPage() {
  return (
    <>
      <FirstSection />
      <Section title="Chi tiết nhiệm vụ">
        <div className="mission-details">
          <div className="mission-detail_header">
            <h2 className="mission-detail_title">
              Cắt tỉa cây ở đường Đại Cổ Việt
            </h2>
            <div className="mission-detail_status">
              <CheckIcon /> <span>Hoàn thành</span>
            </div>
          </div>
          <div className="mission-detail_body">
            <div className="mission-detail_overview">
              <div></div>
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
