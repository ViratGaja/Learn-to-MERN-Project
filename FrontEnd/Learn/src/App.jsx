import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PublicLayout from "./Components/Layout/PublicLayout";
import DashboardLayout from "./Components/Layout/DashboardLayout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashCardPage from "./Components/Dashboard/DashCardPage";
import DashCardDetailsPage from "./Components/Dashboard/DashCardDetailsPage";
import CardDetails from "./Components/Home/CardDetails";

// ❌ Remove ProtectedRoute component - no need here

function App() {

  return (
    <Router>
      <Routes>
        {/* ===== PUBLIC PAGES ===== */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="card-detail/:id"
            element={<CardDetails />}
          />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ===== PROTECTED DASHBOARD PAGES ===== */}
        <Route element={<DashboardLayout />}>
          <Route path="/dash-card" element={<DashCardPage />} />
          <Route path="/dash-card-detail" element={<DashCardDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;