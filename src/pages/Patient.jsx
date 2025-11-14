import Card from "../components/Card";

const mockPatient = {
  id: "PEDS-001",
  name: "Ella Johnson",
  dob: "2017-04-15",
  age: "7 years",
  gender: "Female",
  mrn: "MRN123456",
  pcp: "Dr. Maria Sanchez",
  preferredLanguage: "English",
  lastVisit: "2025-01-03",
};

export default function Patient() {
  return (
    <Card>
      <h2>Patient Summary</h2>
      <p style={{ marginTop: 4, color: "#64748b", fontSize: 13 }}>
        Mock pediatric patient to demonstrate FHIR / clinical UI. In a real app,
        this would come from FHIR Patient + related resources.
      </p>

      <div className="patient-grid">
        <div className="patient-section">
          <div className="field">
            <span>Name:</span> {mockPatient.name}
          </div>
          <div className="field">
            <span>DOB / Age:</span> {mockPatient.dob} • {mockPatient.age}
          </div>
          <div className="field">
            <span>Gender:</span> {mockPatient.gender}
          </div>
        </div>

        <div className="patient-section">
          <div className="field">
            <span>MRN:</span> {mockPatient.mrn}
          </div>
          <div className="field">
            <span>Patient ID:</span> {mockPatient.id}
          </div>
          <div className="field">
            <span>Primary Care:</span> {mockPatient.pcp}
          </div>
          <div className="field">
            <span>Preferred Language:</span> {mockPatient.preferredLanguage}
          </div>
        </div>

        <div className="patient-section">
          <div className="field">
            <span>Last Visit:</span> {mockPatient.lastVisit}
          </div>
          <div className="field">
            <span>Portal Status:</span> Active (Parent proxy)
          </div>
          <div className="field">
            <span>Risk Flags:</span> Asthma • Seasonal Allergies
          </div>
        </div>
      </div>
    </Card>
  );
}
