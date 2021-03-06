import React, { useEffect } from "react";

import "../scss/workerlogin.scss";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MobileOutlined } from "@ant-design/icons";
import { Button, Form, Input, Tooltip, message } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const key = "updatable";
const openMessage = () => {
  message.loading({
    content:
      "Đăng nhập thành công, bạn sẽ được chuyển tới trang chủ trong 3 giây",
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
const WorkerLogin = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const navigate = useNavigate();
  const navigateToReport = () => {
    navigate("/report/1");
  };
  const navigateToMobileLogin = () => {
    navigate("/login-mobile");
  };
  const onFinish = (values) => {
    openMessage();
    //navigateToReport();
    setTimeout(() => {
      navigateToReport();
    }, 3000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div class="worker-login-wrapper">
      <div class="worker-login-container">
        <div className="left">
          <div className="image">
            <BsFillCreditCard2BackFill className="icon" />
          </div>
          <div className="description">Quét QR trên thẻ để đăng nhập</div>
        </div>
        <div className="right">
          <Tooltip title="Đăng nhập trên mobile">
            <div className="top" onClick={navigateToMobileLogin}>
              <MobileOutlined className="icon" />
              Mobile
            </div>
          </Tooltip>

          <Tooltip title="Nếu bạn không có thẻ hãy đăng nhập ở đây">
            <div className="title">LOGIN</div>
          </Tooltip>
          <div className="desc1">Dành cho công nhân chăm sóc cây xanh</div>
          <Form
            className="login-form"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Worker ID"
              name="workId"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập ID của bạn!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 18,
                span: 16,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  className="submit-button"
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </motion.div>
            </Form.Item>
          </Form>
          <div className="help">
            <div classname="help-up"> Bạn gặp vấn đề ?</div>
            <div classname="help-down">gọi ngay 18001774</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerLogin;
