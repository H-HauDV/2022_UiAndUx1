import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./firstSection.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const percentage = 80;
export default function FirstSection() {
  return (
    <div className="first-section">
      <div className="mission-summary" style={{ display: "none" }}>
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

      <div className="mission-summary-mobi">
        <CircularProgressbar
          className="mission-summary-mobie_progress"
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",

            // Text size

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            pathTransition: "none",

            // Colors
            // pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            pathColor: "#37CB95",
            textColor: "#5e5e5e",
            trailColor: "#DE3C63",
            // backgroundColor: "#3e98c7",
          })}
        />

        <div className="mission-summary-mobie_content">
          <h2>Thống kê</h2>
          <p>
            Đã hoàn thành{" "}
            <strong style={{ fontSize: "0.875rem", color: "#37CB95" }}>
              70
            </strong>{" "}
            trên{" "}
            <strong style={{ fontSize: "0.875rem", color: "#37CB95" }}>
              78
            </strong>{" "}
            nhiệm vụ
          </p>
          <div className="progress-note">
            <div
              className="progress-note-color"
              style={{ backgroundColor: "#37CB95" }}
            ></div>
            <span className="progress-note-name">Đã hoàn thành</span>
          </div>
          <div className="progress-note">
            <div
              className="progress-note-color"
              style={{ backgroundColor: "#DE3C63" }}
            ></div>
            <span className="progress-note-name">Chưa hoàn thành</span>
          </div>
        </div>
      </div>
    </div>
  );
}
