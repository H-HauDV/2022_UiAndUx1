import React, { useContext } from "react";
import "../scss/navbar.scss";
import { Button, Input, Tooltip } from "antd";
import { DataContext } from "../store/GlobalState";
import { useAuth } from "../auth/auth";
import { motion } from "framer-motion";

import {
  LogoutOutlined,
  GlobalOutlined,
  BellOutlined,
} from "@ant-design/icons";
import MobiMenu from "./MobiMenu";

const { Search } = Input;

const Navbar = () => {
  const auth = useAuth();
  const { state, dispatch } = useContext(DataContext);
  const { userInfo } = state;
  const onSearch = (value) => console.log(value);
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT", payload: {} });

    auth.logout();
  };

  return (
    <div className="container">
      <div className="navbar">
        <MobiMenu />

        {/* <div className="btn-back">
            <ArrowBackIcon onClick={() => navigate(-1)}></ArrowBackIcon>
          </div> */}

        <div className="search-input">
          <Search
            placeholder="Tìm kiếm"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>

        <div className="last-item">
          <Tooltip title="Nhấn vào đây để thay đổi ngôn ngữ">
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.95 }}
              className="global"
            >
              <GlobalOutlined />
            </motion.div>
          </Tooltip>
          <Tooltip title="Thông báo">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="notice"
            >
              <BellOutlined />
            </motion.div>
          </Tooltip>

          <div className="avatar">
            <img
              src="https://res.cloudinary.com/beeyou/image/upload/v1641721299/logo/avatar7_jkzd2h.png"
              alt=""
            />
            <div className="avatar-title">
              <span
                style={{ fontWeight: "bold" }}
              >{`${userInfo.lastName} ${userInfo.firstName}`}</span>
              <br />
              <span>{userInfo.position}</span>
            </div>
          </div>
          <Tooltip title="Nhấn vào đây để logout">
            <Button
              shape="circle"
              icon={<LogoutOutlined />}
              size="large"
              style={{ marginLeft: "8px" }}
              onClick={handleLogOut}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
