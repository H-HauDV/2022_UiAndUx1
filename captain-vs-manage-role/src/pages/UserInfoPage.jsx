import React from "react";
import "../scss/userinfo.scss";
import { Form, Input } from "antd";

export default function UserInfoPage() {
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
            <Form.Item label="Địa chỉ email">
              <Input disabled value={"hong@mail.com"} />
            </Form.Item>
            <Form.Item label="Tên đầy đủ">
              <Input disabled value={"NGUYEN VAN HONG"} />
            </Form.Item>
            <Form.Item label="Tên hiển thị">
              <Input disabled value={"Hong.NV2"} />
            </Form.Item>
            <Form.Item label="Chức vụ">
              <Input disabled value={"Quản lý"} />
            </Form.Item>
            <Form.Item label="Địa chỉ">
              <Input value={"Hà Nội, Hai Bà Trưng"} />
            </Form.Item>

            <Form.Item label="Số điện thoại">
              <Input value={"0167880192"} />
            </Form.Item>
          </Form>
          <div className="button-wrapper">
            <button className="submit">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
}
