import Sidebar from "./sidebar";
import "./dashboard.css";

const DashLayout = ({ children }) => {
  return (
    <div className="dash-layout">

      <main className="dash-content">{children}</main>
    </div>
  );
};

export default DashLayout;
