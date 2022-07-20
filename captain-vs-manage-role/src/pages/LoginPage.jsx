import React, { useContext } from "react";
import { Button, Form, Input, Image, Checkbox,message } from "antd";
import { DataContext } from "../store/GlobalState";
import { loginFunc } from "../app-info/user";
import { useAuth } from "../auth/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../scss/login.scss";
import { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
const key = 'updatable';
export default function LoginPage() {
  const openMessage = () => {
    
  };
  const { dispatch } = useContext(DataContext);
  useEffect(() => {
    document.title = "Login";
  }, []);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const onFinish = ({ username, password }) => {
    const res = loginFunc(username, password);
    if (res.success) {
      dispatch({ type: "LOGIN", payload: { ...res.userInfo } });
      auth.login();
      message.loading({
        content: 'Đăng nhập thành công, bạn sẽ được chuyển tới trang chủ trong 3 giây',
        key,
      });
      setTimeout(() => {
        message.success({
          content: 'Chuyển hướng!',
          key,
          duration: 2,
        });
      }, 2000);
      setTimeout(() => {
        navigate(redirectPath, { replace: true });
      }, 3000);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <div className="login-logo">
          <Image
            width={60}
            preview={false}
            src="https://res.cloudinary.com/beeyou/image/upload/v1654848083/logo/Logo_snepav.png"
          />
        </div>
        <div className="login-company-name">
          <h2>Công ty cây xanh Hà Nội</h2>
          <div className="des">Dành cho quản lý và đội trưởng</div>
        </div>

        <div className="login-form_container">
          <Form
            name="basic"
            // wrapperCol={{
            //   span: 12,

            // }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="login-form"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Chưa nhập mã số nhân viên",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Mã số nhân viên"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Chưa nhập mật khẩu",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Mật khẩu"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Lưu mật khẩu</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="/">
                Quên mật khẩu
              </Link>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit" className="btn-login">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
