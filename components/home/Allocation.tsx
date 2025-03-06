"use client";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const FundAllocation = () => {
  const [chartData] = useState({
    labels: [
      "Direct Training & Mentorship",
      "Basic Amenities",
      "Learning Resources",
      "Operational Costs",
      "Emergency Support",
    ],
    datasets: [
      {
        data: [50, 20, 15, 10, 5],
        backgroundColor: [
          "#F97316",
          "#3B82F6",
          "#10B981",
          "#6366F1",
          "#EC4899",
        ],
        borderWidth: 0,
      },
    ],
  });

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Transparent Fund Allocation – Where Your Money Goes
          </h2>
          <p className="text-lg text-gray-600 my-5">
            Ensuring Every Dollar Makes an Impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center md:order-1">
            <div className="w-full max-w-md">
              <Pie
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      enabled: true,
                      callbacks: {
                        label: (context) =>
                          `${context.label}: ${context.formattedValue}%`,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:order-2">
            {chartData.labels.map((label, index) => (
              <div key={index} className="flex items-center gap-3">
                <span
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor:
                      chartData.datasets[0].backgroundColor[index],
                  }}
                />
                <div>
                  <p className="font-medium">{label}</p>
                  <p className="text-sm text-gray-600">
                    {getDescription(label)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-base text-center mt-10">
          Allocation of funds for the last year.
        </p>
      </div>
    </section>
  );
};

const getDescription = (label: string): string => {
  switch (label) {
    case "Direct Training & Mentorship":
      return "Supporting underprivileged African communities with education and skill development programs";
    case "Basic Amenities":
      return "Providing essential resources like clean water and sanitation facilities";
    case "Learning Resources":
      return "Supplying educational materials, tools, and digital access";
    case "Operational Costs":
      return "Maintaining program operations and expanding outreach efforts";
    case "Emergency Support":
      return "Offering crisis assistance to students in vulnerable situations";
    default:
      return "";
  }
};

export default FundAllocation;
