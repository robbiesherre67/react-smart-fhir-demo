import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaHeartbeat, FaRobot } from "react-icons/fa";
import doctorImg from "../assets/illustrations/doctor.svg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Illustration */}
      <img
        src={doctorImg}
        alt="Pediatric Doctor"
        className="hero-illustration"
      />

      {/* Top Metrics */}
      <Card>
        <h2>Today’s Pediatric Overview</h2>
        <p style={{ marginTop: 4, color: "#64748b", fontSize: 14 }}>
          Mock data only — demo and portfolio purposes only. No real PHI.
        </p>

        <div className="home-grid">
          <div className="metric-card">
            <div className="metric-label">Active Patients</div>
            <div className="metric-value">24</div>
            <div className="metric-sub">assigned to care team</div>
          </div>

          <div className="metric-card">
            <div className="metric-label">Today’s Visits</div>
            <div className="metric-value">7</div>
            <div className="metric-sub">3 in-person • 4 virtual</div>
          </div>

          <div className="metric-card">
            <div className="metric-label">High-Risk Flags</div>
            <div className="metric-value warning">3</div>
            <div className="metric-sub">asthma • diabetes • NICU follow-up</div>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card>
        <h3>Quick Actions</h3>
        <div className="home-actions">

          {/* Patient Summary */}
          <div
            className="action-card action-clickable"
            onClick={() => navigate("/patient")}
          >
            <div className="action-title">
              <FaUserMd /> Review Patient Summary
            </div>
            <div className="action-desc">
              View demographics, PCP, and clinical snapshots.
            </div>
          </div>

          {/* Vitals */}
          <div
            className="action-card action-clickable"
            onClick={() => navigate("/vitals")}
          >
            <div className="action-title">
              <FaHeartbeat /> Check Vitals & Trends
            </div>
            <div className="action-desc">
              Track recent growth, vitals, and longitudinal trends.
            </div>
          </div>

          {/* Chatbot */}
          <div
            className="action-card action-clickable"
            onClick={() => navigate("/chatbot")}
          >
            <div className="action-title">
              <FaRobot /> Ask the AI Assistant
            </div>
            <div className="action-desc">
              Get parent-friendly care explanations instantly.
            </div>
          </div>

        </div>
      </Card>
    </>
  );
}
