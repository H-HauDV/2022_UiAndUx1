import React, { useState } from "react";
import WorkerLayout from "./WorkerLayout";
import { Button, Slider, Row, Col, InputNumber } from "antd";
import "./workreport.scss"
const WorkerReport = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const onFirstChange = (newValue) => {
    setFirstNumber(newValue);
  };
  const onSecondChange = (newValue) => {
    setSecondNumber(newValue);
  };
  return (
    <WorkerLayout title="Báo cáo công việc" active={1}>
      <div className="report-container">
        <div className="title">Cắt cây trên đường Lý Bạch</div>
        <div className="list">
          <div className="work">
            Số cây cần cắt: 23
            <div className="noftification">Hãy chọn số cây bạn đã cắt</div>
            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={23}
                  onChange={onFirstChange}
                  value={typeof firstNumber === "number" ? firstNumber : 0}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={23}
                  style={{
                    margin: "0 16px",
                  }}
                  value={firstNumber}
                  onChange={onFirstChange}
                />
              </Col>
            </Row>
            
          </div>
          <div className="work">
            Số tuyến đường cần dọn: 7
            <div className="noftification">Hãy chọn số tuyến đường bạn đã dọn</div>

            <Row>
              <Col span={12}>
                <Slider
                  min={1}
                  max={7}
                  onChange={onSecondChange}
                  value={typeof secondNumber === "number" ? secondNumber : 0}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={7}
                  style={{
                    margin: "0 16px",
                  }}
                  value={secondNumber}
                  onChange={onSecondChange}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </WorkerLayout>
  );
};

export default WorkerReport;
