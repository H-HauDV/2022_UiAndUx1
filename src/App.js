import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Report from "./pages/report/Report";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
