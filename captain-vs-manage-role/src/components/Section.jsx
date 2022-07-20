import { DatePicker } from "antd";
import React from "react";

export default function Section({ children, title, hasDatePicker }) {
  return (
    <div className="section">
      <div className="section-header" style={{ display: "flex" }}>
        <h2 className="section_title" style={{ paddingRight: "20px" }}>
          {title}
        </h2>
        {hasDatePicker && (
          <DatePicker placeholder="Chọn tháng" picker="month" />
        )}
      </div>

      <div className="section_content">{children}</div>
    </div>
  );
}
