import React from "react";
import "../scss/overviewcard.scss";

export default function OverviewCard({
  backgroundColor,
  lineColor,
  textColor,
  title,
  number,
  connerColor,
}) {
  return (
    <div className="overview-card" style={{ backgroundColor: backgroundColor }}>
      <div
        className="overview-card_container"
        style={{ borderColor: lineColor }}
      >
        <div className="overview-card_icon">
          <span
          // style={{ color: iconColor, backgroundColor: iconBackgroundColor }}
          ></span>
        </div>
        <div className="overview-card_content">
          <div className="overview-card_name">
            <span style={{ color: textColor }}>{title}</span>
          </div>
          <span className="overview-card_number" style={{ color: textColor }}>
            {number}
          </span>
        </div>
        <div className="card_conner" style={{ background: connerColor }}></div>
      </div>
    </div>
  );
}
