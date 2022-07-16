import React, { useState } from 'react';
import "../scss/workercontainer.scss";
import { Tooltip, message, Modal } from "antd";
import { motion } from "framer-motion";
import { AiOutlineLogout } from "react-icons/ai";
// import { Link } from "react-router-dom";
import Avatar from "../img/worker_avatar.png";
import { useNavigate } from "react-router-dom";

const key = "updatable";
const openMessage = () => {
  message.loading({
    content: "Đăng xuất thành công, bạn sẽ thoát trong 3s giây",
    key,
  });
  setTimeout(() => {
    message.success({
      content: "Chuyển hướng!",
      key,
      duration: 2,
    });
  }, 2000);
};

const WorkerLayout = ({ children, title, active }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalOk = () => {
    setIsModalVisible(false);
    navigateToLogin()
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  const navigate = useNavigate();
  //Tại sao lại dùng cái này
  // Vì dùng Link nó nối chuỗi url, chắc do cài đặt
  const navigateToLogin = () => {
    openMessage();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  const navigateToReport = () => {
    navigate("/report/1");
  };
  const navigateAttendance = () => {
    navigate("/attendance");
  };
  const navigateViewWork = () => {
    navigate("/view-work");
  };
  const navigateSupport = () => {
    navigate("/support");
  };
  return (
    <div className="worker-container">
      <div className="row">
        <div className="left">
          <div className="avatar">
            <img src={Avatar} alt="worker-avatar" />
          </div>
          <div className="menu-container">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className={active === 1 ? "tab-card-active" : "tab-card"}
              onClick={navigateToReport}
            >
              <p>Báo cáo công việc</p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className={active === 2 ? "tab-card-active" : "tab-card"}
              onClick={navigateAttendance}
            >
              <p>Xem chấm công</p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className={active === 3 ? "tab-card-active" : "tab-card"}
              onClick={navigateViewWork}
            >
              <p>Xem công việc</p>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className={active === 4 ? "tab-card-active" : "tab-card"}
              onClick={navigateSupport}
            >
              <p>Hỗ trợ</p>
            </motion.div>
          </div>
        </div>
        <div className="right">
          <div className="up">
            <div className="title">{title}</div>
            <Tooltip title="Nhấn vào đây để đăng xuất">
              <motion.div
                className="logo-out"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.9 }}
                onClick={showModal}
              >
                <AiOutlineLogout size={35} />
              </motion.div>
            </Tooltip>
          </div>
          <div className="down">{children}</div>
        </div>
      </div>
      <Modal
        className="log-out-modal"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        centered
        closable={false}
        okText={"Ok"}
        cancelText={"Không"}
      >
        <p>Bạn có chắc chắn muốn đăng xuất?</p>
      </Modal>
    </div>
  );
};

export default WorkerLayout;
