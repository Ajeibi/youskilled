"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { ChartData, ChartOptions } from "chart.js";

Chart.register(ArcElement, Tooltip);

const StatisticsSection = () => {
  const data: ChartData<"doughnut"> = {
    labels: [
      "Unemployment Rate",
      "Lack of Basic Education",
      "Lack of Employable Skills",
      "No Access to Job Opportunities",
    ],
    datasets: [
      {
        data: [45, 35, 50, 40],
        backgroundColor: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
        hoverBackgroundColor: ["#FFB347", "#FF9F33", "#FF885E", "#FF7043"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: "easeInOutQuad",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: "70%",
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 sm:p-8">
      <h2 className="text-lg md:text-xl lg:text-3xl my-5 md:mb-20 text-center">
        The Reality: Lack of Skills = No Jobs, No Future
      </h2>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 p-4 h-80">
          <Doughnut data={data} options={options} />
        </div>

        <div className="w-full sm:w-1/2 p-4 space-y-6">
          <div className="flex flex-col items-start">
            <span className="text-4xl font-bold text-[#FF6B6B]">45%</span>
            <span className="text-lg">
              of individuals in underprivileged communities are unemployed
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-4xl font-bold text-[#4ECDC4]">35%</span>
            <span className="text-lg">lack access to basic education</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-4xl font-bold text-[#45B7D1]">50%</span>
            <span className="text-lg">don’t have employable skills</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-4xl font-bold text-[#96CEB4]">40%</span>
            <span className="text-lg">struggle to find job opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
