import React from "react";
import "../scss/featured.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FlagOutlined, MoreOutlined } from "@ant-design/icons";
const Featured = () => {
  return (
    <div className="featured">
      <div className="upper">
        <h1 className="title">Tiến độ công việc tuần này</h1>
        <MoreOutlined />
      </div>
      <div className="bottom" style={{ flexDirection: "column" }}>
        <div className="featuredChart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            styles={buildStyles({
              textColor: "black",
              pathColor: "#3498db",
              trailColor: "#ecf0f1",
            })}
          />
        </div>
        <p className="title">Mã công việc</p>
        <p className="amount">2022B.06.WAF1</p>
        <p className="desc">Mục tiêu: Cắt tỉa cây từ khu phố A đến khu phố F</p>
        <div className="goal">
          <div className="title">Cần đạt tiến độ trong ngày hôm nay</div>
          <div className="detail">
            <FlagOutlined className="icon" />
            <div className="number">87%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
