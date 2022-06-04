import React from 'react'
import "./calendar.scss"
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Calendar, Badge } from 'antd';
const getListData = (value) => {

    let listData;
    switch (value.date()) {
        case 1: listData = [{ type: '', content: <DoneOutlinedIcon className="attend"/>,}]; break;
        case 2: listData = [{ type: '', content: <DoneOutlinedIcon className="attend"/>,}]; break;
        case 3: listData = [{ type: '', content: <DoneOutlinedIcon className="attend"/>,}]; break;
        case 4: listData = [{ type: '', content: <DoneOutlinedIcon className="attend"/>,}]; break;
        case 5: listData = [{ type: '', content: <DoneOutlinedIcon className="attend"/>,}]; break;
        case 6: listData = [{ type: '', content: <CloseOutlinedIcon className="absent"/>,}]; break;
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
        if(value.month()==6){ return(<div></div>)}
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
      <div className="title">Attendance this month</div>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />;
    </div>
  )
}

export default CalendarComp