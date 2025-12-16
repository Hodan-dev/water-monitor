"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ labels, data }: { labels: string[]; data: number[] }) {
  return (
    <Pie
      data={{
        labels,
        datasets: [
          {
            data,
            backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
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
