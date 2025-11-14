import Card from "../components/Card";

export default function Home() {
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
          <div className="action-card">
            <div className="action-title">Review Patient Summary</div>
            <div className="action-desc">
              Demographics, PCP, and key clinical snapshots in one view.
            </div>
          </div>
          <div className="action-card">
            <div className="action-title">Check Vitals & Trends</div>
            <div className="action-desc">
              Recent weight, height, BMI, and temperature changes.
            </div>
          </div>
          <div className="action-card">
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
