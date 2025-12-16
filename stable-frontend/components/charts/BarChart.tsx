"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function BarChart({ labels, data }: { labels: string[]; data: number[] }) {
  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "Reports",
            data,
            backgroundColor: "#38bdf8",
            borderRadius: 6,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}
