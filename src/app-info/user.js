const users = [
  {
    username: "hong",
    password: "123",
    firstName: "Hồng",
    lastName: "Nguyễn Văn",
    position: "Công nhân",
    role: "worker",
  },
  {
    username: "hong1",
    password: "123",
    firstName: "Hồng",
    lastName: "Nguyễn Văn",
    position: "Đội trưởng đội 1",
    role: "captain",
  },
  {
    username: "hong2",
    password: "123",
    firstName: "Hồng",
    lastName: "Nguyễn Văn",
    position: "Quản lý",
    role: "manage",
  },
];

export function loginFunc(username, password) {
  const temp = users.findIndex((user) => user.username === username);
  if (temp >= 0) {
    if (users[temp].password === password) {
      return { success: "Đăng nhập thành công", userInfo: users[temp] };
    } else {
      return { error: "Mật khẩu không đúng" };
    }
  } else {
    return { error: "Tên đăng nhập không tồn tại" };
  }
}
