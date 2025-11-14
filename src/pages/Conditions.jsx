import Card from "../components/Card";

const mockConditions = [
  {
    name: "Mild persistent asthma",
    status: "Active",
    onset: "2019-06-10",
    notes: "Uses inhaled corticosteroid; albuterol as needed.",
  },
  {
    name: "Seasonal allergic rhinitis",
    status: "Active",
    onset: "2020-03-01",
    notes: "Flare-ups in spring; managed with antihistamines.",
  },
  {
    name: "Recurrent otitis media",
    status: "Resolved",
    onset: "2018-01-15",
    notes: "No episodes over the last 2 years.",
  },
];

export default function Conditions() {
  const active = mockConditions.filter(c => c.status === "Active");
  const resolved = mockConditions.filter(c => c.status !== "Active");

  return (
    <Card>
      <h2>Conditions</h2>
      <p style={{ marginTop: 4, color: "#64748b", fontSize: 13 }}>
        High-level summary of pediatric problem list for demo purposes.
      </p>

      <div className="conditions-grid">
        <div>
          <h3 className="section-title">Active</h3>
          {active.map((c, idx) => (
            <div key={idx} className="condition-card">
              <div className="condition-header">
                <span className="condition-name">{c.name}</span>
                <span className="status-pill active">Active</span>
              </div>
              <div className="condition-meta">
                Onset: {c.onset || "—"}
              </div>
              <div className="condition-notes">{c.notes}</div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="section-title">Resolved / Historical</h3>
          {resolved.map((c, idx) => (
            <div key={idx} className="condition-card">
              <div className="condition-header">
                <span className="condition-name">{c.name}</span>
                <span className="status-pill resolved">Resolved</span>
              </div>
              <div className="condition-meta">
                Onset: {c.onset || "—"}
              </div>
              <div className="condition-notes">{c.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
