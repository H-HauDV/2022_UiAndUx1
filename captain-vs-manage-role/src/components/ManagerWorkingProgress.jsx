import React from "react";
import "../scss/managerworkingprogress.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MoreOutlined } from "@ant-design/icons";
const ManagerWorkingProgress = () => {
  return (
    <div className="featured">
      <div className="upper">
        <h1 className="title">Thống kê chung</h1>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={93.33}
            text={"93.33%"}
            strokeWidth={8}
            styles={buildStyles({
              textColor: "black",
              pathColor: "#1dd1a1",
              trailColor: "red",
            })}
          />
        </div>
        <div className="right">
          <div className="up">
            <div className="green" style={{ background: "#1dd1a1" }}></div>
            <div className="text">Số người đi làm</div>
          </div>
          <div className="down">
            <div className="red" style={{ background: "#ee5253" }}></div>
            <div className="text">Số người nghỉ làm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerWorkingProgress;
