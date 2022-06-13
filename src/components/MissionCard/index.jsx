import React from "react";
import "./missionCard.scss";

export default function MissionCard({
  icon,
  backgroundColor,
  titleColor,
  descriptionColor,
  timeEndColor,
  iconColor,
  iconBackgroundColor,
  lineColor,
  data,
}) {
  return (
    <div className="mission-card" style={{ backgroundColor: backgroundColor }}>
      <div
        className="mission-card_container"
        style={{ borderColor: lineColor }}
      >
        <div className="mission-card_icon">
          <span
            style={{ color: iconColor, backgroundColor: iconBackgroundColor }}
          >
            {icon}
          </span>
        </div>
        <div className="mission-card_content">
          <div className="mission-card_name">
            <span style={{ color: titleColor }}>{data.name}</span>
          </div>
          <div className="mission-card_description">
            <p style={{ color: descriptionColor }}>{data.description}</p>
          </div>
          <span
            className="mission-card_time"
            style={{ color: timeEndColor }}
          >{`Đến ${data.timeEnd}`}</span>
        </div>
      </div>
    </div>
  );
}
