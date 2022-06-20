import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useState } from "react";
import Menu from "../Menu";
const { Option } = Select;

export default function MobiMenu() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<MenuIcon />}></Button>
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
        <Menu />
      </Drawer>
    </>
  );
}
