import HomePage from "./pages/home";
import Login from "./pages/login";
import WorkerReport from "./pages/Worker/report";
import WorkerHistory from "./pages/Worker/history";
import ReportDetail from "./pages/Worker/history/detail";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutContainer from "./components/layoutContainer";
import Home from "./pages/Worker/home";
import MissionPage from "./pages/mission";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayoutContainer>
          <Routes>
            <Route path="/trang-chu" element={<HomePage />}></Route>
            <Route path="/" element={<Navigate to={"/trang-chu"} />} />
            <Route path="login" element={<Login />} />
            <Route path="nhiem-vu" element={<MissionPage />} />
            <Route path="worker">
              <Route index element={<Home />} />
              <Route path="report" element={<WorkerReport />} />
              <Route path="history">
                <Route index element={<WorkerHistory />} />

                <Route path="detail" element={<ReportDetail />} />
              </Route>
            </Route>
          </Routes>
        </LayoutContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
