import { Routes, Route, NavLink } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Vitals from "./pages/Vitals";
import Conditions from "./pages/Conditions";
import Chatbot from "./pages/Chatbot";

export default function App() {
  const navClass = ({ isActive }) =>
    "nav-btn" + (isActive ? " active" : "");

  const navChatClass = ({ isActive }) =>
    "nav-btn primary" + (isActive ? " active" : "");

  return (
    <Layout>
      <div className="nav">
        <NavLink to="/" className={navClass} end>
          Home
        </NavLink>
        <NavLink to="/patient" className={navClass}>
          Patient
        </NavLink>
        <NavLink to="/vitals" className={navClass}>
          Vitals
        </NavLink>
        <NavLink to="/conditions" className={navClass}>
          Conditions
        </NavLink>
        <NavLink to="/chatbot" className={navChatClass}>
          AI Chatbot
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/vitals" element={<Vitals />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Layout>
  );
}
