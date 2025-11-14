import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Card>
        <h2>Today’s Pediatric Overview</h2>
        <p style={{ marginTop: 4, color: "#64748b", fontSize: 14 }}>
          Mock data only – for demo and portfolio purposes. No real PHI.
        </p>

        <div className="home-grid">
          <div className="metric-card">
            <div className="metric-label">Active Patients</div>
            <div className="metric-value">24</div>
            <div className="metric-sub">assigned to this panel</div>
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

      <Card>
        <h3>Quick Actions</h3>
        <div className="home-actions">

          {/* Patient Summary */}
          <div
            className="action-card action-clickable"
            onClick={() => navigate("/patient")}
          >
            <div className="action-title">Review Patient Summary</div>
            <div className="action-desc">
              Demographics, PCP, and key clinical snapshots in one view.
            </div>
          </div>

          {/* Vitals */}
          <div
            className="action-card action-clickable"
            onClick={() => navigate("/vitals")}
          >
            <div className="action-title">Check Vitals & Trends</div>
            <div className="action-desc">
              Recent weight, height, BMI, and temperature changes.
            </div>
          </div>

          {/* Chatbot */}
          <div
            className="action-card action-clickable"
            onClick={() => navigate("/chatbot")}
          >
            <div className="action-title">Ask the AI Assistant</div>
            <div className="action-desc">
              Get parent-friendly explanations and care-plan summaries.
            </div>
          </div>

        </div>
      </Card>
    </>
  );
}
