import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

export default function GrowthChart({ label, dataPoints }) {
  const data = {
    labels: dataPoints.map(p => p.age),
    datasets: [
      {
        label,
        data: dataPoints.map(p => p.value),
        borderColor: "#1976d2",
        borderWidth: 3,
        tension: 0.4,
        pointBackgroundColor: "#0d47a1",
      },
    ],
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Line data={data} />
    </div>
  );
}
