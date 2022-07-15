import React, { useState } from "react";
import WorkerLayout from "../components/WorkerLayout";
import { Slider, Row, Col, InputNumber } from "antd";
import { GrTasks } from "react-icons/gr";
import { AiOutlineRight } from "react-icons/ai";
import "../scss/workreport.scss";
import { motion } from "framer-motion";

const WorkerReport1 = () => {
  // const [isCompleted, setIsCompleted] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const onFirstChange = (newValue) => {
    setFirstNumber(newValue);
  };
  const onSecondChange = (newValue) => {
    setSecondNumber(newValue);
  };
  return (
    <WorkerLayout title={"Báo cáo công việc"} active={1}>
      <div className="report-container">
        <div className="title">
          <GrTasks className="task-icon" />
          <div className="text">Cắt cây trên đường Lý Bạch</div>
        </div>
        <div className="list">
          <motion.div className="work" whileTap={{ scale: 0.95 }}>
            <div className="work-detail">
              <AiOutlineRight className="icon" />
              Số cây cần cắt: <div className="number">23</div>
            </div>
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
                    fontSize: "24px",
                  }}
                  value={firstNumber}
                  onChange={onFirstChange}
                />
              </Col>
            </Row>
          </motion.div>
          <motion.div className="work" whileTap={{ scale: 0.95 }}>
            <div className="work-detail">
              <AiOutlineRight className="icon" />
              Số tuyến đường cần dọn: <div className="number">7</div>
            </div>

            <div className="noftification">
              Hãy chọn số tuyến đường bạn đã dọn
            </div>
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
          </motion.div>
        </div>
      </div>
    </WorkerLayout>
  );
};

export default WorkerReport1;
