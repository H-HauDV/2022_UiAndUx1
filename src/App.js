import WorkerHome from "./pages/Worker/home";
import { Login } from "./pages/login";
import WorkerReport from "./pages/Worker/report";
import WorkerHistory from "./pages/Worker/history";
import { AuthProvider } from "./auth";
import 'antd/dist/antd.min.css';
import { RequireAuth } from "./requireAuth";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <AuthProvider className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="worker">
            <Route index element={<WorkerHome />} />
            <Route path="report" element={<WorkerReport />} />
            <Route path="history" element={<WorkerHistory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
