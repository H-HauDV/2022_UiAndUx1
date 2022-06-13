import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./firstSection.scss";
export default function FirstSection() {
  return (
    <div className="first-section">
      <div className="mission-summary">
        <div className="mission-summary_card">
          <span className="mission-summary_title">Nhiệm vụ</span>
          <span className="mission-summary_total">
            <span>78</span>

            <div className="percentage positive">
              <KeyboardArrowUpIcon />
              12
            </div>
          </span>

          <span className="mission-summary_time">
            Theo tuần ( 30/5/2022 - 4/6/2022 )
          </span>
        </div>
        <div className="divider"></div>
        <div className="mission-summary_card">
          <span className="mission-summary_title">Hoàn thành</span>
          <span className="mission-summary_total">
            <span>78</span>
            <div className="percentage positive">
              <KeyboardArrowUpIcon />
              12
            </div>
          </span>

          <span className="mission-summary_time">
            Theo tuần ( 30/5/2022 - 4/6/2022 )
          </span>
        </div>
        <div className="divider"></div>
        <div className="mission-summary_card">
          <span className="mission-summary_title">Chưa hoàn thành</span>
          <div className="mission-summary_total">
            <span>78</span>
            <div className="percentage negative">
              <KeyboardArrowUpIcon />
              12
            </div>
          </div>

          <span className="mission-summary_time">
            Theo tuần ( 30/5/2022 - 4/6/2022 )
          </span>
        </div>
      </div>
    </div>
  );
}
