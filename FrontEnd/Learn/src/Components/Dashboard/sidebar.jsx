import { NavLink } from "react-router-dom";
import "./dashboard.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">MyDashboard</h2>

      <nav>
        <NavLink to="/dash-card" className="nav-link">
          📊 Cards
        </NavLink>

        <NavLink to="/dash-card-detail" className="nav-link">
          📋 Card Details
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
