import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserInfoPage from "./pages/UserInfoPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import MissionPage from "./pages/MissionPage";
import { AuthProvider } from "./auth/auth";
import RequireAuth from "./components/RequireAuth";
import TimesheetPage from "./pages/TimesheetPage";
import PageNotFound from "./pages/PageNotFound";
import ReportsPage from "./pages/ReportPage";
import ProgressPage from "./pages/ProgressPage";
import TeamPage from "./pages/TeamPage";
import CreateTask from "./pages/CreateTask";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route
                path="/trang-chu"
                element={
                  <RequireAuth>
                    <HomePage />
                  </RequireAuth>
                }
              ></Route>
              <Route path="/" element={<Navigate to={"/trang-chu"} />} />

              <Route
                path="nhiem-vu"
                element={
                  <RequireAuth>
                    <MissionPage />
                  </RequireAuth>
                }
              />
              <Route
                path="thong-tin-ca-nhan"
                element={
                  <RequireAuth>
                    <UserInfoPage />
                  </RequireAuth>
                }
              />
              <Route
                path="lich-cham-cong"
                element={
                  <RequireAuth>
                    <TimesheetPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/bao-cao"
                element={
                  <RequireAuth>
                    <ReportsPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/tien-do"
                element={
                  <RequireAuth>
                    <ProgressPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/tao-task"
                element={
                  <RequireAuth>
                    <CreateTask />
                  </RequireAuth>
                }
              />
              <Route
                path="/nhan-vien"
                element={
                  <RequireAuth>
                    <TeamPage />
                  </RequireAuth>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
