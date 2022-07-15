import React from "react";
import Section from "./Section";
import "../scss/attendancereport.scss";
import { DatePicker } from "antd";
import OverviewCard from "../components/OverViewCard";
import WorkingAttendChart from "./WorkingAttendChart";
import WorkingWorkerList from "./WorkingWorkerList";

export default function AttendanceReport() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Section title="Báo cáo đội 1">
      <div>
        Điểm danh <DatePicker onChange={onChange} />
      </div>
      <div className="attend-row">
        <OverviewCard
          backgroundColor="#1dd1a1"
          lineColor="#27ae60"
          connerColor="#55efc4"
          textColor="#ffffff"
          title="Tổng số nhân viên"
          number={30}
        />
        <OverviewCard
          backgroundColor="#f9ca24"
          lineColor="#f0932b"
          connerColor="#fff200"
          textColor="#ffffff"
          title="Đi làm"
          number={28}
        />
        <OverviewCard
          backgroundColor="#ee5253"
          lineColor="#c23616"
          connerColor="#ff6b6b"
          textColor="#ffffff"
          title="Nghỉ làm"
          number={2}
        />
      </div>
      <div className="work-timeline">
        <WorkingAttendChart />
        <WorkingWorkerList />
      </div>
    </Section>
  );
}
