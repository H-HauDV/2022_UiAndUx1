import React from "react";
import "../scss/simplecard.scss";
import { motion } from "framer-motion";
import { Tooltip } from "antd";
const SimpleCard = ({ title, description, backColor, color, hint }) => {
  return (
    <Tooltip title={hint}>
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.95 }}
        className="card-container"
        style={{ background: backColor }}
      >
        <div className="title" style={{ color: color }}>
          {title}
        </div>
        <div className="description" style={{ color: color }}>
          {description}
        </div>
      </motion.div>
    </Tooltip>
  );
};

export default SimpleCard;
