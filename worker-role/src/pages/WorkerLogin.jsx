import React from "react";
import "../scss/workerlogin.scss";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tooltip } from "antd";

const WorkerLogin = () => {
  const navigate = useNavigate();
  const navigateToReport = () => {
    navigate("/worker/report/1");
  };
  const onFinish = (values) => {
    navigateToReport();
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
          <div className="description">Quẹt thẻ ở đây để đăng nhập</div>
        </div>
        <div className="right">
          <Tooltip title="Nếu bạn không có thẻ hãy đăng nhập ở đây">
            <div className="title">LOGIN</div>
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

export default WorkerLogin;
