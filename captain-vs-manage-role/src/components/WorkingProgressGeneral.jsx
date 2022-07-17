import React from "react";
import "../scss/workingprogressgeneral.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const WorkingProgressGeneral = ({ percent, title, work }) => {
  return (
    <div className="featured">
      <div className="upper">
        <h1 className="title">{title}</h1>
      </div>
      <div className="bottom">
        <div classname="chart-wrapper">
          <div className="featuredChart">
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
        </div>
        <div className="right-wrapper">
          <div className="right">
            <div className="upper-up">Thống kê</div>
            <div className="upper-down">
              Đã hoàn thành <div className="green">{work}</div> nhiệm vụ
            </div>

            <div className="up">
              <div className="green" style={{ background: "#1dd1a1" }}></div>
              <div className="text">Đã hoàn thành</div>
            </div>
            <div className="down">
              <div className="red" style={{ background: "#ee5253" }}></div>
              <div className="text">Chưa hoàn thành</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default WorkingProgressGeneral;
