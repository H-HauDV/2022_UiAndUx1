import React from "react";
import "../scss/calendar.scss";
import { Calendar, Badge } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 1:
      listData = [{ type: "", content: <CheckOutlined className="attend" /> }];
      break;
    case 2:
      listData = [{ type: "", content: <CheckOutlined className="attend" /> }];
      break;
    case 3:
      listData = [{ type: "", content: <CheckOutlined className="attend" /> }];
      break;
    case 4:
      listData = [{ type: "", content: <CheckOutlined className="attend" /> }];
      break;
    case 5:
      listData = [{ type: "", content: <CheckOutlined className="attend" /> }];
      break;
    case 6:
      listData = [{ type: "", content: <CloseOutlined className="absent" /> }];
      break;
    default:
  }

  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const CalendarComp = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value) => {
    if (value.month() === 6) {
      return <div></div>;
    }
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="calendar">
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </div>
  );
};

export default CalendarComp;
