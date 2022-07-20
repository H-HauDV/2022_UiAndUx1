import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import "../scss/userinfo.scss";
import { Form, Input, Tooltip, notification } from "antd";
import { useEffect } from "react";
export default function UserInfoPage() {
  useEffect(() => {
    document.title = "Thông tin cá nhân";
  }, []);
  const openNotification = () => {
    notification.open({
      message: "Thành công",
      description: "Thông tin mới đã được cập nhập.",
      icon: (
        <CheckCircleOutlined
          className="noti-icon"
          style={{
            color: "#52c41a",
          }}
        />
      ),
    });
  };
  return (
    <div className="info-wrapper">
      <div className="info-container">
        <div className="left">
          <img
            className="avatar"
            src="https://res.cloudinary.com/beeyou/image/upload/v1641721299/logo/avatar7_jkzd2h.png"
            alt="avatar"
          />
        </div>
        <div className="right">
          <div className="title">Thông tin người dùng</div>
          <Form
            className="info-form"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            layout="horizontal"
            size={"large"}
          >
            <Tooltip title="Bạn không thể thay đổi trường này">
              <Form.Item label="Địa chỉ email">
                <Input disabled value={"hong@mail.com"} />
              </Form.Item>
            </Tooltip>
            <Tooltip title="Bạn không thể thay đổi trường này">
              <Form.Item label="Tên đầy đủ">
                <Input disabled value={"NGUYEN VAN HONG"} />
              </Form.Item>
            </Tooltip>
            <Tooltip title="Bạn không thể thay đổi trường này">
              <Form.Item label="Tên hiển thị">
                <Input disabled value={"Hong.NV2"} />
              </Form.Item>
            </Tooltip>
            <Tooltip title="Bạn không thể thay đổi trường này">
              <Form.Item label="Chức vụ">
                <Input disabled value={"Quản lý"} />
              </Form.Item>
            </Tooltip>

            <Form.Item label="Địa chỉ">
              <Input value={"Hà Nội, Hai Bà Trưng"} />
            </Form.Item>

            <Form.Item label="Số điện thoại">
              <Input value={"0167880192"} />
            </Form.Item>
          </Form>
          <div className="button-wrapper">
            <button onClick={openNotification} className="submit">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
