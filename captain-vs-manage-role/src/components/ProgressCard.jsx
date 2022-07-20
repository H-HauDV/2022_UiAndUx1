import React from "react";
import "../scss/progresscard.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ProfileOutlined } from "@ant-design/icons";
const ProgressCard = ({ title, percent, min, max }) => {
  return (
    <div className="prog-card-wrapper">
      <div className="up">
        <div className="title">{title}</div>
      </div>
      <div className="down">
        <div className="left">
          <CircularProgressbar
            value={percent}
            text={percent + "%"}
            strokeWidth={8}
            styles={buildStyles({
              textColor: "black",
              pathColor: "#1dd1a1",
              trailColor: "red",
            })}
          />
        </div>
        <div className="right">
          <div className="text-up">Thống kê</div>
          <div className="text-mid">
            Đã hoàn thành <div className="green">{min}</div> trên
            <div className="green">{max}</div>nhiệm vụ.
          </div>
          <div className="text-down">
            <div className="icon">
              <ProfileOutlined />
            </div>
            <div className="text">Xem nhiệm vụ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
