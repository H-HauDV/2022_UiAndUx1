const users = [
  {
    username: "hong",
    password: "123",
    firstName: "Hồng",
    lastName: "Nguyễn Văn",
    position: "Công nhân",
    role: "worker",
    birthday: "11/07/2000",
    sex: "Nam",
    phone: "0867064901",
    email: "sitpro993@gmail.com",
    employeeId: "123456",
    hometown: "Anh Sơn, Nghệ An",
    team: "Đội tỉa cây 02",
  },
  {
    username: "hong1",
    password: "123",
    firstName: "Hồng",
    lastName: "Nguyễn Văn",
    position: "Đội trưởng đội 1",
    role: "captain",
    birthday: "11/07/2000",
    sex: "Nam",
    phone: "0867064901",
    email: "sitpro993@gmail.com",
    employeeId: "123456",
    hometown: "Anh Sơn, Nghệ An",
    team: "Đội tỉa cây 02",
  },
  {
    username: "hong2",
    password: "123",
    firstName: "Hồng",
    lastName: "Nguyễn Văn",
    position: "Quản lý",
    role: "manage",
    birthday: "11/07/2000",
    sex: "Nam",
    phone: "0867064901",
    email: "sitpro993@gmail.com",
    employeeId: "123456",
    hometown: "Anh Sơn, Nghệ An",
    team: "Đội tỉa cây 02",
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
