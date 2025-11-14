import Card from "../components/Card";

const mockVitals = [
  {
    date: "2025-01-03",
    encounter: "Well-child visit",
    temp: "98.6 °F",
    hr: "92 bpm",
    resp: "20 /min",
    bp: "102/64",
    weight: "24.1 kg",
    height: "124 cm",
  },
  {
    date: "2024-09-18",
    encounter: "Asthma follow-up",
    temp: "99.1 °F",
    hr: "96 bpm",
    resp: "22 /min",
    bp: "100/60",
    weight: "23.0 kg",
    height: "121 cm",
  },
];

export default function Vitals() {
  return (
    <Card>
      <h2>Recent Vitals</h2>
      <p style={{ marginTop: 4, color: "#64748b", fontSize: 13 }}>
        Example vitals taken from mock FHIR Observation resources, rendered in a
        clinical summary table.
      </p>

      <div className="vitals-table-wrapper">
        <table className="vitals-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Encounter</th>
              <th>Temp</th>
              <th>HR</th>
              <th>Resp</th>
              <th>BP</th>
              <th>Weight</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            {mockVitals.map((row, idx) => (
              <tr key={idx}>
                <td>{row.date}</td>
                <td>{row.encounter}</td>
                <td>{row.temp}</td>
                <td>{row.hr}</td>
                <td>{row.resp}</td>
                <td>{row.bp}</td>
                <td>{row.weight}</td>
                <td>{row.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
