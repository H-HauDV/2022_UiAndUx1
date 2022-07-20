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
import SmallProgressPage from "./pages/SmallProgressPage";
import SmallInforPage from "./pages/SmallInforPage";

import TeamPage from "./pages/TeamPage";
import CreateTask from "./pages/CreateTask";
import TeamDetailPage from "./pages/TeamDetailPage";
import MissionDetailPage from "./pages/MissionDetailPage";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route
                path="trang-chu"
                element={
                  <RequireAuth>
                    <HomePage />
                  </RequireAuth>
                }
              ></Route>
              <Route path="/" element={<Navigate to={"/trang-chu"} />} />
              <Route
                path="tao-task"
                element={
                  <RequireAuth>
                    <CreateTask />
                  </RequireAuth>
                }
              />
              <Route path="nhiem-vu">
                <Route
                  path=":id"
                  element={
                    <RequireAuth>
                      <MissionDetailPage />
                    </RequireAuth>
                  }
                />

                <Route
                  index
                  element={
                    <RequireAuth>
                      <MissionPage />
                    </RequireAuth>
                  }
                />
              </Route>

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
                path="/tien-do-nho"
                element={
                  <RequireAuth>
                    <SmallProgressPage />
                  </RequireAuth>
                }
              />

              <Route path="nhan-vien">
                <Route
                  path="doi"
                  element={
                    <RequireAuth>
                      <TeamDetailPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="thanh-vien"
                  element={
                    <RequireAuth>
                      <SmallInforPage />
                    </RequireAuth>
                  }
                />
                <Route
                  index
                  element={
                    <RequireAuth>
                      <TeamPage />
                    </RequireAuth>
                  }
                />
              </Route>
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
