import React from "react";
import WorkerLayout from "../components/WorkerLayout";
import SimpleCard from "../components/SimpleCard";
import "../scss/workersupport.scss";
const WorkerSupport = () => {
  return (
    <WorkerLayout title={"Hỗ trợ"} active={4}>
      <div className="content-row">
        <SimpleCard
          title="Đường dây giải đáp thắc mắc"
          description="19001008"
          backColor="#e67e22"
          color="#ffffff"
          hint="Giải đáp các thắc mắc liên quan đến công việc"
        />
        <SimpleCard
          title="Tổng đài nhận khiếu nại"
          description="19002222"
          backColor="#e74c3c"
          color="#ffffff"
          hint="Báo cáo các sai phạm"
        />
        <SimpleCard
          title="Hướng dẫn sử dụng hệ thống"
          description="19005578"
          backColor="#27ae60"
          color="#ffffff"
          hint="Nhận hướng dẫn cách sử dụng hệ thống"
        />
      </div>
    </WorkerLayout>
  );
};

export default WorkerSupport;
