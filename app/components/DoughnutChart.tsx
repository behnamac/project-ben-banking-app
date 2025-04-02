"use client"
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
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
        },
      ],
    };


  return <Doughnut data={data} />;
};

export default DoughnutChart;
