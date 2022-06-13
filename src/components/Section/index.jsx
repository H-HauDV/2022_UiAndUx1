import React from "react";
import "./section.scss";

export default function Section({ children, title }) {
  return (
    <div className="section">
      <h2 className="section_title">{title}</h2>
      <div className="section_content">{children}</div>
    </div>
  );
}
