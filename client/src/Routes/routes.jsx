import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { NotFound } from "../Pages/NotFound";
import { Home } from "../Pages/Home";
import { Logout } from "../Pages/Logout";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
