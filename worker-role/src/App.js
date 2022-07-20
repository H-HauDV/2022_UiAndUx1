import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  WorkerReport1,
  WorkerAttendance,
  WorkerViewWork,
  WorkerSupport,
  WorkerLogin,
  WorkerLoginMobile,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WorkerLogin />}></Route>
          <Route path="/login-mobile" element={<WorkerLoginMobile />}></Route>
          <Route path="/report/1" element={<WorkerReport1 />}></Route>
          <Route path="/attendance" element={<WorkerAttendance />}></Route>
          <Route path="/view-work" element={<WorkerViewWork />}></Route>
          <Route path="/support" element={<WorkerSupport />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
