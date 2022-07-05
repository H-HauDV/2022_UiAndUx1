import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import "../scss/mobimenu.scss";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Image, Input } from "antd";
import { captainMenu, workerMenu } from "../app-info/menu-list-data";
import { DataContext } from "../store/GlobalState";

export default function MobiMenu() {
  const [visible, setVisible] = useState(false);
  const { state } = useContext(DataContext);
  const { userInfo } = state;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSearch = (value) => console.log(value);

  let menu;
  if (userInfo.role === "worker") menu = workerMenu;
  else menu = captainMenu;

  return (
    <div className="mobi-menu">
      <Button
        className="btn-mobi-menu"
        type="text"
        onClick={showDrawer}
        icon={<MenuOutlined />}
      ></Button>
      <Drawer
        width={250}
        onClose={onClose}
        closable={false}
        visible={visible}
        placement="left"
        bodyStyle={{
          padding: 0,
        }}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button onClick={onClose} type="primary">
        //       Submit
        //     </Button>
        //   </Space>
        // }
      >
        <div className="mobi-menu-container">
          <div className="mobi-menu_header">
            <span className="logo">
              <Image
                width={60}
                preview={false}
                src="https://res.cloudinary.com/beeyou/image/upload/v1654848083/logo/Logo_snepav.png"
              />
            </span>
          </div>
          <div className="mobi-menu_search">
            <Input.Search
              placeholder="Tìm kiếm"
              allowClear
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </div>
          <div className="mobi-menu-main">
            <ul>
              {menu.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "sidebar-btn active" : "sidebar-btn"
                    }
                  >
                    {item.icon}
                    <span className="link">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
