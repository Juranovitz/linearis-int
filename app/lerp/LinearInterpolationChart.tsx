"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface LinearInterpolationChartProps {
  a: number;
  b: number;
  t: number;
  d: number;
  advanced: boolean;
}

export default function LinearInterpolationChart({ a, b, t, d, advanced }: LinearInterpolationChartProps) {
  const interpolated = a + (b - a) * t;
  const xInterpolated = t * d;

  const data = {
    datasets: [
      {
        label: "Lineáris interpoláció",
        data: [
          { x: 0, y: a },
          { x: xInterpolated, y: interpolated },
          { x: d, y: b },
        ],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgba(37, 99, 235, 0.25)",
        pointBackgroundColor: ["rgb(8, 148, 255)", "rgb(8, 148, 255)", "rgb(8, 148, 255)"],
        pointBorderColor: "rgb(255, 255, 255)",
        pointBorderWidth: 2,
        pointRadius: [5, 8, 5],
        showLine: true,
        fill: false,
        tension: 0.25,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const point = context.parsed;
            if (context.dataIndex === 1) {
              return `y = ${point.y.toFixed(2)}`;
            }
            return `x=${point.x.toFixed(2)}, y=${point.y.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "linear" as const,
        min: 0,
        max: d,
        ticks: {
          stepSize: d >= 1 ? 1 : undefined,
          callback: (value: number | string) => value.toString(),
        },
        title: {
          display: true,
          text: `x koordináta`,
        },
      },
      y: {
        title: {
          display: true,
          text: "Érték",
        },
        beginAtZero: advanced,
      },
    },
  };

  return (
    <div className="mt-6 w-full max-w-3xl rounded-xl bg-white p-4 shadow-md shadow-slate-300">
      <div className="mb-3 text-center text-lg font-semibold">
        Lineáris interpoláció grafikon
      </div>
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
