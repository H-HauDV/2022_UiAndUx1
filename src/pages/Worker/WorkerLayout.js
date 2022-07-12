import React from "react";
import "./workerhome.scss";
import { motion } from "framer-motion";
import { AiOutlineLogout } from "react-icons/ai";

import Avatar from "../../img/worker_avatar.png";

const WorkerLayout = ({ children, title, active }) => {
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
            >
              <a href="worker/1">Báo cáo công việc</a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className={active === 2 ? "tab-card-active" : "tab-card"}
            >
              <a href="worker/2">Xem chấm công</a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className={active === 3 ? "tab-card-active" : "tab-card"}
            >
              <a href="worker/3">Xem công việc</a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className={active === 4 ? "tab-card-active" : "tab-card"}
            >
              <a href="worker/4">Hỗ trợ</a>
            </motion.div>
          </div>
        </div>
        <div className="right">
          <div className="up">
            <div className="title">{title}</div>
            <div className="logo-out">
              <AiOutlineLogout size={35} />
            </div>
          </div>
          <div className="down">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkerLayout;
