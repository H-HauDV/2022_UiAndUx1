import WorkerHome from "./pages/Worker/home";
import Login from "./pages/login";
import WorkerReport from "./pages/Worker/report";
import WorkerHistory from "./pages/Worker/history";
import ReportDetail from "./pages/Worker/history/detail";

import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/layoutContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayoutContainer>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="worker">
              <Route index element={<WorkerHome />} />
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
