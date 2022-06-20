import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNote from "@mui/icons-material/EventNote";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Assignment from "@mui/icons-material/Assignment";
import { pink } from "@mui/material/colors";
export const workerMenu = [
  {
    label: "Trang chủ",
    link: "/trang-chu",
    icon: <DashboardIcon className="icon" sx={{ color: pink[500] }} />,
  },

  {
    label: "Thông tin cá nhân",
    link: "/user",
    icon: <PersonOutlineIcon className="icon" />,
  },
  {
    label: "Lịch chấm công",
    link: "/lich-cham-cong",
    icon: <EventNote className="icon" />,
  },
  {
    label: "Nhiệm vụ",
    link: "/nhiem-vu",
    icon: <Assignment className="icon" />,
  },
];
