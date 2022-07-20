import { Cascader, DatePicker, Form, Input, Select } from "antd";
import React from "react";
import { useEffect } from "react";

import "../scss/createtask.scss";
import { motion } from "framer-motion";
const { RangePicker } = DatePicker;

const { Option } = Select;
const children = [];

for (let i = 0; i < 5; i++) {
  children.push(
    <Option key={"Người số " + i.toString(36)}>
      {"Người số " + i.toString(36)}
    </Option>
  );
}

const CreateTask = () => {
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };
  useEffect(() => {
    document.title = "Tạo nhiệm vụ";
  }, []);
  return (
    <div className="create-task-wrapper">
      <div className="create-task-container">
        <div className="create-task-upper">
          <div className="create-task-title">Thêm task mới</div>
          <Form
            className="create-task-form"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 17,
            }}
            layout="horizontal"
            size={"large"}
          >
            <Form.Item label="Tên task">
              <Input />
            </Form.Item>
            <Form.Item label="Chọn loại task">
              <Select>
                <Select.Option value="l1">Loại ưu tiên 1</Select.Option>
                <Select.Option value="l2">Loại ưu tiên 2</Select.Option>
                <Select.Option value="v1">Điều chỉnh</Select.Option>
                <Select.Option value="v2">Thay thế</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Chọn địa chỉ công việc">
              <Cascader
                options={[
                  {
                    value: "Hà Nội",
                    label: "Hà Nội",
                    children: [
                      {
                        value: "Hai Bà Trưng",
                        label: "Hai Bà Trưng",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Người thực hiện">
              <Select
                mode="multiple"
                size={"large"}
                placeholder=""
                onChange={handleChange}
                style={{
                  width: "100%",
                }}
              >
                {children}
              </Select>
            </Form.Item>
            <Form.Item label="Chọn thời gian">
              <RangePicker />
            </Form.Item>
            <Form.Item label="Thêm ghi chú">
              <Input.TextArea />
            </Form.Item>
          </Form>
        </div>
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.95 }}
          className="create-task-down"
        >
          <button className="submit"> Xác nhận</button>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateTask;
