/**
 * © 2025 Akshay AGI LLP. All rights reserved.
 */
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

export default function ReceiverChart({ results, mode }) {
  const data = {
    labels: results.labels,
    datasets: [
      {
        label: "Information Rate (Mbps)",
        data: results.infoRate,
        borderColor: "#36a2eb",
        backgroundColor: "rgba(54,162,235,0.2)",
        tension: 0.35,
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Energy Harvested (W)",
        data: results.energyHarvested,
        borderColor: "#ffcd56",
        backgroundColor: "rgba(255,205,86,0.2)",
        tension: 0.35,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { mode: "nearest", intersect: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
    animation: {
      duration: 600,
      easing: "easeOutCubic"
    }
  };

  return (
    <div className="mt-4">
      <Line data={data} options={options} />
      <div className="mt-2 text-center text-cyan-400 font-semibold">
        Mode: {mode === "power-splitting" ? "Power Splitting" : "Time Switching"}
      </div>
    </div>
  );
}