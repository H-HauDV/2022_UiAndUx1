import React, { useEffect } from "react";

import "../scss/workerloginmobile.scss";
import { Button, Form, Input, Tooltip, message, Image } from "antd";
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
const WorkerLoginMobile = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const navigate = useNavigate();
  const navigateToReport = () => {
    navigate("/report/1");
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
    <div class="worker-login-mobile-wrapper">
      <div class="worker-login-container">
        <div className="left">
          <div className="image">
            <Image
              width={60}
              preview={false}
              src="https://res.cloudinary.com/beeyou/image/upload/v1654848083/logo/Logo_snepav.png"
              class="icon"
            />
          </div>
        </div>
        <div className="right">
          <Tooltip title="Đăng nhập bằng id và mật khẩu">
            <div className="title">LOGIN</div>
          </Tooltip>
          <Tooltip title="Hãy sử dụng camera của bạn quét mã vạch trên thẻ">
            <div className="desc">
              {" "}
              Hỗ trợ đăng nhập bằng quét QR thẻ nhân viên
            </div>
          </Tooltip>

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
                  message: "Please input your Worker ID!",
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
                  message: "Please input your password!",
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

export default WorkerLoginMobile;
