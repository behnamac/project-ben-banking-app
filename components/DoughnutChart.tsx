"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  accounts: any[]; // Replace with the actual type of account if available
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ["Bank1", "Bank2", "Bank3"], // Corrected labels
    datasets: [
      {
        label: "Account Balance",
        data: [1250, 2000, 380], // Example data
        backgroundColor: ["#0747b6", "#00b894", "#d63031"],
      },
    ],
    options: { cutout: "60%", plugins: { legend: { display: false } } },
  };

  return <Doughnut data={data} options={data.options} />;
};

export default DoughnutChart;
