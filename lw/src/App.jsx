import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sideMenu/sidebar";
import Dashboard from "./components/sideMenu/dashboard";
import UserManagement from "./components/sideMenu/user-management";
import AdvocateManagement from "./components/sideMenu/advocate-management";
import ConsultationManagement from "./components/sideMenu/consultation-management";
import Settings from "./components/sideMenu/settings";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/user-management" element={<UserManagement />} />
  <Route path="/advocate-management" element={<AdvocateManagement />} />
  <Route path="/consultation-management" element={<ConsultationManagement />} />
  <Route path="/settings" element={<Settings />} />
</Routes>

          
        </div>
      </div>
    </Router>
  );
};

export default App;
