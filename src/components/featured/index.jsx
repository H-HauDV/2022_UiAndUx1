import React from 'react'
import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
const Featured = () => {
  return (
    <div className="featured">
        <div className="upper">
            <h1 className="title">
                Progress this week
            </h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Work's code</p>
            <p className="amount">2022B.06.WAF1</p>
            <p className="desc">
                Main goal is clear all tree from street A to street F
            </p>
            <div className="goal">
                <div className="title">
                    Target
                </div>
                <div className="detail">
                    <FlagOutlinedIcon className="icon"/>
                    <div className="number">87%</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured