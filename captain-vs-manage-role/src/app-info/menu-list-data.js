import {
  ContainerOutlined,
  HomeOutlined,
  ProfileOutlined,
  UserOutlined,
  TeamOutlined,
  FundOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

export const workerMenu = [
  {
    label: "Trang chủ",
    link: "/trang-chu",
    icon: <HomeOutlined />,
  },

  {
    label: "Thông tin cá nhân",
    link: "/thong-tin-ca-nhan",
    icon: <UserOutlined />,
  },
  {
    label: "Lịch chấm công",
    link: "/lich-cham-cong",
    icon: <ProfileOutlined />,
  },
  {
    label: "Nhiệm vụ",
    link: "/nhiem-vu",
    icon: <ContainerOutlined />,
  },
];

export const captainMenu = [
  {
    label: "Trang chủ",
    link: "/trang-chu",
    icon: <HomeOutlined />,
  },

  {
    label: "Thông tin cá nhân",
    link: "/thong-tin-ca-nhan",
    icon: <UserOutlined />,
  },
  {
    label: "Lịch chấm công",
    link: "/lich-cham-cong",
    icon: <ProfileOutlined />,
  },
  {
    label: "Nhiệm vụ",
    link: "/nhiem-vu",
    icon: <ContainerOutlined />,
  },
  {
    label: "Báo cáo",
    link: "/bao-cao",
    icon: <FileTextOutlined />,
  },
  {
    label: "Tiến độ",
    link: "/tien-do",
    icon: <FundOutlined />,
  },
  {
    label: "Nhân viên",
    link: "/nhan-vien",
    icon: <TeamOutlined />,
  },
];
