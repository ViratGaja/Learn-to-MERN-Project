import Sidebar from "../Dashboard/sidebar";
import { Outlet, Navigate } from "react-router-dom";

const DashboardLayout = () => {
  const token = localStorage.getItem('token');
  
  // ✅ Check token first
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;