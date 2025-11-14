import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Pediatric SMART on FHIR Dashboard</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/patient">Patient</Link> |{" "}
        <Link to="/vitals">Vitals</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/patient" element={<div>Patient Page</div>} />
        <Route path="/vitals" element={<div>Vitals Page</div>} />
      </Routes>
    </div>
  );
}
