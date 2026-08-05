// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import Button from "./components/Button.jsx";
// import Input from "./components/Input.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import AdminLogin from './pages/Admin/AdminLogin.jsx'
import DashboardAdmin from './pages/Admin/DashboardAdmin.jsx'
import MovieManagement from './pages/Admin/MovieManagement.jsx'

function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/movies" element={<MovieManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
