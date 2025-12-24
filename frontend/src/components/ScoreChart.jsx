import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ScoreChart = ({ skills }) => {
  const data = {
    labels: Object.keys(skills),
    datasets: [
      {
        label: "Speaking Skills",
        data: Object.values(skills),
        backgroundColor: "rgba(34,197,94,0.25)",
        borderColor: "#22c55e",
        borderWidth: 2,
        pointBackgroundColor: "#22c55e"
      }
    ]
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 9,
        ticks: {
          display: true,
          stepSize: 1,
          color: "#9ca3af",
          backdropColor: "transparent"
        },
        grid: {
          color: "#1f2937"
        },
        angleLines: {
          color: "#1f2937"
        },
        pointLabels: {
          color: "#e5e7eb",
          font: { size: 12, weight: "600" }
        }
      }
    },
    plugins: {
      legend: {
        labels: { color: "#e5e7eb" }
      }
    }
  };

  return (
    <div className="bg-black/40 border border-green-900 rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Skill Overview
      </h2>
      <Radar data={data} options={options} />
    </div>
  );
};

export default ScoreChart;
