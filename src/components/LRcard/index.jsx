import React from 'react'
import "./LRcard.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
const LRcard = ({type}) => {

  let data;
  switch(type){
    case "activeWorker":
      data={
        title: "Active",
        content: "158",
        link: "See workers list",
        number: "25",
        icon: (
          <PeopleAltOutlinedIcon 
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255,0,0,0.2)",
            }}

          />
        )
      };break;
    case "attendance":
      data={
        title: "Finish tasks",
        content: "25",
        link: "See all finished tasks",
        number: "12",
        icon: (
          <EventAvailableOutlinedIcon 
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 16, 32,0.2)",
            }}
          />
        )
      };break;
    case "lastReport":
      data={
        title: "Remain tasks",
        content: "78",
        link: "See all remain tasks",
        number: "55",
        icon: (
          <SummarizeOutlinedIcon 
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0,128,0,0.2)",
            }}
            />
        )
      };break;
    default: break;
  }
  return (
    <div className="LRcard">
          <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.content}</span>
            <span className="link">{data.link}</span>
          </div>
          <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon/>
              {data.number}%
            </div>
            {data.icon}
          </div>
        </div>
  )
}

export default LRcard