import React, { useEffect, useState } from "react";
import WorkerLayout from "../components/WorkerLayout";
import { Slider, Row, Col, InputNumber } from "antd";
import { Tooltip } from "antd";

import { GrTasks } from "react-icons/gr";
import { AiOutlineRight } from "react-icons/ai";
import "../scss/workreport.scss";
import { motion } from "framer-motion";

const WorkerReport1 = () => {
  // const [isCompleted, setIsCompleted] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [firstColor, setFirstColor] = useState("#eb4d4b");
  const [secondColor, setSecondColor] = useState("#eb4d4b");
  useEffect(() => {
    document.title = "Báo cáo";
  }, []);

  const [secondNumber, setSecondNumber] = useState(0);

  const onFirstChange = (newValue) => {
    setFirstNumber(newValue);
    if (newValue < 8) {
      setFirstColor("#eb4d4b");
    } else if (newValue < 16) {
      setFirstColor("#e67e22");
    } else {
      setFirstColor("#27ae60");
    }
  };
  const onSecondChange = (newValue) => {
    setSecondNumber(newValue);
    if (newValue < 3) {
      setSecondColor("#eb4d4b");
    } else if (newValue < 5) {
      setSecondColor("#e67e22");
    } else {
      setSecondColor("#27ae60");
    }
  };
  return (
    <WorkerLayout title={"Báo cáo công việc"} active={1}>
      <div className="report-container">
        <div className="title">
          <GrTasks className="task-icon" />
          <div className="text">Cắt cây trên đường Lý Bạch</div>
        </div>
        <div className="list">
          <motion.div
            className="work"
            style={{ background: firstColor }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="work-detail">
              <AiOutlineRight className="icon" />
              Số cây cần cắt: <div className="number">23</div>
            </div>
            <Tooltip title="Kéo thả để chọn hoặc nhập số">
              <div className="noftification">Hãy chọn số cây bạn đã cắt</div>
            </Tooltip>

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
          <motion.div
            className="work"
            style={{ background: secondColor }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="work-detail">
              <AiOutlineRight className="icon" />
              Số tuyến đường cần dọn: <div className="number">7</div>
            </div>
            <Tooltip title="Kéo thả để chọn hoặc nhập số">
              <div className="noftification">
                Hãy chọn số tuyến đường bạn đã dọn
              </div>
            </Tooltip>

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
