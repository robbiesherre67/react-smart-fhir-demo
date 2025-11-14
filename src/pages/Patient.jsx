import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Patient() {
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPatient({
        name: "Ella Johnson",
        dob: "2017-04-15",
        age: "7 years",
        gender: "Female",
        mrn: "MRN123456",
        id: "PEDS-001",
        pcp: "Dr. Maria Sanchez",
        preferredLanguage: "English",
        lastVisit: "2025-01-03",
        flags: "Asthma • Seasonal Allergies",
      });
      setLoading(false);
    }, 800);
  }, []);

  // ------------------------------------
  // Skeleton Loader
  // ------------------------------------
  if (loading) {
    return (
      <Card>
        <div className="skeleton" style={{ height: 28, width: "60%" }}></div>
        <div className="skeleton" style={{ height: 20, marginTop: 12, width: "90%" }}></div>
        <div className="skeleton" style={{ height: 20, marginTop: 8, width: "75%" }}></div>
        <div className="skeleton" style={{ height: 20, marginTop: 8, width: "50%" }}></div>
      </Card>
    );
  }

  // ------------------------------------
  // Actual Patient UI
  // ------------------------------------
  return (
    <Card>
      <h2>Patient Summary</h2>
      <p style={{ marginTop: 4, color: "#64748b", fontSize: 13 }}>
        Mock pediatric patient to demonstrate FHIR / clinical UI layout.
      </p>

      <div className="patient-grid">

        <div className="patient-section">
          <div className="field">
            <span>Name:</span> {patient.name}
          </div>
          <div className="field">
            <span>DOB / Age:</span> {patient.dob} • {patient.age}
          </div>
          <div className="field">
            <span>Gender:</span> {patient.gender}
          </div>
        </div>

        <div className="patient-section">
          <div className="field">
            <span>MRN:</span> {patient.mrn}
          </div>
          <div className="field">
            <span>Patient ID:</span> {patient.id}
          </div>
          <div className="field">
            <span>Primary Care:</span> {patient.pcp}
          </div>
          <div className="field">
            <span>Preferred Language:</span> {patient.preferredLanguage}
          </div>
        </div>

        <div className="patient-section">
          <div className="field">
            <span>Last Visit:</span> {patient.lastVisit}
          </div>
          <div className="field">
            <span>Risk Flags:</span> {patient.flags}
          </div>
          <div className="field">
            <span>Portal Status:</span> Active (Parent proxy)
          </div>
        </div>

      </div>
    </Card>
  );
}
