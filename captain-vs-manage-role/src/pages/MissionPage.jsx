import React, { useContext } from "react";
import FirstSection from "../components/FirstSection";
import Section from "../components/Section";
import { Link, useNavigate } from "react-router-dom";
import "../scss/missionpage.scss";
import { useEffect } from "react";
import { Popconfirm, Table, Tabs, message, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { DataContext } from "../store/GlobalState";

const { TabPane } = Tabs;

const captainDataUnfinished = [
  {
    key: 1,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 2,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 3,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 4,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 5,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 6,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 7,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 8,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 9,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 10,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 11,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 12,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 13,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 14,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 15,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 16,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 17,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 18,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 19,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 20,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
];
const captainDataComplete = [
  {
    key: 1,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 2,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 3,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 4,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 5,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 6,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 7,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 8,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 9,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 10,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 11,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 12,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 13,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 14,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 15,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 16,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 17,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 18,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 19,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 20,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    completeTime: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>13:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
];
const captainDataOutDate = [
  {
    key: 1,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 2,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 3,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 4,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 5,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 6,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 7,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 8,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 9,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 10,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 11,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 12,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 13,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 14,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 15,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 16,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 17,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 18,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 19,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
  {
    key: 20,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
  },
];
const manageData = [
  {
    key: 1,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 2,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "0",
  },
  {
    key: 3,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "-1",
  },
  {
    key: 4,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 5,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 6,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 7,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 8,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 9,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 10,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 11,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 12,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 13,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 14,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 15,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 16,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 17,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 18,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 19,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
  {
    key: 20,
    mission: "Cắt tỉa cây ở đường Đại Cồ Việt",
    address: "Đại Cồ Việt ",
    timeEnd: (
      <p>
        <span style={{ color: "#048785", fontWeight: 700 }}>16:00 PM</span>{" "}
        <span>- 5/6/2022</span>
      </p>
    ),
    team: "Đội 1",
    status: "1",
  },
];

export default function MissionPage() {
  const navigate = useNavigate();
  const { state } = useContext(DataContext);
  const { userInfo } = state;
  useEffect(() => {
    document.title = "Nhiệm vụ";
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        `selectedRows: : ${selectedRows}`
      );
    },
  };

  const captainColumnsUnfinished = [
    {
      title: "STT",
      dataIndex: "key",
      key: "stt",
      align: "center",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Nhiệm vụ",
      dataIndex: "mission",
      key: "mission",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Thời hạn",
      dataIndex: "timeEnd",
      key: "timeEnd",
      render: (text) => <>{text}</>,
    },

    {
      title: "Hoạt động",
      key: "action",
      align: "center",
      render: (record) => (
        <div className="icon-wrapper">
          <EyeOutlined
            style={{ color: "#eea620" }}
            onClick={() => {
              navigate(`${record.key}`);
            }}
          />
          <EditOutlined style={{ color: "#24a567" }} />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            icon={
              <QuestionCircleOutlined
                style={{ fontSize: "16px", color: "red" }}
              />
            }
            okText="Xóa"
            cancelText="Hủy"
            onConfirm={() => {
              handleDelete(record.key);
              message.success("Xóa thành công");
            }}
            okButtonProps={{ danger: true }}
          >
            <DeleteOutlined style={{ color: "#ff0000" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const captainColumnsComplete = [
    {
      title: "STT",
      dataIndex: "key",
      key: "stt",
      align: "center",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Nhiệm vụ",
      dataIndex: "mission",
      key: "mission",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Thời hạn",
      dataIndex: "timeEnd",
      key: "timeEnd",
      render: (text) => <>{text}</>,
    },
    {
      title: "Hoàn thành",
      dataIndex: "completeTime",
      key: "completeTime",
      render: (text) => <>{text}</>,
    },
    {
      title: "Hoạt động",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div className="icon-wrapper">
          <EyeOutlined
            style={{ color: "#eea620" }}
            onClick={() => navigate(`${record.key}`)}
          />
        </div>
      ),
    },
  ];
  const captainColumnsOutDate = [
    {
      title: "STT",
      dataIndex: "key",
      key: "stt",
      align: "center",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Nhiệm vụ",
      dataIndex: "mission",
      key: "mission",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Thời hạn",
      dataIndex: "timeEnd",
      key: "timeEnd",
      render: (text) => <>{text}</>,
    },
    {
      title: "Hoạt động",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div className="icon-wrapper">
          <EyeOutlined
            style={{ color: "#eea620" }}
            onClick={() => navigate(`${record.key}`)}
          />
        </div>
      ),
    },
  ];

  const manageColumns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "stt",
      align: "center",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Nhiệm vụ",
      dataIndex: "mission",
      key: "mission",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Thời hạn",
      dataIndex: "timeEnd",
      key: "timeEnd",
      render: (text) => <>{text}</>,
    },
    {
      title: "Đội phụ trách",
      dataIndex: "team",
      key: "team",
      render: (text) => <>{text}</>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) => (
        <div className="tag-container">
          {status === "0" ? <Tag color={"#e67e22"}>Chưa xong</Tag> : null}

          {status === "1" ? <Tag color={"#2ecc71"}>Hoàn thành</Tag> : null}
          {status === "-1" ? <Tag color={"#e74c3c"}>Quá hạn</Tag> : null}
        </div>
      ),
    },
    {
      title: "Hành động",

      key: "action",
      render: (record) => (
        <div className="icon-wrapper">
          <EyeOutlined
            style={{ color: "#eea620" }}
            onClick={() => {
              navigate(`${record.key}`);
            }}
          />
          {record.status === "0" && (
            <>
              <EditOutlined style={{ color: "#24a567" }} />
              <Popconfirm
                title="Bạn có chắc chắn muốn xóa?"
                icon={
                  <QuestionCircleOutlined
                    style={{ fontSize: "16px", color: "red" }}
                  />
                }
                okText="Xóa"
                cancelText="Hủy"
                onConfirm={() => {
                  handleDelete(record.key);
                  message.success("Xóa thành công");
                }}
                okButtonProps={{ danger: true }}
              >
                <DeleteOutlined style={{ color: "#ff0000" }} />
              </Popconfirm>
            </>
          )}
        </div>
      ),
    },
  ];

  const handleDelete = (key) => {
    console.log(key);
  };

  return (
    <>
      {userInfo.role === "captain" && (
        <>
          <FirstSection />
          <Section title="Danh sách nhiệm vụ">
            <Tabs defaultActiveKey="1" className="mission-tabs">
              <TabPane tab="Chưa hoàn thành" key="1">
                <div style={{ padding: "10px 0 26px 0", float: "right" }}>
                  <Link
                    className="my-btn btn-success"
                    to="/nhiem-vu/giao-nhiem-vu"
                  >
                    Tự động giao nhiệm vụ
                  </Link>
                </div>

                <Table
                  className="mission-table"
                  columns={captainColumnsUnfinished}
                  dataSource={captainDataUnfinished}
                  rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                  }}
                />
              </TabPane>
              <TabPane tab="Đã hoàn thành" key="2">
                <Table
                  className="mission-table"
                  columns={captainColumnsComplete}
                  dataSource={captainDataComplete}
                  style={{ paddingTop: "74px" }}
                />
              </TabPane>
              <TabPane tab="Quá hạn" key="3">
                <Table
                  className="mission-table"
                  columns={captainColumnsOutDate}
                  dataSource={captainDataOutDate}
                  style={{ paddingTop: "74px" }}
                />
              </TabPane>
            </Tabs>
          </Section>
        </>
      )}
      {userInfo.role === "manage" && (
        <Table
          className="mission-table"
          columns={manageColumns}
          dataSource={manageData}
          style={{ paddingTop: "74px" }}
        />
      )}
    </>
  );
}
