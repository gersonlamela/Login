import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
  );
}
